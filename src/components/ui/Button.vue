<script setup>
import { defineProps } from 'vue';

defineProps({
  buttonText: {
    type: String,
    default: 'Click me',
  },
});

const handleClick = () => {
  console.log('Button clicked');
};
</script>

<template>
  <button
    @click="handleClick"
    class="px-6 py-3 bg-primary text-white font-bold hover:bg-primaryLight"
  >
    {{ buttonText }}
  </button>
</template>
