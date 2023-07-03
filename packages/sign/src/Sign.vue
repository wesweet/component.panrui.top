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
  props: {},
  data() {
    return {
      canvas: null, // canvas 实例对象
      cWidth: 350, // 预设宽度
      cHeight: 350, // 预设高度
      ctx: null, // 画布
      x: 0, // x坐标
      y: 0, // y坐标
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
    },
    // 鼠标按下
    mousedown(e) {
      e.preventDefault();
      console.log(e);
    },
    // 鼠标移动
    mousemove() {
      //   console.log(e);
    },
    // 鼠标抬起
    mouseup(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="less" scoped></style>
