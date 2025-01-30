<template>
    <div>
      <h2>Результаты:</h2>
      <ul>
        <li v-for="result in results" :key="result.entityId">
          {{ result.entityType }}: {{ result.entityId }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    results: { entityType: string; entityId: number }[];
  }>();
  </script>