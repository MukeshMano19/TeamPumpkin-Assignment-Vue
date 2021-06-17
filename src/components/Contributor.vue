<template>
  <div class="main">
    <div class="left-box">
      <div
        class="cat-box"
        :class="selectedOption == 1 ? 'selected' : ''"
        @click="changePage(1)"
      >
        Upload Image
      </div>
      <div
        class="cat-box"
        :class="selectedOption == 2 ? 'selected' : ''"
        @click="changePage(2)"
      >
        Download Report
      </div>
    </div>
    <div class="right-box">
      <component :is="page.id" v-bind="page" :key="`${page.id}`"></component>
    </div>
  </div>
</template>
<script>

export default {
  components: {
    Upload: () => import("./Upload.vue"),
    Reports: () => import("./Reports.vue"),
  },
  data() {
    return {
      page: {
        id: "Upload",
      },
      selectedOption: 1,
    };
  },
  methods: {
    changePage(option) {
      this.selectedOption = option;

      if (option == 1) this.page.id = "Upload";
      else this.page.id = "Reports";
    },
  },
};
</script>
<style>
.selected {
  background: rgb(206, 201, 201);
}
</style>