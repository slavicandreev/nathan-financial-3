import React from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Star } from 'lucide-react';

export const BookPromo: React.FC = () => {
  return (
    <section className="bg-[#E8F0EF] py-20 lg:py-32 overflow-hidden relative border-b border-white">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/40 -skew-x-12 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: 3D Book Cover Mockup */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end perspective-[1000px] group">
                <div className="relative w-[280px] md:w-[320px] aspect-[1/1.5] rounded-r-xl rounded-l-sm bg-brand-dark shadow-2xl transition-all duration-500 transform rotate-y-[-15deg] group-hover:rotate-y-0 group-hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
                    
                    {/* Spine */}
                    <div className="absolute top-0 left-0 w-8 h-full bg-[#1A3330] origin-left transform rotate-y-90 translate-x-[-100%] rounded-l-sm flex items-center justify-center overflow-hidden">
                       <span className="text-white/40 text-xs font-bold tracking-widest rotate-90 whitespace-nowrap">TAX RELIEF SECRETS</span>
                    </div>

                    {/* Cover Content */}
                    <div className="absolute inset-0 flex flex-col p-8 border-r-[1px] border-white/10 bg-gradient-to-br from-brand-dark to-brand-darker">
                        <div className="flex justify-between items-start mb-8">
                            <div className="text-[#7B9591] text-xs font-bold tracking-[0.2em] uppercase">Best Seller</div>
                            <BookOpen className="text-white/20 w-6 h-6" />
                        </div>
                        
                        <div className="mt-auto mb-12">
                            <h3 className="text-4xl font-serif text-white leading-none mb-2">Tax Relief</h3>
                            <h3 className="text-4xl font-serif text-[#7B9591] leading-none mb-6">Secrets</h3>
                            <div className="w-12 h-0.5 bg-white/30 mb-6" />
                            <p className="text-white/70 text-sm font-medium leading-relaxed">
                                The definitive guide to minimizing liability and maximizing your wealth.
                            </p>
                        </div>
                        
                        <div className="mt-auto text-center">
                             <div className="text-white/40 text-[10px] uppercase tracking-widest">FinXpert Press</div>
                        </div>
                    </div>

                    {/* Pages (Thickness) */}
                    <div className="absolute top-1 bottom-1 -right-4 w-4 bg-gray-100 shadow-inner transform -skew-y-1 origin-left flex flex-col justify-center border-l border-gray-200">
                        {[...Array(5)].map((_, i) => (
                             <div key={i} className="w-full h-[1px] bg-gray-300 my-[1px]" />
                        ))}
                    </div>
                </div>

                {/* Shadow underneath */}
                <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-3/4 h-8 bg-black/20 blur-xl rounded-[100%]" />
            </div>

            {/* Right: Content & Form */}
            <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-dark text-xs font-bold tracking-wider uppercase mb-8 shadow-sm border border-brand-dark/5">
                    <Star className="w-3 h-3 fill-brand-dark" />
                    Exclusive Pre-order
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">
                    Unlock the Strategies to <br/>
                    <span className="text-brand-dark">Save Thousands.</span>
                </h2>
                
                <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
                    Stop overpaying taxes. In this comprehensive guide, our top financial experts reveal the legal frameworks and strategies used by the wealthy to protect their assets.
                </p>

                <ul className="space-y-4 mb-10">
                    {[
                        'Legal loopholes explained in simple terms', 
                        'Step-by-step guide to audit protection', 
                        'Bonus: Free Digital Wealth Tracker template'
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-700 font-medium group">
                            <div className="w-6 h-6 rounded-full bg-[#7B9591]/20 flex items-center justify-center group-hover:bg-[#7B9591] transition-colors">
                                <CheckCircle2 className="w-4 h-4 text-brand-dark group-hover:text-white transition-colors" />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-dark/5 max-w-md border border-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-dark to-[#7B9591]" />
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Get Your Copy</h4>
                    <p className="text-gray-400 text-sm mb-6">Pre-order now for early access + bonuses.</p>
                    
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <input 
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all text-sm placeholder:text-gray-400 font-medium"
                            />
                        </div>
                        <div>
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all text-sm placeholder:text-gray-400 font-medium"
                            />
                        </div>
                        <button className="w-full bg-brand-dark text-white font-bold py-4 rounded-xl hover:bg-brand-darker transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-dark/20 hover:shadow-brand-dark/30 hover:-translate-y-0.5">
                            Pre-order Now
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                    
                    <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                        <span>🔒 Secure Payment</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>Free Shipping</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};