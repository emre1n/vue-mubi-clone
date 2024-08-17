<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const filmName = route.params.slug;
</script>
<template>
  <div class="p-8">
    <h1>{{ filmName }}</h1>
  </div>
</template>
