import Link from 'next/link'

interface SolutionCardProps {
  title: string
  description: string
  features: string[]
  savings: string
  href: string
}

export default function SolutionCard({ title, description, features, savings, href }: SolutionCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
            {savings}
          </div>
          <Link 
            href={href}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </div>
  )
}
