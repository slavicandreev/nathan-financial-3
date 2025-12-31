import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ExpertiseCTA: React.FC = () => {
  return (
    <section className="bg-brand-darker py-20 lg:py-0 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 h-full">
        <div className="flex flex-col lg:flex-row items-center h-full">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 py-12 lg:py-32 relative z-10">
             <span className="text-xs font-bold tracking-[0.2em] text-white/60 uppercase mb-6 block">
                Expertise You Can Trust
             </span>
             
             <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                Innovative & Secure Solutions for Your Future Growth
                <span className="inline-block ml-4 text-[#7B9591] text-4xl align-top">✦</span>
             </h2>
             
             <p className="text-white/60 text-lg mb-12 max-w-lg">
                We collaborate, we think, we create outside the box.
             </p>
             
             <button className="bg-[#7B9591] hover:bg-[#6A8480] text-white px-8 py-4 rounded-full font-bold tracking-wide text-xs uppercase flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Learn More 
                <ArrowRight className="w-4 h-4" />
             </button>

             {/* Carousel Dots */}
             <div className="flex gap-3 mt-20">
                <div className="w-3 h-3 rounded-full border border-white flex items-center justify-center">
                   <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
                <div className="w-3 h-3 rounded-full bg-white/20"></div>
             </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-full relative lg:absolute lg:right-0 lg:top-0 lg:h-full flex items-end justify-center lg:justify-end">
             {/* Circular Background Element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:translate-y-0 lg:top-10 lg:left-10 w-[500px] h-[500px] bg-brand-dark rounded-full opacity-50 blur-sm pointer-events-none" />
             
             <img 
               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" 
               alt="Expert Consultant" 
               className="relative z-10 w-auto h-[500px] lg:h-[90%] object-contain object-bottom"
             />
             
             {/* Decorative Lines/Doodles */}
             <div className="absolute bottom-10 right-10 z-0 opacity-20">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M10 190L190 10M10 10L190 190" stroke="white" strokeWidth="2" />
                   {/* Simplified abstract doodle */}
                   <path d="M50 150 C 50 150, 20 100, 50 50 C 80 0, 150 50, 150 150" stroke="white" strokeWidth="1" fill="none"/>
                </svg>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};