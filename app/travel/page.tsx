export const metadata = {
  title: 'Travel & Pictures',
  description: 'Travel and photography — Lennard Pische.',
};

const TRIPS = [
  { id: 'australia', name: 'Australia' },
  { id: 'thailand', name: 'Thailand' },
  { id: 'singapore', name: 'Singapore' },
  { id: 'china', name: 'China' },
  { id: 'mexico', name: 'Mexico' },
  { id: 'usa', name: 'USA' },
] as const;

function PhotoGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className="aspect-square rounded-lg bg-slate-800/50 border border-gray-600 flex items-center justify-center text-gray-500 text-sm"
        >
          Photo
        </div>
      ))}
    </div>
  );
}

export default function TravelPage() {
  return (
    <div className="max-w-[60ch] mx-auto w-full">
      <h1 className="font-medium pt-4 pb-2 text-3xl text-gray-100">
        Travel & Pictures
      </h1>
      <p className="text-gray-200 leading-snug mb-10">
        Photos from trips and everyday moments.
      </p>

      <section className="space-y-10">
        {TRIPS.map((trip) => (
          <div key={trip.id}>
            <h2 className="text-gray-200 font-medium text-xl mb-3">{trip.name}</h2>
            <PhotoGrid />
          </div>
        ))}
      </section>
    </div>
  );
}
