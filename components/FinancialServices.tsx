import React from 'react';
import { ArrowUpRight, ArrowRight, BarChart3, TrendingUp, FileText, Star } from 'lucide-react';
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
          <div className="bg-gray-200 rounded-3xl overflow-hidden border border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-[1px]">
            {/* Standard Service Cards */}
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                Icon={service.Icon}
              />
            ))}

            {/* Special Trust Score Card */}
            <div className="bg-brand-dark p-8 md:p-10 lg:p-12 relative overflow-hidden flex flex-col justify-between group">
               {/* Background Arrow Decoration */}
               <ArrowUpRight className="absolute bottom-[-10%] right-[-10%] w-64 h-64 text-white/5 group-hover:scale-110 transition-transform duration-500" />
               
               <div>
                 <div className="flex gap-1 mb-6">
                   {[1, 2, 3, 4].map((i) => (
                     <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                   ))}
                   <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 clip-half" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }} />
                 </div>
                 
                 <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                   Trust Score 4.7 (Based on 1,200 reviews)
                 </h3>
               </div>

               <div className="relative z-10 mt-8">
                 <button className="flex items-center gap-2 bg-[#7B9591] text-white px-6 py-3 rounded-full hover:bg-[#6A8480] transition-colors text-xs font-bold tracking-wider uppercase">
                   View Services
                   <ArrowRight className="w-3 h-3" />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};