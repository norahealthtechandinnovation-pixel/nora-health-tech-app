import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, ArrowRight, Briefcase, Box, Newspaper, Info } from 'lucide-react';
import { AppSection, WorkAreaId, ProductItem, NewsArticle } from '../../types';
import { WORK_AREAS } from '../../data/companyData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: ProductItem[];
  news: NewsArticle[];
  onNavigate: (section: AppSection, workAreaId?: WorkAreaId) => void;
  onReadArticle: (article: NewsArticle) => void;
}

interface SearchResultItem {
  id: string;
  title: string;
  category: string;
  type: 'section' | 'work' | 'product' | 'news';
  description: string;
  action: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  products,
  news,
  onNavigate,
  onReadArticle,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Aggregate searchable items
  const allItems: SearchResultItem[] = useMemo(() => {
    const list: SearchResultItem[] = [];

    // Sections
    list.push({
      id: 'sec-about',
      title: 'About NORA Health Tech & Innovation',
      category: 'Company Profile',
      type: 'section',
      description: 'Mission, vision, core values, leadership pillars, and corporate identity.',
      action: () => {
        onNavigate('about');
        onClose();
      },
    });

    list.push({
      id: 'sec-contact',
      title: 'Contact & Social Media',
      category: 'Company Profile',
      type: 'section',
      description: 'Official contact email, office details, and social channels.',
      action: () => {
        onNavigate('contact');
        onClose();
      },
    });

    // Work Areas
    WORK_AREAS.forEach((wa) => {
      list.push({
        id: `work-${wa.id}`,
        title: `${wa.name}`,
        category: 'Our Work Area',
        type: 'work',
        description: wa.overview,
        action: () => {
          onNavigate('work', wa.id);
          onClose();
        },
      });

      wa.featuredProjects.forEach((proj, idx) => {
        list.push({
          id: `proj-${wa.id}-${idx}`,
          title: proj.title,
          category: `Project · ${wa.name}`,
          type: 'work',
          description: proj.description,
          action: () => {
            onNavigate('work', wa.id);
            onClose();
          },
        });
      });
    });

    // Products
    products.forEach((prod) => {
      list.push({
        id: `prod-${prod.id}`,
        title: prod.name,
        category: `Product · ${prod.status}`,
        type: 'product',
        description: prod.description,
        action: () => {
          onNavigate('products');
          onClose();
        },
      });
    });

    // News
    news.forEach((n) => {
      list.push({
        id: `news-${n.id}`,
        title: n.title,
        category: `News · ${n.category}`,
        type: 'news',
        description: n.summary,
        action: () => {
          onReadArticle(n);
          onClose();
        },
      });
    });

    return list;
  }, [products, news, onNavigate, onClose, onReadArticle]);

  const filteredResults = useMemo(() => {
    if (!query.trim()) {
      return allItems.slice(0, 7);
    }
    const q = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query, allItems]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredResults.length));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % Math.max(1, filteredResults.length));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          filteredResults[selectedIndex].action();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, onClose]);

  if (!isOpen) return null;

  const getTypeIcon = (type: SearchResultItem['type']) => {
    switch (type) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-teal-600" />;
      case 'product':
        return <Box className="w-4 h-4 text-teal-600" />;
      case 'news':
        return <Newspaper className="w-4 h-4 text-teal-600" />;
      default:
        return <Info className="w-4 h-4 text-teal-600" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/70 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3 border-b border-slate-200 bg-slate-50">
          <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search NORA work areas, products, projects, or news..."
            className="w-full bg-transparent border-none text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs text-slate-500 hover:text-slate-700 bg-slate-200/60 rounded"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-slate-100 flex-1">
          {filteredResults.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              <p>No company content found matching "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for "FHIR", "Wastewater", "Policy", or "AuditAI"
              </p>
            </div>
          ) : (
            filteredResults.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`p-3 rounded cursor-pointer transition-colors flex items-start justify-between gap-3 ${
                    isSelected ? 'bg-slate-100 text-[#0b2545] ring-1 ring-slate-200' : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 p-1.5 rounded bg-slate-100 text-slate-700 shrink-0">
                      {getTypeIcon(item.type)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mb-0.5">
                        <span className="font-medium text-teal-700">{item.category}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 leading-snug">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{item.description}</p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-2 transition-transform ${
                      isSelected ? 'text-teal-600 translate-x-1' : 'text-slate-300'
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>Use <kbd className="font-mono bg-white px-1 py-0.5 border rounded">↑</kbd> <kbd className="font-mono bg-white px-1 py-0.5 border rounded">↓</kbd> to navigate</span>
            <span><kbd className="font-mono bg-white px-1 py-0.5 border rounded">Enter</kbd> to open</span>
          </div>
          <span className="font-mono text-[11px] text-teal-700">{filteredResults.length} matches</span>
        </div>
      </div>
    </div>
  );
};
