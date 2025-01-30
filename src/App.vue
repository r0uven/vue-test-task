<template>
  <div>
    <h1>Создание сущностей в amoCRM</h1>
    <Dropdown  :options="entities" v-model="selectedEntity"/>
    <Button :disabled="!isEntitySelected" @click=createEntity>
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

const entities = ['Не выбрано', 'Сделка', 'Контакт', 'Компания'];
const selectedEntity = ref('Не выбрано');
const isEntitySelected = computed(() => selectedEntity.value !== "Не выбрано");

const entityStore = useEntityStore();
const results = entityStore.results;

const createEntity = async () => {
  if (selectedEntity.value !== 'Не выбрано') {
    await entityStore.createEntity(selectedEntity.value);
  }
}

</script>



<style scoped>

</style>
