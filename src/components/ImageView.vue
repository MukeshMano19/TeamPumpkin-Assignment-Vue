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
          <div class="img"></div>
          <div class="info">
            Contributor: Mukesh<br />
            Image Name: asdasd<br />
            Total Downloads: 4
          </div>
          <div class="justify-content:center">
            <input
              type="submit"
              value="Download"
              class="download-btn"
              @click="doSignUp(signUp)"
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
        image: Object
    }
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

.modal .image-content .details .img {
  height: 200px;
  background: chartreuse;
  margin-top: 20px;
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
}
</style>