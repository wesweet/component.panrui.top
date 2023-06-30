## 使用

```html
<pr-circle-progress
  :progress="progress"
  :baseColor="baseColor"
  :radius="radius"
  :thickness="thickness"
  :barColor="barColor"
></pr-circle-progress>
```

## API

| 参数      | 说明                         | 类型   | 默认值                 | 必填  | 返回值 |
| --------- | ---------------------------- | ------ | ---------------------- | ----- | ------ |
| radius    | 圆环半径                     | Number | 124                    | false | -      |
| thickness | 进度条厚度                   | Number | 12                     | false | -      |
| baseColor | 进度条背景色                 | String | #0091FF                | false | -      |
| progress  | 进度                         | Number | 0                      | false | -      |
| barColor  | 进度条颜色(多个颜色支持渐变) | Array  | ["#73D8FF", "#FFAB39"] | false | -      |
