<template>
  <ell-checkbox v-model="checked3" label="Option1" border size="large"/>
  <ell-checkbox v-model="checked4" label="Option2" border />
  <ell-checkbox v-model="checked3" label="Option1" border size="small"/>

</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked3 = ref(false)
const checked4 = ref(false)
</script>
