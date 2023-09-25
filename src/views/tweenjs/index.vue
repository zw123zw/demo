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
  // console.log(pointsList.value.slice(1, 50));
  return [];
});

const position = ref<any>({
  x: 0,
  y: 0,
  z: 0,
  w: 50,
  h: 50,
  alpha: 1,
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
  // 曲线-x,y轴的运动速率不一致
  const action1 = new TWEEN.Tween(position.value).to(
    {
      x: 300,
    },
    1000
  );

  const action11 = new TWEEN.Tween(position.value)
    .to(
      {
        y: 400,
      },
      1000
    )
    .easing(TWEEN.Easing.Cubic.In);

  const action2 = new TWEEN.Tween(position.value)
    .to(
      {
        w: 60,
        h: 60,
      },
      300
    )

  action2.chain(action11, action1);
  action2.start();
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
