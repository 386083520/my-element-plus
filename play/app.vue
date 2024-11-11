<template>

<ell-switch
    v-model="value1"
    style="--ell-switch-on-color: #13ce66; --ell-switch-off-color: #ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"/>
{{value1}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('1')
</script>
