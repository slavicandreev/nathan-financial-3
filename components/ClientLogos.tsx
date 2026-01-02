import React from 'react';

export const ClientLogos: React.FC = () => {
  const logos = [
    { name: 'Intel', url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Intel_logo_2023.svg' },
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
    { name: 'NVIDIA', url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
    { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  ];

  return (
    <section className="bg-[#E8F0EF] py-10 border-b border-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <p className="text-center text-[10px] font-bold tracking-[0.2em] text-[#7B9591] uppercase mb-8">
            Serving clients from:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-24">
          {logos.map((logo) => (
            <div key={logo.name} className="group flex justify-center">
                <img 
                  src={logo.url} 
                  alt={logo.name} 
                  className="h-5 md:h-6 lg:h-7 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mix-blend-multiply"
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};