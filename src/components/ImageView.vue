<template>
  <div id="myModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
      <div style="border-bottom: 1px solid grey; padding-bottom: 15px">
        <span class="close" @click="$emit('close', false)">&times;</span>
        <div class="title">Download Image</div>
      </div>
      <div class="image-content">
        <div class="details">
          <div class="img-box">
            <img class="image" :src="`${baseUrl}/image/${image.id}`" />
          </div>
          <div class="info">
            Contributor: {{ image.contributor }}{{ batchImages.length }}<br />
            Image Name: {{ image.name }}<br />
            Total Downloads: {{ image.total_downloads }}
          </div>
          <div class="justify-content:center" @click="download()">
            <!-- <a download :href="`${baseUrl}/image/${image.id}/download`"> -->
            <input type="submit" value="Download" class="download-btn" />
            <!-- </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  props: {
    image: Object,
    baseUrl: String,
    batchImages: Array,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async download() {
      for (const img of this.batchImages) {
        await this.proceedDownload(img);
      }

      this.updateCount();
    },
    proceedDownload(img) {
      return new Promise((resolve) => {
        let url = `${this.baseUrl}/image/${img.id}/download`;
        console.log(url);
        var link = document.createElement("a");
        link.href = url;
        link.download = `image.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Call Next one after 1s
        setTimeout(() => resolve(), 1000);
      });
    },
    updateCount() {
      this.$http
        .put(
          `user/${this.user.id}/image/${this.image.id}/updateTotalDownloads?batch_id=${this.image.batch_unique_id}`
        )
        .then(function (res) {
          console.log(res);
          this.$emit("close", false);
          this.$emit("refresh");
        });
    },
  },
};
</script>
<style>
.modal {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 10%;
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;
  min-height: 400px;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal .title {
  text-align: center;
  padding-top: 4px;
  font-size: 16px;
  font-weight: 600;
}

.modal .image-content {
  display: flex;
  justify-content: center;
}

.modal .image-content .details {
  width: 50%;
}

.modal .image-content .details .img-box {
  height: 200px;
  margin-top: 20px;
}

.modal .image-content .img-box img {
  width: 100%;
  height: 100%;
  background-size: cover;
}

.modal .image-content .details .info {
  padding-top: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  text-align: center;
}

.download-btn {
  margin-top: 30px;
  height: 35px;
  min-width: 100px;
  background: #dac556;
  font-weight: 600;
  letter-spacing: 2px;
  border: 0.5px solid grey;
  margin-left: 30%;
  cursor: pointer;
}
</style>