<template>
  <div :title="altText">
    <span class="text-yellow-500">
      <template v-for="i in 5">
        <template v-if="i > rating">
          ☆
        </template>
        <template v-else>
          ★
        </template>
      </template>
    </span>
    <span class="ml-3">
      {{ rating }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number
  },
  computed: {
    altText() {
      return `Rating: ${this.rating}`;
    }
  }
};
</script>
