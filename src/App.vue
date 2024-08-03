<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import FilmListings from '@/components/FilmListings.vue';
import films from '@/data/films.json';

const featuredFilm = {
  title: 'Bergman Island',
  director: 'Mia Hansen-Løve',
  country: 'France',
  year: '2021',
  shortSynopsis:
    'Vicky Krieps, Tim Roth, and Mia Wasikowska star in this bewitching fable from Mia Hansen-Løve. Shot on Fårö where Ingmar Bergman made some of his greatest films, this sun-kissed voyage sails across the past and the present, fiction and reality, probing the prickly yet romantic process of artmaking.',
};
</script>

<template>
  <div class="relative">
    <Navbar />
    <Hero
      offer="Try 7 Days Free, then ₺129/month"
      :featuredFilm="featuredFilm"
    />
    <FilmListings sectionHeader="New on mubi" :films="films" :limit="4" />
  </div>
</template>
