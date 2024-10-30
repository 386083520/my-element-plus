<template>
  <ell-checkbox
    v-model="checkAll"
    disabled
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  >
    Check all
  </ell-checkbox>
  <ell-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <ell-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </ell-checkbox>
  </ell-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
</script>