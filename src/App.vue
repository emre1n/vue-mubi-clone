<script setup>
import Navbar from '@/components/Navbar.vue';
import Hero from '@/components/Hero.vue';
import FilmListings from '@/components/FilmListings.vue';

const featuredFilm = {
  title: 'Bergman Island',
  director: 'Mia Hansen-Løve',
  country: 'France',
  year: '2021',
  shortSynopsis:
    'Vicky Krieps, Tim Roth, and Mia Wasikowska star in this bewitching fable from Mia Hansen-Løve. Shot on Fårö where Ingmar Bergman made some of his greatest films, this sun-kissed voyage sails across the past and the present, fiction and reality, probing the prickly yet romantic process of artmaking.',
};

const films = [
  {
    id: 1,
    title: 'Bergman Island',
    director: 'Mia Hansen-Løve',
    year: '2021',
    artworks: [
      {
        format: 'tile_artwork',
        locale: null,
        image_url:
          'https://assets.mubicdn.net/images/artworks/664932/images-original.png?1707224847',
      },
    ],
  },
  {
    id: 2,
    title: 'The French Dispatch',
    director: 'Wes Anderson',
    year: '2021',
    artworks: [
      {
        format: 'tile_artwork',
        locale: null,
        image_url:
          'https://assets.mubicdn.net/images/artworks/664932/images-original.png?1707224847',
      },
    ],
  },
  {
    id: 3,
    title: 'The Souvenir',
    director: 'Joanna Hogg',
    year: '2019',
    artworks: [
      {
        format: 'tile_artwork',
        locale: null,
        image_url:
          'https://assets.mubicdn.net/images/artworks/664932/images-original.png?1707224847',
      },
    ],
  },
  {
    id: 4,
    title: 'The Souvenir: Part II',
    director: 'Joanna Hogg',
    year: '2021',
    artworks: [
      {
        format: 'tile_artwork',
        locale: null,
        image_url:
          'https://assets.mubicdn.net/images/artworks/664932/images-original.png?1707224847',
      },
    ],
  },
  {
    id: 5,
    title: 'The Velvet Underground',
    director: 'Todd Haynes',
    year: '2021',
    artworks: [
      {
        format: 'tile_artwork',
        locale: null,
        image_url:
          'https://assets.mubicdn.net/images/artworks/664932/images-original.png?1707224847',
      },
    ],
  },
  {
    id: 6,
    title: 'The Worst Person in the World',
    director: 'Joachim Trier',
    year: '2021',
    artworks: [
      {
        format: 'tile_artwork',
        locale: null,
        image_url:
          'https://assets.mubicdn.net/images/artworks/664932/images-original.png?1707224847',
      },
    ],
  },
];
</script>

<template>
  <div class="relative">
    <Navbar />
    <Hero
      offer="Try 7 Days Free, then ₺129/month"
      :featuredFilm="featuredFilm"
    />
    <FilmListings :films="films" :limit="4" />
  </div>
</template>
