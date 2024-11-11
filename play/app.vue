<template>

<ell-switch
    v-model="value1"
    :inlinePrompt="true"
    style="--ell-switch-on-color: #13ce66; --ell-switch-off-color: #ff4949"
    active-text="是"
    inactive-text="否"/>
{{value1}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('1')
</script>
