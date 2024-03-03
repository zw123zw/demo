<template>
  <div>
    <button @click="handlePlay('test')">播放test</button>
    <button @click="handlePause">暂停test</button>
  </div>
  <div>
    <button @click="handlePlay('gamebg')">播放gamebg</button>
    <button @click="handlePause">暂停gamebg</button>
  </div>
  <div>
    <button @click="playAudioSprite">playAudioSprite</button>
  </div>
  <button @click="audioFadeOut">audioFadeOut</button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const createjs = (window as any).createjs;
let myInstance: any = null;
createjs.Sound.registerSound("../media/test.mp3", "test", 3);
createjs.Sound.registerSound("../media/gamebg.ogg", "gamebg", 3);
createjs.Sound.on("fileload", (e: any) => {
  console.log(e.src.replace("../media/", "") + "加载完成");
});

// 播放
function handlePlay(id: string) {
  myInstance = createjs.Sound.play(id);
  myInstance.volume = 1;
  const printInfo = (info: string) => {
    console.log(info);
  };
  myInstance.on("complete", () => printInfo("complete"));
  myInstance.on("loop", () => printInfo("loop"));
  myInstance.on("failed", () => printInfo("failed"));
}

// 暂停
function handlePause() {
  myInstance.paused = !myInstance.paused;
}

function audioFadeOut() {
  var count = 50;
  var interval = setInterval(function () {
    if (count < 0) {
      myInstance.paused = true;
      clearInterval(interval);
    } else {
      myInstance.volume = count / 50;
    }
    count--;
  }, 70);
}

// AudioSprite
   createjs.Sound.initializeDefaultPlugins();
    var assetsPath = "../media/";
    var sounds = [{
        src:"gamebg.ogg", data: {
            audioSprite: [
                {id:"sound1", startTime:0, duration:500},
                {id:"sound2", startTime:1000, duration:400},
                {id:"sound3", startTime:1700, duration: 1000}
            ]}
        }
    ];
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.on("fileload", ()=>{
      console.log('AudioSprite fileload');
    });
    createjs.Sound.registerSounds(sounds, assetsPath);
    // after load is complete
    const playAudioSprite = () => {
    createjs.Sound.play("sound2");
    }
</script>

<style lang="less" scoped></style>
