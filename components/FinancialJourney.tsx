import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export const FinancialJourney: React.FC = () => {
  const points = [
    "Our mission is to empower you with the knowledge and tools you need to maximize your financial situation.",
    "We will work with you to uncover opportunities that you may not have known existed.",
    "Provide essential knowledge and resources on tax relief strategies.",
    "Equip you with tools to manage and optimize your taxes.",
    "Advocate for your right to keep more of your money."
  ];

  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Column: Venn Diagram Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#F9FAFB] rounded-[2rem] p-8 lg:p-12 h-full flex flex-col justify-center">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Maximizing Tech Professional Wellbeing</h3>
                </div>

                {/* Venn Diagram Container */}
                <div className="relative aspect-[1.1/1] w-full max-w-md mx-auto">
                    <svg viewBox="0 0 400 360" className="w-full h-full overflow-visible">
                        <defs>
                           <style>
                             {`
                               .venn-circle { fill: transparent; stroke: #374151; stroke-width: 1.5; }
                               .venn-text { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 11px; font-weight: 500; fill: #4B5563; text-anchor: middle; }
                               .venn-title { font-weight: 700; fill: #1F2937; font-size: 13px; }
                             `}
                           </style>
                           <clipPath id="circleTop">
                               <circle cx="200" cy="120" r="85" />
                           </clipPath>
                           <clipPath id="circleLeft">
                               <circle cx="145" cy="210" r="85" />
                           </clipPath>
                           <clipPath id="circleRight">
                               <circle cx="255" cy="210" r="85" />
                           </clipPath>
                        </defs>
                        
                        {/* Circles */}
                        <circle cx="200" cy="120" r="85" className="venn-circle" />
                        <circle cx="145" cy="210" r="85" className="venn-circle" />
                        <circle cx="255" cy="210" r="85" className="venn-circle" />
                        
                        {/* Center Intersection Highlight */}
                        <g clipPath="url(#circleTop)">
                             <g clipPath="url(#circleLeft)">
                               <g clipPath="url(#circleRight)">
                                 <rect x="0" y="0" width="400" height="400" fill="none" stroke="#D4A373" strokeWidth="4" />
                               </g>
                             </g>
                        </g>

                        {/* Outer Labels */}
                        {/* Top */}
                        <text x="200" y="20" className="venn-text venn-title">
                           <tspan x="200" dy="0">Financial Security &</tspan>
                           <tspan x="200" dy="16">Growth</tspan>
                        </text>

                        {/* Left */}
                        <text x="50" y="140" className="venn-text venn-title" style={{ textAnchor: 'end' }}>
                           <tspan x="60" dy="0">Company</tspan>
                           <tspan x="60" dy="16">Benefits</tspan>
                        </text>

                        {/* Right */}
                        <text x="350" y="140" className="venn-text venn-title" style={{ textAnchor: 'start' }}>
                           <tspan x="340" dy="0">Advanced</tspan>
                           <tspan x="340" dy="16">Tech Investing</tspan>
                           <tspan x="340" dy="16">& Tax</tspan>
                        </text>
                        
                        {/* Inner/Region Labels */}
                        {/* Bottom Left Area */}
                        <text x="80" y="250" className="venn-text">
                           <tspan x="80" dy="0">Work-Life</tspan>
                           <tspan x="80" dy="14">Harmony</tspan>
                        </text>

                        {/* Bottom Right Area */}
                        <text x="320" y="250" className="venn-text">
                           <tspan x="320" dy="0">Mindful</tspan>
                           <tspan x="320" dy="14">Financial</tspan>
                           <tspan x="320" dy="14">Planning</tspan>
                        </text>
                        
                        {/* Bottom Center */}
                        <text x="200" y="335" className="venn-text venn-title">
                           <tspan x="200" dy="0">Lifestyle & Wellbeing</tspan>
                           <tspan x="200" dy="16">Planning</tspan>
                        </text>

                    </svg>
                </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2">
             <span className="text-xs font-bold tracking-[0.2em] text-[#7B9591] uppercase mb-4 block">
                Our Mission
             </span>
             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10 leading-[1.15]">
                Empower you with the knowledge and tools
             </h2>
             
             <ul className="space-y-6 mb-10">
                {points.map((text, i) => (
                    <li key={i} className="flex gap-4 items-start">
                        <div className="mt-1 shrink-0">
                            <div className="w-5 h-5 rounded-full bg-[#85A09C] flex items-center justify-center">
                                <Check className="w-3 h-3 text-white stroke-[3px]" />
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-[15px] sm:text-base">
                            {text}
                        </p>
                    </li>
                ))}
             </ul>
             
             <button className="bg-[#2C4A45] text-white px-8 py-3.5 rounded-full font-bold text-xs uppercase flex items-center gap-2 hover:bg-[#1A3330] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group tracking-wide">
                Learn More 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
};