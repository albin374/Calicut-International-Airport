import React from 'react';
import { X, CheckCircle2, Lightbulb, FileText } from 'lucide-react';
import { ProcedureItem } from './proceduresData';

interface ProcedureDetailModalProps {
  item: ProcedureItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProcedureDetailModal: React.FC<ProcedureDetailModalProps> = ({
  item,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 bg-[#FAF7F2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#A2552B]/10 flex items-center justify-center text-[#A2552B]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-sans text-lg sm:text-xl font-bold text-stone-900 leading-tight">
                  {item.label}
                </h3>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[#A2552B]/10 text-[#A2552B]">
                    {item.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-stone-500 mt-0.5">
                Calicut International Airport (CCJ) · Passenger Guidelines
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="bg-[#FAF7F2]/80 border border-stone-200/80 rounded-2xl p-4">
            <h4 className="font-bold text-stone-900 text-sm mb-1.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#A2552B]" />
              <span>{item.details.headline}</span>
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Key Guidelines Points */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
              Essential Rules & Requirements:
            </h5>
            <div className="space-y-2.5">
              {item.details.points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-stone-700 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#A2552B] mt-1.5 shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Tips if available */}
          {item.details.tips && item.details.tips.length > 0 && (
            <div className="rounded-2xl p-4 bg-amber-50/60 border border-amber-200/70 text-xs text-amber-900 space-y-1.5">
              <div className="flex items-center gap-2 font-bold text-amber-800">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Airport Tips & Advice</span>
              </div>
              {item.details.tips.map((tip, idx) => (
                <p key={idx} className="leading-relaxed text-amber-800/90 pl-6">
                  • {tip}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs">
          <span className="text-stone-500">
            For urgent assistance call 24x7 control: <strong className="text-stone-800">+91 495 223 3000</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-[#A2552B] hover:bg-[#8B4420] text-white font-semibold transition-colors cursor-pointer"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
