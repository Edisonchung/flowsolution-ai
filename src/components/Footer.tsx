import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Flow Solution.ai</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Malaysia's leading AI-powered industrial solutions provider. 
              Transforming manufacturing through advanced AI technology.
            </p>
            <div className="text-sm text-gray-400">
              <p>Flow Solution Engineering Sdn. Bhd.</p>
              <p>Registration: 201501011611 (1136946-M)</p>
              <p>Paid-up Capital: RM 1,000,000</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/solutions/procurement" className="hover:text-white transition-colors">Procurement Intelligence</Link></li>
              <li><Link href="/solutions/maintenance" className="hover:text-white transition-colors">Predictive Maintenance</Link></li>
              <li><Link href="/solutions/process" className="hover:text-white transition-colors">Process Intelligence</Link></li>
              <li><Link href="/technology" className="hover:text-white transition-colors">Technology Stack</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              <p>PT 7257, 1st Floor, Jalan BBN 1/2A, Bandar Baru Nilai</p>
              <p>71800 Nilai, Negeri Sembilan, Malaysia</p>
            </div>
            <div className="text-gray-400 text-sm mt-4 md:mt-0">
              <p>📧 info@flowsolution.com.my</p>
              <p>📱 +60 12-509 2363</p>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm mt-8">
            <p>&copy; 2025 Flow Solution Engineering Sdn. Bhd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
