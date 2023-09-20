<template>
  <div class="popper-container">
    <button id="button" aria-describedby="tooltip" ref="btnRef">
      I'm a button
    </button>
    <div id="tooltip" role="tooltip" ref="tooltipRef">
      I'm a tooltip
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { createPopper } from "@popperjs/core";
import preventOverflow from "@popperjs/core/lib/modifiers/preventOverflow.js";
import flip from "@popperjs/core/lib/modifiers/flip.js";

const btnRef = ref<any>(null);
const tooltipRef = ref<any>(null);

onMounted(() => {
  createPopper(btnRef.value, tooltipRef.value, {
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
