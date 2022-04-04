<template>
  <dive>
    <v-app-bar color="#fff" flat outlined dense elevation="1">
      <v-btn outlined class="mx-2 rounded-lg" icon color="info">
        <v-icon dark> mdi-home-outline </v-icon>
      </v-btn>

      <v-btn class="rounded-lg" outlined icon color="info">
        <v-icon dark> mdi-view-quilt-outline </v-icon>
      </v-btn>
      <v-col cols="12" sm="3">
        <v-text-field
          class="mx-4 rounded-lg"
          flat
          hide-details
          prepend-inner-icon="mdi-magnify"
          solo-inverted
        >
        </v-text-field>
      </v-col>
      <template v-slot:extension>
        <v-tabs centered> </v-tabs>
      </template>
      <div class="d-flex ml-auto">
        <v-btn
          fab
          dark
          color="info"
          class="mx-3 rounded-lg"
          v-bind="attrs"
          v-on="on"
        >
          <CardCreate :sectionIndex="sectionIndex" />
        </v-btn>

        <v-badge dot color="success" avatar bordered overlap>
          <v-btn class="rounded-lg" outlined icon color="info">
            <v-icon dark> mdi-bell-outline </v-icon>
          </v-btn>
        </v-badge>
        <v-btn outlined class="mx-3 rounded-lg" icon color="info">
          <v-icon dark> mdi-help-circle-outline </v-icon>
        </v-btn>

        <v-btn class="rounded-lg" outlined icon color="info">
          <v-icon dark> mdi-cog-outline </v-icon>
        </v-btn>

        <v-avatar class="ml-6" size="50">
          <img src="https://cdn.vuetifyjs.com/images/lists/4.jpg" alt="John" />
        </v-avatar>
      </div>
    </v-app-bar>
  </dive>
</template>

<script>
import CardCreate from "./cardCreate.vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
    sectionIndex: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
  }),
  components: { CardCreate },
};
</script>

<style></style>
