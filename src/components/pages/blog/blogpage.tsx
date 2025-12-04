"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, User, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useBlogs } from "@/hooks/pages/use-blog";
import { format } from "date-fns";
import { BlogPost } from "@/types/pages/blog";
import { stripHtml } from "@/lib/text-utils";

// Single Blog Card Component
const BlogCard = ({ blog }: { blog: BlogPost }) => {
  const cleanContent = stripHtml(blog.meta_description || blog.content);
  
  return (
    <article className="border-b border-gray-200 pb-8 mb-8 last:border-0">
      <Link href={`/blog/${blog.slug}`} className="block">
        {/* Image */}
        {blog.thumbnail_image && (
          <div className="w-full h-98 bg-gray-200 rounded-lg mb-4 overflow-hidden">
            <Image
              src={blog.thumbnail_image} 
              alt={blog.thumbnail_image_alt_description || blog.title}
              width={800}
              height={700}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Meta Info */}
        <div className="flex gap-6 text-sm text-gray-600 mb-3">
          {blog.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blog.author.first_name || blog.author.username}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{format(new Date(blog.created_at), 'dd MMM yyyy')}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors">
          {blog.title}
        </h2>

        {/* Content */}
        <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
          {cleanContent}
        </p>

        {/* Button */}
        <div className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition-colors w-fit">
          <span className="font-semibold">Learn More</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </Link>
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

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 7; // Maximum number of page buttons to show
    
    if (totalPages <= maxVisible) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  const pages = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-primary hover:bg-primary/10'
        }`}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex gap-1">
        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="w-10 h-10 flex items-center justify-center text-gray-500"
              >
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`w-10 h-10 rounded-md font-medium transition-all ${
                isActive
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-primary hover:bg-primary/10'
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// Main Blog Component
export default function BlogPage() {
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const { data, isLoading, error } = useBlogs({
    search: searchQuery || undefined,
    page: currentPage,
    page_size: blogsPerPage,
    is_published: true,
    ordering: '-created_at'
  });

  const handleSearch = () => {
    setSearchQuery(searchValue);
    setCurrentPage(1);
  };

  const totalPages = data ? Math.ceil(data.count / blogsPerPage) : 0;
  const displayedBlogs = data?.results || [];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {isLoading && (
              <p className="text-center text-gray-500 py-12">
                Loading blog posts...
              </p>
            )}

            {error && (
              <p className="text-center text-red-500 py-12">
                Failed to load blog posts. Please try again later.
              </p>
            )}

            {!isLoading && !error && displayedBlogs.length === 0 && (
              <p className="text-center text-gray-500 py-12">
                No blogs found matching your search.
              </p>
            )}

            {!isLoading && !error && displayedBlogs.length > 0 && (
              <>
                {displayedBlogs.map(blog => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
                
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
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