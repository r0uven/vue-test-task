import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useEntityStore = defineStore('entity', () => {
  const results = ref<{ entityType: string; entityId: number }[]>([]);

  const createEntity = async (entityType: string) => {
    // Здесь будет логика создания сущности
    const entityId = Math.floor(Math.random() * 1000); // Заглушка для теста
    results.value.push({ entityType, entityId });
  };

  return { results, createEntity };
});