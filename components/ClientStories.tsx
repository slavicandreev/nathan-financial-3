import React from 'react';
import { Star, Quote } from 'lucide-react';

export const ClientStories: React.FC = () => {
  return (
    <section className="bg-brand-darker py-20 lg:py-32 overflow-hidden relative">
      {/* Background Gradient Effect - Adjusted for dark theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-dark rounded-full blur-3xl opacity-20 pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-24">
          
          {/* Left Column: Image & Stats */}
          <div className="w-full lg:w-[35%] relative">
             <div className="relative">
                {/* Main Image */}
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400" 
                  alt="Client Working" 
                  className="w-full h-auto object-cover rounded-none mask-image-b-fade opacity-90" 
                  style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                />
                
                {/* Rating Block Overlay - Dark Glassmorphism */}
                <div className="relative lg:absolute lg:bottom-0 lg:left-0 bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 max-w-xs mt-[-40px] lg:mt-0 lg:translate-y-1/4">
                    <div className="flex items-end gap-3 mb-4">
                        <div className="flex gap-1 pb-1">
                           {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className="w-4 h-4 fill-[#7B9591] text-[#7B9591]" />
                           ))}
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                       Jennifer L.
                    </h3>
                    
                    <p className="text-white/60 text-sm leading-relaxed">
                       VP, Google
                    </p>
                </div>
             </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-[60%] pb-0 lg:pb-12">
             <div className="mb-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#7B9591] uppercase">
                    Client Stories
                </span>
             </div>
             
             <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-10 mb-10">
                <h2 className="text-4xl lg:text-4xl font-bold text-white leading-[1.1] max-w-md">
                   FAANG Vice President Saves $32,000+ in Taxes on RSUs and ESPP
                </h2>

                {/* Carousel Indicators */}
                <div className="flex gap-2 mb-2 lg:mb-4">
                   <div className="w-8 h-1 bg-[#7B9591] rounded-full"></div>
                   <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                   <div className="w-8 h-1 bg-white/20 rounded-full"></div>
                </div>
             </div>
             
             <div className="relative">
                {/* Outline Quote Icon */}
                <div className="absolute top-0 right-0 opacity-10">
                    <Quote className="w-32 h-32 text-white rotate-180 fill-transparent stroke-[1px]" />
                </div>
                
                <p className="text-white/70 text-lg leading-relaxed mb-10 relative z-10 max-w-xl">
                   A $32k Win When a Google VP came to us, she was resigned to the heavy tax drag on her RSU income. We saw it differently. By coordinating her vesting dates with a customized tax-offset strategy—leveraging portfolio loss harvesting and optimizing her itemized deductions—we reduced her liability significantly. The outcome? $32,000 in direct tax savings that she kept in her portfolio rather than sending to the IRS.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};