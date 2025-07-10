import React from 'react';

export default function BlogTeaser() {
  return (
    <section id="blog" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Tips & Strategies from Creators Who Cracked the Code
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="border rounded-xl overflow-hidden shadow-sm bg-white">
              <div className="h-40 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Blog Post Title #{i + 1}</h3>
                <p className="text-gray-700 text-sm mb-4">Quick excerpt from the blog post to draw users in.</p>
                <a href="/blog" className="text-blue-900 font-semibold hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
