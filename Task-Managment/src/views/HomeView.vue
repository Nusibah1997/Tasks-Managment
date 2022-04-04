<template>
  <div>
    <hrader-app />
    <boardTask />
  </div>
</template>

<script>
import boardTask from "../components/boardTask.vue";
import HraderApp from "@/components/HraderApp.vue";

export default {
  name: "HomeView",

  components: {
    boardTask,
    HraderApp,
  },
};
</script>
