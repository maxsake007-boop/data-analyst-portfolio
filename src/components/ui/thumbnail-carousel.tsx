import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

export interface CarouselItem {
  id: string | number;
  url: string;
  title: string;
}

const defaultItems: CarouselItem[] = [
  {
    id: 1,
    url: 'https://cdn.21st.dev/assets/mirror/2d/2deffad52dca4c5c60941eae33c675a62f8c68ccc59977c53841203b173abe0b.jpg',
    title: 'A large body of water surrounded by mountains',
  },
  {
    id: 2,
    url: 'https://cdn.21st.dev/assets/mirror/cd/cd19a496024e1ae95966db819275e556550318375c03775081270da8e8c67959.jpg',
    title: 'Abstract streaks of pink and blue on black',
  },
  {
    id: 3,
    url: 'https://cdn.21st.dev/assets/mirror/fd/fd0a79541180cd40e0ce44de54b408d0e340d8640f929a4b240255478919141f.jpg',
    title: 'Mountain Summit',
  },
  {
    id: 4,
    url: 'https://cdn.21st.dev/assets/mirror/8c/8c67f1501f4d1d639798bc474a764aac9cecf144810c4f6ecc1ea154622b8bff.jpg',
    title: 'Alpine Landscape',
  },
  {
    id: 5,
    url: 'https://cdn.21st.dev/assets/mirror/a8/a86021ac758a4511effa226afc0df66c2c515c1dd3b6d0f5a307c2098b3821d8.jpg',
    title: 'Mountain Range',
  },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 38;
const GAP_PX = 4;
const MARGIN_PX = 2;

interface ThumbnailsProps {
  index: number;
  setIndex: (i: number | ((prev: number) => number)) => void;
  items: CarouselItem[];
}

function Thumbnails({ index, setIndex, items }: ThumbnailsProps) {
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="overflow-x-auto py-1"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <style>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div className="flex gap-1 h-16 sm:h-20 pb-1" style={{ width: 'fit-content' }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? 'active' : 'inactive'}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
                opacity: 1,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
                opacity: 0.6,
              },
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`relative shrink-0 h-full overflow-hidden rounded-xl border cursor-pointer transition-colors ${
              i === index ? 'border-zinc-900 shadow-sm ring-2 ring-zinc-900/10' : 'border-zinc-200 hover:opacity-90'
            }`}
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export interface ThumbnailCarouselProps {
  items?: CarouselItem[];
  index?: number;
  onIndexChange?: (index: number) => void;
  className?: string;
}

export default function ThumbnailCarousel({
  items = defaultItems,
  index: controlledIndex,
  onIndexChange,
  className = '',
}: ThumbnailCarouselProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledIndex !== undefined;
  const index = isControlled ? controlledIndex : internalIndex;

  const setIndex = (newIdx: number | ((prev: number) => number)) => {
    const next = typeof newIdx === 'function' ? newIdx(index) : newIdx;
    const clamped = Math.max(0, Math.min(items.length - 1, next));
    if (!isControlled) {
      setInternalIndex(clamped);
    }
    onIndexChange?.(clamped);
  };

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  // Recalculate position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth || 1;
        x.set(-index * containerWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [index, x]);

  return (
    <div className={`w-full ${className}`}>
      <div className="flex flex-col gap-3">
        {/* Main Carousel viewport (16:9 ratio to prevent black bars and match Power BI) */}
        <div
          className="relative w-full aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-100 border border-zinc-200/80 shadow-inner"
          ref={containerRef}
        >
          <motion.div
            className="flex h-full"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (25% of container width)
              else if (Math.abs(offset) > containerWidth * 0.25) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {items.map((item) => (
              <div key={item.id} className="shrink-0 w-full h-full relative">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          {/* Previous Button */}
          <motion.button
            type="button"
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all z-10 cursor-pointer ${
              index === 0
                ? 'opacity-0 pointer-events-none'
                : 'bg-white/95 text-zinc-900 hover:scale-105 hover:bg-white shadow-zinc-900/10'
            }`}
            aria-label="Previous image"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            type="button"
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all z-10 cursor-pointer ${
              index === items.length - 1
                ? 'opacity-0 pointer-events-none'
                : 'bg-white/95 text-zinc-900 hover:scale-105 hover:bg-white shadow-zinc-900/10'
            }`}
            aria-label="Next image"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          {/* Image Counter Badge */}
          {items.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-zinc-950/75 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-xs font-mono font-medium shadow-sm">
              {index + 1} / {items.length}
            </div>
          )}
        </div>

        {/* Thumbnails row (only if multiple images) */}
        {items.length > 1 && (
          <Thumbnails index={index} setIndex={setIndex} items={items} />
        )}
      </div>
    </div>
  );
}
