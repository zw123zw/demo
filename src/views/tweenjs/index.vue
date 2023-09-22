<template>
  <section>
    <div id="box" :style="style1">tweenjs</div>
  </section>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import TWEEN from "@tweenjs/tween.js";

let action1: any = null;
let action2: any = null;
const position = ref<any>({
  x: 0,
  y: 0,
  z: 0,
  w: 50,
  h: 50,
  alpha: 0,
});
const style1 = computed(() => {
  const { x, y, alpha, w, h } = position.value;
  return {
    transform: `translate(${x}px, ${y}px)`,
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
  action1 = new TWEEN.Tween(position.value)
    .to(
      {
        x: 300,
        y: [100, 300, 100, 300, 100],
        z: 0,
        w: 100,
        h: 100,
        alpha: 1,
      },
      2000
    )
    .easing(TWEEN.Easing.Exponential.In);
  action2 = new TWEEN.Tween(position.value)
    .to(
      {
        x: 500,
        y: 0,
        z: 0,
        w: 50,
        h: 50,
        alpha: 0,
      },
      2000
    )
    .easing(TWEEN.Easing.Exponential.Out);

  action1.chain(action2);
  action2.chain(action1);
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
</style>
