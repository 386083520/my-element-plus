<template>
  <ell-checkbox-group v-model="checkedCities">
    <ell-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </ell-checkbox>
  </ell-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>