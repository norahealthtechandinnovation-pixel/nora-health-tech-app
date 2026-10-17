import React, { useState } from 'react';
import { X, Plus, Box, Check } from 'lucide-react';
import { ProductItem, ProductStatus, WorkAreaId } from '../../types';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: ProductItem) => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose,
  onAddProduct,
}) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState<WorkAreaId | 'Enterprise Health'>('ai-digital-health');
  const [status, setStatus] = useState<ProductStatus>('In Development');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [featuresText, setFeaturesText] = useState('');
  const [targetUsersText, setTargetUsersText] = useState('');
  const [accessUrl, setAccessUrl] = useState('');
  const [actionLabel, setActionLabel] = useState('View Product Brief');
  const [formError, setFormError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      setFormError('Please provide at least a product name and description.');
      return;
    }

    const keyFeatures = featuresText
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    const targetUsers = targetUsersText
      .split(',')
      .map((u) => u.trim())
      .filter(Boolean);

    const newProduct: ProductItem = {
      id: `prod-${Date.now()}`,
      name: name.trim(),
      category,
      status,
      tagline: tagline.trim() || name.trim(),
      description: description.trim(),
      keyFeatures: keyFeatures.length > 0 ? keyFeatures : ['Standard enterprise functionality', 'Security verified'],
      targetUsers: targetUsers.length > 0 ? targetUsers : ['Healthcare Organizations'],
      accessUrl: accessUrl.trim() || 'https://sites.google.com/view/nora-health-tech-innovation/home',
      accessActionLabel: actionLabel.trim() || 'Learn More',
      lastUpdated: 'Recently Added',
    };

    onAddProduct(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs">
      <div
        className="w-full max-w-xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-[#0b2545] text-white">
          <div className="flex items-center gap-2.5">
            <Box className="w-5 h-5 text-[#008489]" />
            <div>
              <h3 className="text-base font-bold text-white leading-tight">Add Product to Catalogue</h3>
              <p className="text-xs text-slate-300">Register a new company product or research initiative</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-xs text-slate-700">
          {formError && (
            <div className="p-2.5 rounded bg-rose-50 text-rose-800 border border-rose-200 font-medium">
              {formError}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">Product Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. NORA PulseFlow™"
                className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">Status Classification *</label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as ProductStatus)}
                className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white"
              >
                <option value="In Development">In Development</option>
                <option value="Pilot Phase">Pilot Phase</option>
                <option value="Active Research">Active Research</option>
                <option value="Released">Released</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">Work Domain Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white"
              >
                <option value="ai-digital-health">AI & Digital Health</option>
                <option value="health-data">Health Data & Intelligence</option>
                <option value="public-health">Public Health Intelligence</option>
                <option value="health-policy">Health Policy</option>
                <option value="research-evidence">Research & Evidence</option>
                <option value="health-tools">Health Tools & Innovation</option>
                <option value="Enterprise Health">Enterprise Health</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">One-Line Tagline</label>
              <input
                type="text"
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
                placeholder="e.g. Real-time hemodynamic telemetry connector"
                className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">Product Description *</label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Detailed description of the product, technology, and clinical or organizational utility..."
              className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-800 mb-1">
              Key Features (One feature per line)
            </label>
            <textarea
              rows={3}
              value={featuresText}
              onChange={(e) => setFeaturesText(e.target.value)}
              placeholder="Sub-second query transformation&#10;HL7 FHIR R4 schema compliance&#10;Continuous audit logging"
              className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 font-mono text-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-slate-800 mb-1">Access URL / Demo Link</label>
              <input
                type="url"
                value={accessUrl}
                onChange={(e) => setAccessUrl(e.target.value)}
                placeholder="https://sites.google.com/view/nora-health-tech-innovation/..."
                className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-800 mb-1">Button Action Label</label>
              <input
                type="text"
                value={actionLabel}
                onChange={(e) => setActionLabel(e.target.value)}
                placeholder="e.g. Request Demo / View Documentation"
                className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-slate-200 rounded text-slate-600 hover:bg-slate-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#0b2545] hover:bg-[#07172b] text-white rounded font-semibold transition-colors flex items-center gap-1.5 shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Add to Catalogue</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
