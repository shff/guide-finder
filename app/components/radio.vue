<template>
  <span>
    <label>{{ label }}:</label>
    <template v-for="option in options">
      <div
        class="inline-block p-1 rounded cursor-pointer"
        :class="{ border: value == option }"
        @click="$emit('input', option)"
      >
        {{ option }}
      </div>
    </template>
  </span>
</template>

<script>
export default {
  props: {
    value: String,
    options: Array,
    label: String
  }
};
</script>
