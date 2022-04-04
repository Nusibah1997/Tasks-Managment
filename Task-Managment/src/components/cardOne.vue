<template>
  <div :class="classList" v-on:submit.prevent="updateTaskI">
    <button class="delete-button" @click="deleteTaskI">×</button>

    <h2 v-if="!isEditing">{{ this.task.content }}</h2>

    <div class="d-flex justify-start">
      <v-col cols="12" sm="6">
        <v-icon class="mr-1" icon="mdi-chat">mdi-chat-outline</v-icon>
        <span class="subheading mr-2">24</span>

        <v-icon class="mr-1">mdi-paperclip</v-icon>
        <span class="subheading">3</span>
      </v-col>

      <div class="ml-auto">
        <v-btn
          :class="`${task.rangTask}gray--text `"
          @click="changeStatus(index)"
          color
          outlined
          rounded
          text
        >
          {{ this.task.rangTask }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  // Board -> Section -> sectionIndex / Section -> task, taskIndex
  props: {
    sectionIndex: {
      type: Number,
      required: true,
    },
    taskIndex: {
      type: Number,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      newContent: "",
      newRangTask: "",
      isEditing: false,
      btnColor: "",
    };
  },
  computed: {
    classList() {
      const classList = ["task"];
      return classList;
    },
  },
  methods: {
    ...mapActions(["deleteTask", "updateTask"]),
    deleteTaskI() {
      this.deleteTask({
        taskIndex: this.taskIndex,
        sectionIndex: this.sectionIndex,
      });
    },
    taskContentChange(e) {
      this.newContent = e.target.value;
      this.newRangTask = e.target.value;
    },
    updateTaskI() {
      console.log(this.task.content);
      this.isEditing = this.isEditing == true ? false : true;
      if (this.isEditing) {
        this.newContent = this.task.content;
        this.newRangTask = this.task.rangTask;
        this.updateTask(this.task);
      }

      // else{
      //   this.task.content = this.newContent;
      // }
    },
    changeStatus() {
      switch (this.task.rangTask) {
        case "High":
          var btnColor = "orang";
          break;

        case "Medium":
          btnColor = "green";
          break;

        case "Low":
          btnColor = "red";

          break;
        default:
          break;
      }

      this.btnColor = btnColor;
    },
  },
};
</script>
