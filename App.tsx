import React from 'react';
import { FinancialServices } from './components/FinancialServices';
import { Hero } from './components/Hero';
import { AboutTeam } from './components/AboutTeam';
import { ClientStories } from './components/ClientStories';
import { BlogSection } from './components/BlogSection';
import { BookPromo } from './components/BookPromo';
import { FinancialJourney } from './components/FinancialJourney';
import { ClientLogos } from './components/ClientLogos';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <BookPromo />
      <ClientLogos />
      <div className="p-4 lg:p-12 flex justify-center bg-gray-50">
        <FinancialServices />
      </div>
      <FinancialJourney />
      <ClientStories />
      <BlogSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;