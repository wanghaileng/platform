<template>
  <div id="device_statistics">
    <div class="activate">
      <div class="portlet-title">
        <div class="caption">
          <span class="caption-subject">设备每月激活数量统计</span>
          <span class="caption-helper">单位（台）</span>
        </div>
        <div class="form-group">
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <template v-for="menu in data">
                <el-dropdown-item :key="menu.id">{{menu.year}}</el-dropdown-item>
              </template>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
      <div id="myCharts1" ref="myCharts1" style="height:500px;width:100%"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 72,
      data: [
        { year: 2018, res: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0] },
        { year: 2019, res: [0, 0, 1, 0, 1, 3, 4, 2, 2, 5, 6, 7] },
        { year: 2020, res: [0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0] }
      ]
    };
  },
  methods: {
    //柱状图绘制
    drawHistogram(data) {
      let myCharts1 = this.$echarts.init(this.$refs.myCharts1);
      let option = {
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月份",
              "2月份",
              "3月份",
              "4月份",
              "5月份",
              "6月份",
              "7月份",
              "8月份",
              "9月份",
              "10月份",
              "11月份",
              "12月份"
            ],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data
          }
        ]
      };
      myCharts1.setOption(option);
    }
  },
  mounted() {
    this.drawHistogram(this.data[0].res);
  }
};
</script>

<style lang="less" scoped>
#device_statistics {
  .activate {
    .portlet-title {
      display: flex;
      justify-content: space-between;
      height: 70px;
      border-bottom: 1px solid #eef1f5;
      .caption {
        .caption-subject {
          font-size: 16px;
          color: #44b6ae;
        }
        .caption-helper {
          color: #9eacb4;
          font-size: 13px;
          font-weight: 400;
        }
      }
    }
  }
}
</style>