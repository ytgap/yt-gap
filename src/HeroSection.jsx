import React from 'react';

export default function HeroSection() {
  const scrollToGapFinder = () => {
    const section = document.getElementById('gap-finder');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Find out what’s wanted. <br />
            Create what’s missing.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover hidden content opportunities on YouTube. Stop guessing. Start growing.
          </p>
          <button
  onClick={() => {
    const el = document.getElementById('gap-finder');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }}
  className="mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
>
  Start Finding Gaps
</button>

        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <img
            src="/sea.png"
            alt="Feeling lost in an ocean of videos?"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
