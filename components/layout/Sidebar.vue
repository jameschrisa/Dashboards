<template>
  <div class="w-64 bg-gray-800 dark:bg-gray-900 text-white">
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-6">Dashboard</h1>
      <nav>
        <router-link 
          v-for="item in navigationItems" 
          :key="item.name"
          :to="item.to"
          class="flex items-center py-2 px-4 mb-2 rounded hover:bg-gray-700 dark:hover:bg-gray-800"
          active-class="bg-gray-700 dark:bg-gray-800"
        >
          <component :is="item.icon" class="h-6 w-6 mr-2" />
          {{ item.name }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { HomeIcon, ChartBarIcon, DocumentReportIcon, CogIcon } from '@heroicons/vue/outline'

export default defineComponent({
  name: 'Sidebar',
  setup() {
    const navigationItems = [
      { name: 'Dashboard', to: '/', icon: HomeIcon },
      { name: 'Analytics', to: '/analytics', icon: ChartBarIcon },
      { name: 'Reports', to: '/reports', icon: DocumentReportIcon },
      { name: 'Settings', to: '/settings', icon: CogIcon },
    ]

    return { navigationItems }
  }
})
</script>
