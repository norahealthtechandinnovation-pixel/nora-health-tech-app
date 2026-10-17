import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

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
app.post('/api/contact/inquiry', (req: Request, res: Response) => {
  const { name, email, organization, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Log corporate inquiry
  console.log(`[Corporate Inquiry] From: ${name} (${email}) | Org: ${organization || 'N/A'} | Subject: ${subject}`);

  return res.json({
    success: true,
    message: 'Inquiry received. Thank you for contacting NORA Health Tech & Innovation.',
    inquiryId: `INQ-${Date.now()}`,
    timestamp: new Date().toISOString(),
  });
});

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
    console.log(`NORA Health Tech & Innovation corporate server running on http://0.0.0.0:${PORT}`);
  });
}

initServer().catch((err) => {
  console.error('Failed to start server:', err);
});
