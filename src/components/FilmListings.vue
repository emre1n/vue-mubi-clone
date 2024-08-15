<script setup>
import { ref, watchEffect, RouterLink } from 'vue';
import FilmListing from '@/components/FilmListing.vue';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon.vue';
import { useFetchFilms } from '@/composables/useFetchFilms';

const props = defineProps({
  limit: {
    type: Number,
  },
  sectionHeader: {
    type: String,
    default: 'Collection',
  },
  listName: {
    type: String,
    default: 'mubi-releases',
  },
});

const { films } = useFetchFilms(props.listName);

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
  <div class="flex justify-center items-center pt-6 group">
    <div class="flex flex-col gap-1">
      <RouterLink
        :to="'/collections/' + listName"
        class="flex items-center gap-2"
      >
        <div class="text-sm font-bold uppercase cursor-pointer">
          {{ sectionHeader }}
        </div>
        <div
          class="flex items-center gap-1 text-accent text-sm cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity hover:text-black"
        >
          <div>SEE ALL</div>
          <ChevronRightIcon />
        </div>
      </RouterLink>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
        <FilmListing
          v-for="film in films.slice(0, limit || films.length)"
          :key="film.id"
          :film="film"
        />
      </div>
    </div>
  </div>
</template>
