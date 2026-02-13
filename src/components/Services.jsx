import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Design & Development",
      description:
        "Responsive design, SEO-friendly structure, high performance speed, lead forms, WhatsApp integration, payment gateway.",
      features: ["Responsive Design", "SEO Optimized", "High Performance", "Lead Forms"],
      icon: "🌐",
      slug: "web-development"
    },
    {
      title: "Mobile App Development",
      description: "Android & iOS apps, cross-platform development, UI/UX design, backend integration, maintenance.",
      features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "Backend Integration"],
      icon: "📱",
      slug: "mobile-app"
    },
    {
      title: "E-Commerce Solutions",
      description:
        "Store setup, Amazon/Flipkart listings, payment integration, sales tracking.",
      features: ["Store Setup", "Amazon/Flipkart", "Payment Gateway", "Sales Tracking"],
      icon: "🛒",
      slug: "ecommerce"
    },
    {
      title: "Social Media Management",
      description:
        "Content strategy, post & reel creation, community management, analytics, growth planning.",
      features: ["Content Strategy", "Reels & Posts", "Community Mgmt", "Analytics"],
      icon: "📱",
      slug: "social-media"
    },
    {
      title: "Performance Marketing",
      description: "Google ads, Meta ads, retargeting, conversion optimization, budget planning.",
      features: ["Google Ads", "Meta Ads", "Retargeting", "Conversion Optimization"],
      icon: "📊",
      slug: "performance-marketing"
    },
    {
      title: "Graphic & Video Design",
      description: "Social creatives, video editing, reels, motion graphics, brand creatives.",
      features: ["Video Editing", "Graphic Design", "Reels", "Motion Graphics"],
      icon: "🎨",
      slug: "design"
    },
    {
      title: "Website Tracking & Analytics",
      description:
        "GA4 setup, conversion tracking, event tracking, user behavior analysis, monthly reports.",
      features: ["GA4 Setup", "Conversion Tracking", "User Behavior", "Monthly Reports"],
      icon: "📈",
      slug: "analytics"
    },
    {
      title: "Marketing Automation & CRM",
      description:
        "WhatsApp automation, CRM setup, lead management, follow-ups, pipeline tracking, training.",
      features: ["WhatsApp Automation", "CRM Setup", "Lead Management", "Pipeline Tracking"],
      icon: "⚡",
      slug: "automation"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-100">
            OUR SERVICES
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block mt-2">
              Build, Grow & Scale
            </span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
            Data-driven strategies, creative execution, and growth-focused systems — all under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, i) => (
            <Link
              key={i}
              to={`/services/${service.slug}`}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            More Ways We Help You{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Dominate Your Market
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/services/growth-programs"
              className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Growth & Retainer Programs</h4>
              <p className="text-gray-600 text-sm mb-3">Dedicated monthly programs from ₹25,000 to ₹70,000</p>
              <div className="text-blue-600 font-semibold text-sm flex items-center justify-center">
                Explore Programs <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/services/starter-packages"
              className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">💼</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Starter Packages</h4>
              <p className="text-gray-600 text-sm mb-3">Affordable packages starting from ₹5,999/month</p>
              <div className="text-blue-600 font-semibold text-sm flex items-center justify-center">
                View Packages <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              to="/services/specialized"
              className="group bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">⭐</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Specialized Services</h4>
              <p className="text-gray-600 text-sm mb-3">Brand authority, funnels, and conversion optimization</p>
              <div className="text-blue-600 font-semibold text-sm flex items-center justify-center">
                Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Book a Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}