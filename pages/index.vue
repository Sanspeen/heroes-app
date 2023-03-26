<template>
  <v-flex d-flex>
    <v-layout wrap>
      <v-flex v-for="(hero, index) in heroes">
        <v-card class="mx-auto" max-width="344">
          <v-img
            :src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
            height="200px"
            cover
          ></v-img>

          <v-card-title> {{ hero.name }} </v-card-title>

          <v-card-actions>
            <v-btn color="orange-lighten-2" variant="text"> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn @click="showDesc()" v-text="show ? '↓' : '→'"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                {{
                  hero.description != ""
                    ? hero.description
                    : "This hero is... ZzZzZzzzZzZZz."
                }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
export default {
  name: "IndexPage",
  mounted: function () {
    this.fetchHeroesData();
  },
  data: () => ({
    show: false,
    heroes: [],
  }),
  methods: {
    showDesc() {
      this.show = !this.show;
    },
    async fetchHeroesData() {
      const data = await this.$axios.$get(
        "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a159b8cedeb821cb1eb1f1b0406129c1&hash=8204cad645161d8cf403bc8fa5318f1e"
      );
      this.heroes = data.data.results;
    },
  },
};
</script>
