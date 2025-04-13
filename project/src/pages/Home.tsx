import React, { useState } from 'react';
import { Shield, Zap, Settings2 } from 'lucide-react';

const qualities = [
  { value: '720p', label: '720p HD' },
  { value: '1080p', label: '1080p Full HD' },
  { value: '2k', label: '2K QHD' },
  { value: '4k', label: '4K Ultra HD' }
];

function Home() {
  const [url, setUrl] = useState('');
  const [quality, setQuality] = useState('1080p');

  const handleConvert = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Converting:', url, 'at quality:', quality);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            YouTube to MP4 Free Online Converter
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Convert YouTube videos to high-quality MP4 files instantly. No registration required.
            Perfect for Mac, Windows, and mobile devices.
          </p>

          <form onSubmit={handleConvert} className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Paste YouTube URL here"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              />
              <select
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="px-6 py-4 rounded-xl border border-gray-300 bg-white"
              >
                {qualities.map((q) => (
                  <option key={q.value} value={q.value}>
                    {q.label}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
              >
                Convert to MP4
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Convert videos in seconds with our optimized technology</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Secure</h3>
              <p className="text-gray-600">Your privacy and security are our top priorities</p>
            </div>
            <div className="text-center p-6">
              <Settings2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">High Quality</h3>
              <p className="text-gray-600">Support for HD, Full HD, and 4K video quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Paste URL</h3>
              <p className="text-gray-600">Copy and paste your YouTube video URL</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Quality</h3>
              <p className="text-gray-600">Select your preferred video quality</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Download</h3>
              <p className="text-gray-600">Click convert and download your MP4</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;