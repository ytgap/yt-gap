import React, { useState } from 'react';

export default function Header() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Detect platform for smarter instructions
  const getShortcut = () => {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    return isMac ? '⌘ + D' : 'Ctrl + D';
  };

  return (
    <header className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-gray-200 shadow-sm bg-white">
      <div className="flex items-center space-x-3">
        <img
          src="/ytgap-logo1.jpg"
          alt="YT Gap Logo"
          className="h-12 w-auto object-contain"
        />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-lg shadow transition"
        >
          🔖 Bookmark This Site
        </button>

        {showTooltip && (
          <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-300 rounded-md shadow-lg text-sm text-gray-800 p-3 z-50">
            Press <span className="font-semibold">{getShortcut()}</span> to bookmark this page.
            <br />
            On mobile: Tap <strong>Share</strong> → <strong>Add to Home Screen</strong>.
          </div>
        )}
      </div>
    </header>
  );
}
