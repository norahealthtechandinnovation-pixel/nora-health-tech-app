import React, { useState, useEffect } from 'react';
import {
  BrainCircuit,
  Database,
  Activity,
  ScrollText,
  Microscope,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Target,
  ExternalLink,
} from 'lucide-react';
import { WorkAreaId, AppSection } from '../../types';
import { WORK_AREAS } from '../../data/companyData';

interface OurWorkSectionProps {
  initialWorkAreaId?: WorkAreaId;
  onNavigate: (section: AppSection) => void;
}

export const OurWorkSection: React.FC<OurWorkSectionProps> = ({
  initialWorkAreaId = 'ai-digital-health',
  onNavigate,
}) => {
  const [selectedAreaId, setSelectedAreaId] = useState<WorkAreaId>(initialWorkAreaId);

  useEffect(() => {
    if (initialWorkAreaId) {
      setSelectedAreaId(initialWorkAreaId);
    }
  }, [initialWorkAreaId]);

  const selectedArea = WORK_AREAS.find((a) => a.id === selectedAreaId) || WORK_AREAS[0];

  const getWorkIcon = (id: WorkAreaId) => {
    switch (id) {
      case 'ai-digital-health':
        return <BrainCircuit className="w-4 h-4" />;
      case 'health-data':
        return <Database className="w-4 h-4" />;
      case 'public-health':
        return <Activity className="w-4 h-4" />;
      case 'health-policy':
        return <ScrollText className="w-4 h-4" />;
      case 'research-evidence':
        return <Microscope className="w-4 h-4" />;
      case 'health-tools':
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
          <span>Company Portfolio</span>
          <span aria-hidden="true">·</span>
          <span>Core Areas of Work</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Our Work
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
          NORA operates across six integrated domains to bridge cutting-edge computational health science, empirical policy, and clinical utility.
        </p>
      </div>

      {/* 6 Category Tabs Strip */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {WORK_AREAS.map((area) => {
          const isSelected = area.id === selectedAreaId;
          return (
            <button
              key={area.id}
              onClick={() => setSelectedAreaId(area.id)}
              className={`p-3 rounded-lg border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-[#0b2545] bg-slate-100 text-[#0b2545] shadow-xs ring-1 ring-[#0b2545]'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={isSelected ? 'text-[#008489]' : 'text-slate-400'}>
                  {getWorkIcon(area.id)}
                </span>
                <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400">
                  {area.featuredProjects.length} Projects
                </span>
              </div>
              <span className="text-xs font-bold leading-snug line-clamp-2">
                {area.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Work Area View */}
      <div className="space-y-6">
        {/* Overview & Objectives Card */}
        <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-5">
          <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#008489]">
                Detailed Work Domain View
              </div>
              <h2 className="text-xl font-bold text-[#0b2545] mt-0.5">{selectedArea.name}</h2>
              <p className="text-xs sm:text-sm text-[#008489] font-medium mt-1">{selectedArea.tagline}</p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-xs text-[#008489] hover:text-[#006b6f] font-semibold flex items-center gap-1 self-start sm:self-auto"
            >
              <span>View Related Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Domain Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {selectedArea.overview}
            </p>
          </div>

          {/* Strategic Objectives */}
          <div className="space-y-3 pt-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-teal-600" />
              <span>Strategic Objectives & Focus Priorities</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {selectedArea.strategicObjectives.map((obj, i) => (
                <div key={i} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Featured Projects & Initiatives</h3>
              <p className="text-xs text-slate-500">
                Recent research collaborations and implementation prototypes in {selectedArea.name}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {selectedArea.featuredProjects.length} Documented Initiatives
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {selectedArea.featuredProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-teal-700">{proj.partnerOrScope}</span>
                    <span className="font-mono text-[11px] font-medium text-slate-500">
                      {proj.status}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug">{proj.title}</h4>

                  <p className="text-xs text-slate-600 leading-relaxed">{proj.description}</p>

                  <div className="p-3 bg-teal-50/60 rounded border border-teal-100 text-xs text-teal-900 space-y-1">
                    <span className="font-bold block text-[11px] uppercase tracking-wider">Demonstrated Impact:</span>
                    <p>{proj.impactSummary}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                  <span className="font-semibold text-slate-800 text-[11px] block">Key Deliverables:</span>
                  <ul className="space-y-1 list-disc list-inside">
                    {proj.keyDeliverables.map((del, dIdx) => (
                      <li key={dIdx}>{del}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
