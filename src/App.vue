<template>
  <div>
    <baidu-map
      class="map"
      :ak="ak"
      v="3.0"
      type="API"
      :center="{ lng: 116.404, lat: 39.915 }"
      :zoom="15"
    ></baidu-map>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BaiduMap } from "vue-baidu-map-3x";

const ak = ref<string>("mXExT7aleYY4jrDc48VrX2ByYyvap3Hu");
</script>

<style scoped>
.map {
  width: 100vw;
  height: 100vh;
}
</style>
