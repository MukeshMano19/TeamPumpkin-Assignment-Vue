<template>
  <div id="app">
    <div class="app-bar">
      <h4 class="title">Assignment</h4>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-bar {
  position: relative;
  height: 100px;
  max-height: 100px;
  background: #dac556;
  font-size: 24px;
  font-weight: 600;
}

.app-bar .title {
  margin: auto;
  padding: 35px;
}
</style>
