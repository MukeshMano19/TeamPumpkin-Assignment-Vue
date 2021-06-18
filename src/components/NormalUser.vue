<template>
  <div class="main">
    <div class="left-box">
      <div class="cat-box">Category</div>
      <div class="cat-selection">
        <div class="cat-field" v-for="(cat, idx) in categories" :key="idx">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">{{ cat.name }}</label
          ><br />
        </div>
      </div>
    </div>
    <div class="right-box">
      <div
        class="details"
        v-for="(image, idx) in paginatedImages"
        :key="idx"
        @click="
          imageView = true;
          selectedImage = image;
        "
      >
        <div class="img-box">
          <!-- <img :src="require(`./img.png`)" /> -->
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
        { name: "Technology" },
        { name: "Marketing" },
        { name: "B2B" },
      ],
      images: [],
      selectedImage: {},
      itemsPerPage: 3,
      page: 0,
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
        .get(`user/${this.user.id}/images?NU=true`)
        .then((res) => {
          console.log(res);
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
.main {
  position: relative;
  height: calc(100vh - 140px);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 30px;
}

/* Left Part */
.main .left-box {
  margin: 20px 0;
  width: 20%;
  /* background: rgb(43, 43, 32); */
  border: 1px solid grey;
}
.main .left-box .cat-box {
  max-height: 40px;
  border-bottom: 1px solid grey;
  font-size: 18px;
  padding: 12px;
  cursor: pointer;
}

.main .left-box .cat-selection {
  padding: 12px;
}

.main .left-box .cat-selection .cat-field {
  margin-top: 20px;
}

.main .left-box .cat-selection .cat-field label {
  font-size: 18px;
  padding-left: 8px;
  letter-spacing: 1px;
}

/* Right Part */
.main .right-box {
  margin: 20px 0;
  width: 70%;
  border: 1px solid grey;
  display: flex;
  flex-flow: row wrap;
  position: relative;
}

.main .right-box .details {
  height: 350px;
  width: 300px;
  margin: 20px 20px;
}

.main .right-box .img-box {
  height: 250px;
}

.main .right-box .img-box img {
  width: 100%;
  height: 100%;
  background-size: cover;
}

.main .right-box .info {
  padding-top: 14px;
  line-height: 24px;
  letter-spacing: 1px;
}

.main .pagination {
  position: absolute;
  bottom: 2%;
  right: 3%;
  height: 40px;
  width: 100%;
  text-align: right;
}
.main .pagination .p-btn {
  margin: 4px;
}
</style>