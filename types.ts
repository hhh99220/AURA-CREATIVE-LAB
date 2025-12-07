export enum ServiceCategory {
  STREAMER = 'STREAMER',
  BRAND = 'BRAND'
}

export interface PriceItem {
  label: string;
  price: string;
  detail?: string;
}

export interface PricingSection {
  title: string;
  items: PriceItem[];
}

export interface BrandService {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}