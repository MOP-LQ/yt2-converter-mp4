import React, { useState } from 'react';
import { Scissors, CheckCircle2 } from 'lucide-react';

function Trim() {
  const [url, setUrl] = useState('');
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('00:00');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadVideo = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVideoLoaded(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Trim YouTube Videos Online
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cut and Convert YouTube Videos to MP4 - Extract the Perfect Moment
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleLoadVideo} className="mb-8">
              <div className="flex gap-4">
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste YouTube URL here"
                  className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
                >
                  Load Video
                </button>
              </div>
            </form>

            {isVideoLoaded && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-6">
                    {/* Video player will go here */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Video Preview
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Start Time
                        </label>
                        <input
                          type="time"
                          step="1"
                          value={startTime}
                          onChange={(e) => setStartTime(e.target.value)}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          End Time
                        </label>
                        <input
                          type="time"
                          step="1"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <button className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold flex items-center gap-2">
                        <Scissors className="h-5 w-5" />
                        Trim and Convert to MP4
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Trim YouTube Videos Instantly: Capture Perfect Moments Without the Hassle
            </h2>
            
            <p>
              Tired of downloading entire YouTube videos just to save that one perfect moment? Whether it's a jaw-dropping guitar solo, a crucial tutorial step, or a hilarious meme clip, you shouldn't have to waste time or storage space on full-length videos. Our online YouTube video cutter solves this problem effortlessly, letting you extract exactly the segment you need—no downloads, no watermarks, no fuss.
            </p>

            <p>
              Imagine this: You're watching a 30-minute makeup tutorial but only care about the 2-minute eyeshadow technique. Instead of downloading the whole video or struggling with complicated software, simply paste the YouTube URL into our tool. Set your start and end times with millisecond precision, hit "Trim," and voilà—your snippet is ready to save, share, or repurpose in seconds.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Our Online YouTube Clipper?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Zero Downloads Required:</strong> Skip the wait—trim videos directly in your browser (Chrome, Safari, or mobile).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Frame-Accurate Editing:</strong> Pinpoint exact moments down to the millisecond for surgical precision.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>No Registration Needed:</strong> Start trimming immediately—no email signups or subscriptions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>HD Quality Output:</strong> Preserve crisp 720p or 1080p resolution for flawless clips.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <span><strong>Multi-Format Support:</strong> Save your snippet as MP4, MOV, or GIF for social media, presentations, or personal archives.</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Perfect for Everyone</h3>
            <p>
              Perfect for content creators, educators, marketers, or casual viewers, this tool eliminates bloated files and streamlines your workflow. Need to highlight a product demo for a client? Extract a podcast quote for a reel? Save a workout routine segment? Our trimmer handles it all while complying with YouTube's terms of service.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Free Forever, Effortlessly Efficient</h3>
            <p>
              Why settle for clunky software or shady third-party apps? Our web-based solution is secure, lightning-fast, and works on any device. Join thousands of users who've ditched unnecessary downloads—start snipping YouTube videos like a pro today!
            </p>

            <p className="text-xl font-semibold text-blue-600 mt-8">
              Pro Tip: Bookmark the tool for instant access next time you spot a must-save moment! 🎬✨
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trim;