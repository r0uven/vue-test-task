<template>
    <button :disabled="disabled">
        <slot>Создать</slot>
    </button>
</template>


<script setup lang="ts">
defineProps<{
    disabled?: boolean;
}>();
</script>

<style scoped>
    button {
        padding: 10px 20px;
        background-color:#007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    button:disabled{
        background-color: #ccc;
        cursor: not-allowed;
    }
</style>