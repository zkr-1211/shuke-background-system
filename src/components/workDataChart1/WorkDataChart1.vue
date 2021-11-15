<template>
  <div>
    <div id="WorkDataChart1"></div>
  </div>
</template>

<script>
export default {
  methods: {
    Init() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(
        document.getElementById("WorkDataChart1")
      );
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        color: ["#5592FE", "#F96164", "#FFBC13", "#72CEFF", "#33D182"],
        series: [
          {
            name: "作业合格率",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "14",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "作业合格率" },
              { value: 310, name: "作业合格率1" },
              { value: 234, name: "作业合格率2" },
              { value: 135, name: "作业合格率3" },
              { value: 1548, name: "作业合格率4" },
            ],
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
  mounted() {
      setTimeout(() => {
        this.Init()
      })
    }
};
</script>
<style lang="scss" scoped>
#WorkDataChart1 {
  min-width: 2.2rem;
  width: 100%;
  height: 2.2rem;
}
</style>