<template>
  <div class="upload">
    <h2 class="">Upload Image</h2>
    <br />
    <label class="lbl-text">Image Name:</label><br />
    <input type="text" class="text-field" v-model="image.name" /><br /><br />
    <label class="lbl-text">Image:</label><br />
    <div style="display: flex">
      <div>
        <input
          name="imageName"
          type="text"
          style="height: 35px; width: 200px"
          v-model="image.imageName"
          :placeholder="[[image.imageName]]"
        />

        <!-- Pick Asset -->
        <input
          type="file"
          style="display: none"
          ref="image"
          webkitdirectory
          directory
          @change="onFilePicked"
          accept="file_extension|audio/*|video/*|image/*|media_type"
        />
      </div>
      <div class="browse-btn" @click="$refs.image.click()">
        <div style="margin-top: 8px">Browse</div>
      </div>
    </div>
    <br /><br />
    <label class="lbl-text">Category:</label><br />
    <select
      name="categories"
      class="select-field"
      id="categories"
      v-model="image.category"
    >
      <option :value="1">Technology</option>
      <option :value="2">Marketing</option>
      <option :value="3">B2B</option>
    </select>
    <br /><br />

    <input type="submit" value="Save" class="submit-btn" @click="save(image)" />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      image: {},
      files: [],
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    save() {
       const batchId = Math.random()

      this.files.forEach((file) => {
        let formData = new FormData();
        formData.set("file", file);
        formData.set("name", this.image.name);
        formData.set("category", this.image.category);
        formData.set("batch_unique_id", `${batchId}`);

        this.$http
          .post(`user/${this.user.id}/image/upload`, formData, {
            "content-type": "application/json",
          })
          .then((res) => {
            // alert(res.body.message);
            console.log(res)
            this.image = {};
          })
          .catch(() => {});
      });
    },
    onFilePicked(e) {
      let array = Array.from(e.target.files);
      array.forEach((asset) => {
        this.files.push(asset);
      });
      // var file = array[0];
      this.image.imageName = "batch Upload";
    },
  },
};
</script>
<style>
.upload {
  padding: 0 30px;
}

.browse-btn {
  height: 39px;
  width: 110px;
  border: 1px solid;
  text-align: center;
  cursor: pointer;
}

.select-field {
  margin-top: 10px;
  height: 42px;
  min-width: 320px;
  padding-left: 12px;
}
</style>