<template>
  <article
    class="card rounded overflow-hidden shadow hover:shadow-lg bg-white relative hover:zoom"
  >
    <Ribbon v-if="ribbon" :text="ribbon" />
    <img class="w-full" :src="image" :alt="title" />
    <header class="px-6 py-4">
      <h2 class="font-bold text-xl mb-2">
        <span v-html="title" />
      </h2>
    </header>
    <p class="px-6 py-4">
      <slot />
    </p>
    <footer class="px-6 py-4 flex justify-between items-baseline">
      <div class="inline-block bg-gray-200 rounded-full px-3 py-1 mr-2">
        {{ tag }}
      </div>
      <div class="footer opacity-0">
        <slot name="footer" />
      </div>
    </footer>
  </article>
</template>

<script>
import Ribbon from "./ribbon.vue";

export default {
  components: { Ribbon },
  props: {
    image: String,
    title: String,
    ribbon: String,
    tag: String
  }
};
</script>

<style scoped>
.hover\:zoom {
  transition: all .4s ease;
}
.hover\:zoom:hover {
  transform: scale(1.02);
}
.footer {
  transition: all .4s ease;
}
.card:hover .footer {
  opacity: 1;
}
</style>
