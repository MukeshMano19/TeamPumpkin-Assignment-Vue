<template>
  <div class="main">
    <div class="left-box">
      <div class="cat-box">Category</div>
      <div class="cat-selection">
        <div class="cat-field" v-for="(cat, idx) in categories" :key="idx">
          <input
            type="checkbox"
            name="category"
            :id="cat.name"
            :value="cat.code"
            @click="selectCategory(cat.code)"
          />
          <label :for="cat.name" class="lbl-text">{{ cat.name }}</label
          ><br />
        </div>
      </div>
    </div>
    <div class="right-box">
      <div
        class="details"
        v-for="(image, idx) in paginatedImages"
        :key="idx"
        @click="selectImage(image)"
      >
        <div class="img-box">
          <img :src="`${baseUrl}/image/${image.id}`" />
        </div>
        <div class="info">
          Contributor: {{ image.contributor }}<br />
          Image Name: {{ image.name }}<br />
          Total Downloads: {{ image.total_downloads }}
        </div>
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

    <image-view
      v-if="imageView"
      @close="imageView = $event"
      :image="selectedImage"
      :baseUrl="baseUrl"
      :batchImages="batchImages"
      @refresh="listImages()"
    ></image-view>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { apiHost } from "../api";

export default {
  components: { ImageView: () => import("./ImageView.vue") },
  data() {
    return {
      baseUrl: apiHost,
      imageView: false,
      categories: [
        { name: "Technology", code: 1 },
        { name: "Marketing", code: 2 },
        { name: "B2B", code: 3 },
      ],
      images: [],
      selectedImage: {},
      itemsPerPage: 3,
      page: 0,
      selectedCategories: [],
      batchImages: [],
    };
  },
  computed: {
    ...mapState(["user"]),
    paginations() {
      const pages = this.filteredImages.length / this.itemsPerPage;
      return Math.ceil(pages);
    },
    filteredImages() {
      return this.images.filter((img) => {
        if (!this.selectedCategories.length) return true;

        if (this.selectedCategories.includes(img.category)) return true;
        return false;
      });
    },
    paginatedImages() {
      return this.filteredImages.slice(
        this.page * this.itemsPerPage,
        this.itemsPerPage * (this.page == 0 ? 1 : this.page + 1)
      );
    },
  },
  methods: {
    selectImage(image) {
      this.selectedImage = image;
      this.imageView = true;
      this.batchImages = this.images.filter(
        (i) => i.batch_unique_id == image.batch_unique_id
      );
      console.log(this.batchImages);
    },
    selectCategory(code) {
      const found = this.selectedCategories.find((c) => c == code);
      if (found) {
        this.selectedCategories = this.selectedCategories.filter(
          (c) => c != code
        );
        return;
      }
      this.selectedCategories.push(code);
    },
    listImages() {
      this.$http
        .get(`user/${this.user.id}/images?NU=true`)
        .then((res) => {
          // console.log(res);
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
</style>