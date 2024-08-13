<script setup>
import Hero from '@/components/Hero.vue';
import FilmListings from '@/components/FilmListings.vue';

const featuredFilm = {
  title: 'Memory',
  director: 'Michel Franco',
  country: 'United States',
  year: '2023',
  shortSynopsis:
    'Jessica Chastain and Peter Saarsgard give heartrending performances in this intelligent drama of enduring traumas, clouded judgment, and best intentions. Directed with stark profundity by Michel Franco, the award-winning actors lift Memory from darkness to a place of rare warmth and understanding.',
};
</script>

<template>
  <Hero offer="Try 7 Days Free, then ₺129/month" :featuredFilm="featuredFilm" />
  <FilmListings
    sectionHeader="Mubi releases"
    listName="mubi-releases"
    :limit="4"
  />
  <!-- <FilmListings sectionHeader="New on mubi" listName="new-on-mubi" :limit="4" /> -->
</template>
