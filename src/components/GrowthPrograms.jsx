import { Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight, Zap, Rocket, Crown } from "lucide-react";

export default function GrowthPrograms() {
  const programs = [
    {
      name: "Growth Partner Program",
      icon: Zap,
      price: "₹25,000",
      period: "/month",
      description: "Perfect for businesses starting their digital growth journey",
      features: [
        "Social Media Management",
        "12 Posts + 8 Reels per month",
        "Content Strategy & Planning",
        "Basic Paid Advertising",
        "Monthly Performance Reports",
        "Email Support",
        "Community Management",
        "Hashtag Research & Optimization"
      ],
      highlighted: false
    },
    {
      name: "Scale Accelerator Program",
      icon: Rocket,
      price: "₹40,000",
      period: "/month",
      description: "Accelerate your growth with advanced marketing automation",
      features: [
        "Everything in Growth Partner",
        "Advanced Ad Campaigns (Google + Meta)",
        "Custom Landing Pages & Funnels",
        "CRM Setup & Management",
        "WhatsApp Automation",
        "Conversion Rate Optimization",
        "A/B Testing & Analytics",
        "Weekly Strategy Calls",
        "Priority Support"
      ],
      highlighted: true
    },
    {
      name: "Market Domination Program",
      icon: Crown,
      price: "₹70,000",
      period: "/month",
      description: "Complete dominance with a dedicated growth team",
      features: [
        "Everything in Scale Accelerator",
        "Dedicated Account Manager",
        "Complete Branding & Design",
        "Influencer Marketing Campaigns",
        "Advanced Marketing Automation",
        "Multi-Channel Ad Management",
        "Bi-weekly Strategy Meetings",
        "Custom Reporting Dashboard",
        "24/7 Priority Support",
        "Quarterly Growth Reviews"
      ],
      highlighted: false
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
            <div className="text-6xl mb-6">🚀</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Growth & Retainer Programs
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Dedicated monthly programs designed to systematically grow your business with consistent support and proven strategies
            </p>
          </div>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From foundational growth to complete market domination, we have a program tailored to your business stage and goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                program.highlighted ? "ring-4 ring-blue-500 lg:-translate-y-4" : ""
              }`}
            >
              {program.highlighted && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
                  <program.icon className="w-8 h-8 text-white" />
                </div>

                {/* Program Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {program.price}
                    </span>
                    <span className="text-gray-600 ml-2">{program.period}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">+ taxes as applicable</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {program.features.map((feature, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included Section */}
      <div className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Makes Our Programs Different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ROI-Focused</h3>
              <p className="text-gray-600">
                Every strategy is designed to deliver measurable business results, not just vanity metrics
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Reporting</h3>
              <p className="text-gray-600">
                Clear, detailed reports showing exactly what we're doing and the results we're achieving
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600">
                Your success is our success. We're always available to answer questions and provide guidance
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customized Solutions</h3>
              <p className="text-gray-600">
                We adapt our approach based on your industry, audience, and specific business goals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Free discovery call to understand your business and goals" },
              { step: "2", title: "Strategy", desc: "Custom growth plan tailored to your specific needs" },
              { step: "3", title: "Execution", desc: "We implement the strategy with precision and care" },
              { step: "4", title: "Optimize", desc: "Continuous improvement based on data and results" }
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
      <div className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can I upgrade or downgrade my plan?
              </h3>
              <p className="text-gray-600">
                Yes! You can upgrade or downgrade your plan at any time. We'll adjust your services accordingly from the next billing cycle.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What's the contract period?
              </h3>
              <p className="text-gray-600">
                We recommend a minimum 3-month commitment to see meaningful results, but we offer monthly billing with 30-day cancellation notice.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need to pay for ads separately?
              </h3>
              <p className="text-gray-600">
                Yes, the program fee covers our services and management. Ad spend budgets are additional and paid directly to the platforms (Google, Meta, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free consultation to discuss which program is right for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}