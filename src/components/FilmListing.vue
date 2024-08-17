<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  film: Object,
});
</script>

<template>
  <RouterLink :to="`/films/${film.film.slug}`" class="relative w-80 h-52">
    <img
      class="object-cover w-full h-full"
      :src="film.film.stills.standard"
      :alt="film.title"
    />
    <div class="absolute bottom-0 text-white px-5 pb-4">
      <h3 class="uppercase text-xl font-bold leading-tight">
        {{ film.film.title }}
      </h3>
      <p class="text-xs leading-tight">
        <span class="font-bold">{{ film.film.directors[0].name_upcase }}</span>
        {{ film.film.year }}
      </p>
    </div>
  </RouterLink>
</template>
