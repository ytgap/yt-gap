import React, { useState } from 'react';

export default function GapFinderTool() {
  const [topic, setTopic] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async (e) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setSuggestions([]);

    try {
      const response = await fetch(`/api/yt-suggest?q=${encodeURIComponent(topic)}`);
const data = await response.json();
setSuggestions(data.suggestions || []);
 // suggestions array is the second item
    } catch (error) {
      console.error('Error fetching YouTube suggestions:', error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Live YouTube Search Suggestions
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Discover what people are searching for on YouTube — in real time.
        </p>

        <form onSubmit={fetchSuggestions} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Try: fitness, gaming, cooking"
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

        <div className="mt-8 text-left">
          {suggestions.length > 0 ? (
            <ul className="list-disc list-inside text-gray-800 space-y-2">
              {suggestions.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
          ) : (
            topic &&
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
