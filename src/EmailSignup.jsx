import React, { useEffect } from 'react';

export default function EmailSignup() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://subscribe-forms.beehiiv.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-gray-900 py-16 px-6 md:px-12 text-center border-t border-gray-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          📬 Be the First to Find the Gaps
        </h2>
        <p className="text-gray-300 mb-6">
          Subscribe for alerts when new YouTube content gaps are discovered.
        </p>

        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg p-4 sm:p-6 border border-gray-700">
          <iframe
            src="https://subscribe-forms.beehiiv.com/086a414f-282d-4876-a293-f9a8752a75ff"
            className="w-full max-w-full"
            frameBorder="0"
            scrolling="no"
            style={{
              height: '300px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '0.5rem',
              filter: 'invert(0%)',
              transform: 'scale(1)',
              transformOrigin: 'top',
            }}
          ></iframe>
        </div>

        <p className="mt-4 text-xs text-gray-500 italic">
          No spam. Just legit insights from the Gap Gods.
        </p>
      </div>
    </section>
  );
}
