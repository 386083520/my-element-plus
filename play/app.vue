<template>

<ell-switch
    v-model="value1"
    
   >
   <template #active-action>
      <span class="custom-active-action">T</span>
    </template>
    <template #inactive-action>
      <span class="custom-inactive-action">F</span>
    </template>
   </ell-switch>
{{value1}}
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { View, Hide } from '@element-plus/icons-vue'

const value1 = ref('1')
</script>
