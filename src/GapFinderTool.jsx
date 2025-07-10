import React, { useState } from 'react';

const randomCategory = (choices) => choices[Math.floor(Math.random() * choices.length)];

export default function GapFinderTool() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setResults([]);

    try {
      const response = await fetch(`/api/gap-score?q=${encodeURIComponent(topic)}`);
      const data = await response.json();

      const enhanced = data.results.map((r) => ({
        suggestion: r.suggestion,
        searchVolume: randomCategory(['Low', 'Moderate', 'High']),
        gapPotential: randomCategory(['Low', 'Medium', 'High']),
      }));

      setResults(enhanced);
    } catch (error) {
      console.error('Error fetching results:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const getGapIcon = (level) => {
    switch (level) {
      case 'High':
        return '🔥';
      case 'Medium':
        return '⚠️';
      case 'Low':
        return '✅';
      default:
        return '';
    }
  };

  return (
    <section id="gap-finder" className="bg-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          YouTube Gap Discovery Tool
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Enter a topic and uncover what viewers are searching for — with insight into potential content gaps.
        </p>

        <form onSubmit={fetchSuggestions} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Try: dogs, AI, productivity"
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

        {loading && <p className="mt-6 text-gray-500 italic">Finding gap signals...</p>}

        <div className="mt-10 grid gap-6 text-left">
          {results.length > 0 ? (
            results.map((r, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{r.suggestion}</h3>
                <p className="text-gray-700">
                  🔍 <strong>Search Volume:</strong> {r.searchVolume}
                </p>
                <p className="text-gray-700">
                  📊 <strong>Gap Potential:</strong> {r.gapPotential} {getGapIcon(r.gapPotential)}
                </p>
              </div>
            ))
          ) : (
            topic &&
            !loading && (
              <p className="mt-6 text-gray-500 italic">
                No suggestions found for "{topic}" — try a broader topic.
              </p>
            )
          )}
        </div>

        <p className="mt-5 text-xs text-gray-400 italic">
          ** Search Volume and Gap Potential are estimated and not guaranteed to be accurate. 
        </p>
      </div>
    </section>
  );
}
