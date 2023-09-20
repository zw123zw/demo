<template>
  <div class="popper-container">
    <button
      id="button"
      aria-describedby="tooltip"
      ref="btnRef"
      @mouseenter="show"
      @mouseleave="hide"
    >
      I'm a button
    </button>
    <div id="tooltip" role="tooltip" ref="tooltipRef" v-show="isShow">
      I'm a tooltip
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue";
import { createPopper, popperGenerator } from "@popperjs/core";
import preventOverflow from "@popperjs/core/lib/modifiers/preventOverflow.js";
import flip from "@popperjs/core/lib/modifiers/flip.js";
import type { Options } from "@popperjs/core";

const btnRef = ref<any>(null);
const tooltipRef = ref<any>(null);
const popperInstance = ref<any>(null);
const isShow = ref<boolean>(false);
const show = () => {
  isShow.value = true;
  popperInstance.value.setOptions((options: Options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: true },
    ],
  }));

  console.log(popperInstance.value);
  popperInstance.value.update().then((res: any) => {
    console.log(res);
  })
};
const hide = () => {
  isShow.value = false;
  popperInstance.value.setOptions((options: Options) => ({
    ...options,
    modifiers: [
      ...options.modifiers,
      { name: "eventListeners", enabled: false },
    ],
  }));
};

onMounted(() => {
  popperInstance.value = createPopper(btnRef.value, tooltipRef.value, {
    placement: "top",
    modifiers: [
      preventOverflow,
      flip,
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    strategy: "fixed",
    onFirstUpdate: state => console.log('Popper positioned on', state.placement),
  });
});
</script>

<style lang="scss" scoped>
.popper-container {
  padding: 100px;
  #tooltip {
    background: #333;
    color: white;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
  }
  #arrow,
  #arrow::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: inherit;
  }

  #arrow {
    visibility: hidden;
  }

  #arrow::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
  }
}
</style>
