export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface BlogPost {
  id: number;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}