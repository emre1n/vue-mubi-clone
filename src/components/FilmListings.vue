<script setup>
import { defineProps, ref, watchEffect } from 'vue';

const props = defineProps({
  films: {
    type: Array,
    default: () => [],
  },
  limit: {
    type: Number,
  },
});

const limit = ref(props.limit);

const updateLimit = () => {
  const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
  const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
  limit.value = isSmallScreen || isLargeScreen ? 3 : props.limit;
};

watchEffect(() => {
  updateLimit();
  window.addEventListener('resize', updateLimit);
  return () => window.removeEventListener('resize', updateLimit);
});
</script>

<template>
  <div class="flex justify-center items-center pt-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
      <div
        class="relative w-80 h-52"
        v-for="film in props.films.slice(0, limit || props.films.length)"
        :key="film.id"
      >
        <img
          class="object-cover w-full h-full"
          :src="film.artworks[0].image_url"
          :alt="films.title"
        />
        <div class="absolute bottom-0 text-white px-5 pb-4">
          <h3 class="uppercase text-xl font-bold leading-tight">
            {{ film.title }}
          </h3>
          <p class="text-xs leading-tight">
            <span class="font-bold">{{ film.director }}</span> {{ film.year }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
