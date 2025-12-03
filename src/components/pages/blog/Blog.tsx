import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const Blog: React.FC = () => {
  const posts = [
    {
      id: 1,
      title: "Choosing the Right Course & Country",
      excerpt: "Selecting the right course and country is the most...",
      date: "30 Nov 2025",
      author: "By Admin"
    },
    {
      id: 2,
      title: "Top Scholarships Available for International Students",
      excerpt: "Many students believe studying abroad is...",
      date: "30 Nov 2025",
      author: "By Admin"
    },
    {
      id: 3,
      title: "Step-by-Step Guide to Applying for an International",
      excerpt: "The application process for studying abroad may look...",
      date: "30 Nov 2025",
      author: "By Admin"
    },
    {
      id: 4,
      title: "Why Studying Abroad Can Transform Your Future",
      excerpt: "Studying abroad is one of the most life-changing...",
      date: "30 Nov 2025",
      author: "By Admin"
    }
  ];

  return (
    <section className="py-20 bg-white" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Blog Posts</h2>
        <p className="text-gray-500 mb-12">Stay updated with our newest articles and insights.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {posts.map((post) => (
                <Card key={post.id} className="text-left group cursor-pointer border-none shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 rounded-t-2xl overflow-hidden">
                         <Image
                            src={`https://picsum.photos/400/300?random=${post.id + 50}`} 
                            alt={post.title} 
                            width={400}
                            height={300}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                         />
                    </div>
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                            <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                                <Calendar size={12}/> {post.date}
                            </Badge>
                            <Badge variant="secondary" className="flex items-center gap-1 text-xs">
                                <User size={12}/> {post.author}
                            </Badge>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                            {post.excerpt}
                        </p>
                        <Button variant="ghost" className="text-sm font-bold p-0 h-auto hover:bg-transparent">
                            Read More <ArrowRight size={14} className="ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;