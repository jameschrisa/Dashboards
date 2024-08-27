<template>
  <footer class="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
    <div class="container mx-auto px-6 py-4">
      <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div v-for="(column, index) in footerColumns" :key="index" class="mb-4">
          <h5 class="font-medium mb-2 uppercase">{{ column.title }}</h5>
          <ul class="list-none mb-0">
            <li v-for="(link, linkIndex) in column.links" :key="linkIndex" class="mb-1">
              <a :href="link.url" class="hover:text-gray-800 dark:hover:text-white transition-colors duration-200">
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center p-4 bg-gray-300 dark:bg-gray-700">
      © {{ currentYear }} Your Company Name. All rights reserved.
    </div>
  </footer>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Footer',
  setup() {
    const footerColumns = [
      {
        title: 'About',
        links: [
          { text: 'Company', url: '#' },
          { text: 'Team', url: '#' },
          { text: 'Careers', url: '#' }
        ]
      },
      {
        title: 'Support',
        links: [
          { text: 'Help Center', url: '#' },
          { text: 'Contact Us', url: '#' },
          { text: 'FAQ', url: '#' }
        ]
      },
      {
        title: 'Legal',
        links: [
          { text: 'Privacy Policy', url: '#' },
          { text: 'Terms of Use', url: '#' },
          { text: 'Cookie Policy', url: '#' }
        ]
      },
      {
        title: 'Documentation',
        links: [
          { text: 'API', url: '#' },
          { text: 'Guides', url: '#' },
          { text: 'Resources', url: '#' }
        ]
      },
      {
        title: 'Connect',
        links: [
          { text: 'Twitter', url: '#' },
          { text: 'LinkedIn', url: '#' },
          { text: 'GitHub', url: '#' }
        ]
      }
    ]

    const currentYear = computed(() => new Date().getFullYear())

    return {
      footerColumns,
      currentYear
    }
  }
})
</script>
