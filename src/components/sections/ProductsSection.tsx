import React, { useState } from 'react';
import {
  Box,
  Plus,
  Search,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Filter,
  Layers,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { ProductItem, ProductStatus } from '../../types';

interface ProductsSectionProps {
  products: ProductItem[];
  onOpenAddModal: () => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  onOpenAddModal,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredProducts = products.filter((prod) => {
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.keyFeatures.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      statusFilter === 'all' || prod.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const getStatusBadgeStyle = (status: ProductStatus) => {
    switch (status) {
      case 'Released':
        return 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'Pilot Phase':
        return 'text-teal-700 bg-teal-50 border-teal-200';
      case 'In Development':
        return 'text-amber-700 bg-amber-50 border-amber-200';
      case 'Active Research':
        return 'text-indigo-700 bg-indigo-50 border-indigo-200';
    }
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
            <span>Corporate Technology</span>
            <span aria-hidden="true">·</span>
            <span>Product Catalogue</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Products & Innovations
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
            Enterprise health software, data interoperability bridges, and clinical surveillance platforms engineered by NORA Health Tech & Innovation.
          </p>
        </div>

        <button
          onClick={onOpenAddModal}
          className="px-4 py-2 bg-[#0b2545] hover:bg-[#07172b] active:bg-[#050f1c] text-white font-semibold text-xs rounded transition-colors flex items-center gap-1.5 self-start sm:self-auto shrink-0 shadow-xs"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Verified Status Transparency Notice - Clean Light Style */}
      <div className="p-3 bg-slate-50 text-slate-800 rounded-lg border border-slate-200 text-xs flex items-center gap-2.5">
        <ShieldCheck className="w-4 h-4 text-[#008489] shrink-0" />
        <span className="leading-relaxed">
          <strong className="text-[#0b2545]">Transparent Status Governance:</strong> Product classifications strictly reflect verified engineering maturity and pilot validation phases. In-development technologies are clearly distinguished from released enterprise deployments.
        </span>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products, capabilities, or features..."
            className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-[#0b2545]"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-medium w-full sm:w-auto">
          {['all', 'Released', 'Pilot Phase', 'In Development', 'Active Research'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap font-semibold ${
                statusFilter === st
                  ? 'bg-[#0b2545] text-white'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {st === 'all' ? 'All Products' : st}
            </button>
          ))}
        </div>
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-16 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
          <Box className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-700">No products found matching your filter</p>
          <p className="text-xs text-slate-400 mt-1">Try resetting the status filter or search query</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">{prod.name}</h3>
                    <p className="text-xs text-teal-800 font-medium mt-0.5">{prod.tagline}</p>
                  </div>
                  <span
                    className={`font-mono text-[11px] font-semibold px-2.5 py-1 rounded border whitespace-nowrap ${getStatusBadgeStyle(
                      prod.status
                    )}`}
                  >
                    {prod.status}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">{prod.description}</p>

                {/* Key Features */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-800 block text-[11px] uppercase tracking-wider">
                    Core Technical Features:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {prod.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Users */}
                <div className="pt-2 flex flex-wrap items-center gap-1.5 text-[11px]">
                  <span className="text-slate-400 font-medium mr-1">Intended Audience:</span>
                  {prod.targetUsers.map((u, uIdx) => (
                    <span
                      key={uIdx}
                      className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded border border-slate-200"
                    >
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button & Metadata */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-slate-400">Updated: {prod.lastUpdated}</span>
                <a
                  href={prod.accessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-white font-semibold rounded transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>{prod.accessActionLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-teal-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
