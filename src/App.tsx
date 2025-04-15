import React, { useState } from 'react';
import {
  Globe2,
  ChevronDown,
  CheckCircle2,
  Shield,
  Zap,
  Clock,
  Settings2,
  HelpCircle,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Scissors
} from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Trim from './pages/Trim';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' },
  { code: 'de', name: 'Deutsch' },
  { code: 'fr', name: 'Français' },
  { code: 'ru', name: 'Русский' }
];

function App() {
  const [currentLang, setCurrentLang] = useState('en');

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/" className="flex items-center">
                <img src="/logo.svg" alt="YT2MP4" className="h-8 w-8" />
                <span className="ml-2 text-xl font-semibold">YT2MP4</span>
              </Link>
              <div className="hidden sm:flex space-x-4">
                <Link to="/" className="text-gray-600 hover:text-gray-900">Convert</Link>
                <Link to="/trim" className="text-gray-600 hover:text-gray-900">Trim</Link>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-600">
                  <Globe2 className="h-5 w-5" />
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trim" element={<Trim />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">About</h3>
                <p className="text-gray-400">
                  Professional YouTube to MP4 converter service by AYun.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <a href="mailto:liuqi88048@gmail.com" className="text-gray-400 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Us
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                  <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                  <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Legal</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Terms of Service</li>
                  <li>Privacy Policy</li>
                  <li>Copyright © 2024 AYun</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;