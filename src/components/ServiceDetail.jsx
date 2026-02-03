import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams();

  const serviceData = {
    "web-development": {
      title: "Web Design & Development",
      icon: "🌐",
      hero: "Build a stunning, high-performance website that converts visitors into customers",
      description: "We create custom websites that are beautiful, fast, and optimized for conversions. Every website we build is responsive, SEO-friendly, and designed to help your business grow.",
      features: [
        {
          title: "Responsive Design",
          desc: "Perfect experience across all devices - desktop, tablet, and mobile"
        },
        {
          title: "SEO-Friendly Structure",
          desc: "Built with search engine optimization best practices from day one"
        },
        {
          title: "High Performance Speed",
          desc: "Lightning-fast loading times for better user experience and rankings"
        },
        {
          title: "Lead Forms Integration",
          desc: "Capture leads effectively with optimized contact and inquiry forms"
        },
        {
          title: "WhatsApp Integration",
          desc: "Direct communication channel with your customers"
        },
        {
          title: "Payment Gateway",
          desc: "Secure payment processing for seamless transactions"
        }
      ],
      requirements: {
        title: "What We Need From You",
        items: [
          "Company / Brand Name",
          "Business Email ID",
          "Contact Details (Phone / WhatsApp)",
          "Logo (High-resolution format)",
          "Brand Guidelines (Colors, Fonts, References)",
          "Website Content (About Us, Services, Contact Details)",
          "Reference Websites (if any)",
          "Domain & Hosting Access",
          "Admin Access to Existing Website (if redesigning)"
        ]
      },
      process: [
        { step: "1", title: "Discovery & Planning", desc: "Understanding your goals and requirements" },
        { step: "2", title: "Design Mockups", desc: "Creating visual designs for your approval" },
        { step: "3", title: "Development", desc: "Building your website with clean code" },
        { step: "4", title: "Testing & Launch", desc: "Thorough testing before going live" }
      ]
    },
    "mobile-app": {
      title: "Mobile App Development",
      icon: "📱",
      hero: "Transform your idea into a powerful mobile app that users love",
      description: "Native and cross-platform mobile apps for iOS and Android. We build scalable, user-friendly apps with seamless performance and intuitive design.",
      features: [
        {
          title: "iOS & Android Development",
          desc: "Native apps for both major mobile platforms"
        },
        {
          title: "Cross-Platform Solutions",
          desc: "Build once, deploy everywhere with React Native or Flutter"
        },
        {
          title: "Custom UI/UX Design",
          desc: "Beautiful, intuitive interfaces that users love"
        },
        {
          title: "Backend Integration",
          desc: "Seamless API and database connectivity"
        },
        {
          title: "App Store Optimization",
          desc: "Help your app get discovered and downloaded"
        },
        {
          title: "Maintenance & Updates",
          desc: "Ongoing support to keep your app running smoothly"
        }
      ],
      requirements: {
        title: "What We Need From You",
        items: [
          "App Concept / Business Idea",
          "Target Audience Details",
          "Features & Functional Requirements",
          "UI/UX References",
          "Logo & Brand Assets",
          "Content for App Screens",
          "Google Play Console Access",
          "Apple Developer Account Access",
          "API / Backend Details (if available)"
        ]
      },
      process: [
        { step: "1", title: "Concept & Wireframing", desc: "Mapping out app structure and flow" },
        { step: "2", title: "UI/UX Design", desc: "Creating beautiful, functional screens" },
        { step: "3", title: "Development", desc: "Building features and integrations" },
        { step: "4", title: "Testing & Deployment", desc: "Quality assurance and app store launch" }
      ]
    },
    "ecommerce": {
      title: "E-Commerce Solutions",
      icon: "🛒",
      hero: "Launch and scale your online store with our complete e-commerce solutions",
      description: "From store setup to marketplace listings, we handle all aspects of your e-commerce presence. Sell more with optimized product listings, seamless payments, and professional store management.",
      features: [
        {
          title: "Complete Store Setup",
          desc: "Custom online stores with secure checkout and inventory management"
        },
        {
          title: "Amazon & Flipkart Listings",
          desc: "Professional product listings optimized for marketplace success"
        },
        {
          title: "Payment Gateway Integration",
          desc: "Multiple payment options for customer convenience"
        },
        {
          title: "Sales Tracking & Analytics",
          desc: "Monitor performance and make data-driven decisions"
        },
        {
          title: "Inventory Management",
          desc: "Keep track of stock levels and automate reordering"
        },
        {
          title: "Order Fulfillment Setup",
          desc: "Streamlined shipping and delivery processes"
        }
      ],
      requirements: {
        title: "What We Need From You",
        items: [
          "Seller Account Access (Amazon / Flipkart)",
          "GST Certificate",
          "PAN Card",
          "Bank Account Details",
          "Product Details (Name, Description, Features)",
          "Product Images & Videos",
          "Pricing & Inventory Details",
          "Brand Registry / Trademark (if applicable)",
          "Domain & Hosting Access (for website store)",
          "Payment Gateway Access",
          "Shipping, Refund & Privacy Policies"
        ]
      },
      process: [
        { step: "1", title: "Account Setup", desc: "Setting up seller accounts and verifications" },
        { step: "2", title: "Product Listing", desc: "Creating optimized product pages" },
        { step: "3", title: "Integration", desc: "Connecting payment and shipping systems" },
        { step: "4", title: "Launch & Optimize", desc: "Going live and improving based on data" }
      ]
    },
    "social-media": {
      title: "Social Media Management",
      icon: "📱",
      hero: "Build a powerful social presence that engages and converts",
      description: "Strategic social media management to grow your brand, engage your audience, and drive business results. We handle everything from content creation to community management.",
      features: [
        {
          title: "Content Strategy",
          desc: "Data-driven content calendars aligned with your business goals"
        },
        {
          title: "Post & Reel Creation",
          desc: "Professional graphics, videos, and engaging captions"
        },
        {
          title: "Community Management",
          desc: "Responding to comments, messages, and building relationships"
        },
        {
          title: "Analytics & Reporting",
          desc: "Track growth, engagement, and ROI with detailed reports"
        },
        {
          title: "Platform Optimization",
          desc: "Maximize reach on Instagram, Facebook, LinkedIn, and more"
        },
        {
          title: "Growth Planning",
          desc: "Strategic campaigns to increase followers and engagement"
        }
      ],
      requirements: {
        title: "What We Need From You",
        items: [
          "Business Email Credentials",
          "Facebook Page Access",
          "Instagram Business Account Access",
          "Business WhatsApp Access",
          "LinkedIn Page Access (if applicable)",
          "Brand Guidelines",
          "Past Content (if any)",
          "Competitor References (optional)",
          "Monthly Goals & Approval Process"
        ]
      },
      process: [
        { step: "1", title: "Strategy Development", desc: "Understanding goals and creating content plan" },
        { step: "2", title: "Content Creation", desc: "Designing posts, reels, and stories" },
        { step: "3", title: "Publishing & Engagement", desc: "Posting content and managing community" },
        { step: "4", title: "Analysis & Optimization", desc: "Monthly reporting and strategy refinement" }
      ]
    },
    "performance-marketing": {
      title: "Performance Marketing",
      icon: "📊",
      hero: "Drive measurable results with data-driven advertising campaigns",
      description: "ROI-focused advertising on Google, Meta, and other platforms. We create, manage, and optimize campaigns that deliver real business results.",
      features: [
        {
          title: "Google Ads Management",
          desc: "Search, display, and shopping campaigns that convert"
        },
        {
          title: "Meta Ads (Facebook & Instagram)",
          desc: "Targeted social media advertising for maximum ROI"
        },
        {
          title: "Retargeting Campaigns",
          desc: "Re-engage visitors who didn't convert the first time"
        },
        {
          title: "Conversion Optimization",
          desc: "Continuously improve campaign performance"
        },
        {
          title: "Budget Planning",
          desc: "Strategic budget allocation for best results"
        },
        {
          title: "Performance Tracking",
          desc: "Detailed reporting on leads, sales, and ROI"
        }
      ],
      requirements: {
        title: "What We Need From You",
        items: [
          "Google Ads Account Access",
          "Google Analytics & Tag Manager Access",
          "Meta Business Manager & Ad Account Access",
          "Facebook Page & Instagram Account Access",
          "Website Admin Access for Tracking Setup",
          "Target Locations, Budget & Conversion Goals"
        ]
      },
      process: [
        { step: "1", title: "Campaign Strategy", desc: "Defining goals, audience, and approach" },
        { step: "2", title: "Setup & Launch", desc: "Creating ads and launching campaigns" },
        { step: "3", title: "Monitoring", desc: "Daily optimization and bid management" },
        { step: "4", title: "Reporting", desc: "Weekly/monthly performance analysis" }
      ]
    },
    "design": {
      title: "Graphic & Video Design",
      icon: "🎨",
      hero: "Creative assets that make your brand stand out and drive engagement",
      description: "Professional graphic design and video editing services for social media, marketing, and branding. From reels to motion graphics, we create content that captivates.",
      features: [
        {
          title: "Social Media Creatives",
          desc: "Eye-catching posts, stories, and ads for all platforms"
        },
        {
          title: "Video Editing",
          desc: "Professional editing for promotional videos and content"
        },
        {
          title: "Reels & Short-Form Content",
          desc: "Engaging vertical videos optimized for social media"
        },
        {
          title: "Motion Graphics",
          desc: "Animated logos, explainer videos, and dynamic content"
        },
        {
          title: "Brand Creatives",
          desc: "Logos, business cards, presentations, and more"
        },
        {
          title: "Ad Creatives",
          desc: "High-converting visuals for paid advertising"
        }
      ],
      requirements: {
        title: "What We Need From You",
        items: [
          "Brand Logo",
          "Brand Colors & Fonts",
          "Design Requirements & Platforms",
          "Content / Text for Designs",
          "Size Specifications",
          "Reference Designs",
          "Approval Timeline",
          "Raw Video Footage / Images (for video projects)",
          "Script / Creative Brief (for video projects)"
        ]
      },
      process: [
        { step: "1", title: "Brief & Concepts", desc: "Understanding requirements and brainstorming" },
        { step: "2", title: "Design Creation", desc: "Crafting visuals or editing videos" },
        { step: "3", title: "Revisions", desc: "Refining based on your feedback" },
        { step: "4", title: "Final Delivery", desc: "Providing files in all required formats" }
      ]
    },
    "analytics": {
      title: "Website Tracking & Analytics",
      icon: "📈",
      hero: "Make data-driven decisions with comprehensive website tracking",
      description: "Complete analytics setup and monitoring to understand user behavior, track conversions, and optimize your website performance.",
      features: [
        {
          title: "GA4 Setup & Configuration",
          desc: "Complete Google Analytics 4 implementation"
        },
        {
          title: "Conversion Tracking",
          desc: "Track leads, sales, and important user actions"
        },
        {
          title: "Event Tracking",
          desc: "Monitor clicks, downloads, video plays, and more"
        },
        {
          title: "User Behavior Analysis",
          desc: "Understand how visitors interact with your site"
        },
        {
          title: "E-commerce Tracking",
          desc: "Detailed revenue and product performance data"
        },
        {
          title: "Monthly Reports",
          desc: "Clear, actionable insights delivered regularly"
        }
      ],
      requirements: {
        title: "What We Need From You",
        items: [
          "Website Admin Access",
          "Google Analytics Account Access",
          "Google Tag Manager Access (or we'll set it up)",
          "List of Key Conversion Events",
          "Business Goals & KPIs"
        ]
      },
      process: [
        { step: "1", title: "Audit", desc: "Reviewing current tracking setup" },
        { step: "2", title: "Implementation", desc: "Installing tracking codes and events" },
        { step: "3", title: "Testing", desc: "Verifying all data is captured correctly" },
        { step: "4", title: "Reporting", desc: "Ongoing monitoring and insights" }
      ]
    },
    "automation": {
      title: "Marketing Automation & CRM",
      icon: "⚡",
      hero: "Automate your marketing and sales for maximum efficiency",
      description: "Set up powerful automation systems to nurture leads, manage customer relationships, and streamline your sales process.",
      features: [
        {
          title: "WhatsApp Automation",
          desc: "Automated messages, broadcasts, and chatbots"
        },
        {
          title: "CRM Setup & Configuration",
          desc: "Implementing systems like HubSpot, Zoho, or custom solutions"
        },
        {
          title: "Lead Management",
          desc: "Capture, score, and nurture leads automatically"
        },
        {
          title: "Follow-up Automation",
          desc: "Never miss a follow-up with automated sequences"
        },
        {
          title: "Pipeline Tracking",
          desc: "Visual sales pipeline management and forecasting"
        },
        {
          title: "Team Training",
          desc: "Comprehensive training for your team"
        }
      ],
      requirements: {
        title: "What We Need From You",
        items: [
          "Business Process Overview",
          "Current Lead Sources",
          "Sales Process Details",
          "Team Size & Roles",
          "CRM Preferences (if any)",
          "WhatsApp Business API Access",
          "Integration Requirements"
        ]
      },
      process: [
        { step: "1", title: "Process Mapping", desc: "Understanding your sales and marketing flow" },
        { step: "2", title: "System Setup", desc: "Configuring CRM and automation tools" },
        { step: "3", title: "Integration", desc: "Connecting all your marketing channels" },
        { step: "4", title: "Training & Launch", desc: "Teaching your team and going live" }
      ]
    }
  };

  const service = serviceData[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/home#services" className="text-blue-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/home#services"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-start gap-6">
            <div className="text-7xl">{service.icon}</div>
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
                {service.title}
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl">
                {service.hero}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
          {service.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            What's Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white flex items-center justify-center text-2xl font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
                {i < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {service.requirements.title}
          </h2>
          <p className="text-center text-gray-600 mb-8">
            To get started with your project, we'll need the following information and access:
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.requirements.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            Don't worry if you don't have everything ready. We'll guide you through the process!
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your project and create a custom solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/home#services"
              className="inline-flex items-center px-8 py-4 bg-gray-100 text-gray-900 font-bold rounded-full hover:bg-gray-200 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}