import React from 'react';
import { Star, Quote } from 'lucide-react';

export const ClientStories: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden relative">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#E8F0EF] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-16 lg:gap-24">
          
          {/* Left Column: Image & Stats */}
          <div className="w-full lg:w-[35%] relative">
             <div className="relative">
                {/* Main Image */}
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400" 
                  alt="Client Working" 
                  className="w-full h-auto object-cover rounded-none mask-image-b-fade" 
                  style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                />
                
                {/* Rating Block Overlay */}
                <div className="relative lg:absolute lg:bottom-0 lg:left-0 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white max-w-xs mt-[-40px] lg:mt-0 lg:translate-y-1/4">
                    <div className="flex items-end gap-3 mb-4">
                        <span className="text-6xl font-bold text-[#2C4A45] leading-[0.8]">4.7</span>
                        <div className="flex gap-1 pb-1">
                           {[1, 2, 3, 4, 5].map((i) => (
                              <Star key={i} className="w-4 h-4 fill-[#7B9591] text-[#7B9591]" />
                           ))}
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                       Client Success: Highlight how your firm helped clients
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed">
                       Full range of consultancy & training for data consultation strategic ways for business.
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
             
             <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-gray-100 pb-10 mb-10">
                <h2 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-[1.1] max-w-md">
                   FAANG Vice President Saves $320,000+ in Taxes on RSUs and ESPP
                </h2>

                {/* Carousel Indicators */}
                <div className="flex gap-2 mb-2 lg:mb-4">
                   <div className="w-8 h-1 bg-[#5D7E79] rounded-full"></div>
                   <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
                   <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
                </div>
             </div>
             
             <div className="relative">
                {/* Outline Quote Icon */}
                <div className="absolute top-0 right-0 opacity-20">
                    <Quote className="w-32 h-32 text-gray-400 rotate-180 fill-transparent stroke-[1px]" />
                </div>
                
                <p className="text-gray-500 text-lg leading-relaxed mb-10 relative z-10 max-w-xl">
                   Partnering with Nathan was a game-changer. His expert guidance on cash flow management and budgeting helped us optimize resources and improve profitability.
                </p>
                
                <div className="flex items-center gap-4">
                   <div>
                      <h4 className="text-[#2C4A45] font-bold text-lg">Jennifer Fox</h4>
                      <p className="text-gray-400 text-sm">VP, Google</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};