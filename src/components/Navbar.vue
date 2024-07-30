<script setup>
import MubiLogo from '@/components/MubiLogo.vue';
import HamburgerIcon from '@/components/HamburgerIcon.vue';
</script>

<template>
  <nav class="flex justify-center items-center h-14 border-b px-5">
    <div
      class="flex justify-between items-center w-full max-w-3xl lg:max-w-6xl"
    >
      <HamburgerIcon class="flex lg:hidden" />
      <a href="index.html">
        <MubiLogo />
      </a>
      <div class="flex items-center gap-5">
        <div class="hidden lg:flex gap-5">
          <a
            href="index.html"
            class="text-base-300 font-work font-medium hover:text-base-100"
            >NOW SHOWING</a
          >
          <a
            href="notebook.html"
            class="text-base-300 font-work font-medium hover:text-base-100"
            >NOTEBOOK</a
          >
        </div>
        <a
          href="login.html"
          class="text-base-300 font-work font-medium hover:text-base-100"
          >LOGIN</a
        >
        <HamburgerIcon class="hidden lg:flex" />
      </div>
    </div>
  </nav>
</template>
