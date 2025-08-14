<script setup lang="ts">
// Theme management composable
const colorMode = useColorMode()

// Theme toggle functionality
const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

// SEO and meta configuration
useHead({
  htmlAttrs: {
    lang: 'en',
    class: () => colorMode.value === 'dark' ? 'dark' : ''
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Modern survey application built with Nuxt.js v4 and Shadcn UI' }
  ]
})
</script>

<template>
  <div class="flex flex-col min-h-screen bg-background font-sans antialiased">
    <!-- Header -->
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-14 items-center">
        <div class="mr-4 flex">
          <NuxtLink to="/" class="mr-6 flex items-center space-x-2">
            <div class="h-6 w-6 rounded bg-primary flex items-center justify-center">
              <span class="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span class="font-bold">SurveyApp</span>
          </NuxtLink>
        </div>
        <div class="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav class="flex items-center space-x-6 text-sm font-medium">
            <NuxtLink to="/features" class="transition-colors hover:text-foreground/80 text-foreground/60">
              Features
            </NuxtLink>
            <NuxtLink to="/demo" class="transition-colors hover:text-foreground/80 text-foreground/60">
              Demo
            </NuxtLink>
            <NuxtLink to="/about" class="transition-colors hover:text-foreground/80 text-foreground/60">
              About
            </NuxtLink>
          </nav>
          <div class="flex items-center space-x-2">
            <button 
              @click="toggleTheme"
              class="btn btn-ghost btn-sm btn-icon"
              aria-label="Toggle theme"
            >
              <svg v-if="colorMode.value === 'dark'" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg v-else class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<style>
/* Ensure proper font rendering */
html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>