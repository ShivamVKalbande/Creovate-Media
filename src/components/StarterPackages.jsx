import { Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";

export default function StarterPackages() {
  const packages = [
    {
      name: "Basic Starter",
      price: "₹5,999",
      period: "/month",
      color: "from-blue-600 to-cyan-600",
      description: "Perfect for small businesses starting their social media journey",
      features: [
        "12 Social Media Posts per month",
        "6 Reels per month",
        "Professional Captions",
        "Content Scheduling",
        "Basic Hashtag Research",
        "Instagram & Facebook",
        "Monthly Content Calendar"
      ],
      ideal: "Small businesses, Local shops, Startups"
    },
    {
      name: "Standard Starter",
      price: "₹9,999",
      period: "/month",
      color: "from-purple-500 to-pink-500",
      description: "Enhanced social presence with engagement and analytics",
      features: [
        "16 Social Media Posts per month",
        "10 Reels per month",
        "Professional Captions & Hashtags",
        "Content Scheduling",
        "Instagram Stories (15/month)",
        "Community Engagement",
        "Monthly Analytics Report",
        "2 Platforms (Instagram, Facebook, LinkedIn)"
      ],
      ideal: "Growing businesses, E-commerce brands, Service providers",
      highlighted: true
    },
    {
      name: "Premium Starter",
      price: "₹19,999",
      period: "/month",
      color: "from-orange-500 to-red-500",
      description: "Complete package with ads, leads, and website integration",
      features: [
        "Everything in Standard Starter",
        "20 Posts + 15 Reels per month",
        "Paid Social Media Ads",
        "Lead Generation Campaigns",
        "Website Integration",
        "WhatsApp Business Setup",
        "Competitor Analysis",
        "Weekly Performance Updates",
        "3 Platforms of your choice"
      ],
      ideal: "Established businesses, Professional services, Agencies"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
          <div className="text-center">
            <div className="text-6xl mb-6">💼</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Starter Packages
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Affordable social media management packages designed for businesses just starting their digital journey
            </p>
          </div>
        </div>
      </div>

      {/* Packages Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Start
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional social media management without breaking the bank. All packages include quality content and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                pkg.highlighted ? "ring-4 ring-blue-500 lg:-translate-y-4" : ""
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    BEST VALUE
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Package Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className={`text-5xl font-extrabold bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>
                      {pkg.price}
                    </span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+ taxes as applicable</p>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal For */}
                <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Ideal For
                  </p>
                  <p className="text-sm text-gray-700">{pkg.ideal}</p>
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className={`block w-full text-center px-6 py-4 bg-gradient-to-r ${pkg.color} text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            What You Get With Every Package
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Professional Content
              </h3>
              <p className="text-gray-600 text-sm">
                Eye-catching graphics and engaging videos created by our design team
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Strategic Planning
              </h3>
              <p className="text-gray-600 text-sm">
                Well-planned content calendar aligned with your business goals
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Multi-Platform Management
              </h3>
              <p className="text-gray-600 text-sm">
                Consistent presence across Instagram, Facebook, and more
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Engaging Captions
              </h3>
              <p className="text-gray-600 text-sm">
                Compelling copy that drives engagement and conversions
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hashtag Research
              </h3>
              <p className="text-gray-600 text-sm">
                Targeted hashtags to increase reach and discoverability
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Performance Tracking
              </h3>
              <p className="text-gray-600 text-sm">
                Regular reports showing your growth and engagement metrics
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add-Ons */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Optional Add-Ons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Professional Photoshoot
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Custom product/lifestyle photography
              </p>
              <p className="text-blue-600 font-bold">From ₹5,000</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Video Production
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional video editing services
              </p>
              <p className="text-blue-600 font-bold">From ₹3,000</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <div className="text-3xl mb-3">📢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Influencer Collaboration
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Partner with relevant influencers
              </p>
              <p className="text-blue-600 font-bold">Custom Pricing</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-blue-500 transition-colors">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Additional Ad Spend
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Boost your reach with paid ads
              </p>
              <p className="text-blue-600 font-bold">Custom Budget</p>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Sign Up", desc: "Choose your package and complete onboarding" },
              { step: "2", title: "Brand Brief", desc: "Share your brand assets and preferences" },
              { step: "3", title: "Content Approval", desc: "Review and approve monthly content calendar" },
              { step: "4", title: "Go Live", desc: "We post, engage, and grow your presence" }
            ].map((step, i) => (
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
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Common Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I cancel anytime?
              </h3>
              <p className="text-gray-600">
                Yes! While we recommend a 3-month commitment for best results, you can cancel with 30 days notice.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you need access to my social accounts?
              </h3>
              <p className="text-gray-600">
                Yes, we'll need admin or editor access to schedule and post content on your behalf. All access is secure and confidential.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I request specific types of content?
              </h3>
              <p className="text-gray-600">
                Absolutely! We create a custom content strategy based on your brand, industry, and specific requests.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if I need more posts than my package includes?
              </h3>
              <p className="text-gray-600">
                You can upgrade to a higher package or add extra posts at ₹500-800 per post depending on complexity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Grow Your Social Media?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Choose a package and start building your brand presence today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/home#services"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}