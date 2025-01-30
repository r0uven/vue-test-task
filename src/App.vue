<template>
  <div>
    <h1>Создание сущностей в amoCRM</h1>
    <Dropdown  :options="entities" v-model="selectedEntity"/>
    <Loader v-if="isLoading"/>
    <Button v-else :disabled="!isEntitySelected" @click=createEntity>
      Создать
    </Button>
    <ResultArea :results="results"/>
    </div>
</template>



<script setup lang="ts">
import { ref, computed } from 'vue';
import { useEntityStore } from './stores/entityStore';
import Dropdown from './components/Dropdown.vue';
import Button from './components/Button.vue';
import ResultArea from './components/ResultArea.vue';
import Loader from './components/Loader.vue';

const entities = ['Не выбрано', 'Сделка', 'Контакт', 'Компания'];
const selectedEntity = ref('Не выбрано');
const isEntitySelected = computed(() => selectedEntity.value !== "Не выбрано");

const entityStore = useEntityStore();
const results = entityStore.results;

const isLoading = ref(false)

const createEntity = async () => {
  isLoading.value = true;
  // Симуляция загрузки (например, асинхронный запрос)
  setTimeout(() => {
        isLoading.value = false; // Скрываем Loader через 3 секунды
      }, 3000);
  if (selectedEntity.value !== 'Не выбрано') {
    await entityStore.createEntity(selectedEntity.value);
  }
}

</script>



<style scoped>

</style>
