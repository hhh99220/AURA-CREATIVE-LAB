import { PricingSection, BrandService, ProcessStep, Testimonial, FAQItem } from './types';
import { Palette, Monitor, Video, Code, Box, Layers, User, Gamepad2 } from 'lucide-react';

export const PORTFOLIO_LINK = "https://www.behance.net/hamzajutt4144";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We start by understanding your brand's core values, target audience, and specific goals through a detailed consultation."
  },
  {
    number: "02",
    title: "Strategy & Concept",
    description: "Our team develops a visual strategy and creates initial concepts that align with your vision and market trends."
  },
  {
    number: "03",
    title: "Design & Refine",
    description: "We bring the concepts to life, iterating based on your feedback to ensure every pixel is perfect and functional."
  },
  {
    number: "04",
    title: "Launch & Delivery",
    description: "Final assets are packaged in all necessary formats, ready for deployment across your platforms."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Alex Rivera",
    role: "CEO, TechFlow Inc.",
    content: "Aura Creative Lab completely revitalized our corporate identity. The new web design increased our conversion rate by 40% in the first month.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Content Creator",
    content: "The custom VTuber model they built is incredible. The rigging is smooth, and the art style is exactly what I wanted. Highly recommended!",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Marketing Director",
    content: "Professional, timely, and incredibly creative. The video editing for our ad campaign was top-tier. A true partner in design.",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    question: " What is your typical turnaround time?",
    answer: "Turnaround times vary by project complexity. Logos typically take 3-5 days, while full branding packages or websites may take 2-4 weeks. We provide a specific timeline in our initial quote."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes! We include 2-3 rounds of revisions in most packages to ensure the final result aligns perfectly with your vision."
  },
  {
    question: "What file formats will I receive?",
    answer: "For branding, you receive AI, EPS, PNG, and JPG files. For web, we deploy live sites and provide source code. For video, high-bitrate MP4s and project files if requested."
  },
  {
    question: "Do you require a deposit?",
    answer: "Yes, we typically require a 50% deposit to secure your slot in our schedule, with the remaining balance due upon project completion."
  }
];

// Re-using this for the services section if needed, but PRICING_DATA below is the main source for the Pricing Component
export const STREAMER_PRICING: PricingSection[] = [
  {
    title: "Identity & Logos",
    items: [
      { label: "Your Face Logo (Full Body)", price: "$50", detail: "Hand drawn art style" },
      { label: "Your Face Logo (Bust Up)", price: "$40", detail: "Hand drawn art style" },
      { label: "Character Logo (Full Body)", price: "$50", detail: "Hand drawn art style" },
      { label: "Character Logo (Bust Up)", price: "$40", detail: "Hand drawn art style" },
      { label: "Custom Logo Requirements", price: "$10-100", detail: "Based on complexity" },
    ]
  },
  {
    title: "VTuber Models",
    items: [
      { label: "Full Body (Rig Ready)", price: "$60" },
      { label: "Bust Up (Rig Ready)", price: "$50" },
      { label: "Full Body (Rigged)", price: "$150" },
      { label: "Bust Up (Rigged)", price: "$120" },
    ]
  },
  {
    title: "Channel Assets",
    items: [
      { label: "Twitter & Twitch Banner", price: "$15-100", detail: "Still or Animated" },
      { label: "Still Emote", price: "$10", detail: "Per Emote" },
      { label: "Animated Emote", price: "$15", detail: "Per Emote" },
      { label: "Sub Badges (3)", price: "$10" },
      { label: "Sub Badges (6)", price: "$15" },
      { label: "Sub Badges (9)", price: "$20" },
      { label: "Sub Badges (12)", price: "$25" },
      { label: "Panels", price: "$5", detail: "Per Panel" },
    ]
  },
  {
    title: "Stream Overlays (Still)",
    items: [
      { label: "Twitch Alerts", price: "$3", detail: "Per Alert" },
      { label: "Screens", price: "$5", detail: "Per Screen" },
      { label: "Overlays", price: "$5", detail: "Per Overlay" },
      { label: "Webcam/Chat Overlay", price: "$5", detail: "Each" },
      { label: "Full Package", price: "$40", detail: "4 Screens, 2 Overlays, Cam, Chat, 5 Alerts" },
    ]
  },
  {
    title: "Stream Overlays (Animated)",
    items: [
      { label: "Twitch Alerts", price: "$5", detail: "Per Alert" },
      { label: "Screens", price: "$10", detail: "Per Screen" },
      { label: "Overlays", price: "$10", detail: "Per Overlay" },
      { label: "Webcam/Chat Overlay", price: "$10", detail: "Each" },
      { label: "Full Package", price: "$100", detail: "4 Screens, 2 Overlays, Cam, Chat, 5 Alerts" },
    ]
  }
];

