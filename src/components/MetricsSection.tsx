export default function MetricsSection() {
  const metrics = [
    { value: 'RM 2.4B', label: 'Malaysian AI Market by 2027', growth: '15% CAGR' },
    { value: '50,000+', label: 'Target Manufacturers', market: 'Malaysia' },
    { value: 'RM 3.6B', label: 'ASEAN TAM', regions: 'Singapore, Thailand, Indonesia' },
    { value: '95%', label: 'Defect Detection Accuracy', improvement: 'Computer Vision' },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Market-Leading Performance
          </h2>
          <p className="text-lg text-gray-600">
            Proven results across Malaysian manufacturing sector
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-600">
                {metric.growth && <span className="text-green-600">📈 {metric.growth}</span>}
                {metric.market && <span>{metric.market}</span>}
                {metric.regions && <span>{metric.regions}</span>}
                {metric.improvement && <span className="text-purple-600">🤖 {metric.improvement}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
