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
    <section className="bg-gray-900 py-12 px-6 md:px-12 text-center border-t border-gray-800">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          📬 Be the First to Find the Gaps
        </h2>
        <p className="text-gray-400 mb-5 text-sm md:text-base">
          Get notified when we uncover hidden YouTube content gold.
        </p>

        <div className="bg-white rounded-lg overflow-hidden shadow-md mx-auto" style={{ maxWidth: '100%' }}>
          <iframe
            src="https://subscribe-forms.beehiiv.com/086a414f-282d-4876-a293-f9a8752a75ff"
            className="w-full"
            frameBorder="0"
            scrolling="no"
            style={{
              width: '100%',
              height: '280px',
              border: 'none',
              borderRadius: '0.5rem',
            }}
          ></iframe>
        </div>

        <p className="mt-4 text-xs text-gray-500 italic">
          No spam. Just the gaps that matter.
        </p>
      </div>
    </section>
  );
}
