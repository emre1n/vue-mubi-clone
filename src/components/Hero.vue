<script setup>
import Button from '@/components/ui/Button.vue';
import heroBackground from '@/assets/img/hero-w1280.webp';

defineProps({
  altText: {
    type: String,
    default: 'Film of the day',
  },
  title: {
    type: String,
    default: 'Featured Film',
  },
  description: {
    type: String,
    default: 'Discover our carefully curated selection of films.',
  },
});
</script>

<template>
  <section class="relative">
    <img
      :src="heroBackground"
      :alt="altText"
      class="w-full h-screen object-cover object-left lg:object-center"
    />

    <div
      class="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center"
    >
      <div class="text-center text-white p-4">
        <h1 class="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          {{ title }}
        </h1>
        <p class="text-lg md:text-2xl mb-8">{{ description }}</p>
        <Button buttonText="WATCH NOW" />
      </div>
    </div>
  </section>
</template>
