import React, { useState } from 'react';
import { Download, Smartphone, X, CheckCircle } from 'lucide-react';
import { usePWAInstall } from '../../hooks/usePWAInstall';

interface PWAInstallButtonProps {
  variant?: 'header' | 'sidebar' | 'settings';
  className?: string;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({
  variant = 'header',
  className = '',
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [installedSuccess, setInstalledSuccess] = useState(false);

  if (isInstalled) {
    if (variant === 'settings') {
      return (
        <div className="flex items-center gap-2 text-xs text-teal-400 font-medium bg-teal-950/40 p-2.5 rounded border border-teal-800/60">
          <CheckCircle className="w-4 h-4 shrink-0 text-teal-400" />
          <span>Application installed & running in standalone mode.</span>
        </div>
      );
    }
    return null;
  }

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }
    const success = await install();
    if (success) {
      setInstalledSuccess(true);
    }
  };

  // Base style based on variant
  let buttonMarkup = null;

  if (variant === 'header') {
    buttonMarkup = (
      <button
        onClick={handleInstallClick}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 rounded transition-colors whitespace-nowrap shrink-0 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 ${className}`}
        title="Install NORA Health Tech Application to your Desktop or Mobile device"
      >
        <Download className="w-3.5 h-3.5 text-teal-400" />
        <span className="hidden sm:inline">Install App</span>
      </button>
    );
  } else if (variant === 'sidebar') {
    buttonMarkup = (
      <button
        onClick={handleInstallClick}
        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 rounded-md transition-colors text-left ${className}`}
      >
        <div className="flex items-center gap-2">
          <Download className="w-4 h-4 text-teal-400" />
          <span>Install Company App</span>
        </div>
        <span className="text-[10px] text-teal-400 font-mono">PWA</span>
      </button>
    );
  } else {
    // Settings variant
    buttonMarkup = (
      <div className={`p-4 bg-slate-900 text-white rounded-lg border border-slate-800 space-y-3 ${className}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Smartphone className="w-5 h-5 text-teal-400" />
            <div>
              <h4 className="text-sm font-semibold text-white">Install Standalone App</h4>
              <p className="text-xs text-slate-400">Launch directly from your desktop dock or home screen</p>
            </div>
          </div>
          <button
            onClick={handleInstallClick}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded transition-colors"
          >
            {isIOS ? 'iOS Instructions' : 'Install PWA'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {buttonMarkup}

      {/* iOS Safari Guided Install Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">Install on iPhone / iPad</h3>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-3 text-xs text-slate-600 space-y-2.5 leading-relaxed">
              <p>
                To install <strong>NORA Health Tech & Innovation</strong> on iOS:
              </p>
              <ol className="list-decimal list-inside space-y-1.5 font-medium text-slate-800">
                <li>Tap the <strong>Share</strong> button in Safari toolbar (the box with an upward arrow).</li>
                <li>Scroll down the actions list and tap <strong>Add to Home Screen</strong>.</li>
                <li>Confirm by tapping <strong>Add</strong> in the top-right corner.</li>
              </ol>
              <p className="text-[11px] text-slate-400">
                The application will appear as a standalone app on your iPhone or iPad home screen.
              </p>
            </div>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="mt-4 w-full rounded-md bg-[#0a1428] py-2 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};
