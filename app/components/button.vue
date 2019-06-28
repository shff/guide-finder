<template>
  <button
    class="bg-blue-500 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-400 hover:border-blue-500 rounded"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {};
</script>
