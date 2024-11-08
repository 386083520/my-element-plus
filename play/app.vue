<template>

<ell-switch v-model="value1" />
{{value1}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
</script>
