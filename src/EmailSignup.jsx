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
    <section className="bg-gray-100 py-16 px-6 md:px-12 text-center border-t border-gray-200">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          📬 Be the First to Find the Gaps
        </h2>
        <p className="text-gray-700 mb-6">
          Subscribe and get notified when new YouTube content opportunities are uncovered.
        </p>

        <div className="shadow-md rounded-lg overflow-hidden bg-white p-4 sm:p-6">
          <iframe
            src="https://subscribe-forms.beehiiv.com/086a414f-282d-4876-a293-f9a8752a75ff"
            className="w-full"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            style={{
              width: '100%',
              maxWidth: '100%',
              height: '160px',
              backgroundColor: 'transparent',
              border: 'none',
            }}
          ></iframe>
        </div>

        <p className="mt-4 text-xs text-gray-500 italic">
          No spam. Just powerful insights from the Gap Gods.
        </p>
      </div>
    </section>
  );
}
