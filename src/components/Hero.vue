<script setup>
import { MediaPlayer } from 'dashjs';
import { ref, onMounted, onUnmounted } from 'vue';
import Button from '@/components/ui/Button.vue';
import heroBackground from '@/assets/img/hero-w1280.webp';

const videoPlayer = ref(null);
const isVideoReady = ref(false);
const isHighQuality = ref(false);

defineProps({
  title: {
    type: String,
    default: 'Featured Film',
  },
  description: {
    type: String,
    default: 'Discover our carefully curated selection of films.',
  },
});

let player;

onMounted(() => {
  const url =
    'https://videos.mubicdn.net/preview/f5d1660dca6d4873716e126b6718a02c/66a9386a/fa57f82c/616/708/mubi-films/173000/bergman-island_eng_zxx_1920x960_50000_mezz37316/007afea484/playlist.e130d2bf80.ism/default/ver1.AVC1.2160p.mpd';
  player = MediaPlayer().create();
  player.initialize(videoPlayer.value, url, false);
  player.setMute(true);

  // Attempt to play immediately
  attemptPlay();

  // Fallback for devices that don't support immediate autoplay
  player.on('canPlay', () => {
    isVideoReady.value = true;
    attemptPlay();
  });

  player.on('qualityChangeRendered', e => {
    // Assuming the highest quality is the last in the list
    const qualities = player.getBitrateInfoListFor('video');
    if (
      e.newQuality === qualities.length - 1 ||
      e.newQuality === qualities.length - 2
    ) {
      isHighQuality.value = true;
    }
  });

  // Add event listeners for user interaction
  document.addEventListener('click', attemptPlay);
  document.addEventListener('touchstart', attemptPlay);
});

onUnmounted(() => {
  document.removeEventListener('click', attemptPlay);
  document.removeEventListener('touchstart', attemptPlay);
  if (player) {
    player.destroy();
  }
});

const attemptPlay = () => {
  if (player && player.isPaused()) {
    player.play().catch(error => {
      console.log('Autoplay was prevented:', error);
    });
  }
};
</script>

<template>
  <section class="relative">
    <img
      :src="heroBackground"
      :alt="altText"
      class="w-full h-screen object-cover object-left lg:object-center"
      v-if="!isVideoReady || !isHighQuality"
    />
    <video
      ref="videoPlayer"
      class="w-full h-screen object-none object-center"
      muted
      loop
      playsinline
      v-show="isVideoReady && isHighQuality"
    ></video>

    <div
      class="absolute h-screen inset-0 bg-black bg-opacity-30 flex items-center justify-center"
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
