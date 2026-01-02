import React from 'react';
import { Search, Menu, ArrowRight, Phone, Star, ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-brand-darker min-h-screen relative overflow-hidden text-white font-sans selection:bg-brand-dark selection:text-white">
      {/* Background Geometric Elements (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] border border-white/5 rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] border border-white/5 rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 max-w-[1400px] mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
           {/* Logo Icon */}
           <div className="w-5 h-5 relative">
             <ArrowUpRight className="text-white w-full h-full" strokeWidth={3} />
           </div>
           <span className="text-xl font-bold tracking-wide">TAX RELIEF SECRETS</span>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="text-white flex items-center gap-1">HOME <span className="text-[10px]">▼</span></a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">HOW WE HELP<span className="text-[10px]">▼</span></a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">WHO WE HELP<span className="text-[10px]">▼</span></a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">RESOURCES<span className="text-[10px]">▼</span></a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-1">ABOUT<span className="text-[10px]">▼</span></a>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <button className="px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-xs font-semibold tracking-wider flex items-center gap-2 group">
            GET IN TOUCH 
            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="text-white hover:opacity-80">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-white hover:opacity-80">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 pt-12 lg:pt-20 pb-20 flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 mb-16 lg:mb-0 lg:pr-12">
          <span className="block text-gray-400 text-xs font-bold tracking-[0.2em] uppercase mb-6">
            We help our clients financial lives go from great to outstanding
          </span>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8">
            <span className="text-white">Smart Strategies</span> <br />
            <span className="text-white/30">for Wealth Growth</span>
          </h1>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-12">
            Enabling your financial success, through equity, compensation planning and W-2 tax reduction
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Google Play Button */}
            <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 transition-all">
                <div className="text-sm font-bold text-white leading-none">GET IN TOUCH&nbsp;<ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></div>
            </button>

            {/* Phone Button */}
            <button className="flex items-center gap-3 bg-white hover:bg-gray-100 rounded-full px-6 py-3 transition-colors text-brand-darker">
              <div className="w-10 h-10 rounded-full bg-brand-darker flex items-center justify-center text-white">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold">+(528) 456-7592</span>
            </button>
          </div>
        </div>

        {/* Right Image/Cards Content */}
        <div className="w-full lg:w-1/2 relative h-[600px] lg:h-[700px] flex items-end justify-center lg:justify-end">
          
          {/* Main Character Image */}
          <div className="relative z-10 h-[90%] w-auto">
             <img 
               src="images/nathan-background.jpg" 
               alt="Financial Expert" 
               className="h-full w-auto object-cover object-top mask-image-b-fade rounded-b-3xl"
               style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
             />
          </div>

          {/* Floating Card 1: Success Project (Top Left) */}
          <div className="absolute top-[15%] left-0 lg:left-[5%] bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl w-64 z-20">
            <div className="flex gap-1 mb-4 text-white">
              <Star className="w-4 h-4 fill-white" />
              <Star className="w-4 h-4 fill-white" />
              <Star className="w-4 h-4 fill-white" />
              <Star className="w-4 h-4 fill-white" />
              <Star className="w-4 h-4 fill-white" />
            </div>
            <p className="text-lg">Nathan Brown</p>
            <p className="text-white text-sm font-medium leading-relaxed mb-4">
            CFP®, ChFC®, CLU®, RICP®
            </p>
            {/* Tiny Graph Decoration */}
            <div className="h-8 flex items-end gap-1 opacity-50">
              <div className="w-2 bg-white/40 h-[40%] rounded-t-sm"></div>
              <div className="w-2 bg-white/60 h-[70%] rounded-t-sm"></div>
              <div className="w-2 bg-white/80 h-[50%] rounded-t-sm"></div>
              <div className="w-2 bg-white h-[90%] rounded-t-sm"></div>
              <div className="w-2 bg-white/70 h-[60%] rounded-t-sm"></div>
            </div>
          </div>

          {/* Floating Card 3: Pie Chart (Bottom Right) */}
          <div className="absolute bottom-[10%] right-0 lg:right-[10%] bg-white p-4 rounded-2xl shadow-2xl z-30 w-56">
            <div className="flex gap-2 mb-3 justify-center text-[10px] font-medium text-gray-500">
               <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-brand-darker"></span> 401K</div>
               <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> RSU</div>
               <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-gray-200"></span> ESPP</div>
            </div>
            <div className="relative w-32 h-32 mx-auto">
               {/* SVG Pie Chart */}
               <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                 <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E5E7EB" strokeWidth="20" /> {/* Background Gray */}
                 <circle cx="50" cy="50" r="40" fill="transparent" stroke="#9CA3AF" strokeWidth="20" strokeDasharray="60 251.2" strokeDashoffset="0" /> {/* Medium Gray Segment */}
                 <circle cx="50" cy="50" r="40" fill="transparent" stroke="#1A3330" strokeWidth="20" strokeDasharray="80 251.2" strokeDashoffset="-60" /> {/* Dark Green Segment */}
               </svg>
               {/* Center Hole for Donut */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-white rounded-full"></div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};