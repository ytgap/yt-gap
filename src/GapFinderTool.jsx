import React, { useState } from 'react';

const fakeGapData = {
  cooking: [
    "Quick recipes for tiny kitchens",
    "How to meal prep with 3 ingredients",
    "No-spill cooking for truckers"
  ],
  gaming: [
    "Xbox games under 500MB",
    "Mobile games with no ads (2024)",
    "Nintendo Switch horror games for kids"
  ],
  fitness: [
    "5-minute workouts for knee pain",
    "Beginner kettlebell routines for seniors",
    "How to fix posture from gaming"
  ]
};

export default function GapFinderTool() {
  const [topic, setTopic] = useState('');
  const [gaps, setGaps] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const keyword = topic.toLowerCase().trim();
    setGaps(fakeGapData[keyword] || []);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Try the Gap Finder
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Type a niche and see examples of video topics people want — but aren't finding.
        </p>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="e.g. cooking, gaming, fitness"
            className="px-4 py-3 w-full sm:w-2/3 rounded-lg border border-gray-300 focus:outline-none"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Find Gaps
          </button>
        </form>

        <div className="mt-8 text-left">
          {gaps.length > 0 ? (
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              {gaps.map((gap, index) => (
                <li key={index}>{gap}</li>
              ))}
            </ul>
          ) : (
            topic && (
              <p className="mt-4 text-gray-500 italic">
                {`No predefined gaps found for "${topic}". Try: cooking, gaming, or fitness.`}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
