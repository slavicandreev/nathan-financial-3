import React from 'react';
import { FinancialServices } from './components/FinancialServices';
import { Hero } from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <div className="p-4 lg:p-12 flex justify-center">
        <FinancialServices />
      </div>
    </div>
  );
};

export default App;