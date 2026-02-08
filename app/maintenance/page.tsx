export const metadata = {
  title: 'Under Maintenance',
  description: 'Site is temporarily under maintenance.',
};

export default function MaintenancePage() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center text-center px-4 py-12">
      <div className="max-w-md">
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
          Under Maintenance
        </h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          We’re updating things and will be back shortly. Thanks for your patience.
        </p>
        <p className="text-gray-500 text-sm">
          Check back in a few minutes or contact{' '}
          <a
            href="mailto:lenny_pische@college.harvard.edu"
            className="text-blue-500 hover:text-blue-700"
          >
            lenny_pische@college.harvard.edu
          </a>{' '}
          if you need to get in touch.
        </p>
      </div>
    </div>
  );
}
