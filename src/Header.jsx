import React from 'react';

export default function Header() {
  return (
    <header className="w-full px-6 md:px-12 py-4 flex items-center justify-between border-b border-gray-200 shadow-sm bg-white">
      <div className="flex items-center space-x-3">
        <img
          src="/ytgap-logo1.jpg"
          alt="YT Gap Logo"
          className="h-20 w-auto object-contain"
        />
      </div>
    </header>
  );
}
