export const revalidate = 10; // Revalidate every 10 seconds (ISR)

async function getData() {
  // Simulate fetching data for ISR
  return {
    message: "This is the About page with ISR.",
    features: [
      "Server-Side Rendering (SSR)",
      "Incremental Static Regeneration (ISR)",
      "Edge Runtime API",
      "NextAuth.js Authentication",
      "Role-based Authorization",
      "Performance Optimizations",
    ],
  };
}

export default async function AboutPage() {
  const data = await getData();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">About</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/dashboard"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Dashboard
              </a>
              <a
                href="/landing"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Our Application
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.message}
          </p>
          <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <span className="ml-3 text-gray-700 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Technology Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">Next</span>
              </div>
              <h3 className="font-medium text-gray-900">Next.js 15</h3>
              <p className="text-sm text-gray-600">React Framework</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">TW</span>
              </div>
              <h3 className="font-medium text-gray-900">Tailwind CSS</h3>
              <p className="text-sm text-gray-600">Utility-first CSS</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">NA</span>
              </div>
              <h3 className="font-medium text-gray-900">NextAuth.js</h3>
              <p className="text-sm text-gray-600">Authentication</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-lg">ER</span>
              </div>
              <h3 className="font-medium text-gray-900">Edge Runtime</h3>
              <p className="text-sm text-gray-600">Fast APIs</p>
            </div>
          </div>
        </div>

        {/* ISR Demo */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ISR Demo</h2>
          <p className="text-gray-700 mb-4">
            This page demonstrates Incremental Static Regeneration (ISR). The
            content is statically generated but revalidated every 10 seconds,
            providing the benefits of static generation with fresh content.
          </p>
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-sm text-gray-600">
              <strong>Revalidation Frequency:</strong> Every 10 seconds
              <br />
              <strong>Build Time:</strong> Static generation at build time
              <br />
              <strong>Runtime:</strong> Background revalidation on demand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
