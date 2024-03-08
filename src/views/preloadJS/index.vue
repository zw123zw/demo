<template>
  <div>11111</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const createjs = (window as any).createjs;
const queue = new createjs.LoadQueue();
queue.on(
  "complete",
  () => {
    console.log("done");
  },
  this
);

queue.on(
  "progress",
  (progress: any) => {
    console.log("progress", progress.loaded);
  },
  this
);

queue.loadFile({ id: "sound", src: "/media/test.mp3" });
</script>

<style lang="less" scoped></style>
