import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios'; 

export const useEntityStore = defineStore('entity', () => {
  const results = ref<{ entityName: string; entityId: number }[]>([]);

  const createEntity = async (entityName: string, entityType: string,) => {
    try {
      const response = await axios.post('http://localhost:3000/entities', {
        entityType,
      }, {
        headers: {
          'X-Client-Id': '32185358',
        },
      });
  
      const entityId = response.data.entityId;
      results.value.push({ entityName, entityId });
    } catch (error) {
      console.error('Ошибка при создании сущности:', error);
    }
  };

  return { results, createEntity };
});