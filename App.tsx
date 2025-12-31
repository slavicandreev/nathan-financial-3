import React from 'react';
import { FinancialServices } from './components/FinancialServices';
import { Hero } from './components/Hero';
import { AboutTeam } from './components/AboutTeam';
import { ExpertiseCTA } from './components/ExpertiseCTA';
import { ClientStories } from './components/ClientStories';
import { BlogSection } from './components/BlogSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="p-4 lg:p-12 flex justify-center bg-gray-50">
        <FinancialServices />
      </div>
      <ExpertiseCTA />
      <ClientStories />
      <AboutTeam />
      <BlogSection />
    </div>
  );
};

export default App;