export const BRAND_SERVICES: BrandService[] = [
  {
    title: "Brand Identity",
    description: "Complete visual identity creation to help your business stand out.",
    icon: "Palette",
    features: ["Logo Design", "Typography Systems", "Color Palettes", "Brand Guidelines"]
  },
  {
    title: "UI/UX Design",
    description: "User-centric interface design for websites and mobile applications.",
    icon: "Monitor",
    features: ["Wireframing", "Prototyping", "Mobile App Design", "Web Interfaces"]
  },
  {
    title: "Video Production",
    description: "High-quality editing for social media and corporate needs.",
    icon: "Video",
    features: ["Reels & TikToks", "YouTube Editing", "Motion Graphics", "Promotional Ads"]
  },
  {
    title: "Web Development",
    description: "Full-stack development solutions provided by my expert team.",
    icon: "Code",
    features: ["Custom Websites", "E-commerce", "Landing Pages", "Performance Optimization"]
  }
];

// --- COMPREHENSIVE PRICING DATA ---

export const PRICING_DATA = {
  branding: {
    label: "Logo & Branding",
    subcategories: [
      {
        title: "Logo Design",
        tiers: [
          {
            name: "Starter Logo",
            price: "$75",
            description: "Base Rate for 1 Concept",
            features: ["1x Concept", "Unlimited Revisions", "Color/B&W/Gray Versions", "PSD, PDF, AI, JPEG, PNG"]
          },
          {
            name: "Professional Logo",
            price: "$150",
            description: "Base + 1 Additional Concept",
            features: ["2x Concepts", "Unlimited Revisions", "Color/B&W/Gray Versions", "Full Source Files"],
            highlight: true
          },
          {
            name: "Business Logo",
            price: "$225",
            description: "Professional + Branding Assets",
            features: ["3x Concepts", "Unlimited Revisions", "Stationery Design", "Social Media Kit", "Full Source Files"]
          },
          {
            name: "Basic Illustrative",
            price: "$250",
            description: "Custom Illustration (3 Concepts)",
            features: ["3 Custom Concepts", "2 Designers Assigned", "Unlimited Revisions", "48-72h Turnaround"]
          },
          {
            name: "Professional Illustrative",
            price: "$550",
            description: "Startup + Unlimited Concepts",
            features: ["UNLIMITED Concepts", "4 Designers Assigned", "Unlimited Revisions", "24-48h Turnaround"]
          }
        ]
      }
    ]
  },
  web: {
    label: "Web & E-Commerce",
    subcategories: [
      {
        title: "Website Design",
        tiers: [
          {
            name: "Starter",
            price: "$115",
            description: "1 Homepage + 3 Inner Pages",
            features: ["1 Homepage Concept", "3 Inner Pages", "3 Stock Photos", "Contact Form", "On-page SEO"]
          },
          {
            name: "Professional",
            price: "$365",
            description: "Starter + Interactive Features",
            features: ["2 Homepage Concepts", "5 Inner Pages", "Interactive Slider", "Fast Load Time", "Security Plugins"],
            highlight: true
          },
          {
            name: "Business",
            price: "$865",
            description: "CMS & Responsive Mandatory",
            features: ["3 Homepage Concepts", "10 Inner Pages", "CMS Integration", "Newsletter Sub", "2 Business Emails"]
          },
          {
            name: "Corporate",
            price: "$1,365",
            description: "Dynamic Features + Booking",
            features: ["5 Homepage Concepts", "15 Inner Pages", "Booking/Appointment Tool", "Online Payment", "5 Business Emails"]
          },
          {
            name: "Enterprise",
            price: "$2,365",
            description: "Custom Dev + Multi-lingual",
            features: ["6 Homepage Concepts", "20 Inner Pages", "Custom PHP/CMS", "Multi-lingual", "Live Chat Integration"]
          }
        ]
      },
      {
        title: "E-Commerce",
        tiers: [
          {
            name: "Starter E-com",
            price: "$1,150",
            description: "Up to 50 Products",
            features: ["Custom Design", "50 Products", "Shopping Cart", "Payment Gateway", "3 Business Emails"]
          },
          {
            name: "Professional E-com",
            price: "$2,000",
            description: "Up to 150 Products",
            features: ["5 Concepts", "150 Products", "Product Variations", "Newsletter Mgmt", "Discount Options"],
            highlight: true
          },
          {
            name: "Business E-com",
            price: "$2,800",
            description: "Up to 500 Products + SEO",
            features: ["8 Concepts", "500 Products", "Advanced SEO", "Custom Dynamic Forms", "Client Dashboard"]
          }
        ]
      },
      {
        title: "Maintenance",
        tiers: [
          {
            name: "Basic",
            price: "$75",
            period: "/mo",
            description: "4 Hours/Month",
            features: ["Weekly Backup", "Security Monitoring", "CMS Updates", "4 Hours Maintenance"]
          },
          {
            name: "Professional",
            price: "$150",
            period: "/mo",
            description: "8 Hours/Month",
            features: ["Daily Backup", "Advanced Security", "Priority Support", "8 Hours Maintenance"],
            highlight: true
          },
          {
            name: "Business",
            price: "$250",
            period: "/mo",
            description: "16 Hours/Month",
            features: ["Real-time Backup", "E-commerce Support", "Dedicated PM", "16 Hours Maintenance"]
          }
        ]
      }
    ]
  },
  video: {
    label: "Video Animation",
    subcategories: [
      {
        title: "2D Explainer Video",
        tiers: [
          {
            name: "Startup",
            price: "$150",
            description: "15 Seconds",
            features: ["15 Sec Video", "Script Writing", "Voice Over", "Sound Effects", "Custom Storyboard"]
          },
          {
            name: "Classic",
            price: "$300",
            description: "30 Seconds",
            features: ["30 Sec Video", "Script Writing", "Voice Over", "Sound Effects", "Custom Storyboard"],
            highlight: true
          },
          {
            name: "Advance",
            price: "$600",
            description: "60 Seconds",
            features: ["60 Sec Video", "Script Writing", "Voice Over", "Sound Effects", "Custom Storyboard"]
          },
          {
            name: "Premium",
            price: "$1,200",
            description: "120 Seconds",
            features: ["120 Sec Video", "Script Writing", "Voice Over", "Sound Effects", "Custom Storyboard"]
          }
        ]
      },
      {
        title: "3D Animation",
        tiers: [
          {
            name: "Basic 3D",
            price: "$1,200",
            description: "30 Sec + Modeling",
            features: ["30 Sec Video", "3D Modeling", "Texturing & Rigging", "Lighting & VFX", "Voice Over"]
          },
          {
            name: "Standard 3D",
            price: "$2,000",
            description: "60 Sec Animation",
            features: ["60 Sec Video", "All Basic Features", "Advanced Animation", "Full HD Render"]
          },
          {
            name: "Premium 3D",
            price: "$4,200",
            description: "120 Sec Animation",
            features: ["120 Sec Video", "Complex Scenes", "High-End VFX", "4K Rendering Available"]
          }
        ]
      }
    ]
  },
  stream: {
    label: "Stream & Gaming",
    subcategories: [
      {
        title: "Character Design",
        tiers: [
          {
            name: "Logo (Bust Up)",
            price: "$40",
            description: "Character/Face Logo",
            features: ["Hand-drawn style", "High Resolution", "Commercial Use", "Source File"]
          },
          {
            name: "Logo (Full Body)",
            price: "$50",
            description: "Extended Detail",
            features: ["Full Body Art", "Hand-drawn style", "High Resolution", "Source File"]
          }
        ]
      },
      {
        title: "VTuber Models",
        tiers: [
          {
            name: "Bust Up (Rig Ready)",
            price: "$50",
            description: "Ready for Rigging",
            features: ["Layered PSD", "Separated Parts", "High Res Art", "Expression Ready"]
          },
          {
            name: "Full Body (Rigged)",
            price: "$150",
            description: "Highest Tier",
            features: ["Full Body Art", "Fully Rigged (Live2D)", "Physics & Motion", "Ready for VTube Studio"],
            highlight: true
          }
        ]
      },
      {
        title: "Overlays & Emotes",
        tiers: [
          {
            name: "Animated Full Pkg",
            price: "$100",
            description: "Complete Stream Setup",
            features: ["4 Screens", "2 Overlays", "Webcam & Chat", "5 Animated Alerts", "Transition Stinger"],
            highlight: true
          },
          {
            name: "Still Full Pkg",
            price: "$40",
            description: "Static Graphics",
            features: ["4 Screens", "2 Overlays", "Webcam & Chat", "5 Static Alerts"]
          },
          {
            name: "Emotes Bundle",
            price: "$25",
            description: "12 Sub Badges",
            features: ["12 Unique Designs", "3 Sizes Each", "Upload Ready"]
          }
        ]
      }
    ]
  }
};