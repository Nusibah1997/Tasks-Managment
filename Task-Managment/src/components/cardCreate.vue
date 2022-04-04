<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px" max-high="1000px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          rounded="pill"
          color="gray"
          class="mx-2"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark> mdi-plus </v-icon>
        </v-btn>
      </template>

      <form v-bind:class="classList" v-on:submit.prevent="createTaskInSectionI">
        <v-card>
          <v-card-title>
            <v-icon large class="mx-3 rounded-lg" color="info">
              mdi-view-quilt-outline
            </v-icon>
            <span class="text-h5 font-weight-bold">Design Team Board</span>
            <div class="ml-auto">
              <v-btn
                class="rounded-lg ma-5"
                outlined
                icon
                large
                color="red"
                @click="dialog = false"
              >
                <v-icon dark> mdi-close </v-icon>
              </v-btn>
            </div>
          </v-card-title>

          <v-container>
            <v-row>
              <v-col cols="12" sm="4">
                <v-select
                  :items="items"
                  item-value="title"
                  rounded="pill"
                  outlined
                >
                  <!-- <v-select 
                :options="options" 
                label="country" 
                :reduce=" title => section.title" /> -->

                  <!-- v-for="(section) in sections"
                :key="section.id" 
                {{ section.title}} -->
                </v-select>
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  :items="tags"
                  color="info"
                  v-model="rangTask"
                  rounded="pill"
                  small
                  outlined
                ></v-select>
              </v-col>
              <v-col cols="12" sm="4"></v-col>
              <v-spacer></v-spacer>
              <div class="d-flex mb-6">
                <v-card-title>
                  <span class="text-h4 font-weight-bold">Task:</span>
                </v-card-title>

                <v-text-field
                  class="text-h4 font-weight-bold"
                  v-model="content"
                  type="text"
                  v-on:focusin="startEditing"
                  v-on:focusout="finishEditing"
                  required
                ></v-text-field>
              </div>

              <v-card-title>
                <span class="text-h5 font-weight-bold">Members</span>
              </v-card-title>

              <v-col cols="12">
                <v-btn outlined large class="mx-4" icon color="info">
                  <v-icon dark> mdi-plus </v-icon>
                </v-btn>

                <v-avatar size="40">
                  <img
                    src="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                    alt="John"
                  />
                </v-avatar>

                <v-avatar class="ml-n3" size="40">
                  <img
                    src="https://cdn.vuetifyjs.com/images/lists/3.jpg"
                    alt="John"
                  />
                </v-avatar>
                <v-avatar class="ml-n3" color="#80D8FF" size="40">
                  <span class="blue--text text-h12 font-weight-medium">MK</span>
                </v-avatar>
              </v-col>

              <v-col cols="4">
                <v-card-title>
                  <span class="text-h5 font-weight-bold">Description</span>
                </v-card-title>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  rounded="pill"
                  filled
                  name="input-7-4"
                  placeholder="Please create few alternatives to the profile screen. All the
           screen should on our design system . if you have any
            suggestions you can write a comment on this task."
                ></v-textarea>
              </v-col>

              <v-col cols="4">
                <v-card-title>
                  <span class="text-h5 font-weight-bold">Comments</span>
                </v-card-title>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  prepend-inner-icon="mdi-format-italic "
                  rounded="pill"
                  filled
                  required
                  ><v-icon>mdi-format-italic</v-icon></v-textarea
                >
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" text @click="dialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue-darken-1"
              text
              v-if="isActive || contentExists"
              type="submit"
              class="add-button"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </form>
    </v-dialog>
  </v-row>
</template>


<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    sectionIndex: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      content: "",
      rangTask: [],
      colName: "",
      isActive: false,
      dialog: false,
      value: [],

      items: [
        {
          text: "Backlog",
        },
        { text: "In Progress" },
        { text: "In Review" },
        { text: "Done" },
      ],

      tags: [
        {
          color: "red",
          text: "High",
        },
        {
          color: "orang",
          text: "Medium",
        },
        {
          color: "yellow",
          text: "Low",
        },
      ],
    };
  },
  computed: {
    ...mapState(["sections"]),
    ...mapGetters(["titleTodos"]),
    classList() {
      let classList = [];
      if (this.isActive) {
        classList.push("active");
      }
      return classList;
    },
    contentExists() {
      return this.content.length > 0;
    },
    titleTodos() {
      return this.$store.getters.titleTodos;
    },
  },
  methods: {
    ...mapActions(["createTaskInSection"]),
    createTaskInSectionI() {
      console.log(this.content);
      console.log(this.colName);
      console.log(this.rangTask);

      this.createTaskInSection({
        content: this.content,
        colName: this.colName,
        rangTask: this.rangTask,
        sections: this.sections,
        sectionIndex: this.sectionIndex,
      });

      this.content = "";
      this.colName = "";
      this.rangTask = "";
    },
    startEditing() {
      this.isActive = true;
    },
    finishEditing() {
      this.isActive = false;
    },
  },
};
</script>
