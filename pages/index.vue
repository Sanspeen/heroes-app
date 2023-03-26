<template>
  <h1>Hello world</h1>
</template>

<script>
export default {
  name: "IndexPage",
  mounted: function () {
    this.fetchHeroesData();
  },
  methods: {
    async fetchHeroesData() {
      const data = await this.$axios.$get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a159b8cedeb821cb1eb1f1b0406129c1&hash=8204cad645161d8cf403bc8fa5318f1e"
      );
      const heroes = data.data
    },
  },
};
</script>
