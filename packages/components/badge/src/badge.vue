<template>
    <div>
        <slot/>
        <sup>
            8
        </sup>
    </div>
</template>
<script setup lang="ts">
defineOptions({
    name: "EllBadge"
})
</script>