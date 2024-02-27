<template>
  <div>
    <canvas id="demo1" width="1000" height="1000"></canvas>
  </div>
</template>

<script></script>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
const createjs = (window as any).createjs;

function resolveSrc(name: string): string {
  const img = new URL(`../../assets/images/${name}`, import.meta.url).href;
  return img;
}

const init = () => {
  let stage = new createjs.Stage("demo1");

  // Text
  let text1 = new createjs.Text("Text 1 !", "bold 26px Arial", "#ff7700");
  text1.regX = -50; // 沿X轴负方向的偏移量
  text1.regY = -50; // 沿Y轴负方向的偏移量
  text1.x = 100; // 绘制源点 X坐标
  text1.y = 50; // 绘制源点 Y坐标
  let text2 = new createjs.Text("旋转+XY拉伸！", "bold 18px Arial", "#ff7700");
  text2.x = 50;
  text2.y = 50;
  text2.rotation = 50; // 旋转角度 DEG
  text2.scaleX = 3; // X轴放大(拉伸)
  text2.scaleY = 2; // X轴放大(拉伸)
  let text3 = new createjs.Text("XY轴倾斜", "bold 50px Arial", "#ff7700");
  text3.x = 300;
  text3.y = 200;
  text3.skewX = 45; // X轴倾斜角度 DEG
  text3.skewY = 20; // Y周倾斜角度 DEG
  let text4 = new createjs.Text("文字shadow", "bold 30px Arial", "#ff7700");
  text4.x = 400;
  text4.y = 100;
  text4.shadow = new createjs.Shadow("#000000", 5, 5, 10); // 创建一个shadow实例Object

  // Shape
  let circle = new createjs.Shape();
  circle.graphics.beginFill("red").drawCircle(0, 0, 40);
  //设置Shape实例的坐标
  circle.x = circle.y = 50;

  // 画线
  let g2 = new createjs.Graphics()
    .beginStroke("red")
    .beginFill("blue")
    .drawRect(150, 0, 200, 100); // X, Y, W, H
  let c2 = new createjs.Shape(g2);

  // AlphaMaskFilter
  var box = new createjs.Shape();
  box.graphics.beginLinearGradientFill(
    ["#ff0000", "#0000ff"],
    [0, 1],
    0,
    0,
    0,
    100
  );
  box.graphics.drawRect(0, 0, 100, 100);
  box.cache(0, 0, 100, 100);
  var bmp = new createjs.Bitmap(resolveSrc("hua.jpg"));
  bmp.filters = [new createjs.AlphaMapFilter(box.cacheCanvas)];
  bmp.cache(0, 0, 100, 100);

  // Bitmap
  var bitmap = new createjs.Bitmap(resolveSrc("hua.jpg"));
  bitmap.cache(0, 0, 200, 200, 1);

  // BitmapText
  var bitmapText = new createjs.BitmapText("1122");

  // BlurFilter
  var shape = new createjs.Shape().set({ x: 100, y: 100 });
  shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
  var blurFilter = new createjs.BlurFilter(5, 5, 1);
  shape.filters = [blurFilter];
  var bounds = blurFilter.getBounds();
  shape.cache(
    -50 + bounds.x,
    -50 + bounds.y,
    100 + bounds.width,
    100 + bounds.height
  );

  // ColorFilter
  var shape = new createjs.Shape().set({ x: 100, y: 100 });
  shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
  shape.filters = [new createjs.ColorFilter(0, 0, 0, 1, 0, 0, 255, 0)];
  shape.cache(-50, -50, 100, 100);

  // ColorMatrix
  var shape = new createjs.Shape().set({ x: 100, y: 100 });
  shape.graphics.beginFill("#ff0000").drawCircle(0, 0, 50);
  var matrix = new createjs.ColorMatrix().adjustHue(180).adjustSaturation(100);
  shape.filters = [new createjs.ColorMatrixFilter(matrix)];
  shape.cache(-50, -50, 100, 100);

  // MovieClip
  var mc = new createjs.MovieClip({ loop: -1, labels: { myLabel: 20 } });
  var child1 = new createjs.Shape(
    new createjs.Graphics().beginFill("#999999").drawCircle(30, 30, 30)
  );
  var child2 = new createjs.Shape(
    new createjs.Graphics().beginFill("#5a9cfb").drawCircle(30, 30, 30)
  );
  mc.timeline.addTween(
    createjs.Tween.get(child1).to({ x: 0 }).to({ x: 60 }, 50).to({ x: 0 }, 50)
  );
  mc.timeline.addTween(
    createjs.Tween.get(child2).to({ x: 60 }).to({ x: 0 }, 50).to({ x: 60 }, 50)
  );
  mc.gotoAndPlay("start");

  var text = new createjs.Text("Hello World", "20px Arial", "#000");
  text.x = 100;

  // 绘制
  stage.addChild(text, mc);
  stage.update();
  stage.addEventListener("click", () => {
    console.log(111);
  });

  //   shape在屏幕上移动
  createjs.Ticker.addEventListener("tick", handleTick);
  function handleTick() {
    stage.update();
  }
};

onMounted(() => {
  init();
});
</script>

<style lang="scss" scoped></style>
