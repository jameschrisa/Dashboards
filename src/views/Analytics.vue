<template>
  <div class="container mx-auto px-6 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Analytics</h2>
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Key Metrics</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-blue-100 dark:bg-blue-900 p-4 rounded">
          <h4 class="font-bold text-gray-800 dark:text-white">Total Users</h4>
          <p class="text-2xl text-gray-800 dark:text-white">10,245</p>
        </div>
        <div class="bg-green-100 dark:bg-green-900 p-4 rounded">
          <h4 class="font-bold text-gray-800 dark:text-white">Revenue</h4>
          <p class="text-2xl text-gray-800 dark:text-white">$52,365</p>
        </div>
        <div class="bg-yellow-100 dark:bg-yellow-900 p-4 rounded">
          <h4 class="font-bold text-gray-800 dark:text-white">Conversion Rate</h4>
          <p class="text-2xl text-gray-800 dark:text-white">3.7%</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Analytics'
}
</script>
