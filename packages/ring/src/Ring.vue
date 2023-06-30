<template>
  <div class="box">
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
      cWidth: 700, // 预设宽度
      cHeight: 700, // 预设高度
      progress: 50, // 假设从接口获取的进度目前是 50
      ctx: null, // 画布
      radius: 124, // 外环半径
      thickness: 12, // 圆环厚度
      startAngle: 180, // 开始角度
      endAngle: 0, // 结束角度
      x: 0, // x坐标
      y: 0, // y坐标
      baseColor: "#0091FF", // 底色
    };
  },
  created() {},
  mounted() {
    this.initCanvas();
  },
  methods: {
    // 初始化canvae
    initCanvas() {
      // 初始化 canvas
      let devicePixelRatio = window.devicePixelRatio > 1 || 1; // 获取设备像素比例
      console.log(devicePixelRatio);
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.height = this.cHeight * devicePixelRatio; // 设置Canvas高度
      this.canvas.width = this.cWidth * devicePixelRatio; // 设置Canvas宽度
      this.ctx.scale(devicePixelRatio, devicePixelRatio); // 缩放上下文
      this.canvas.style.width = this.cWidth + "px"; // 设置 canvas css 宽度
      this.canvas.style.height = this.cHeight + "px"; // 设置 canvas css 高度
      this.ctx.translate(this.cWidth / 2, this.cHeight / 2); // 将坐标原点移动到画布中心
      this.ctx.fillStyle = "#fff"; // 设置填充颜色
      this.ctx.fillRect(-350, -350, 700, 700); // 填充画布颜色
      this.initCircleProgress();
    },
    // 角度转弧度
    angle2Radians(angle) {
      // 角度转弧度
      return (angle * Math.PI) / 180;
    },
    // 计算圆环上某点坐标
    calcRingPoint(x, y, radius, angle) {
      // 计算圆环上某点坐标
      let point = {};
      point.x = x + radius * Math.cos(this.angle2Radians(angle));
      point.y = y + radius * Math.sin(this.angle2Radians(angle));
      return point;
    },
    // 绘画进度条
    initCircleProgress() {
      let that = this;
      console.log(that);
      // 画出总共进度条
      this.ctx.beginPath();
      this.ctx.arc(
        this.x,
        this.y,
        this.radius,
        this.angle2Radians(this.startAngle),
        this.angle2Radians(this.endAngle)
      );
      this.ctx.lineWidth = this.thickness;
      this.ctx.strokeStyle = this.baseColor;
      this.ctx.lineCap = "round";
      this.ctx.stroke();
      this.ctx.closePath();

      // 获取终点角度
      let endAngle = (1 - this.progress / 100) * 180;
      this.ctx.beginPath();
      this.ctx.arc(
        this.x,
        this.y,
        this.radius,
        this.angle2Radians(this.startAngle),
        this.angle2Radians(-endAngle)
      );
      this.ctx.lineWidth = this.thickness;
      // 颜色使用渐变色
      // 获取终点坐标
      let point = this.calcRingPoint(this.x, this.y, this.radius, endAngle);
      console.log(point);
      let barGradient = this.ctx.createLinearGradient(
        -this.radius,
        0,
        point.x,
        0
      );
      barGradient.addColorStop(0, "#73D8FF");
      barGradient.addColorStop(1, "#FFAB39");
      this.ctx.strokeStyle = barGradient;
      this.ctx.lineCap = "round";
      this.ctx.stroke();
      this.ctx.closePath();

      // 计算外环与内环终点连接处的中⼼坐标
      this.ctx.beginPath();
      this.ctx.arc(
        point.x,
        -point.y,
        this.thickness / 2,
        this.angle2Radians(0),
        this.angle2Radians(360)
      );
      this.ctx.lineWidth = 1;
      this.ctx.fillStyle = "#fff";
      this.ctx.fill();
      this.ctx.closePath();
      // // 逆时针画内环

      // 计算外环与内环起点连接处的中心点坐标
      // 画白色点
      // this.ctx.beginPath();
      // let twoCtrlPoint = this.calcRingPoint(
      //   this.x,
      //   this.y,
      //   this.radius - this.thickness / 2,
      //   this.startAngle
      // );
      // this.ctx.arc(
      //   twoCtrlPoint.x,
      //   twoCtrlPoint.y,
      //   this.thickness / 2,
      //   this.angle2Radians(0),
      //   this.angle2Radians(180)
      // );
      // if (this.progress > 0) {
      //   this.ctx.fillStyle = this.baseColor;
      //   this.ctx.fill();
      // } else {
      //   this.ctx.strokeStyle = this.baseColor;
      //   this.ctx.stroke();
      // }
      // this.ctx.closePath();
      // this.drawProcess(100);
      // this.drawProcess();
    },
    drawProcess(progress) {
      let that = this;
      let tempAngle = this.startAngle;
      let total = 100; // 总进度
      let percent = (progress || this.progress) / total;
      let twoEndAngle = percent * 180 + this.startAngle; // 半圆原本是180，加长后是220
      let step = (twoEndAngle - this.startAngle) / 100; // 设置步长速度
      function animLoop() {
        if (tempAngle < twoEndAngle) {
          tempAngle += step;
          let threeCtrlPoint = that.calcRingPoint(
            that.x,
            that.y,
            that.radius - that.thickness / 2,
            tempAngle
          );
          console.log(threeCtrlPoint);
          that.ctx.beginPath();
          that.ctx.arc(
            threeCtrlPoint.x,
            threeCtrlPoint.y,
            that.thickness / 2,
            that.angle2Radians(-90),
            that.angle2Radians(270)
          );
          if (progress) {
            that.ctx.fillStyle = that.baseColor;
          } else {
            let barGradient = that.ctx.createLinearGradient(0, 0, 100, 0);
            barGradient.addColorStop(0, "#2193b0");
            barGradient.addColorStop(1, "#ffdde1");
            that.ctx.fillStyle = barGradient;
          }
          that.ctx.fill();
          that.ctx.closePath();
          window.requestAnimationFrame(animLoop);
        }
      }
      animLoop();
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
</style>
