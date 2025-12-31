import React from 'react';
import { ArrowUpRight, ArrowRight, BarChart3, TrendingUp, FileText, Landmark } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const FinancialServices: React.FC = () => {
  const services = [
    {
      id: "01",
      title: "Financial Planning",
      description: "It involves assessing your current financial situation, setting realistic objectives, and creating a roadmap.",
      Icon: BarChart3,
    },
    {
      id: "02",
      title: "Investment Advisory",
      description: "Regular monitoring and adjustments ensure investments remain aligned with changing goals and market trends.",
      Icon: TrendingUp,
    },
    {
      id: "03",
      title: "Tax Planning",
      description: "Proper tax planning can help individuals and businesses reduce taxable income, defer taxes, and optimize tax-saving.",
      Icon: FileText,
    },
    {
      id: "04",
      title: "Corporate Finance",
      description: "Financial analysis and forecasting help in making informed strategic decisions. Managing working capital efficiently.",
      Icon: Landmark,
    },
  ];

  return (
    <section className="max-w-[1400px] w-full mx-auto bg-white lg:bg-transparent">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Content Section */}
        <div className="lg:w-[35%] lg:sticky lg:top-12 pt-8 lg:pt-12 px-4 lg:px-0">
          <span className="text-sm tracking-widest font-semibold text-gray-400 uppercase mb-4 block">
            Our Services
          </span>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] mb-8">
            Comprehensive Financial Planning and Analysis
          </h1>
          
          <button className="group relative inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-3.5 rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
            <span className="text-xs font-bold tracking-wide uppercase">Learn More</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Grid Section */}
        <div className="lg:w-[65%] w-full">
          {/* 
            Grid Container with Border Logic
            We use a background color on the container and gap-px to create the internal borders 
            while keeping the cells white. This is cleaner than managing individual borders.
          */}
          <div className="bg-gray-200 rounded-3xl overflow-hidden border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-[1px]">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};