<template>
  <div>
    <button @click="loadTestMp3">加载test.mp3</button>
    <button @click="loadTestImg">加载hua.jpg</button>
    <button @click="loadCSS">加载CSS</button>
    <button @click="loadJS">加载JS</button>
    <ul>
      <li v-for="(item, index) in progressList" :key="index">{{ item }}</li>
    </ul>
    <div class="preview"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const createjs = (window as any).createjs;
const queue = new createjs.LoadQueue();
const progressList = ref<Array<any>>([]);
queue.on(
  "complete",
  (e: any) => {
    console.log("done");
    progressList.value.push("done");
  },
  this
);
queue.on(
  "fileload",
  () => {
    console.log("fileload");
    progressList.value.push("fileload");
  },
  this
);
queue.on(
  "fileprogress",
  (fileprogress: any) => {
    const info = "fileprogress " + fileprogress.loaded;
    console.log(info);
    progressList.value.push(info);
  },
  this
);
queue.on(
  "progress",
  (progress: any) => {
    const info = "progress " + progress.loaded;
    console.log(info);
    progressList.value.push(info);
  },
  this
);

// loadTestMp3
const loadTestMp3 = () => {
  queue.loadFile({ id: "sound", src: "/media/test.mp3" });
};

// loadTestImg
const loadTestImg = () => {
  queue.loadFile({ id: "hua", src: "/images/hua.jpg" });
  queue.on("complete", (e: any) => {
    document.querySelector(".preview")?.appendChild(queue.getResult("hua"));
  });
};

// loadCSS
const loadCSS = () => {
  queue.loadManifest([
    {
      id: "test1",
      src: "/css/test1.css",
    },
    {
      id: "test2",
      src: "/css/test2.css",
    },
  ]);
};

// loadJS
const loadJS = () => {
  queue.loadFile({ id: "testJS", src: "/js/test.js" });
  queue.on("complete", (e: any) => {
    const content = queue.getResult("testJS", true);
    const ele = document.createElement("div");
    ele.textContent = content;
    document.querySelector(".preview")?.appendChild(ele);
  });
};
</script>

<style lang="less" scoped></style>
