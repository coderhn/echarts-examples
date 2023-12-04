var LinearGradientColors = [
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#688DFF" },
    { offset: 0.5, color: "#89A6FB" },
    { offset: 1, color: "#ACC2FC" },
  ]),
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#FFD56F" },
    { offset: 0.5, color: "#FDDC93" },
    { offset: 1, color: "#F8E7BD" },
  ]),
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#57FBC0" },
    { offset: 0.5, color: "#7CFBD2" },
    { offset: 1, color: "#B4F8E6" },
  ]),
  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "#9E82FF" },
    { offset: 0.5, color: "#B7A3FB" },
    { offset: 1, color: "#D6CFFB" },
  ]),
];

const barWidth = 4;
const borderRadius = [2, 2, 0, 0];

const options = {
  bar: {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      top: 0,
      left: 0,
      padding: 0,
      itemGap: 5,
      itemWidth: 8,
      itemHeight: 8,
    },
    grid: {
      left: "0%",
      right: "0%",
      bottom: "0%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["张玉林", "仲达成", "王敏静", "王晓智", "于寒", "zhangyulin", "wms测试"],
    },
    yAxis: [
      {
        type: "value",
        axisLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "移库",
        type: "bar",
        emphasis: {
          focus: "series",
        },
        data: [32, 33, 31, 34, 30, 30, 30],
        itemStyle: {
          color: LinearGradientColors[0],
          borderRadius,
        },
        barWidth,
        barMaxWidth: 10,
        barMinWidth: 6,
      },

      {
        name: "拣货单",
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series",
        },
        data: [15, 22, 21, 15, 19, 33, 10],
        itemStyle: {
          color: LinearGradientColors[1],
          borderRadius,
        },
        barWidth,
        barMaxWidth: 10,
        barMinWidth: 6,
      },
      {
        name: "工单",
        type: "bar",
        data: [26, 18, 24, 16, 19, 10, 10],
        emphasis: {
          focus: "series",
        },
        itemStyle: {
          color: LinearGradientColors[2],
          borderRadius,
        },
        barWidth,
        barMaxWidth: 10,
        barMinWidth: 6,
      },
      {
        name: "上架单",
        type: "bar",
        data: [27, 18, 37, 12, 19, 16, 17],
        emphasis: {
          focus: "series",
        },
        itemStyle: {
          color: LinearGradientColors[3],
          borderRadius,
        },
        barWidth,
        barMaxWidth: 10,
        barMinWidth: 6,
      },
    ],
    dataZoom: [
      {
        xAxisIndex: 0, // 这里是从X轴的0刻度开始
        show: false, // 是否显示滑动条，不影响使用
        type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        startValue: 0, // 从头开始。
        endValue: 3, // 一次性展示多少个。
      },
    ],
  },
  pie: {
    legend: {
      top: 0,
      left: 0,
      padding: 0,
      itemGap: 5,
      itemWidth: 8,
      itemHeight: 8,
      selectedMode: false,
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {d}%",
      position: ["50%", "20%"],
    },
    series: [
      {
        type: "pie",
        top: "15%",
        // bottom:-50,
        // 控制饼图环形区域
        radius: ["60%", "95%"],
        avoidLabelOverlap: true,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 18,
            fontWeight: "bold",
            formatter: "{b} \n {d}%",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            name: "剩余库容",
            value: 27,
            itemStyle: { color: LinearGradientColors[0] },
            // selected:true
          },
          {
            name: "七日内已预约库容",
            value: 25,
            itemStyle: { color: LinearGradientColors[1] },
          },
          {
            name: "已使用库容",
            value: 18,
            itemStyle: { color: LinearGradientColors[2] },
          },
          {
            name: "待上架库容",
            value: 15,
            itemStyle: { color: LinearGradientColors[3] },
          },
        ],
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 5,
        },
        center: ["50%", "50%"],
        select: {
          disabled: false,
        },
        // label: {
        //     formatter: '{c}',
        //     position: 'inside'
        //   },
      },
    ],
  },
};
