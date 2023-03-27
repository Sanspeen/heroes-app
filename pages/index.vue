<template>
  <v-flex d-flex>
    <v-layout wrap>
      <v-flex v-for="(hero, index) in baseHeroes">
        <v-card class="mx-auto mb-2" max-width="344">
          <v-img :src="hero.image" height="200px" cover></v-img>

          <v-card-title> {{ hero.name }} </v-card-title>

          <v-card-actions>
            <template>
              <v-row justify="center">
                <v-dialog v-model="hero.dialog" width="800">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      color="primary"
                      v-bind="props"
                      @click="hero.toggleDialog()"
                    >
                      Open
                    </v-btn>
                  </template>
                  <v-card>
                    <v-img :src="hero.image" height="400px" cover></v-img>
                    <v-card-title>
                      <span class="text-h5">{{ hero.name }}</span>
                    </v-card-title>
                    <v-card-text> `` </v-card-text>
                    <v-card-actions>
                      <v-btn
                        color="green-darken-1"
                        variant="text"
                        @click="hero.toggleDialog()"
                      >
                        close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </template>
            <v-btn @click="showDesc()" v-text="show ? '↓' : '→'"></v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                {{
                  hero.description != ""
                    ? hero.desc
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
import { Hero } from "../models/Hero";

export default {
  name: "IndexPage",
  mounted: function () {
    this.fetchHeroesData();
  },
  data: () => ({
    show: false,
    dialog: false,
    baseHeroes: [],
    heroesFetched: [],
  }),
  methods: {
    showDialog() {
      this.dialog = !this.dialog;
    },
    showDesc() {
      this.show = !this.show;
    },
    async fetchHeroesData() {
      await this.$axios
        .$get(
          "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=a159b8cedeb821cb1eb1f1b0406129c1&hash=8204cad645161d8cf403bc8fa5318f1e"
        )
        .then((data) => {
          this.heroesFetched = data.data.results;
          this.heroesFetched.forEach((hero) => {
            const heroImage = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
            this.baseHeroes.push(
              new Hero(
                hero.name,
                heroImage,
                hero.description,
                hero.comics.available,
                hero.series.available,
                hero.stories.available,
                hero.events.available
              )
            );
          });
        })
        .catch((err) => console.log(`An error has ocurred => ${err}`));
    },
  },
};
</script>
