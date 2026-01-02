import React from 'react';
import { User } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
}

export const BlogSection: React.FC = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "Finance Budgeting Success Step-by-Step Guide",
      date: "July 4, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 2,
      title: "Valuation: How Much Is Your Business Worth?",
      date: "July 4, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600"
    },
    {
      id: 3,
      title: "Analyze Cash Flow & Boost Your Business Growth",
      date: "July 4, 2024",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4 block">
              Our Blog
           </span>
           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Finance Insights, Updates<br />and Trends
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {posts.map((post) => (
             <div key={post.id} className="bg-white rounded-3xl p-4 hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
                <div className="rounded-2xl overflow-hidden h-64 mb-6 relative">
                   <img 
                     src={post.image} 
                     alt={post.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                </div>
                
                <div className="px-2 pb-4">
                   <h3 className="text-xl font-bold text-gray-900 mb-6 leading-snug group-hover:text-brand-dark transition-colors">
                      {post.title}
                   </h3>
                   
                   <div className="flex items-center justify-between text-xs text-gray-400 font-medium border-t border-gray-100 pt-6">
                      <div className="flex items-center gap-2">
                         <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="w-3 h-3 text-gray-500" />
                         </div>
                         <span className="uppercase tracking-wider">{post.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-[#7B9591]"></div>
                         <span className="uppercase tracking-wider">{post.date}</span>
                      </div>
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};