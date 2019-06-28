<template>
  <main class="gradient-bg">
    <Header title="Tour Finder" :links="[{ title: 'Home', url: '#' }]" />

    <div class="my-10 px-8 flex justify-between">
      <div class="w-full md:w-1/2">
        <h1 class="mb-6 text-3xl md:text-4xl text-left font-bold">
          Search for an activity!
        </h1>
        <div class="shadow-lg bg-white">
          <Input v-model="query" placeholder="Try 'Museum' or 'Reichstag'" />
          <footer class="relative border-t p-2">
            <div
              class="text-gray-600 text-xs flex justify-between items-center"
            >
              <label>
                <input type="checkbox" v-model="specialOnly" />
                Only special offers
              </label>
              <Radio
                v-model="sortBy"
                :options="['price', 'rating']"
                label="Sort by"
              />
            </div>
          </footer>
        </div>
      </div>
      <div class="hidden md:block">
        <img class="p-6 w-64" src="./images/undraw_nature_fun_n9lv.svg" />
      </div>
    </div>

    <ListTransition>
      <div
        v-for="tour in results"
        :key="tour.id"
        class="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/4"
      >
        <Card v-bind="tour">
          <Stars :rating="Number(tour.rating)" />
          <Button slot="footer" @click="goTo(tour)">
            I'm interested
          </Button>
        </Card>
      </div>
    </ListTransition>

    <footer class="p-5 text-center text-gray-500 text-xs">
      <img
        src="./images/undraw_travel_plans_li01.svg"
        class="my-6 mx-auto w-56"
      />
      <div>
        © 2019 Tour Finder Corporation All rights reserved.
      </div>
    </footer>
  </main>
</template>

<script>
import Header from "./components/header.vue";
import Card from "./components/card.vue";
import Stars from "./components/stars.vue";
import Input from "./components/input.vue";
import Radio from "./components/radio.vue";
import Button from "./components/button.vue";
import ListTransition from "./components/transition.vue";

import TourFinderAPI from "./API.js";

export default {
  components: { Header, Card, Stars, Input, Radio, Button, ListTransition },
  data() {
    return {
      query: "",
      specialOnly: false,
      sortBy: "rating",
      API: null
    };
  },
  computed: {
    results() {
      return TourFinderAPI.query(this.query, this.specialOnly, this.sortBy);
    }
  },
  methods: {
    goTo(tour) {
      location.href = `https://www.getyourguide.com.br/s/?q=${tour.title}`;
    }
  }
};
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(to bottom, #ebf8ff 0px, #ffffff 251px);
}
</style>
