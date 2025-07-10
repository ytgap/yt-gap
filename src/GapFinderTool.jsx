import React, { useState } from 'react';

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
      setResults(data.results || []);
    } catch (error) {
      console.error('Error fetching results:', error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const getBadge = (score) => {
    if (score > 400000) return '🔥 High';
    if (score > 200000) return '⚠️ Medium';
    return '✅ Low';
  };

  return (
    <section id="gap-finder" className="bg-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Live YouTube Search Gap Finder
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Enter a topic and uncover what viewers are searching for — but creators haven’t filled yet.
        </p>

        <form onSubmit={fetchSuggestions} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Try: dogs, AI tools, fitness"
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

        {loading && <p className="mt-6 text-gray-500 italic">Fetching suggestions...</p>}

        <div className="mt-10 grid gap-6 text-left">
          {results.length > 0 ? (
            results.map((r, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-lg p-5 shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{r.suggestion}</h3>
                <p className="text-gray-700">
                  🔍 <strong>Search Volume:</strong> {r.searchVolume.toLocaleString()}
                </p>
                <p className="text-gray-700">
                  🎞️ <strong>YouTube Videos:</strong> {r.videoCount}
                </p>
                <p className="text-gray-700">
                  📊 <strong>Gap Score:</strong> {r.gapScore.toLocaleString()} —{' '}
                  <span className="font-semibold">{getBadge(r.gapScore)}</span>
                </p>
              </div>
            ))
          ) : (
            topic &&
            !loading && (
              <p className="mt-6 text-gray-500 italic">
                No results found for "{topic}" — try a broader topic.
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
