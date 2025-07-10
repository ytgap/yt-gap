import React from 'react';

export default function EmailSignup() {
  return (
    <section className="bg-blue-900 text-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Want Weekly Gaps Sent to Your Inbox?
        </h2>
        <p className="text-lg mb-6">
          Subscribe for exclusive content ideas, content gap alerts, and smart strategies to grow your channel faster.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full sm:w-auto px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
