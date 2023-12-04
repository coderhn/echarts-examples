(function () {
  var myChart = echarts.init(document.getElementById("bar"));
  const option = JSON.parse(JSON.stringify(options["bar"]));
  let timeId = null;
  if (option && typeof option === "object") {
    myChart.setOption(option);
    // 定时自动滚动
    timeId = setInterval(function () {
      moveArrayItems(option.xAxis.data);
      myChart.setOption(option);
    }, 2000);
  }

  function onMousemove(e) {
    if (timeId) {
      window.clearInterval(timeId);
    }
  }
  function onMouseout(e) {
    timeId = setInterval(function () {
      moveArrayItems(option.xAxis.data);

      myChart.setOption(option);
    }, 3 * 1000);
  }

  myChart.on("mousemove", "series", onMousemove);
  myChart.on("mouseout", "series", onMouseout);
})();
