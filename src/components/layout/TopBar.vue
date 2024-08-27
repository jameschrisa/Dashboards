<template>
  <header class="bg-white dark:bg-gray-800 shadow-md">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <div class="flex items-center">
        <img src="/logo.png" alt="Logo" class="h-8 w-auto">
      </div>
      <div class="flex items-center">
        <button @click="$emit('toggle-dark-mode')" class="mr-4 text-gray-600 dark:text-gray-300">
          <sun-icon v-if="isDarkMode" class="h-6 w-6" />
          <moon-icon v-else class="h-6 w-6" />
        </button>
        <button v-if="!isLoggedIn" @click="$emit('login')" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
        <div v-else class="flex items-center">
          <span class="mr-4 text-gray-600 dark:text-gray-300">Welcome, User!</span>
          <button @click="$emit('logout')" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Logout
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { SunIcon, MoonIcon } from '@heroicons/vue/outline'

export default {
  name: 'TopBar',
  components: {
    SunIcon,
    MoonIcon
  },
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true
    },
    isDarkMode: {
      type: Boolean,
      required: true
    }
  },
  emits: ['toggle-dark-mode', 'login', 'logout']
}
</script>
