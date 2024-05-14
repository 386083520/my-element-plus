<template>
    <button class="ell-button">
        <slot/>
    </button>
</template>
<script setup lang="ts">
    defineOptions({
        name: "EllButton"
    })
</script>