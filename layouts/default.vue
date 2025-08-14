<script setup lang="ts">
// Theme management composable
const colorMode = useColorMode()

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
  <div class="min-h-screen bg-background font-sans antialiased">
    <slot />
  </div>
</template>

<style>
/* Ensure proper font rendering */
html {
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
</style>