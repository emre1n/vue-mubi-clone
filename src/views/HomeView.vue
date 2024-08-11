<script setup>
import { onMounted, ref } from 'vue';
import Hero from '@/components/Hero.vue';
import FilmListings from '@/components/FilmListings.vue';
import axiosInstance from '@/api/axios';
``;
// import { useFilms } from '@/composables/useFilms';

const films = ref([]);
const featuredFilm = {
  title: 'Bergman Island',
  director: 'Mia Hansen-Løve',
  country: 'France',
  year: '2021',
  shortSynopsis:
    'Vicky Krieps, Tim Roth, and Mia Wasikowska star in this bewitching fable from Mia Hansen-Løve. Shot on Fårö where Ingmar Bergman made some of his greatest films, this sun-kissed voyage sails across the past and the present, fiction and reality, probing the prickly yet romantic process of artmaking.',
};

onMounted(async () => {
  try {
    const response = await axiosInstance.get('/browse/films', {
      params: {
        page: 1,
        per_page: 28,
        sort: 'title',
        playable: true,
      },
    });
    films.value = response.data.films;
    console.log('films', films.value);
  } catch (error) {
    console.error('Error fetching films:', error);
  }
});
</script>

<template>
  <Hero offer="Try 7 Days Free, then ₺129/month" :featuredFilm="featuredFilm" />
  <FilmListings sectionHeader="Mubi releases" :films="films" :limit="4" />
  <FilmListings sectionHeader="New on mubi" :films="films" :limit="4" />
</template>
