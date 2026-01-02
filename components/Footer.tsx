import React from 'react';
import { ArrowUpRight, Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               <div className="w-5 h-5 relative">
                 <ArrowUpRight className="text-white w-full h-full" strokeWidth={3} />
               </div>
               <span className="text-xl font-bold tracking-wide">TAX RELIEF SECRETS</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-4">
              Empowering tech professionals and executives with strategic tax planning, wealth management, and financial freedom.
            </p>
            <div className="flex gap-4">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Linkedin} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Client Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Financial Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tax Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estate Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RSU & Stock Options</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to our newsletter for the latest tax strategies and financial insights.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm text-white placeholder:text-gray-500 outline-none focus:border-white/30 focus:bg-white/10 transition-all pr-12"
              />
              <button className="absolute right-1.5 top-1.5 w-9 h-9 bg-white text-brand-darker rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© 2024 Tax Relief Secrets. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ Icon }: { Icon: any }) => (
  <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-brand-darker transition-all">
    <Icon className="w-4 h-4" />
  </a>
);