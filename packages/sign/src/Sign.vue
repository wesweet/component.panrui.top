<template>
  <div class="box">
    <canvas
      ref="canvas"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
    ></canvas>
  </div>
</template>

<script>
export default {
  name: "PrSign",
  // 定义组件prop
  props: {
    // 线条宽度
    lineWidth: {
      type: Number,
      default: 4,
    },
    // 线条颜色
    lineColor: {
      type: String,
      default: "#000",
    },
    // 是否裁剪
    isCrop: {
      type: Boolean,
      default: false,
    },
    // 画板宽度
    cWidth: {
      type: Number,
      default: 350,
    },
    // 画板高度
    cHeight: {
      type: Number,
      default: 350,
    },
  },
  data() {
    return {
      canvas: null, // canvas 实例对象
      ctx: null, // 画布
      canvasRect: null, // Dom元素的位置信息
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      storageSteps: [], // 记录每步操作
      isDrawing: false, // 是否正在绘制
      isClear: false, // 是否清除画布
      isEraser: false, // 是否使用橡皮擦
      isUndo: false, // 是否撤销
      isRedo: false, // 是否重做
      isSave: false, // 是否保存
      isDownload: false, // 是否下载
      isUpload: false, // 是否上传
      isCancel: false, // 是否取消
      isEmpty: false, // 画板是否为空
    };
  },
  created() {},
  mounted() {
    this.initCanvas();
    // 在画板以外的地方松开鼠标 画板停止绘制
    document.addEventListener("mouseup", () => {
      this.isDrawing = false;
    });
  },
  methods: {
    // 初始化canvas
    initCanvas() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = this.cWidth;
      this.canvas.height = this.cHeight;
      this.canvas.style.width = this.cWidth + "px"; // 设置 canvas css 宽度
      this.canvas.style.height = this.cHeight + "px"; // 设置 canvas css 高度
      this.canvasRect = this.canvas.getBoundingClientRect(); // 获取canvas元素的位置信息
    },
    // 鼠标按下
    mousedown(e) {
      e.preventDefault();
      this.isDrawing = true;
      this.startX = e.offsetX;
      this.startY = e.offsetY;

      this.endX = this.startX;
      this.endY = this.startY;

      this.draw();
    },
    // 鼠标移动
    mousemove(e) {
      e.preventDefault();
      if (this.isDrawing) {
        this.endX = e.offsetX;
        this.endY = e.offsetY;
        this.draw();
        this.startX = this.endX;
        this.startY = this.endY;
      }
    },
    // 鼠标抬起
    mouseup(e) {
      e.preventDefault();
      this.isDrawing = false;
      let imgData = this.ctx.getImageData(
        0,
        0,
        this.canvas.width,
        this.canvas.height
      );
      this.storageSteps.push(imgData);
    },
    draw() {
      this.ctx.beginPath();
      this.ctx.moveTo(this.startX, this.startY);
      this.ctx.lineTo(this.endX, this.endY);
      this.ctx.lineCap = "round";
      this.ctx.lineJoin = "round";
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = this.lineColor;
      this.ctx.stroke();
      this.ctx.closePath();

      this.isEmpty = false;
    },
  },
};
</script>

<style lang="less" scoped></style>
