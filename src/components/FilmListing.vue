<script setup>
const props = defineProps({
  film: Object,
});
</script>

<template>
  <div class="relative w-80 h-52">
    <img
      class="object-cover w-full h-full"
      :src="film.stills.standard"
      :alt="film.title"
    />
    <div class="absolute bottom-0 text-white px-5 pb-4">
      <h3 class="uppercase text-xl font-bold leading-tight">
        {{ film.title }}
      </h3>
      <p class="text-xs leading-tight">
        <span class="font-bold">{{ film.directors[0].name_upcase }}</span>
        {{ film.year }}
      </p>
    </div>
  </div>
</template>
