<template>
  <div>
    <header>
      <div>
        <div class="d-flex mb-6">
          Design Team Board

          <div class="ml-auto">
            <v-btn large color="info" dark icon outlined class="mx-4">
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>

            <subtitle>Add a member</subtitle>

            <v-avatar size="40" class="ml-4">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
            </v-avatar>

            <v-avatar class="ml-n3" size="40">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
                alt="John"
              />
            </v-avatar>
            <v-avatar class="ml-n3" size="40">
              <img
                src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                alt="John"
              />
            </v-avatar>

            <v-avatar class="ml-n3" color="#80D8FF" size="40">
              <span class="blue--text font-weight-medium text-md-body-1"
                >+16</span
              >
            </v-avatar>

            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class="mx-6 rounded-lg"
                  color="primary"
                  dark
                  large
                  v-bind="attrs"
                  v-on="on"
                >
                  All Tasks
                  <v-icon dark> mdi-menu-down </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-for="section in sections" :key="section.id">
                  <v-list-item-title>{{ section.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </div>
    </header>

    <draggable class="d-flex" :list="sections" @end="movingSections">
      <colList
        v-for="(section, index) in sections"
        :key="section.id"
        :title="section.title"
        :tasks="section.tasks"
        :sectionIndex="index"
        @change="movingTasks"
      />
      <colCreate />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapState } from "vuex";
import colList from "./colList.vue";
import colCreate from "./colCreate.vue";
export default {
  components: {
    draggable,
    colList,
    colCreate,
  },
  computed: {
    ...mapState(["sections"]),
  },
  methods: {
    movingSections: function () {
      this.$store.dispatch("saveSections", { sections: this.sections });
    },
    movingTasks: function () {
      this.$store.dispatch("saveSections", { sections: this.sections });
    },
  },
};
</script>
