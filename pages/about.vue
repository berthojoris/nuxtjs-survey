<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our Survey Platform
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn more about our mission to revolutionize data collection and insights
          </p>
        </div>

        <!-- Content Sections -->
        <div class="space-y-12">
          <!-- Mission Section -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
              We believe that gathering meaningful insights should be simple, efficient, and accessible to everyone. 
              Our survey platform is designed to empower organizations and individuals to make data-driven decisions 
              with confidence.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Built with modern web technologies including Nuxt.js and Vue.js, our platform delivers a seamless 
              experience for both survey creators and respondents.
            </p>
          </div>

          <!-- Features Section -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 class="font-semibold text-gray-900">User-Friendly Interface</h3>
                    <p class="text-gray-600">Intuitive design that makes creating and taking surveys a breeze</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Real-time Analytics</h3>
                    <p class="text-gray-600">Get instant insights as responses come in</p>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Secure & Reliable</h3>
                    <p class="text-gray-600">Enterprise-grade security to protect your data</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 class="font-semibold text-gray-900">Mobile Responsive</h3>
                    <p class="text-gray-600">Perfect experience across all devices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Technology Section -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Built with Modern Technology</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Our platform leverages cutting-edge web technologies to deliver exceptional performance and user experience:
            </p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-gray-50 rounded-lg p-4 text-center">
                <h3 class="font-semibold text-gray-900 mb-2">Nuxt.js v4</h3>
                <p class="text-sm text-gray-600">Server-side rendering for optimal performance</p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4 text-center">
                <h3 class="font-semibold text-gray-900 mb-2">Vue.js</h3>
                <p class="text-sm text-gray-600">Reactive and component-based architecture</p>
              </div>
              <div class="bg-gray-50 rounded-lg p-4 text-center">
                <h3 class="font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
                <p class="text-sm text-gray-600">Utility-first CSS for rapid development</p>
              </div>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p class="text-lg text-gray-700 leading-relaxed mb-6">
              Have questions or want to learn more about our platform? We'd love to hear from you.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink 
                to="/" 
                class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Back to Home
              </NuxtLink>
              <NuxtLink 
                to="/demo" 
                class="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
              >
                Try Demo
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta
useHead({
  title: 'About Us - Survey Platform',
  meta: [
    {
      name: 'description',
      content: 'Learn about our mission to revolutionize data collection and insights through our modern survey platform built with Nuxt.js and Vue.js.'
    },
    {
      property: 'og:title',
      content: 'About Us - Survey Platform'
    },
    {
      property: 'og:description',
      content: 'Learn about our mission to revolutionize data collection and insights through our modern survey platform.'
    }
  ]
})
</script>