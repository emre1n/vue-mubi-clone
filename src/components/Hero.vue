<script setup>
import { MediaPlayer } from 'dashjs';
import Button from '@/components/ui/Button.vue';
import heroBackground from '@/assets/img/hero-w1280.webp';
import { ref, onMounted } from 'vue';

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

onMounted(() => {
  let url =
    'https://videos.mubicdn.net/preview/f5d1660dca6d4873716e126b6718a02c/66a9386a/fa57f82c/616/708/mubi-films/173000/bergman-island_eng_zxx_1920x960_50000_mezz37316/007afea484/playlist.e130d2bf80.ism/default/ver1.AVC1.2160p.mpd';
  let player = MediaPlayer().create();
  player.initialize(document.querySelector('#videoPlayer'), url, true);
});
</script>

<template>
  <section class="relative">
    <!-- <img
      :src="heroBackground"
      :alt="altText"
      class="w-full h-screen object-cover object-left lg:object-center"
    /> -->
    <video
      id="videoPlayer"
      class="w-full h-screen object-none object-center"
      autoplay
      muted
    ></video>

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
