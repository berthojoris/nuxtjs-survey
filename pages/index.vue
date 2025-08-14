<script setup lang="ts">
// SEO configuration
useHead({
  title: 'Survey App - Modern Data Collection Platform',
  meta: [
    { name: 'description', content: 'Create and manage surveys with our modern, user-friendly platform built with Nuxt.js v4' }
  ]
})

// Remove theme toggle as it's now in the layout

// Sample form data for demo
const formData = ref({
  name: '',
  email: '',
  feedback: '',
  rating: ''
})

const handleSubmit = () => {
  // This would typically send data to a server API
  console.log('Form submitted:', formData.value)
  // Reset form
  formData.value = { name: '', email: '', feedback: '', rating: '' }
}
</script>

<template>
  <div>
      <!-- Hero Section -->
      <section class="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div class="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <div class="badge badge-secondary">New Release</div>
          <h1 class="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Create Beautiful Surveys
            <span class="text-primary">Effortlessly</span>
          </h1>
          <p class="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Build, distribute, and analyze surveys with our modern platform. 
            Powered by Nuxt.js v4 for lightning-fast performance and seamless user experience.
          </p>
          <div class="space-x-4">
            <button class="btn btn-default btn-lg">Get Started</button>
            <button class="btn btn-outline btn-lg">Learn More</button>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section id="features" class="container space-y-6 bg-slate-50 dark:bg-slate-900/50 py-8 md:py-12 lg:py-24">
        <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to create, manage, and analyze surveys effectively.
          </p>
        </div>
        <div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div class="card relative overflow-hidden p-6">
            <div class="flex h-[180px] flex-col justify-between rounded-md">
              <div class="space-y-2">
                <h3 class="font-bold">Drag & Drop Builder</h3>
                <p class="text-sm text-muted-foreground">
                  Create surveys with our intuitive drag-and-drop interface. No coding required.
                </p>
              </div>
            </div>
          </div>
          <div class="card relative overflow-hidden p-6">
            <div class="flex h-[180px] flex-col justify-between rounded-md">
              <div class="space-y-2">
                <h3 class="font-bold">Real-time Analytics</h3>
                <p class="text-sm text-muted-foreground">
                  Get instant insights with beautiful charts and real-time response tracking.
                </p>
              </div>
            </div>
          </div>
          <div class="card relative overflow-hidden p-6">
            <div class="flex h-[180px] flex-col justify-between rounded-md">
              <div class="space-y-2">
                <h3 class="font-bold">Multi-platform</h3>
                <p class="text-sm text-muted-foreground">
                  Works perfectly on desktop, tablet, and mobile devices with responsive design.
                </p>
              </div>
            </div>
          </div>
          <div class="card relative overflow-hidden p-6">
            <div class="flex h-[180px] flex-col justify-between rounded-md">
              <div class="space-y-2">
                <h3 class="font-bold">Secure & Private</h3>
                <p class="text-sm text-muted-foreground">
                  Enterprise-grade security with GDPR compliance and data encryption.
                </p>
              </div>
            </div>
          </div>
          <div class="card relative overflow-hidden p-6">
            <div class="flex h-[180px] flex-col justify-between rounded-md">
              <div class="space-y-2">
                <h3 class="font-bold">Custom Branding</h3>
                <p class="text-sm text-muted-foreground">
                  Customize colors, fonts, and logos to match your brand identity.
                </p>
              </div>
            </div>
          </div>
          <div class="card relative overflow-hidden p-6">
            <div class="flex h-[180px] flex-col justify-between rounded-md">
              <div class="space-y-2">
                <h3 class="font-bold">API Integration</h3>
                <p class="text-sm text-muted-foreground">
                  Connect with your existing tools via our comprehensive REST API.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Demo Section -->
      <section id="demo" class="container py-8 md:py-12 lg:py-24">
        <div class="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 class="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Try it yourself
          </h2>
          <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Experience our survey platform with this interactive demo.
          </p>
        </div>
        <div class="mx-auto mt-8 max-w-[800px]">
          <div class="card p-8">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-2">
                <h3 class="text-2xl font-bold">Customer Feedback Survey</h3>
                <p class="text-muted-foreground">Help us improve our services by sharing your thoughts.</p>
              </div>
              
              <div class="grid gap-4 md:grid-cols-2">
                <div class="space-y-2">
                  <label for="name" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Full Name
                  </label>
                  <input 
                    id="name"
                    v-model="formData.name"
                    class="input" 
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label for="email" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Email Address
                  </label>
                  <input 
                    id="email"
                    v-model="formData.email"
                    type="email"
                    class="input" 
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              
              <div class="space-y-2">
                <label for="rating" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Overall Rating
                </label>
                <select id="rating" v-model="formData.rating" class="select" required>
                  <option value="">Select a rating</option>
                  <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                  <option value="4">⭐⭐⭐⭐ Good</option>
                  <option value="3">⭐⭐⭐ Average</option>
                  <option value="2">⭐⭐ Poor</option>
                  <option value="1">⭐ Very Poor</option>
                </select>
              </div>
              
              <div class="space-y-2">
                <label for="feedback" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Additional Feedback
                </label>
                <textarea 
                  id="feedback"
                  v-model="formData.feedback"
                  class="textarea" 
                  placeholder="Share your thoughts and suggestions..."
                  rows="4"
                ></textarea>
              </div>
              
              <div class="flex gap-4">
                <button type="submit" class="btn btn-default flex-1">
                  Submit Feedback
                </button>
                <button type="button" class="btn btn-outline" @click="formData = { name: '', email: '', feedback: '', rating: '' }">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    <!-- Footer -->
    <footer class="border-t py-6 md:py-0">
      <div class="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div class="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div class="flex items-center space-x-2">
            <div class="h-6 w-6 rounded bg-primary flex items-center justify-center">
              <span class="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span class="font-bold">SurveyApp</span>
          </div>
          <p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Nuxt.js v4 and Shadcn UI. © 2024 SurveyApp. All rights reserved.
          </p>
        </div>
        <div class="flex items-center space-x-4">
          <NuxtLink to="#" class="text-sm text-muted-foreground hover:text-foreground">
            Privacy
          </NuxtLink>
          <NuxtLink to="#" class="text-sm text-muted-foreground hover:text-foreground">
            Terms
          </NuxtLink>
          <NuxtLink to="#" class="text-sm text-muted-foreground hover:text-foreground">
            Contact
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>