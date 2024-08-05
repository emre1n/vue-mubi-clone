<script setup>
import FilmListings from '@/components/FilmListings.vue';
import films from '@/data/films.json';
</script>

<template>
  <section class="py-20">
    <FilmListings sectionHeader="Now Showing" :films="films" :limit="8" />
  </section>
</template>
