<template>
  <div>threeJS</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// init
var Scene = new THREE.Scene();
var geo = new THREE.BoxGeometry(20, 30, 50);
console.log(geo);

console.log(OrbitControls);

</script>

<style lang="scss" scoped></style>
