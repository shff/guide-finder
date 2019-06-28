<template>
  <nav class="bg-gray-100 font-sans m-0 sticky top-0 z-10">
    <div class="bg-white shadow border-t-4 border-orange-500">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between py-4">
          <div class="flex items-center flex-shrink-0 mr-6">
            <span class="font-semibold text-xl tracking-tight">
              {{ title }}
            </span>
          </div>

          <button class="sm:hidden cursor-pointer" @click="open = !open">
            <img
              class="w-6 h-6 text-purple-600"
              src="../images/menu.svg"
              alt="Menu"
            />
          </button>

          <div class="hidden sm:flex sm:items-center">
            <template v-for="link in links">
              <a
                :href="link.url"
                class="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
              >
                {{ link.title }}
              </a>
            </template>
          </div>
        </div>

        <div v-if="open" class="block sm:hidden bg-white border-t-2 py-2">
          <div class="flex flex-col">
            <template v-for="link in links">
              <a
                :href="link.url"
                class="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
              >
                {{ link.title }}
              </a>
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    title: String,
    links: Array
  },
  data() {
    return {
      open: false
    };
  }
};
</script>
