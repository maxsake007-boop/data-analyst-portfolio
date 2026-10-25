import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  image,
  title,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-[98vw] w-full max-h-[96vh] flex flex-col bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-5 py-3 bg-zinc-900 border-b border-zinc-800 text-white shrink-0">
          <span className="font-semibold text-sm truncate">{title}</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Закрыть (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Full Image */}
        <div className="flex-1 overflow-auto p-2 sm:p-3 flex items-center justify-center bg-black">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[88vh] object-contain rounded-lg select-none"
          />
        </div>
      </div>
    </div>
  );
};
