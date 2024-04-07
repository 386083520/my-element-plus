<template>
    <div class="el-card is-always-shadow">
        <div class="el-card__header" v-if="$slots.header || header">
            <slot name="header">{{header}}</slot>
        </div>
        <div class="el-card__body">
            <slot/>
        </div>
        <div class="el-card__footer" v-if="$slots.footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
    defineOptions({
        name: 'EllCard'
    })
    defineProps({
        header: {
            type: String,
            default: ''
        }
    })
</script>
<style>
    .el-card {
        border: 1px solid #e4e7ed;
        color: #303133;
        border-radius: 4px;
    }
    .el-card__header {
        padding: 18px 20px;
        border-bottom: 1px solid #e4e7ed;
    }
    .el-card__body {
        padding: 20px;
    }
    .el-card__footer {
        padding: 18px 20px;
        border-top: 1px solid #e4e7ed;
    }
    .el-card.is-always-shadow {
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
    }
</style>