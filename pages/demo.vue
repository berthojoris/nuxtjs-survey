<template>
  <div class="min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Interactive Demo
          </h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience our survey platform in action with this interactive demonstration
          </p>
        </div>

        <!-- Demo Survey -->
        <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">Sample Survey: Customer Satisfaction</h2>
            <p class="text-gray-600">This is a demonstration of how surveys look and feel on our platform.</p>
          </div>

          <!-- Progress Bar -->
          <div class="mb-8" v-if="currentQuestion <= totalQuestions">
            <div class="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{{ progressPercentage }}%</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2">
              <div 
                class="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                :style="{ width: progressPercentage + '%' }"
              ></div>
            </div>
          </div>

          <!-- Question 1 -->
          <div v-if="currentQuestion === 1" class="space-y-6">
            <h3 class="text-xl font-semibold text-gray-900">1. How would you rate your overall experience with our service?</h3>
            <div class="space-y-3">
              <label v-for="option in ratingOptions" :key="option.value" class="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="radio" 
                  :value="option.value" 
                  v-model="answers.rating" 
                  class="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                >
                <span class="text-gray-700">{{ option.label }}</span>
              </label>
            </div>
          </div>

          <!-- Question 2 -->
          <div v-if="currentQuestion === 2" class="space-y-6">
            <h3 class="text-xl font-semibold text-gray-900">2. Which features do you find most valuable? (Select all that apply)</h3>
            <div class="space-y-3">
              <label v-for="feature in features" :key="feature" class="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  :value="feature" 
                  v-model="answers.features" 
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                >
                <span class="text-gray-700">{{ feature }}</span>
              </label>
            </div>
          </div>

          <!-- Question 3 -->
          <div v-if="currentQuestion === 3" class="space-y-6">
            <h3 class="text-xl font-semibold text-gray-900">3. How likely are you to recommend our platform to others?</h3>
            <div class="space-y-4">
              <div class="flex justify-between text-sm text-gray-600">
                <span>Not likely</span>
                <span>Very likely</span>
              </div>
              <div class="flex space-x-2">
                <button 
                  v-for="score in 11" 
                  :key="score - 1"
                  @click="answers.nps = score - 1"
                  :class="[
                    'w-10 h-10 rounded-full border-2 transition-colors',
                    answers.nps === score - 1 
                      ? 'bg-blue-600 border-blue-600 text-white' 
                      : 'border-gray-300 text-gray-700 hover:border-blue-400'
                  ]"
                >
                  {{ score - 1 }}
                </button>
              </div>
            </div>
          </div>

          <!-- Question 4 -->
          <div v-if="currentQuestion === 4" class="space-y-6">
            <h3 class="text-xl font-semibold text-gray-900">4. Any additional comments or suggestions?</h3>
            <textarea 
              v-model="answers.comments" 
              rows="4" 
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Please share your thoughts..."
            ></textarea>
          </div>

          <!-- Thank You -->
          <div v-if="currentQuestion === 5" class="text-center space-y-6">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Thank You!</h3>
            <p class="text-gray-600">Your responses have been recorded. This was just a demo - no actual data was collected.</p>
            <div class="bg-gray-50 rounded-lg p-4 text-left">
              <h4 class="font-semibold text-gray-900 mb-2">Your Demo Responses:</h4>
              <ul class="space-y-1 text-sm text-gray-600">
                <li><strong>Rating:</strong> {{ getRatingLabel(answers.rating) }}</li>
                <li><strong>Features:</strong> {{ answers.features.join(', ') || 'None selected' }}</li>
                <li><strong>NPS Score:</strong> {{ answers.nps !== null ? answers.nps : 'Not answered' }}</li>
                <li><strong>Comments:</strong> {{ answers.comments || 'No comments' }}</li>
              </ul>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between mt-8" v-if="currentQuestion <= 4">
            <button 
              @click="previousQuestion" 
              :disabled="currentQuestion === 1"
              :class="[
                'px-6 py-2 rounded-md transition-colors',
                currentQuestion === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-gray-300 text-gray-700 hover:bg-gray-400'
              ]"
            >
              Previous
            </button>
            <button 
              @click="nextQuestion" 
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {{ currentQuestion === 4 ? 'Submit' : 'Next' }}
            </button>
          </div>

          <!-- Reset Button -->
          <div class="text-center mt-8" v-if="currentQuestion === 5">
            <button 
              @click="resetDemo" 
              class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>

        <!-- Demo Features -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Demo Features Showcased</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Progress Tracking</h3>
                  <p class="text-gray-600 text-sm">Visual progress bar showing completion status</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Multiple Question Types</h3>
                  <p class="text-gray-600 text-sm">Radio buttons, checkboxes, NPS scale, and text areas</p>
                </div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Responsive Design</h3>
                  <p class="text-gray-600 text-sm">Works perfectly on desktop, tablet, and mobile</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-6 h-6 bg-green-500 rounded-full flex-shrink-0 mt-1">
                  <svg class="w-4 h-4 text-white m-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900">Real-time Validation</h3>
                  <p class="text-gray-600 text-sm">Instant feedback and response summary</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="text-center mt-8">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink 
              to="/features" 
              class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View All Features
            </NuxtLink>
            <NuxtLink 
              to="/" 
              class="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
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
  title: 'Demo - Survey Platform',
  meta: [
    {
      name: 'description',
      content: 'Try our interactive survey demo to experience the user-friendly interface, multiple question types, and real-time features of our platform.'
    },
    {
      property: 'og:title',
      content: 'Interactive Demo - Survey Platform'
    },
    {
      property: 'og:description',
      content: 'Experience our survey platform with an interactive demo featuring multiple question types and real-time validation.'
    }
  ]
})

// Demo state
const currentQuestion = ref(1)
const totalQuestions = 4

// Computed properties
const progressPercentage = computed(() => {
  return Math.min(Math.round((currentQuestion.value / totalQuestions) * 100), 100)
})

const answers = ref({
  rating: '',
  features: [],
  nps: null,
  comments: ''
})

const ratingOptions = [
  { value: 'excellent', label: 'Excellent' },
  { value: 'good', label: 'Good' },
  { value: 'average', label: 'Average' },
  { value: 'poor', label: 'Poor' },
  { value: 'terrible', label: 'Terrible' }
]

const features = [
  'Drag & Drop Builder',
  'Real-time Analytics',
  'Mobile Optimization',
  'API Integration',
  'Custom Branding',
  'Export Options'
]

// Methods
const nextQuestion = () => {
  if (currentQuestion.value < totalQuestions + 1) {
    currentQuestion.value++
  }
}

const previousQuestion = () => {
  if (currentQuestion.value > 1) {
    currentQuestion.value--
  }
}

const resetDemo = () => {
  currentQuestion.value = 1
  answers.value = {
    rating: '',
    features: [],
    nps: null,
    comments: ''
  }
}

const getRatingLabel = (value) => {
  const option = ratingOptions.find(opt => opt.value === value)
  return option ? option.label : 'Not answered'
}
</script>