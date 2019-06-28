<template>
  <transition-group
    name="list-transition"
    class="flex flex-wrap m-3 list-transition-container"
  >
    <slot />
  </transition-group>
</template>

<script>
export default {};
</script>

<style>
.list-transition-enter,
.list-transition-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-transition-leave-active {
  position: absolute;
}
.list-transition-container > div {
  transition: all 1s;
}
</style>
