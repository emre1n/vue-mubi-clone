<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useFilmListsStore } from '@/stores/filmLists';

const route = useRoute();
const filmSlug = route.params.slug;

const filmListsStore = useFilmListsStore();
const film = computed(() => filmListsStore.getFilmBySlug(filmSlug));
</script>
<template>
  <div v-if="film">
    <h1>{{ film.film.title }}</h1>
    <img :src="film.film.stills.medium" :alt="film.film.title" />
    <p>Year: {{ film.film.year }}</p>
    <p>Duration: {{ film.film.duration }} minutes</p>
    <p>Genres: {{ film.film.genres.join(', ') }}</p>
    <p>{{ film.film.short_synopsis }}</p>
  </div>
  <div v-else>
    <p>Film not found</p>
  </div>
</template>
