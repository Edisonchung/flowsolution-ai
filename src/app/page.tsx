export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Simple Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Malaysian Manufacturing Through{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Since 2015, Flow Solution Engineering has evolved from traditional industrial equipment trading 
            to become Malaysia&apos;s leading provider of AI-powered industrial solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </a>
            <a 
              href="#solutions" 
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Solutions
            </a>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">AI Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">40%</div>
              <div className="text-sm text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">60%</div>
              <div className="text-sm text-gray-600">Faster Procurement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
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
            {/* Solution 1 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI-Powered Procurement Intelligence</h3>
              <p className="text-gray-600 mb-6">HiggsFlow Platform with 95% accuracy in PO/PI extraction and ML-powered supplier matching.</p>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                40% Cost Reduction
              </div>
            </div>
            
            {/* Solution 2 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industrial IoT & Predictive Maintenance</h3>
              <p className="text-gray-600 mb-6">AI-based performance prediction reducing downtime by 60% with real-time diagnostics.</p>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                60% Downtime Reduction
              </div>
            </div>
            
            {/* Solution 3 */}
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manufacturing Process Intelligence</h3>
              <p className="text-gray-600 mb-6">AI workflow enhancement with computer vision inspection and demand forecasting.</p>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                90% Accuracy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Technology Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">AI & Machine Learning</h3>
              <p className="text-gray-600 text-sm">Advanced NLP, Computer Vision, Predictive Analytics</p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Cloud Platform</h3>
              <p className="text-gray-600 text-sm">AWS/Azure deployment, Edge Computing</p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">API Architecture</h3>
              <p className="text-gray-600 text-sm">Seamless integrations, Real-time Analytics</p>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-lg mb-2">Security</h3>
              <p className="text-gray-600 text-sm">Enterprise-grade security, Compliance ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Smart Factory Implementation</h3>
              <p className="text-gray-600 text-sm mb-4">Regional Electronics Manufacturer</p>
              <div className="text-green-600 font-semibold">95% defect detection, 30% cost reduction</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Predictive Maintenance</h3>
              <p className="text-gray-600 text-sm mb-4">Oil & Gas Equipment Supplier</p>
              <div className="text-green-600 font-semibold">85% downtime reduction, RM 500K savings</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-2">Procurement Optimization</h3>
              <p className="text-gray-600 text-sm mb-4">Automotive Parts Manufacturer</p>
              <div className="text-green-600 font-semibold">50% faster sourcing, 20% cost savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Flow Solution Engineering Sdn. Bhd.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">RM 1M</div>
              <div className="text-gray-600">Paid-up Capital</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">2015</div>
              <div className="text-gray-600">Established</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-2">RM 3.6B</div>
              <div className="text-gray-600">ASEAN Market Opportunity</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the AI revolution in Malaysian manufacturing. Get a personalized demo today.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 rounded-lg p-8 mb-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p>info@flowsolution.com.my</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p>+60 12-509 2363</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p>PT 7257, 1st Floor, Jalan BBN 1/2A<br/>Bandar Baru Nilai, 71800 Nilai<br/>Negeri Sembilan, Malaysia</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday: 9:00 AM - 1:00 PM</p>
              </div>
            </div>
          </div>
          
          <a 
            href="mailto:info@flowsolution.com.my?subject=Demo Request&body=Hello, I would like to request a demo of your AI solutions."
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Send Email for Demo
          </a>
        </div>
      </section>
    </div>
  )
}
