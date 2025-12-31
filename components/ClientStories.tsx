import React from 'react';
import { Star, Quote } from 'lucide-react';

export const ClientStories: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image with Rating */}
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                  alt="Client Success" 
                  className="w-full max-w-md mx-auto lg:max-w-none rounded-none grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Rating Badge */}
                <div className="absolute bottom-10 left-0 lg:-left-10 bg-white p-6 shadow-xl flex items-baseline gap-2 max-w-[280px]">
                   <span className="text-6xl font-bold text-brand-dark">4.7</span>
                   <div className="flex flex-col gap-1">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                           <Star key={i} className="w-4 h-4 fill-[#7B9591] text-[#7B9591]" />
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 font-medium">Customer Rating</span>
                   </div>
                </div>
             </div>
             
             {/* Decorative blob/gradient behind */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-light to-transparent rounded-full opacity-50 z-0 pointer-events-none blur-3xl" />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
             <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
                Client Stories
             </span>
             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-[1.1]">
                Achieving Financial Goals Together
             </h2>

             {/* Carousel Indicators */}
             <div className="flex gap-2 mb-10">
                <div className="w-8 h-1.5 bg-brand-dark rounded-full"></div>
                <div className="w-8 h-1.5 bg-gray-200 rounded-full"></div>
                <div className="w-8 h-1.5 bg-gray-200 rounded-full"></div>
             </div>
             
             <div className="relative">
                <Quote className="absolute -top-6 -right-6 w-32 h-32 text-gray-100 -z-10 rotate-180" />
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                   Partnering with this financial consulting team was a game-changer for our business. Their expert guidance on cash flow management and budgeting helped us optimize resources and improve profitability.
                </p>
                
                <div className="flex items-center gap-4">
                   <img 
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100" 
                      alt="Jesonal Jelins" 
                      className="w-12 h-12 rounded-full object-cover"
                   />
                   <div>
                      <h4 className="text-brand-dark font-bold text-lg">Jesonal Jelins</h4>
                      <p className="text-gray-400 text-sm">Team Captain</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};