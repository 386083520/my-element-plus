<template>
    <label>
        <input type="checkbox"/>
        <span>
            <slot></slot>
        </span>
    </label>
</template>
<script lang="ts" setup>
defineOptions({
    name: 'EllCheckboxButton'
})
</script>