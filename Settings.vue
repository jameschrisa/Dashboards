<template>
  <div class="container mx-auto px-6 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Settings</h2>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Theme</h3>
      <div class="flex items-center">
        <span class="mr-3 text-gray-600 dark:text-gray-300">Light</span>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" v-model="isDarkMode" class="sr-only peer">
          <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <span class="ml-3 text-gray-600 dark:text-gray-300">Dark</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'

export default {
  name: 'Settings',
  setup() {
    const isDarkMode = ref(true)

    watch(isDarkMode, (newValue) => {
      // Here you would typically update your app's theme
      console.log('Dark mode:', newValue)
    })

    return { isDarkMode }
  }
}
</script>
