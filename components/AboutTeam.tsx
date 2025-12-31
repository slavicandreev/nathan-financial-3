import React from 'react';
import { Play, Phone, TrendingUp } from 'lucide-react';

export const AboutTeam: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] lg:h-[700px]">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200" 
                alt="Financial Consulting Team" 
                className="w-full h-full object-cover"
              />
              {/* Play Button */}
              <button className="absolute top-1/2 left-8 md:left-12 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-brand-dark rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-xl group z-10">
                <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 pt-4">
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-[1.15]">
              Our Financial Consulting Team
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-12">
              Our team works closely with clients to develop efficient budgeting, cash flow management, and wealth-building plans. We prioritize transparency, integrity, and client-centric approaches to ensure the best financial outcomes.
            </p>

            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
              
              {/* Sub-column 1: Sales Increase & Contact */}
              <div className="flex-1 flex flex-col justify-between py-2">
                <div className="mb-8">
                   {/* Icon */}
                   <div className="mb-4 text-brand-dark">
                      <TrendingUp className="w-12 h-12" strokeWidth={1.5} />
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900 mb-3">Sales Increase</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">
                     Targeted marketing campaigns, both online and offline, can attract potential clients.
                   </p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center text-white transition-transform group-hover:scale-110 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-brand-dark transition-colors whitespace-nowrap">
                      +(528) 456-7592
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-column 2: Stats Card */}
              <div className="flex-1 w-full">
                <div className="bg-gray-50 rounded-2xl p-8 h-full min-w-[280px]">
                  <h3 className="text-xl font-bold text-gray-900 mb-8">Financial Strategy</h3>
                  <div className="space-y-8">
                    <StatItem percent={88} label="VOLUNTEERING" />
                    <StatItem percent={75} label="10 YEARS OF EXPERIENCE" />
                    <StatItem percent={95} label="SUPPLEMENTAL SKILLS" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatItem = ({ percent, label }: { percent: number, label: string }) => (
  <div className="flex gap-4 items-start">
    <div className="shrink-0 w-12 h-12 rounded-full bg-[#85A09C] text-white flex items-center justify-center text-xs font-bold">
      {percent}%
    </div>
    <div className="grow pt-1">
      <div className="text-[10px] font-bold tracking-wider text-brand-dark uppercase mb-2">
        {label}
      </div>
      <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#85A09C]" 
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  </div>
);