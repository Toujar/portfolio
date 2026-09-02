import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import type { ProjectScreenshot } from '../../data/projects';

interface Props {
  screenshots: ProjectScreenshot[];
}

export default function ImageGallery({ screenshots }: Props) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLightboxIdx(i => (i !== null ? (i - 1 + screenshots.length) % screenshots.length : null));
  }, [screenshots.length]);

  const next = useCallback(() => {
    setLightboxIdx(i => (i !== null ? (i + 1) % screenshots.length : null));
  }, [screenshots.length]);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIdx, prev, next]);

  if (!screenshots.length) return null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {screenshots.map((shot, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setLightboxIdx(i)}
            className="relative aspect-video rounded-xl overflow-hidden group"
            style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid var(--color-border)' }}
            aria-label={`Open screenshot: ${shot.caption}`}
          >
            <img
              src={shot.url}
              alt={shot.caption}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
              loading="lazy"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(0,0,0,0.4)' }}>
              <ZoomIn size={22} className="text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 text-xs text-white font-medium truncate"
              style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
              {shot.caption}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            onClick={() => setLightboxIdx(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors z-10"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors z-10"
              onClick={e => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors z-10"
              onClick={e => { e.stopPropagation(); next(); }}
              aria-label="Next"
            >
              <ChevronRight size={22} />
            </button>

            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={screenshots[lightboxIdx].url}
                alt={screenshots[lightboxIdx].caption}
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
              <div className="text-center mt-3">
                <p className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
                  {screenshots[lightboxIdx].caption}
                </p>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  {lightboxIdx + 1} / {screenshots.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
