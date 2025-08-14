<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h1>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive set of tools and capabilities that make our survey platform 
            the perfect choice for your data collection needs
          </p>
        </div>

        <!-- Features Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <!-- Feature 1 -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Drag & Drop Builder</h3>
            <p class="text-gray-600">Create surveys effortlessly with our intuitive drag-and-drop interface. No coding required.</p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
            <p class="text-gray-600">Monitor responses as they come in with live charts, graphs, and detailed analytics.</p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Mobile Optimized</h3>
            <p class="text-gray-600">Perfect experience across all devices with responsive design and mobile-first approach.</p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
            <p class="text-gray-600">Bank-level security with SSL encryption, GDPR compliance, and data protection.</p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">API Integration</h3>
            <p class="text-gray-600">Connect with your favorite tools through our robust API and webhook system.</p>
          </div>

          <!-- Feature 6 -->
          <div class="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div class="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Export & Share</h3>
            <p class="text-gray-600">Export data in multiple formats (CSV, PDF, Excel) and share insights easily.</p>
          </div>
        </div>

        <!-- Advanced Features Section -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Advanced Capabilities</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Smart Logic & Branching</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Conditional question display
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Skip logic based on responses
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Dynamic question piping
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Custom validation rules
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Question Types</h3>
              <ul class="space-y-2 text-gray-600">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Multiple choice & checkboxes
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Rating scales & matrices
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  File uploads & signatures
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Date pickers & sliders
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="text-center">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p class="text-xl text-gray-600 mb-8">Experience the power of our survey platform today</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/demo" 
              class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Try Demo
            </NuxtLink>
            <NuxtLink 
              to="/" 
              class="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
            >
              Back to Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'Features - Survey Platform',
  meta: [
    {
      name: 'description',
      content: 'Discover powerful features of our survey platform including drag & drop builder, real-time analytics, mobile optimization, and enterprise security.'
    },
    {
      property: 'og:title',
      content: 'Features - Survey Platform'
    },
    {
      property: 'og:description',
      content: 'Explore comprehensive survey tools with drag & drop builder, real-time analytics, and enterprise-grade security.'
    }
  ]
})
</script>