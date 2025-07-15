import Hero from '@/components/Hero'
import SolutionCard from '@/components/SolutionCard'
import MetricsSection from '@/components/MetricsSection'
import Link from 'next/link'

export default function Home() {
  const solutions = [
    {
      title: "AI-Powered Procurement Intelligence",
      description: "HiggsFlow Platform with 95% accuracy in PO/PI extraction and ML-powered supplier matching.",
      features: ["Document Intelligence", "Supplier Matching", "Cost Optimization", "Process Automation"],
      savings: "40% Cost Reduction",
      href: "/solutions/procurement"
    },
    {
      title: "Industrial IoT & Predictive Maintenance",
      description: "AI-based performance prediction reducing downtime by 60% with real-time diagnostics.",
      features: ["Smart Pump Monitoring", "Predictive Analytics", "Equipment Optimization", "Real-time Diagnostics"],
      savings: "60% Downtime Reduction",
      href: "/solutions/maintenance"
    },
    {
      title: "Manufacturing Process Intelligence",
      description: "AI workflow enhancement with computer vision inspection and demand forecasting.",
      features: ["Production Optimization", "Quality Control", "Supply Chain Intelligence", "Energy Management"],
      savings: "90% Accuracy",
      href: "/solutions/process"
    }
  ]

  return (
    <div className="min-h-screen">
      <Hero />
      
      <MetricsSection />
      
      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our AI Solutions Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered solutions designed specifically for Malaysian manufacturing challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Flow Solution.ai?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Proven Industrial Expertise</h3>
                    <p className="text-gray-600">10 years in Malaysian manufacturing with deep understanding of local challenges</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Cutting-Edge AI Technology</h3>
                    <p className="text-gray-600">Proprietary algorithms trained on Malaysian manufacturing data</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Strong Financial Foundation</h3>
                    <p className="text-gray-600">RM 1M paid-up capital with consistent profitability and clean balance sheet</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready for ASEAN Expansion</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Singapore Market</span>
                  <span className="font-semibold">RM 300M</span>
                </div>
                <div className="flex justify-between">
                  <span>Thailand Market</span>
                  <span className="font-semibold">RM 500M</span>
                </div>
                <div className="flex justify-between">
                  <span>Indonesia Market</span>
                  <span className="font-semibold">RM 800M</span>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total TAM</span>
                    <span>RM 3.6B</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the AI revolution in Malaysian manufacturing. Get a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Request Demo
            </Link>
            <Link 
              href="/solutions"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
