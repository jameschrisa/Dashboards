<template>
  <div class="container mx-auto px-6 py-8">
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Dashboard Overview</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <LineChart title="Monthly Sales" :chart-data="monthlySalesData" />
      <BarChart title="Product Performance" :chart-data="productPerformanceData" />
      <PieChart title="Customer Segmentation" :chart-data="customerSegmentationData" />
      <DoughnutChart title="Revenue Sources" :chart-data="revenueSourcesData" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import LineChart from '../components/charts/LineChart.vue'
import BarChart from '../components/charts/BarChart.vue'
import PieChart from '../components/charts/PieChart.vue'
import DoughnutChart from '../components/charts/DoughnutChart.vue'

export default defineComponent({
  name: 'Dashboard',
  components: {
    LineChart,
    BarChart,
    PieChart,
    DoughnutChart
  },
  setup() {
    const monthlySalesData = ref({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    })

    const productPerformanceData = ref({
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      datasets: [{
        label: 'Sales',
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
      }]
    })

    const customerSegmentationData = ref({
      labels: ['New', 'Returning', 'Inactive'],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ]
      }]
    })

    const revenueSourcesData = ref({
      labels: ['Online', 'Retail', 'Direct'],
      datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ]
      }]
    })

    return {
      monthlySalesData,
      productPerformanceData,
      customerSegmentationData,
      revenueSourcesData
    }
  }
})
</script>
