"use client";
import React, { useState } from "react";
import { Search, User, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

// Sample blog data
const sampleBlogs = [
  {
    id: 1,
    title: "Getting Started with React",
    content: "Learn the basics of React and how to build modern web applications with components, hooks, and state management.",
    author: "John Doe",
    date: "2024-12-01",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Web Design Best Practices",
    content: "Discover essential web design principles that will help you create beautiful and user-friendly websites.",
    author: "Jane Smith",
    date: "2024-11-28",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Understanding JavaScript",
    content: "Deep dive into JavaScript fundamentals including closures, promises, and async/await patterns.",
    author: "Mike Johnson",
    date: "2024-11-25",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop"
  }
];

// Single Blog Card Component
const BlogCard = ({ blog }: { blog: typeof sampleBlogs[0] }) => {
  return (
    <article className="border-b border-gray-200 pb-8 mb-8 last:border-0">
      {/* Image */}
      <div className="w-full h-98 bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <Image
          src={blog.image} 
          alt={blog.title}
          width={800}
          height={700}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Meta Info */}
      <div className="flex gap-6 text-sm text-gray-600 mb-3">
        <div className="flex items-center gap-2">
          <User className="w-4 h-4" />
          <span>{blog.author}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span>{blog.date}</span>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        {blog.title}
      </h2>

      {/* Content */}
      <p className="text-gray-600 mb-4 leading-relaxed">
        {blog.content}
      </p>

      {/* Button */}
      <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors">
        <span className="font-semibold">Learn More</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </article>
  );
};

// Search Sidebar Component
const SearchSidebar = ({ searchValue, onSearchChange, onSearch }: { searchValue: string, onSearchChange: (value: string) => void, onSearch: () => void }) => {
  return (
    <div className="w-full md:w-72">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onSearch()}
          className="w-full px-5 py-3 pr-12 border border-gray-300 rounded-full outline-none focus:border-primary"
        />
        <button
          onClick={onSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
        >
          <Search className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number, totalPages: number, onPageChange: (page: number) => void }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex gap-3 mt-8">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded border font-bold ${
            page === currentPage
              ? 'border-primary text-primary bg-primary'
              : 'border-gray-300 text-gray-700 bg-white hover:border-primary'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

// Main Blog Component
export default function BlogPage() {
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  // Filter blogs based on search
  const filteredBlogs = sampleBlogs.filter(blog =>
    searchQuery === "" || 
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const displayedBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  const handleSearch = () => {
    setSearchQuery(searchValue);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {displayedBlogs.map(blog => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
            
            {displayedBlogs.length === 0 && (
              <p className="text-center text-gray-500 py-12">
                No blogs found matching your search.
              </p>
            )}

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Sidebar */}
          <SearchSidebar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            onSearch={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}