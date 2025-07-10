import React, { useState } from 'react';

export default function GapFinderTool() {
  const [topic, setTopic] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchSuggestions = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setSuggestions([]);
    setHasSearched(true);

    try {
      const response = await fetch(`/api/yt-suggest?q=${encodeURIComponent(topic)}`);
      const data = await response.json();
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  const generateMockScore = () => Math.floor(Math.random() * 50) + 50;

  return (
    <section id="gap-finder" className="bg-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Discover Untapped YouTube Search Ideas
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Enter a topic and uncover what viewers are searching for — but creators haven’t filled yet.
        </p>

        <form onSubmit={fetchSuggestions} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Try: fitness, gaming, cooking"
            className="px-4 py-3 w-full sm:w-2/3 rounded-lg border border-gray-300 focus:outline-none"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
              if (e.target.value.trim() === '') {
                setHasSearched(false); // reset the "searched" flag if input is cleared
              }
            }}
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Find Gaps
          </button>
        </form>

        {loading && <p className="mt-6 text-gray-500 italic">Fetching suggestions...</p>}

        <div className="mt-10 text-left space-y-4">
          {suggestions.length > 0 ? (
            suggestions.map((s, index) => {
              const gapScore = generateMockScore();

              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition w-full"
                >
                  <span className="text-gray-900 font-medium text-base">{s}</span>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      gapScore >= 80
                        ? 'bg-green-100 text-green-700'
                        : gapScore >= 65
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    Gap Score: {gapScore}
                  </span>
                </div>
              );
            })
          ) : (
            hasSearched &&
            !loading && (
              <p className="mt-4 text-gray-500 italic">
                No suggestions found for "{topic}" — try a broader topic.
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
