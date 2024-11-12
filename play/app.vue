<template>
    <ell-switch
      v-model="value1"
      :loading="loading1"
      :before-change="beforeChange1"
      @change="handleChange"
    />
    <ell-switch
      disabled
      v-model="value2"
      class="ml-2"
      :loading="loading2"
      :before-change="beforeChange2"
    />
  </template>
  <script lang="ts" setup>
  import { ref } from 'vue'
  import { ElMessage } from 'element-plus'
  
  const value1 = ref(false)
  const value2 = ref(false)
  const loading1 = ref(false)
  const loading2 = ref(false)
  
  const beforeChange1 = () => {
    loading1.value = true
    return true
  }
  
  const beforeChange2 = () => {
    loading2.value = true
    return new Promise((_, reject) => {
      setTimeout(() => {
        loading2.value = false
        ElMessage.error('Switch failed')
        return reject(new Error('Error'))
      }, 1000)
    })
  }

  const handleChange = (val) => {
    console.log(val)
  }
  </script>