<template>
    <label>
        <input type="radio"/>
        <span>
            <slot></slot>
        </span>
    </label>
</template>
<script lang="ts" setup>
defineOptions({
    name: 'EllRadioButton'
})
</script>