import React from 'react';
import { ArrowUpRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, Icon }) => {
  return (
    <div className="group bg-white p-8 md:p-10 lg:p-12 relative overflow-hidden transition-colors hover:bg-gray-50 h-full flex flex-col justify-between">
      
      {/* Icon and Content Header */}
      <div>
        <div className="mb-6 inline-block p-0">
          {/* We create a custom styled icon to match the dual-tone/sketchy feel if possible, 
              but standard clean SVG with the brand color works best for this minimalist aesthetic. */}
          <Icon strokeWidth={1.5} className="w-12 h-12 text-brand-dark mb-4" />
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed mb-8">
          {description}
        </p>
      </div>

      {/* Footer: Button and Giant Number */}
      <div className="flex items-end justify-between mt-auto relative z-10">
        <button 
          aria-label={`Learn more about ${title}`}
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 transition-all duration-300 group-hover:bg-brand-dark group-hover:border-brand-dark group-hover:text-white"
        >
          <ArrowUpRight className="w-5 h-5" />
        </button>

        {/* Large Background Number */}
        <div className="absolute right-0 bottom-[-1rem] md:bottom-[-1.5rem] pointer-events-none select-none">
          <span className="text-[7rem] md:text-[8rem] font-bold text-stroke-1 leading-none opacity-60 group-hover:text-stroke-hover transition-all duration-500">
            {id}
          </span>
        </div>
      </div>
    </div>
  );
};