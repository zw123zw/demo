<template>
  <div class="svg-container">
    <svg
      width="500"
      height="500"
      style="border: 1px solid red"
      ref="svgRef"
      :style="{
        'stroke-dasharray': strokeDasharray,
        'stroke-dashoffset': strokeDashoffset,
      }"
    >
      <path d="M153 334
        C153 334 151 334 151 334
        C151 339 153 344 156 344
        C164 344 171 339 171 334
        C171 322 164 314 156 314
        C142 314 131 322 131 334
        C131 350 142 364 156 364
        C175 364 191 350 191 334
        C191 311 175 294 156 294
        C131 294 111 311 111 334
        C111 361 131 384 156 384
        C186 384 211 361 211 334
        C211 300 186 274 156 274"
        style="fill:white;stroke:red;stroke-width:2;fill: none"
></path>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <circle
        cx="100"
        cy="50"
        r="40"
        stroke="black"
        stroke-width="2"
        fill="red"
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <rect
        width="300"
        height="100"
        style="fill: rgb(0, 0, 255); stroke-width: 1; stroke: rgb(0, 0, 0)"
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <ellipse
        cx="300"
        cy="80"
        rx="100"
        ry="50"
        style="fill: yellow; stroke: purple; stroke-width: 2"
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <ellipse cx="240" cy="100" rx="220" ry="30" style="fill: purple" />
      <ellipse cx="220" cy="70" rx="190" ry="20" style="fill: lime" />
      <ellipse cx="210" cy="45" rx="170" ry="15" style="fill: yellow" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <line
        x1="0"
        y1="0"
        x2="200"
        y2="200"
        style="stroke: rgb(255, 0, 0); stroke-width: 2"
      />
    </svg>

    <svg height="210" width="500">
      <polygon
        points="200,10 250,190 160,210"
        style="fill: lime; stroke: purple; stroke-width: 1"
      />
    </svg>

    <svg height="210" width="500">
      <polygon
        points="100,10 40,198 190,78 10,78 160,198"
        style="fill: lime; stroke: purple; stroke-width: 5; fill-rule: nonzero"
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <polyline
        points="20,20 40,25 60,40 80,120 120,140 200,180"
        style="fill: none; stroke: black; stroke-width: 3"
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path d="M150 0 L75 200 L225 200 Z" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <path
        id="lineAB"
        d="M 100 350 l 150 -300"
        stroke="red"
        stroke-width="3"
        fill="none"
      />
      <path
        id="lineBC"
        d="M 250 50 l 150 300"
        stroke="red"
        stroke-width="3"
        fill="none"
      />
      <path d="M 175 200 l 150 0" stroke="green" stroke-width="3" fill="none" />
      <path
        d="M 100 350 q 150 -300 300 0"
        stroke="blue"
        stroke-width="5"
        fill="none"
      />
      <!-- Mark relevant points -->
      <g stroke="black" stroke-width="3" fill="black">
        <circle id="pointA" cx="100" cy="350" r="3" />
        <circle id="pointB" cx="250" cy="50" r="3" />
        <circle id="pointC" cx="400" cy="350" r="3" />
      </g>
      <!-- Label the points -->
      <g
        font-size="30"
        font="sans-serif"
        fill="black"
        stroke="none"
        text-anchor="middle"
      >
        <text x="100" y="350" dx="-30">A</text>
        <text x="250" y="50" dy="-10">B</text>
        <text x="400" y="350" dx="30">C</text>
      </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <text x="0" y="15" fill="red" transform="rotate(30 20,40)">
        I love SVG
      </text>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path id="path1" d="M75,20 a1,1 0 0,0 100,0" />
      </defs>
      <text x="10" y="100" style="fill: red">
        <textPath xlink:href="#path1">I love SVG I love SVG</textPath>
      </text>
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <a xlink:href="http://www.w3schools.com/svg/" target="_blank">
        <text x="0" y="15" fill="red">I love SVG</text>
      </a>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <g fill="none">
        <path stroke="red" d="M5 20 l215 0" />
        <path stroke="blue" d="M5 40 l215 0" />
        <path stroke="black" d="M5 60 l215 0" />
      </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <g fill="none" stroke="black" stroke-width="4">
        <path stroke-dasharray="5,5" d="M5 20 l215 0" />
        <path stroke-dasharray="10,10" d="M5 40 l215 0" />
        <path stroke-dasharray="20,10,5,5,5,10" d="M5 60 l215 0" />
      </g>
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="f1" x="0" y="0">
          <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
        </filter>
      </defs>
      <rect
        width="90"
        height="90"
        stroke="green"
        stroke-width="3"
        fill="yellow"
        filter="url(#f1)"
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="f1" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
          <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
        </filter>
      </defs>
      <rect
        width="90"
        height="90"
        stroke="green"
        stroke-width="3"
        fill="yellow"
        filter="url(#f1)"
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="f1" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="20" dy="20" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="10" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
      <rect
        width="90"
        height="90"
        stroke="green"
        stroke-width="3"
        fill="yellow"
        filter="url(#f1)"
      />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="0%"
            style="stop-color: rgb(255, 255, 0); stop-opacity: 1"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(255, 0, 0); stop-opacity: 1"
          />
        </linearGradient>
      </defs>
      <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
       
      <defs>
        <radialGradient id="grad1" cx="20%" cy="30%" r="30%" fx="50%" fy="50%">
          <stop
            offset="0%"
            style="stop-color: rgb(255, 255, 255); stop-opacity: 0"
          />
          <stop
            offset="100%"
            style="stop-color: rgb(0, 0, 255); stop-opacity: 1"
          />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="70" rx="85" ry="55" fill="url(#grad1)" />
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref, onMounted } from "vue";

const svgRef = ref<any>(null);
const strokeDasharray = ref(0);
const strokeDashoffset = ref(0);
onMounted(() => {
  const path = svgRef.value.firstElementChild;
  const pathLength = path.getTotalLength();
  strokeDasharray.value = pathLength;
  strokeDashoffset.value = pathLength;

  const render = () => {
    if (strokeDashoffset.value > 0) {
      strokeDashoffset.value--;
      requestAnimationFrame(render);
    }
  };
  render();
});
</script>

<style lang="scss" scoped>
.svg-container {
  padding: 40px;
}
</style>
