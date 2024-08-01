<script setup>
import { MediaPlayer } from 'dashjs';
import { ref, onMounted, onUnmounted } from 'vue';
import Button from '@/components/ui/Button.vue';
import heroBackground from '@/assets/img/hero-w1280.webp';

const videoPlayer = ref(null);
const isVideoReady = ref(false);
const isHighQuality = ref(false);

defineProps({
  featuredFilm: {
    type: Object,
    default: {
      title: 'Bergman Island',
      director: 'Mia Hansen-Løve',
      country: 'France',
      year: '2021',
      shortSynopsis:
        'Vicky Krieps, Tim Roth, and Mia Wasikowska star in this bewitching fable from Mia Hansen-Løve. Shot on Fårö where Ingmar Bergman made some of his greatest films, this sun-kissed voyage sails across the past and the present, fiction and reality, probing the prickly yet romantic process of artmaking.',
      altText: 'Bergman Island',
    },
  },
  offer: {
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
    if (e.newQuality === qualities.length - 1) {
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
    player.setTextTrack(-1);
    const playPromise = player.play();
    if (playPromise !== undefined) {
      playPromise.catch(error => {
        console.log('Autoplay was prevented:', error);
      });
    }
  }
};
</script>

<template>
  <section class="relative">
    <img
      :src="heroBackground"
      :alt="featuredFilm.altText"
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
      <div class="w-full max-w-md sm:max-w-3xl lg:max-w-6xl text-center p-8">
        <div class="h-96 w-40 sm:w-80">
          <h1 class="text-white text-4xl sm:text-6xl font-bold uppercase mb-4">
            {{ featuredFilm.title }}
          </h1>
        </div>
        <div class="flex flex-col-reverse md:flex-col justify-between h-56">
          <div class="flex flex-col gap-2 sm:gap-3 md:gap-2">
            <h2
              class="text-white font-bold sm:font-normal sm:text-2xl md:text-xl text-start"
            >
              {{ offer }}
            </h2>
            <div class="flex">
              <input
                type="text"
                class="w-48 sm:w-72 py-2 px-3 sm:py-5 sm:px-4 text-base outline-none"
                placeholder="Email address"
              />
              <Button buttonText="WATCH NOW" />
            </div>
          </div>
          <div>
            <div class="flex flex-col">
              <div class="text-white text-sm text-start">
                DIRECTED BY
                <span class="font-bold">{{ featuredFilm.director }}</span>
              </div>
              <div
                class="text-white text-sm font-light leading-tight uppercase text-start"
              >
                {{ featuredFilm.country }} {{ featuredFilm.year }}
              </div>
              <div class="my-10">
                <p class="md:hidden text-white text-sm text-start">
                  {{ featuredFilm.shortSynopsis }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
