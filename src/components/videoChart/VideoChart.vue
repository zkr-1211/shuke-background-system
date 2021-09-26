<template>
  <div>
    <div id="myChart"></div>
  </div>
</template>

<script>
export default {
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        //添加横线滚动条
        dataZoom: {
          start: 0, //默认为0
          end: 20, //默认为100
          type: "slider",
          show: true,
          xAxisIndex: [0],
          handleSize: 0, //滑动条的 左右2个滑动条的大小
          height: 8, //组件高度
          //   top:50,
          left: 90, //左边的距离
          right: 90, //右边的距离
          bottom: 20, //右边的距离
          handleColor: "#000", //h滑动图标的颜色
          backgroundColor: "#FAFAFA",
          fillerColor: "#5592FE",
          handleStyle: {
            borderColor: "#FAFAFA",
            borderWidth: "1",
            shadowBlur: 2,
            background: "#FAFAFA",
            shadowColor: "#FAFAFA",
          },
        },
        tooltip: {
          // trigger: 'axis',
          // axisPointer: {
          //     type: 'cross',
          //     crossStyle: {
          //         color: '#999'
          //     }
          // }
        },
        // toolbox: {
        //     feature: {
        //         dataView: {show: true, readOnly: false},
        //         magicType: {show: true, type: ['line', 'bar']},
        //         restore: {show: true},
        //         saveAsImage: {show: true}
        //     }
        // },
        legend: {
          data: ["视频时长", "播放完成率"],
          left: "50",
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "1月",
              "2月",
              "3月",
              "4月",
              "1月",
              "2月",
              "3月",
              "4月",
              "1月",
              "2月",
              "3月",
              "4月",
              "1月",
              "2月",
              "3月",
              "4月",
            ],
            axisPointer: {
              type: "shadow",
            },
            axisLine: {
              //y轴
              show: false,
            },
            axisTick: {
              //y轴刻度线
              show: false,
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 100,
            interval: 20,
            offset: 0,
            axisLabel: {
              formatter: "{value}",
            },
            axisLine: {
              //y轴
              show: false,
            },
            axisTick: {
              //y轴刻度线
              show: false,
            },
          },
          {
            type: "value",

            min: 0,
            max: 100,
            interval: 20,
            offset: 0,
            axisLabel: {
              formatter: "{value} min",
            },
            axisLine: {
              //y轴
              show: false,
            },
            axisTick: {
              //y轴刻度线
              show: false,
            },
          },
        ],
        series: [
          {
            name: "视频时长",
            type: "bar",
            barWidth: 20,
            data: [23.0, 42.9, 72.0, 77.2, 75.6],
            barGap: "0",
            itemStyle: {
              normal: {
                color: "#5592FE",
                label: {
                  //   show: true,
                  //   position: "top",
                },
              },
            },
          },
          //   {
          //     name: "学习时长",
          //     type: "bar",
          //     barWidth: 20,
          //     data: [23.0, 42.9, 72.0, 77.2, 75.6],
          //     barGap: "0",
          //     itemStyle: {
          //       normal: {
          //         color: "#FFBC13",
          //         label: {
          //           //   show: true,
          //           //   position: "bottom",
          //         },
          //       },
          //     },
          //   },
          {
            name: "播放完成率",
            type: "line",
            itemStyle: {
              normal: {
                color: "#FFBC13",
                label: {
                  //   show: true,
                  //   position: "bottom",
                },
              },
            },
            data: (function () {
              var res = [];
              var len = 0;
              while (len < 10) {
                res.push((Math.random() * 10 + 5).toFixed(1) - 0);
                len++;
              }
              return res;
            })(),
          },
        ],
      });
      window.addEventListener("resize", () => {
        myChart.resize();
        setTimeout(() => {
          myChart.resize();
        }, 1000);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#myChart {
  min-width: 400px;
  width: 100%;
  // width: 500px;
  height: 290px;
}
</style>