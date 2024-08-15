<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const collectionName = route.params.slug;
</script>

<template>
  <section class="p-16">
    <h1>{{ collectionName }} Collection</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio
      asperiores quia, mollitia excepturi qui explicabo libero voluptate earum
      ipsa fugiat officia quaerat perferendis temporibus eos? Ipsum quo rem
      molestiae sed, voluptatibus labore magni necessitatibus consequuntur!
      Ratione voluptatibus dignissimos provident tenetur quam, cum dolores quod
      architecto consectetur odio obcaecati ex!
    </p>
  </section>
</template>
