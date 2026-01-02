import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Send } from 'lucide-react';

export const ContactUs: React.FC = () => {
  return (
    <section className="bg-white py-20 lg:py-32 border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-2/3">
            <span className="text-xs font-bold tracking-[0.2em] text-[#7B9591] uppercase mb-4 block">
              Get in Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Let's Start the Conversation
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all text-gray-700 font-medium placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all text-gray-700 font-medium placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-brand-dark focus:ring-1 focus:ring-brand-dark transition-all text-gray-700 font-medium placeholder:text-gray-400 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-xs uppercase flex items-center gap-2 hover:bg-brand-darker transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group tracking-wide mt-4">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="w-full lg:w-1/3 pt-4 lg:pt-16">
            <div className="bg-[#F9FAFB] rounded-[2rem] p-8 lg:p-10 border border-gray-100">
              <div className="space-y-10">
                
                {/* Email */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center shrink-0 shadow-lg shadow-brand-dark/20">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Quick Contact:</h4>
                    <a href="mailto:nathan.brown@farther.com" className="text-gray-600 font-medium hover:text-brand-dark transition-colors break-all">
                      nathan.brown@farther.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center shrink-0 shadow-lg shadow-brand-dark/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Phone Number:</h4>
                    <a href="tel:5038868813" className="text-gray-600 font-medium hover:text-brand-dark transition-colors">
                      (503) 886-8813
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 rounded-xl bg-brand-dark flex items-center justify-center shrink-0 shadow-lg shadow-brand-dark/20">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Address:</h4>
                    <p className="text-gray-600 font-medium">
                      Portland, Oregon Metropolitan Area
                    </p>
                  </div>
                </div>

                {/* Socials */}
                <div className="pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us:</h4>
                  <div className="flex gap-3">
                    <SocialButton icon={Facebook} />
                    <SocialButton icon={Twitter} />
                    <SocialButton icon={Instagram} />
                    {/* Simple generic icon for generic link/Tumblr placeholder */}
                    <button className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300">
                       <span className="font-serif font-bold text-lg">t</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const SocialButton = ({ icon: Icon }: { icon: React.ElementType }) => (
  <button className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center text-gray-600 hover:border-brand-dark hover:bg-brand-dark hover:text-white transition-all duration-300 group">
    <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
  </button>
);