<template>
  <div id="webgl"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// 创建3D场景
const scene = new THREE.Scene();
//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100);
//创建一个材质对象Material
// const material = new THREE.MeshBasicMaterial({
//   color: 0x0000ff, //设置材质颜色
//   transparent: true, //开启透明
//   opacity: 0.5, //设置透明度
// });

//MeshLambertMaterial受光照影响
const material = new THREE.MeshLambertMaterial();
const pointLight = new THREE.PointLight(0xffffff, 1.0);
// pointLight.intensity = 1.0;//光照强度
// pointLight.decay = 0.0;//设置光源不随距离衰减
pointLight.intensity = 50000.0; //光照强度
pointLight.position.set(400, 200, 300);
scene.add(pointLight); //点光源添加到场景中

const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
//设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0, 10, 0);
scene.add(mesh);

// 设置Camera虚拟相机
// 实例化一个透视投影相机对象
const width = 800; //宽度
const height = 500; //高度
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
// 根据需要设置相机位置具体值
camera.position.set(200, 200, 200);
camera.lookAt(mesh.position); //指向mesh对应的位置

// 辅助观察坐标系
const axesHelper = new THREE.AxesHelper(150);
scene.add(axesHelper);

// 创建渲染器对象
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
renderer.render(scene, camera); //执行渲染操作

// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
// 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
controls.addEventListener("change", function () {
  renderer.render(scene, camera); //执行渲染操作
  console.log("camera.position", camera.position);
}); //监听鼠标、键盘事件

onMounted(() => {
  (document.querySelector("#webgl") as any).appendChild(renderer.domElement);
});
</script>

<style lang="scss" scoped></style>
