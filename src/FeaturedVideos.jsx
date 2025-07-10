import React from 'react';

export default function FeaturedVideos() {
  return (
    <section id="videos" className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          See How Creators Are Finding Hidden Niches
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Watch these creators as they uncover underserved YouTube topics and build videos around them.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-video">
            <iframe className="w-full h-full rounded-xl" src="https://www.youtube.com/embed/q7G56qZMhkc" title="Niche Discovery" frameBorder="0" allowFullScreen></iframe>
            <p className="mt-2 font-semibold text-gray-800">The Fastest Way to Find Low Competition Niches</p>
          </div>
          <div className="aspect-video">
            <iframe className="w-full h-full rounded-xl" src="https://www.youtube.com/embed/ojyeHTiypIk" title="VidIQ Keyword Tool" frameBorder="0" allowFullScreen></iframe>
            <p className="mt-2 font-semibold text-gray-800">Find Low Competition Keywords with VidIQ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
