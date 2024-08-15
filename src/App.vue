<script setup>
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="relative py-8">
    <Navbar />
    <RouterView />
  </div>
</template>
