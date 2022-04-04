<template>
  <div class="section">
    <div class="listheader">
      <P class="section-title"
        >{{ title }} <button class="lengthArray">{{ tasks.length }}</button></P
      >
      <div class="deleteSection" @click="deleteSectionI">×</div>
    </div>

    <draggable group="tasks" :list="tasks" @end="$emit('change')">
      <!-- props data -- Section -> Task (content, taskIndex, sectionIndex) -->
      <cardOne
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        :taskIndex="index"
        :sectionIndex="sectionIndex"
      />
      <!-- props data -- Section -> TaskCreate (sectionIndex) -->
      <cardCreate :sectionIndex="sectionIndex" />
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapActions } from "vuex";
import cardOne from "./cardOne.vue";
import cardCreate from "./cardCreate.vue";
export default {
  components: {
    draggable,
    cardOne,
    cardCreate,
  },
  // Board-> sectionIndex, title, , tasks
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
  methods: {
    ...mapActions(["deleteSection"]),
    deleteSectionI() {
      this.deleteSection({ sectionIndex: this.sectionIndex });
    },
  },
};
</script>
