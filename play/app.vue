<template>

<ell-switch v-model="value1" activeValue="1" inactiveValue="0"/>
{{value1}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('1')
</script>
