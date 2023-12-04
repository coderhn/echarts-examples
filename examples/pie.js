(function () {
  const myChart = echarts.init(document.getElementById('pie'));

  const option = JSON.parse(JSON.stringify(options['pie']))

  const arr = option.series[0].data;
  let currentIndex = -1;
  let timeId = null;
  if (option && typeof option === "object") {
    timeId = setInterval(function () {
      const dataLen = arr.length;
      // 取消之前高亮的图形
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      currentIndex = (currentIndex + 1) % dataLen;
      // 高亮当前图形
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      myChart.setOption(option);
    }, 2 * 1000);
  }

  myChart.setOption(option);
  function onMousemove(e) {
    if (timeId) {
      window.clearInterval(timeId);
    }
    if (e.dataIndex === currentIndex) {
      return;
    }
    myChart.dispatchAction({
      type: "downplay",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });
  }
  function onMouseout(e) {
    myChart.dispatchAction({
      type: "highlight",
      seriesIndex: 0,
      dataIndex: currentIndex,
    });

    timeId = setInterval(function () {
      const dataLen = arr.length;
      // 取消之前高亮的图形
      myChart.dispatchAction({
        type: "downplay",
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      currentIndex = (currentIndex + 1) % dataLen;
      // 高亮当前图形
      myChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: currentIndex,
      });
      myChart.setOption(option);
    }, 2 * 1000);
  }
  myChart.on("mousemove", "series", onMousemove);
  myChart.on("mouseout", "series", onMouseout);
})();
