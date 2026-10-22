
import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json({ limit: '100kb' }));

// Company status and corporate metadata
app.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'operational',
    company: 'NORA Health Tech & Innovation',
    tagline: 'Better Health for a Better tomorrow.',
    edition: 'Official Corporate Application',
    version: '1.0.0',
    contactEmail: 'norahealthtechandinnovation@gmail.com',
    timestamp: new Date().toISOString(),
  });
});

// Corporate Contact Inquiry Endpoint
app.post(
  '/api/contact/inquiry',
  async (req: Request, res: Response) => {
    const { name, email, organization, subject, message } =
      req.body ?? {};

    const cleanName =
      typeof name === 'string' ? name.trim() : '';
    const cleanEmail =
      typeof email === 'string' ? email.trim() : '';
    const cleanOrganization =
      typeof organization === 'string'
        ? organization.trim()
        : '';
    const cleanSubject =
      typeof subject === 'string' ? subject.trim() : '';
    const cleanMessage =
      typeof message === 'string' ? message.trim() : '';

    if (
      !cleanName ||
      cleanName.length > 150 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail) ||
      cleanEmail.length > 254 ||
      !cleanMessage ||
      cleanMessage.length > 10000
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid name, email, and message.',
      });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpSecure =
      (process.env.SMTP_SECURE || 'true').toLowerCase() === 'true';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = (process.env.SMTP_PASS || '').replace(/\s+/g, '');
    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL ||
      'norahealthtechandinnovation@gmail.com';

    if (
      !smtpHost ||
      !smtpUser ||
      !smtpPass ||
      !Number.isInteger(smtpPort) ||
      smtpPort < 1 ||
      smtpPort > 65535
    ) {
      console.error('[NORA Inquiry] SMTP configuration is incomplete.');
      return res.status(503).json({
        success: false,
        error: 'EMAIL_NOT_CONFIGURED',
        message: 'Email service is temporarily unavailable.',
      });
    }

    const timestamp = new Date().toISOString();
    const inquiryId = `INQ-${Date.now()}`;

    const textContent = [
      'New inquiry for NORA Health Tech & Innovation',
      '',
      `Inquiry ID: ${inquiryId}`,
      `Name: ${cleanName}`,
      `Email: ${cleanEmail}`,
      `Organization: ${cleanOrganization || 'Not provided'}`,
      `Subject: ${cleanSubject || 'General inquiry'}`,
      `Received: ${timestamp}`,
      '',
      'Message:',
      cleanMessage,
    ].join('\n');

    const htmlContent = `
      <h2>New NORA Inquiry</h2>
      <p><strong>Inquiry ID:</strong> ${inquiryId}</p>
      <p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
      <p><strong>Organization:</strong> ${escapeHtml(cleanOrganization || 'Not provided')}</p>
      <p><strong>Subject:</strong> ${escapeHtml(cleanSubject || 'General inquiry')}</p>
      <p><strong>Received:</strong> ${timestamp}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(cleanMessage).replace(/\n/g, '<br>')}</p>
    `;

    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"NORA Health Inquiries" <${smtpUser}>`,
        replyTo: cleanEmail,
        to: recipientEmail,
        subject: `[NORA Inquiry] ${cleanSubject || 'General inquiry'} - ${cleanName}`,
        text: textContent,
        html: htmlContent,
      });

      console.log(`[NORA Inquiry] Email accepted by SMTP. ID: ${inquiryId}`);

      return res.status(200).json({
        success: true,
        emailed: true,
        inquiryId,
        timestamp,
        message: 'Your inquiry was accepted for email delivery.',
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown SMTP error';

      console.error(
        `[NORA Inquiry] Email delivery failed. ID: ${inquiryId}. Error: ${errorMessage}`
      );

      return res.status(500).json({
        success: false,
        error: 'DELIVERY_FAILED',
        message: 'We could not send your inquiry. Please try again later.',
      });
    }
  }
);

// Escape user-provided content before including it in HTML email.
function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return entities[char];
  });
}

// Setup Vite middleware in dev or static files in production
async function initServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(process.cwd(), 'dist')));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve(process.cwd(), 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: false,
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(
      `NORA Health Tech & Innovation corporate server running on http://0.0.0.0:${PORT}`
    );
  });
}

initServer().catch((err) => {
  console.error('Failed to start server:', err);
});

