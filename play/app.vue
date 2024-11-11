<template>

<ell-switch
    v-model="value1"
    :inlinePrompt="true"
    style="--ell-switch-on-color: #13ce66; --ell-switch-off-color: #ff4949"
    active-text="是发大水发生大的书法大赛"
    inactive-text="否范德萨发大水发"/>
{{value1}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('1')
</script>
