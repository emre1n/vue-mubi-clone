<script setup>
import MubiLogo from '@/components/MubiLogo.vue';
import HamburgerIcon from '@/components/HamburgerIcon.vue';
</script>

<template>
  <nav
    class="absolute inset-0 z-10 flex justify-center items-center h-14 border-b px-5 bg-white"
  >
    <div
      class="flex justify-between items-center w-full max-w-3xl lg:max-w-6xl"
    >
      <HamburgerIcon class="flex lg:hidden" />
      <a href="/">
        <MubiLogo />
      </a>
      <div class="flex items-center gap-5">
        <div class="hidden lg:flex gap-5">
          <a
            href="/now-showing"
            class="text-base-300 font-work font-medium hover:text-base-100"
            >NOW SHOWING</a
          >
          <a
            href="/notebook"
            class="text-base-300 font-work font-medium hover:text-base-100"
            >NOTEBOOK</a
          >
        </div>
        <a
          href="/login"
          class="text-base-300 font-work font-medium hover:text-base-100"
          >LOGIN</a
        >
        <HamburgerIcon class="hidden lg:flex" />
      </div>
    </div>
  </nav>
</template>
