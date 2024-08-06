<template>
    <div :class="[
        ns.b()
    ]">
        <span :class="[ns.e('decrease')]">
            <ell-icon>
                <Minus/>
            </ell-icon>
        </span>
        <span :class="[ns.e('increase')]">
            <ell-icon>
                <Plus/>
            </ell-icon>
        </span>
        <ell-input/>
    </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@my-element-plus/hooks';
import { Minus,Plus } from '@element-plus/icons-vue';
import { inputNumberProps } from './input-number'
const ns = useNamespace('input-number')
defineOptions({
    name: 'EllInputNumber'
})
</script>
