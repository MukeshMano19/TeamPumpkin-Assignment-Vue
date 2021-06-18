<template>
  <div class="reports">
    <h2 class="">Download Report</h2>
    <br />
    <div class="table-content">
      <table style="width: 100%">
        <tr>
          <th>Image Name</th>
          <th>Category</th>
          <th>Total Downloads</th>
        </tr>
        <tr v-for="(image, idx) in paginatedImages" :key="idx">
          <td>{{ image.name }}</td>
          <td>{{ categories[image.category - 1] }}</td>
          <td>{{ image.total_downloads }}</td>
        </tr>
      </table>
    </div>
    <div class="pagination" v-if="paginations > 1">
      Paginations
      <template v-for="(i, idx) in paginations">
        <input
          :key="i"
          type="submit"
          :value="i"
          class="p-btn"
          @click="page = idx"
        />
      </template>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      images: [],
      itemsPerPage: 6,
      page: 0,
      categories: ["Technology", "Marketing", "B2B"],
    };
  },
  computed: {
    ...mapState(["user"]),
    paginations() {
      const pages = this.images.length / this.itemsPerPage;
      return Math.ceil(pages);
    },
    paginatedImages() {
      return this.images.slice(
        this.page * this.itemsPerPage,
        this.itemsPerPage * (this.page == 0 ? 1 : this.page + 1)
      );
    },
  },
  methods: {
    listImages() {
      this.$http
        .get(`user/${this.user.id}/images`)
        .then((res) => {
          this.images = res.body.data;
        })
        .catch(() => {});
    },
  },
  created() {
    this.listImages();
  },
};
</script>
<style>
.reports {
  padding: 0 30px;
  width: 100%;
  position: relative;
}

table,
th,
td {
  border: 1px solid rgb(206, 199, 199);
  border-collapse: collapse;
}
th,
td {
  padding: 15px;
  text-align: center;
}

.reports .pagination {
  position: absolute;
  bottom: 0;
  right: 3%;
  height: 40px;
  width: 100%;
  text-align: right;
}
.reports .pagination .p-btn {
  margin: 4px;
}
</style>