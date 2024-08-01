<script setup>
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
    class="px-4 py-3 sm:px-7 sm:py-4 bg-primary text-white text-base sm:text-lg md:text-2xl font-bold hover:bg-primaryLight"
  >
    {{ buttonText }}
  </button>
</template>
