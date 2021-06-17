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
            <img :src="require(`./img.png`)" />
          </div>
          <div class="info">
            Contributor: {{ image.contributor }}<br />
            Image Name: {{ image.name }}<br />
            Total Downloads: {{ image.total_downloads }}
          </div>
          <div class="justify-content:center">
            <input
              type="submit"
              value="Download"
              class="download-btn"
              @click="downloadImage()"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    image: Object,
  },
  methods: {
    async downloadImage() {
      let url =
        "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg";
      const image = await fetch(url);
      const imageBlog = await image.blob();
      const imageURL = URL.createObjectURL(imageBlog);

      const link = document.createElement("a");
      link.href = imageURL;
      link.download = this.image.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      this.updateDownloadsCount();
    },
    updateDownloadsCount() {
      this.$http.get(`categories`).then(function () {});
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
  background: chartreuse;
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