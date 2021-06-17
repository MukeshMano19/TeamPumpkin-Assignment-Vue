<template>
  <div class="normal-user">
    <div class="left-box">
      <div class="cat-box">Category</div>
      <div class="cat-selection">
        <div class="cat-field" v-for="cat in categories" :key="cat.code">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label for="vehicle1">{{ cat.name }}</label
          ><br />
        </div>
      </div>
    </div>
    <div class="right-box">
        <div class="image-box" v-for="(image, idx) in 3" :key="idx" @click="imageView = true">
          <div class="img"></div>
          <div class="content">
            Contributor: Mukesh<br />
            Image Name: asdasd<br />
            Total Downloads: 4
          </div>
      </div>
    </div>

    <image-view v-if="imageView" @close="imageView = $event"></image-view>
  </div>
</template>
<script>
import ImageView from "./ImageView.vue"
export default {
    components: {ImageView},
  data() {
    return {
      imageView: false,  
      categories: [
        { name: "Technology", code: 1 },
        { name: "Marketing", code: 2 },
        { name: "B2B", code: 3 },
      ],
    };
  },
};
</script>
<style>
.normal-user {
  position: relative;
  height: calc(100vh - 140px);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 30px;
}

/* Left Part */
.normal-user .left-box {
  margin: 20px 0;
  width: 20%;
  /* background: rgb(43, 43, 32); */
  border: 1px solid grey;
}
.normal-user .left-box .cat-box {
  max-height: 40px;
  border-bottom: 1px solid grey;
  font-size: 18px;
  padding: 12px;
}

.normal-user .left-box .cat-selection {
  padding: 12px;
}

.normal-user .left-box .cat-selection .cat-field {
  margin-top: 20px;
}

.normal-user .left-box .cat-selection .cat-field label {
  font-size: 18px;
  padding-left: 8px;
  letter-spacing: 1px;
}

/* Right Part */
.normal-user .right-box {
  margin: 20px 0;
  width: 75%;
  border: 1px solid grey;
  display: flex;
  flex-flow: row wrap;
}

.normal-user .right-box .image-box {
  height: 350px;
  width: 300px;
  margin: 20px 20px;
}

.normal-user .right-box .img {
  height: 250px;
  background: gold;  
}

.normal-user .right-box .content {
  padding-top: 14px;
  line-height: 24px;
  letter-spacing: 1px;
}
</style>