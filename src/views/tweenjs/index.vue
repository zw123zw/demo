<template>
  <section>
    <div id="box" :style="style1">tweenjs</div>
    <div id="myEl1"></div>

    <svg id="svg-wrap" xmlns="http://www.w3.org/2000/svg">
      <polyline :points="points" stroke="red" fill="none"></polyline>
    </svg>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import TWEEN from "@tweenjs/tween.js";

const pointsList = ref<any>([]);
const points = computed(() => {
  console.log(pointsList.value.slice(1, 50));
  return pointsList.value.join(",");
});

const position = ref<any>({
  x: 0,
  y: 0,
  z: 0,
  w: 50,
  h: 50,
  alpha: 0,
  scale: 1,
});
const style1 = computed(() => {
  const { x, y, alpha, w, h, scale } = position.value;
  return {
    transform: `translate(${x}px, ${y}px) scale(${scale})`,
    width: w + "px",
    height: h + "px",
    opacity: alpha,
  };
});

function animate() {
  requestAnimationFrame(animate);
  TWEEN.update();
}

onMounted(() => {
  const action1 = new TWEEN.Tween(position.value)
    .to(
      {
        x: 300,
        y: [100, 300, 100, 300, 100],
        z: 0,
        w: 100,
        h: 100,
        alpha: 1,
        scale: 1,
      },
      2000
    )
    .easing(TWEEN.Easing.Exponential.In)
    .onUpdate((value: any) => {
      pointsList.value.push(value.x);
    });
  const action2 = new TWEEN.Tween(position.value)
    .to(
      {
        x: 500,
        y: 0,
        z: 0,
        w: 50,
        h: 50,
        alpha: 0,
      },
      1000
    )
    .easing(TWEEN.Easing.Exponential.Out)
    .delay(1000)
    .onUpdate((value: any) => {
      pointsList.value.push(value.x);
    });
  const action3 = new TWEEN.Tween(position.value)
    .to(
      {
        scale: 0.5,
      },
      3000
    )
    .easing(TWEEN.Easing.Exponential.Out)
    .onUpdate((value: any) => {
      pointsList.value.push(value.x);
    });
  action1.chain(action2, action3);
  action1.start();
  animate();
});
</script>

<style lang="scss" scoped>
#box {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1cef99;
}
#myEl1 {
  width: 50px;
  height: 50px;
  background: #abc9bd;
}
</style>
