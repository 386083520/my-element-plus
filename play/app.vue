<template>

<ell-switch
    v-model="value1"
    :active-icon="Check"
    :inactive-icon="Close"
    style="--ell-switch-on-color: #13ce66; --ell-switch-off-color: #ff4949"
   />
{{value1}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Check, Close } from '@element-plus/icons-vue'

const value1 = ref('1')
</script>
