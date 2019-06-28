<template>
  <div class="shadow-lg bg-white">
    <input
      class="appearance-none w-full py-4 px-3 text-2xl"
      type="text"
      v-model="tempValue"
      autofocus
      autocomplete="off"
      :placeholder="placeholder"
    />
    <footer v-if="$slots.default" class="relative border-t p-2">
      <slot />
    </footer>
  </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  props: {
    value: String,
    placeholder: String
  },
  data() {
    return {
      tempValue: ""
    };
  },
  methods: {
    hm() {
      alert("ok");
    }
  },
  watch: {
    tempValue: debounce(function(newValue) {
      this.$emit("input", newValue);
    }, 1000)
  }
};
</script>
