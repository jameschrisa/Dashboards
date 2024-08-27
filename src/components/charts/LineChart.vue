<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{{ title }}</h3>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

export default defineComponent({
  name: 'LineChart',
  props: {
    title: {
      type: String,
      required: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const chartRef = ref(null)

    onMounted(() => {
      const ctx = chartRef.value.getContext('2d')
      new Chart(ctx, {
        type: 'line',
        data: props.chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: props.title
            }
          }
        }
      })
    })

    return { chartRef }
  }
})
</script>
