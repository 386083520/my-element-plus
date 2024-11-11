<template>

<ell-switch
    v-model="value1"
    :active-action-icon="View"
    :inactive-action-icon="Hide"
   />
{{value1}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { View, Hide } from '@element-plus/icons-vue'

const value1 = ref('1')
</script>
