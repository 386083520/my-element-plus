<template>

<ell-switch
    v-model="value1"
    active-text="Pay by month"
    inactive-text="Pay by year"/>
{{value1}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('1')
</script>
