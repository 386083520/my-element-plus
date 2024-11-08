<template>
    <div  :class="switchKls">
        <input
        type="checkbox"
        :class="ns.e('input')"
        />
        <span :class="ns.e('core')">
            <div :class="ns.e('action')">

            </div>
        </span>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { switchProps } from './switch'
import { useNamespace } from '@my-element-plus/hooks';
defineOptions({
    name: 'EllSwitch'
})
const ns = useNamespace('switch')
const switchKls = computed(() => [
    ns.b(),
    ns.is('checked', true)
])
</script>
