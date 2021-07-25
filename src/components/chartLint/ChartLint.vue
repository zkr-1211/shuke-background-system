<template>
  <div>
    <div id="myChart"></div>
  </div>
</template>

<script>
export default {
  name: "ChartLine",
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
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
          data: ["访问量", "学习时长"],
          left: "50",
        },
        xAxis: [
          {
            type: "category",
            data: ["1月", "2月", "3月", "4月"],
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
            offset: 15,
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
            offset: 15,
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
            name: "访问量",
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
          {
            name: "学习时长",
            type: "bar",
            barWidth: 20,
            data: [23.0, 42.9, 72.0, 77.2, 75.6],
            barGap: "0",
            itemStyle: {
              normal: {
                color: "#FFBC13",
                label: {
                  //   show: true,
                  //   position: "bottom",
                },
              },
            },
          },
        ],
      });
      window.addEventListener("resize", () => {
        myChart.resize();
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
  height: 380px;
}
</style>