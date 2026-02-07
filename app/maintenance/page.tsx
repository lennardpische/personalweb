export const metadata = {
  title: 'Under Maintenance',
  description: 'Site is temporarily under maintenance.',
};

export default function MaintenancePage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-md">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-100 mb-3">
          Under Maintenance
        </h1>
        <p className="text-gray-300 leading-relaxed mb-6">
          We’re updating things and will be back shortly. Thanks for your patience.
        </p>
        <p className="text-gray-500 text-sm">
          Check back in a few minutes or contact{' '}
          <a
            href="mailto:lenny_pische@college.harvard.edu"
            className="text-sky-400 hover:text-sky-300"
          >
            lenny_pische@college.harvard.edu
          </a>{' '}
          if you need to get in touch.
        </p>
      </div>
    </div>
  );
}
