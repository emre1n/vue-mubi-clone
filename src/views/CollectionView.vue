<script setup>
import { useRoute } from 'vue-router';
import FilmListings from '@/components/FilmListings.vue';

const route = useRoute();
const collectionName = route.params.slug;
</script>

<template>
  <section>
    <h1>{{ collectionName }} Collection</h1>
    <FilmListings
      sectionHeader="Mubi releases"
      :listName="collectionName"
      :limit="0"
    />
  </section>
</template>
