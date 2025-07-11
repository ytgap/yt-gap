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
    <section className="bg-gray-100 py-16 px-6 md:px-12 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          📬 Get Notified When New Gaps Are Found
        </h2>
        <p className="text-gray-700 mb-6">
          Subscribe for alerts when fresh YouTube content gaps are uncovered.
        </p>

        <iframe
          src="https://subscribe-forms.beehiiv.com/086a414f-282d-4876-a293-f9a8752a75ff"
          className="beehiiv-embed w-full"
          data-test-id="beehiiv-embed"
          frameBorder="0"
          scrolling="no"
          style={{
            width: '100%',
            maxWidth: '684px',
            height: '316px',
            margin: '0 auto',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            borderRadius: 0,
          }}
        ></iframe>

        <p className="mt-4 text-xs text-gray-500 italic">
          Powered by Beehiiv — no spam, just smart insights.
        </p>
      </div>
    </section>
  );
}
