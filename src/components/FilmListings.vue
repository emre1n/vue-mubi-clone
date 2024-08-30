<script setup>
import { ref, watchEffect, watch, computed } from 'vue';
import FilmListing from '@/components/FilmListing.vue';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon.vue';
import { useFetchFilmList } from '@/composables/useFetchFilmList';

import { useFilmListsStore } from '@/stores/filmLists';
import { storeToRefs } from 'pinia';

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

const filmListsStore = useFilmListsStore();
let { films } = useFetchFilmList(props.listName);

// Watch for changes in the films data and update the store
watch(
  films,
  newFilms => {
    if (newFilms) {
      filmListsStore.addFilmList(props.listName, newFilms);
    }
  },
  { immediate: true }
);

// Use storeToRefs to maintain reactivity
const { lists } = storeToRefs(filmListsStore);

films = computed(() => lists.value[props.listName] || []);

const limit = ref(props.limit);

const updateLimit = () => {
  const isSmallScreen = window.matchMedia('(max-width: 640px)').matches;
  const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
  if (props.limit === 0) {
    limit.value = films.value.length;
  } else {
    limit.value = isSmallScreen || isLargeScreen ? 3 : props.limit;
  }
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

      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-1 gap-y-8"
      >
        <FilmListing
          v-for="(film, index) in films.slice(0, limit)"
          :key="film.id"
          :film="film"
        />
      </div>
    </div>
  </div>
</template>
