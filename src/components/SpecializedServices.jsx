import { Link } from "react-router-dom";
import { ArrowLeft, Check, ArrowRight, Target, TrendingUp, Users } from "lucide-react";

export default function SpecializedServices() {
  const services = [
    {
      name: "Brand Authority & Visibility",
      icon: "🌟",
      gradient: "from-blue-600 to-cyan-600",
      description: "Build credibility and become the go-to authority in your industry",
      includes: [
        {
          title: "Influencer Marketing",
          details: [
            "Identify and partner with relevant influencers",
            "Campaign strategy and execution",
            "Performance tracking and ROI measurement",
            "Content collaboration and approvals"
          ]
        },
        {
          title: "PR Features & Media Mentions",
          details: [
            "Press release creation and distribution",
            "Media outreach and relationship building",
            "Feature placements in relevant publications",
            "Crisis management support"
          ]
        },
        {
          title: "Founder Personal Branding",
          details: [
            "LinkedIn profile optimization",
            "Thought leadership content",
            "Speaking opportunity coordination",
            "Personal brand strategy development"
          ]
        },
        {
          title: "Reputation & Review Management",
          details: [
            "Online reputation monitoring",
            "Review generation campaigns",
            "Negative review management",
            "Rating improvement strategies"
          ]
        }
      ]
    },
    {
      name: "Conversion Optimization & Funnels",
      icon: "🎯",
      gradient: "from-green-600 to-emerald-600",
      description: "Turn more visitors into customers with optimized conversion systems",
      includes: [
        {
          title: "High-Converting Landing Pages",
          details: [
            "Custom designed landing pages",
            "Conversion-focused copywriting",
            "A/B testing and optimization",
            "Mobile-first responsive design"
          ]
        },
        {
          title: "Sales Funnel Development",
          details: [
            "Complete funnel strategy and mapping",
            "Multi-step funnel creation",
            "Email automation sequences",
            "Thank you and upsell pages"
          ]
        },
        {
          title: "Retargeting Campaigns",
          details: [
            "Pixel implementation and tracking",
            "Audience segmentation strategies",
            "Multi-platform retargeting (Google, Meta)",
            "Dynamic product retargeting"
          ]
        },
        {
          title: "Conversion Rate Optimization",
          details: [
            "Website/funnel audits",
            "Heatmap and session recording analysis",
            "A/B and multivariate testing",
            "User experience improvements"
          ]
        }
      ]
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
            <div className="text-6xl mb-6">⭐</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Specialized Services
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto">
              Advanced marketing solutions to build authority, optimize conversions, and dominate your market
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {services.map((service, i) => (
          <div key={i} className={`mb-20 ${i === services.length - 1 ? 'mb-0' : ''}`}>
            {/* Service Header */}
            <div className="text-center mb-12">
              <div className="text-6xl mb-4">{service.icon}</div>
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.name}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>

            {/* Service Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.includes.map((item, j) => (
                <div
                  key={j}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {item.title}
                  </h3>
                  <div className="space-y-3">
                    {item.details.map((detail, k) => (
                      <div key={k} className="flex items-start gap-3">
                        <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-green-600" />
                        <span className="text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose These Services */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why These Services Matter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Build Trust & Credibility
              </h3>
              <p className="text-gray-600">
                Brand authority services position you as the expert, making it easier to attract and retain customers
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Maximize Conversions
              </h3>
              <p className="text-gray-600">
                Optimized funnels and landing pages turn more of your traffic into paying customers
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Accelerate Growth
              </h3>
              <p className="text-gray-600">
                Strategic visibility and conversion optimization create compound growth effects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Brand Authority & Visibility
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>B2B companies looking to establish thought leadership</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Startups seeking media coverage and credibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Service providers building personal brands</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Brands managing online reputation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Conversion Optimization
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>E-commerce stores wanting to increase sales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>SaaS companies optimizing trial-to-paid conversions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Lead generation businesses improving ROI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Any business with traffic but low conversions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Discovery", desc: "Deep dive into your business, audience, and goals" },
              { step: "2", title: "Strategy", desc: "Create a custom plan tailored to your needs" },
              { step: "3", title: "Implementation", desc: "Execute with precision and expertise" },
              { step: "4", title: "Optimization", desc: "Continuously improve based on data" }
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

      {/* Pricing Note */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Custom Pricing
            </h2>
            <p className="text-xl text-white/90 mb-6">
              These specialized services are priced based on your specific needs, project scope, and goals. We'll create a custom proposal after understanding your requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Take Your Marketing to the Next Level?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how these specialized services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Schedule Consultation
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