import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">DashboardApp</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/api/auth/signin"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Our App
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Experience the best dashboard for your needs. Secure, optimized, and
            built with modern technologies.
          </p>

          <div className="flex justify-center mb-12">
            <Image
              src="/next.svg"
              alt="Hero Image"
              width={400}
              height={200}
              priority={true}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/dashboard"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg"
            >
              Go to Dashboard
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Secure Authentication
              </h3>
              <p className="text-gray-600">
                NextAuth.js with multiple providers including Google OAuth
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Optimized Performance
              </h3>
              <p className="text-gray-600">
                SSR, ISR, and dynamic imports for lightning-fast loading
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                👥
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Role-based Access
              </h3>
              <p className="text-gray-600">
                Admin and user roles with protected routes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
