<template>
  <div>
    <baidu-map
      class="map"
      :ak="ak"
      v="3.0"
      type="API"
      :center="center"
      :zoom="zoom"
      @ready="ready"
      @load="load"
    ></baidu-map>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { BaiduMap } from "vue-baidu-map-3x";
import BMAP_ANCHOR_BOTTOM_LEFT from "BMAP_ANCHOR_BOTTOM_LEFT";

const ak = ref<string>("mXExT7aleYY4jrDc48VrX2ByYyvap3Hu");
const center = { lng: 116.404, lat: 39.915 };
const zoom = 15;

const load = () => {
  console.log("load加载");
};
const ready = ({ BMap, map }: any) => {
  var point = new BMap.Point(109.49926175379778, 36.60449676862417);
  map.centerAndZoom(point, 13);
  var marker = new BMap.Marker(point); // 创建标注
  map.addOverlay(marker); // 将标注添加到地图中

  var mapType1 = new BMap.MapTypeControl({
    anchor: BMAP_ANCHOR_BOTTOM_LEFT, // 控件的定位 左上角 还有其他
  });
  map.addControl(mapType1);
};
</script>

<style scoped>
.map {
  width: 100vw;
  height: 100vh;
}
</style>
