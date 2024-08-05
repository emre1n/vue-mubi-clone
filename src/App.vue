<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="relative">
    <Navbar />
    <RouterView />
  </div>
</template>
