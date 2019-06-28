<template>
  <div class="absolute top-0 right-0 truncate w-40 h-40 text-white uppercase">
    <div class="absolute bg-blue-500 shadow-lg py-1 px-24 text-xs ribbon">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>

<style scoped>
.ribbon {
  top: 20px;
  transform: rotate(45deg);
}
</style>
