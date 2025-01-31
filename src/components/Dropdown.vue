<template>
  <select v-model="selectedOption">
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  options: string[];
}>();

const emit = defineEmits(['update:modelValue']);

const selectedOption = ref(props.options[0]);

watch(selectedOption, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style scoped>
  select{
    height: 41px;
    width: 200px;
  }
</style>