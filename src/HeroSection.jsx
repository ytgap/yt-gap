import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-white text-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-red-600">
            Find out what’s wanted.
            <br />
            <span className="text-blue-900">Create what’s missing.</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Discover content gaps on YouTube. Get low-competition topics, tools, and tricks to dominate your niche before anyone else does.
          </p>
          <button className="bg-red-600 text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow hover:bg-red-700 transition">
            Start Finding Gaps
          </button>
        </div>
      </div>
    </section>
  );
}
