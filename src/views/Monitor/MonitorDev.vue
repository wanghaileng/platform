<template>
  <div id="monitorDev">
    <div class="top">
      <div class="eq">
        <img src="@/assets/images/monitor_4.png" alt />
        <div>
          <p>{{dev_total}}</p>
          <span>设备总数</span>
        </div>
      </div>
      <div class="eq">
        <img src="@/assets/images/monitor_3.png" alt />
        <div>
          <p>{{eq_alarm}}</p>
          <span>设备报警</span>
        </div>
      </div>
      <div class="eq">
        <img src="@/assets/images/monitor_2.png" alt />
        <div>
          <p>{{eq_drops}}</p>
          <span>设备掉线</span>
        </div>
      </div>
      <div class="eq">
        <img src="@/assets/images/monitor_1.png" alt />
        <div>
          <p>{{eq_online}}</p>
          <span>设备在线</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dev_total: 85,
      eq_alarm: 0,
      eq_drops: 0,
      eq_online: 0
    };
  }
};
</script>

<style lang="less">
#monitorDev {
  .top {
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid #e7ecf1;
    .eq {
      height: 120px;
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      margin-right: 30px;
      img {
        position: absolute;
        left: 0;
        bottom: 0;
      }
      div {
        padding-right: 10px;
        display: block;
        p {
          margin: 0;
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #ffffff;
          font-size: 48px;
          text-align: center;
        }
        span {
          font-family: Source Han Sans SC;
          font-weight: 500;
          color: #ffffff;
        }
      }
    }
    .eq:first-of-type {
      background: #3598dc;
    }
    .eq:nth-of-type(2) {
      background: #e7505a;
    }
    .eq:nth-of-type(3) {
      background: #22bfa5;
    }
    .eq:nth-of-type(4) {
      background: #13b5b1;
      margin-right: 0px;
    }
  }
}
</style>