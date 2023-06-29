<template>
  <div class="box">
    <!-- <div class="circle"></div>
    <div class="circle-ring"></div> -->
    <canvas id="circleProgress" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  name: "PrRing",
  props: {},
  data() {
    return {
      canvas: null, // canvas 实例对象
      cWidth: 300, // 预设宽度
      cHeight: 300, // 预设高度
      progress: 50, // 假设从接口获取的进度目前是 50
    };
  },
  created() {},
  mounted() {
    this.initCircleProgress();
  },
  methods: {
    initCircleProgress() {
      // 初始化 canvas
      let radius = 124; // 外环半径
      let thickness = 12; // 圆环厚度
      let innerRadius = radius - thickness; // 内环半径
      let startAngle = -180; // 开始⾓度
      let endAngle = 0; // 结束⾓度
      let x = 0; // 圆⼼x坐标
      let y = 0; // 圆⼼y坐标

      this.canvas = this.$refs.canvas;
      let ctx = this.canvas.getContext("2d");
      this.canvas.width = this.cWidth; // 设置 canvas 宽度
      this.canvas.height = this.cHeight; // 设置 canvas 高度
      this.canvas.style.width = this.cWidth + "px"; // 设置 canvas css 宽度
      this.canvas.style.height = this.cHeight + "px"; // 设置 canvas css 高度
      ctx.translate(this.cWidth / 2, this.cHeight / 2); // 将坐标原点移动到画布中心
      ctx.fillStyle = "#0091FF"; // 设置填充颜色
      // ctx.fillRect(-150, -150, 300, 300);
      console.log(innerRadius, startAngle, endAngle, x, y);

      this.renderRing(startAngle, endAngle, radius);
      this.renderRing(endAngle, startAngle, innerRadius, true);
      // this.canvas = this.$refs.canvas;
      // this.canvas.width = this.cWidth;
      // this.canvas.height = this.cHeight;
      // this.canvas.style.width = this.cWidth / 2 + "px";
      // this.canvas.style.height = this.cHeight / 2 + "px";
      // this.canvas.style.borderRadius = "50%";
      // this.canvas.style.backgroundColor = "#ccc";
      // this.canvas.style.margin = "0 auto";
      // this.canvas.style.display = "block";
      // this.canvas.style.position = "relative";
      // this.canvas.style.top = "0";
      // this.canvas.style.left = "0";
      // this.canvas.style.zIndex = "1";
      // this.canvas.style.boxShadow = "0 0 10px #ccc";
      // this.canvas.style.border = "1px solid #ccc";
      // this.canvas.style.borderRadius = "50%";
      // this.canvas.style.overflow = "hidden";
      // this.canvas.style.transform = "scale(0.5)";
      // this.canvas.style.transformOrigin = "0 0";
      // // 绘制圆环
      // this.drawCircle();
    },
    // 角度转弧度
    angle2Radians(angle) {
      // 角度转弧度
      return (angle * Math.PI) / 180;
    },
    renderRing(startAngle, endAngle, radius, clockwise = false) {
      // 绘制圆环
      let ctx = this.canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(
        0,
        0,
        radius,
        this.angle2Radians(startAngle),
        this.angle2Radians(endAngle),
        clockwise
      );
      // ctx.lineWidth = lineWidth;
      ctx.strokeStyle = "#0091FF";
      ctx.stroke();
    },
    calcRingPoint(x, y, radius, angle) {
      // 计算圆环上某点坐标
      let point = {};
      point.x = x + radius * Math.cos(this.angle2Radians(angle));
      point.y = y + radius * Math.sin(this.angle2Radians(angle));
      return point;
    },
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle {
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
}
.circle-ring {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(to right, red, yellow, green, blue, purple);
  border: 10px solid transparent;
  background-origin: border-box;
}

// .ring {
//   width: 200px;
//   height: 200px;
//   border-radius: 50%;
//   border: 10px solid #ccc;
//   border-top-color: #f00;
//   border-left-color: aqua;
//   animation: ring 1s infinite linear;
// }
</style>
