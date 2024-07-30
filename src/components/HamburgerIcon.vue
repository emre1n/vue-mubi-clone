<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <button
    @click="toggleMenu"
    class="p-2 rounded-md"
    :aria-expanded="isOpen"
    aria-label="Toggle menu"
  >
    <svg
      viewBox="0 0 14 14"
      :fill="isOpen ? '#323232' : '#7d7d7d'"
      width="14"
      height="14"
      class="transition-transform duration-300 ease-in-out"
    >
      <rect id="Rectangle" x="0" y="5.75" width="14" height="2.5" rx="1.25" />
      <rect
        id="Rectangle-Copy"
        x="0"
        y="11.5"
        width="14"
        height="2.5"
        rx="1.25"
      />
      <rect
        id="Rectangle-Copy-2"
        x="0"
        y="0"
        width="14"
        height="2.5"
        rx="1.25"
      />
    </svg>
  </button>
</template>
