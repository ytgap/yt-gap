import React from 'react';

export default function EmailSignup() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 text-center">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          📬 Get Notified When New Gaps Are Found
        </h2>
        <p className="text-gray-700 mb-6">
          Subscribe and we’ll alert you when new YouTube content opportunities appear.
        </p>

        <form
          action="https://subscribe-forms.beehiiv.com/086a414f-282d-4876-a293-f9a8752a75ff"
          method="POST"
          target="_blank"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="px-4 py-3 w-full sm:w-2/3 rounded-lg border border-gray-300 focus:outline-none"
          />

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Notify Me
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-500 italic">
          Powered by Beehiiv — you can unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
