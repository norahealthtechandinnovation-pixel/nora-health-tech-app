import React, { useState } from 'react';
import {
  Newspaper,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  Info,
} from 'lucide-react';
import { NewsArticle, NewsCategory } from '../../types';

interface NewsSectionProps {
  news: NewsArticle[];
  onReadArticle: (article: NewsArticle) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  news,
  onReadArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNews = news.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
          <span>Media & Intelligence</span>
          <span aria-hidden="true">·</span>
          <span>Corporate Communications</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          News & Insights
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
          Official company announcements, peer-reviewed research highlights, policy publications, and healthcare innovation milestones.
        </p>
      </div>

      {/* Sample Content Transparency Notice */}
      <div className="p-3 bg-slate-100 rounded border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
        <Info className="w-4 h-4 text-teal-700 shrink-0" />
        <span>
          <strong>Sample Corporate Content:</strong> The articles presented below are illustrative prototypes demonstrating NORA Health Tech & Innovation's news and publications workflow.
        </span>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles, tags, or topics..."
            className="w-full pl-9 pr-3 py-1.5 text-xs border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto text-xs font-medium w-full sm:w-auto">
          {['all', 'Company Announcement', 'Research Highlight', 'Publication', 'Innovation Update'].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded transition-colors whitespace-nowrap font-semibold ${
                  selectedCategory === cat
                    ? 'bg-[#0b2545] text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {cat === 'all' ? 'All Updates' : cat}
              </button>
            )
          )}
        </div>
      </div>

      {/* News Grid */}
      {filteredNews.length === 0 ? (
        <div className="py-16 text-center text-slate-500 bg-white rounded-xl border border-slate-200">
          <Newspaper className="w-8 h-8 text-slate-300 mx-auto mb-2" />
          <p className="text-sm font-semibold text-slate-700">No articles found</p>
          <p className="text-xs text-slate-400 mt-1">Try selecting a different category or clearing search</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map((article) => (
            <div
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-teal-700">{article.category}</span>
                    {article.isSampleContent && (
                      <span className="font-mono text-[10px] text-slate-400">· Sample Content</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug hover:text-teal-700 transition-colors">
                  {article.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] bg-slate-100 text-slate-700 rounded border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.date}</span>
                </div>
                <span className="font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
