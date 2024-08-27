<template>
  <div class="flex h-screen bg-gray-100 dark:bg-gray-900" :class="{ 'dark': isDarkMode }">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <TopBar 
        @toggle-dark-mode="toggleDarkMode" 
        :is-logged-in="isLoggedIn" 
        @login="login"
        @logout="logout"
      />
      <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-800">
        <router-view :is-logged-in="isLoggedIn"></router-view>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from './components/layout/Sidebar.vue'
import TopBar from './components/layout/TopBar.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    TopBar,
    Footer
  },
  setup() {
    const isDarkMode = ref(true)
    const isLoggedIn = ref(false)
    
    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
    }

    const login = () => {
      isLoggedIn.value = true
    }

    const logout = () => {
      isLoggedIn.value = false
    }

    return { 
      isDarkMode, 
      toggleDarkMode, 
      isLoggedIn, 
      login, 
      logout 
    }
  }
}
</script>
