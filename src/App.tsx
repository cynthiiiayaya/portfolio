import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import CaseStudyPage from './components/CaseStudyPage';
import StorytellingCaseStudy from './components/StorytellingCaseStudy';
import NOVIHealthCaseStudy from './components/NOVIHealthCaseStudy';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-warmGray-50 text-warmGray-800 font-sans">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study/1" element={<CaseStudyPage />} />
          <Route path="/case-study/2" element={<StorytellingCaseStudy />} />
          <Route path="/case-study/3" element={<NOVIHealthCaseStudy />} />
          <Route path="/case-study/:id" element={<CaseStudyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;