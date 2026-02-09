'use client';

import Image from 'next/image';
import { useState, useCallback, useEffect } from 'react';

type Trip = { id: string; name: string; folder: string; images: string[] };

export function TravelGallery({ trips }: { trips: Trip[] }) {
  const [open, setOpen] = useState<{ tripIndex: number; imageIndex: number } | null>(null);

  const currentTrip = open !== null ? trips[open.tripIndex] : null;
  const currentSrc = currentTrip
    ? `/${currentTrip.folder}/${currentTrip.images[open!.imageIndex]}`
    : null;
  const total = currentTrip ? currentTrip.images.length : 0;
  const hasPrev = open !== null && open.imageIndex > 0;
  const hasNext = open !== null && open.imageIndex < total - 1;

  const goPrev = useCallback(() => {
    if (open === null || !hasPrev) return;
    setOpen({ ...open, imageIndex: open.imageIndex - 1 });
  }, [open, hasPrev]);

  const goNext = useCallback(() => {
    if (open === null || !hasNext) return;
    setOpen({ ...open, imageIndex: open.imageIndex + 1 });
  }, [open, hasNext]);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, close, goPrev, goNext]);

  return (
    <>
      <section className="space-y-12">
        {trips.map((trip, tripIndex) => (
          <div key={trip.id}>
            <h2 className="text-gray-900 font-medium text-xl mb-4">{trip.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {trip.images.map((file, imageIndex) => {
                const src = `/${trip.folder}/${file}`;
                return (
                  <button
                    key={file}
                    type="button"
                    onClick={() => setOpen({ tripIndex, imageIndex })}
                    className="aspect-square relative block w-full rounded-lg overflow-hidden bg-gray-100 cursor-pointer border-0 p-0 text-left"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {open !== null && currentSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
        >
          <div
            className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl leading-none z-10"
              aria-label="Close"
            >
              ×
            </button>

            {hasPrev && (
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 text-white hover:text-gray-300 text-4xl font-light w-10 h-10 flex items-center justify-center z-10"
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            <div className="relative w-full h-[70vh] max-h-[800px]">
              <Image
                src={currentSrc}
                alt=""
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>

            {hasNext && (
              <button
                type="button"
                onClick={goNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 text-white hover:text-gray-300 text-4xl font-light w-10 h-10 flex items-center justify-center z-10"
                aria-label="Next image"
              >
                ›
              </button>
            )}

            <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/80 text-sm">
              {open.imageIndex + 1} / {total}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
