<template>
  <div id="map">
    <div class="search"></div>
    <div id="amap_wrapper">
      <el-amap vid="amap" plugin="plugin" class="amap-demo"></el-amap>
      <div class="amap_right">
        <div class="total">
          <h3>实时状况统计</h3>
        </div>
        <div class="total">
          <h3>实时状况统计</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      websock: null,
      message: {
        uid: "uid123456",
        sign: "sign123456",
        version: 2,
        token: "EoPj1uU4xi7cC3TGdo/jj5fGAkrnXtSkdy0DkKFyf20=",
        action: "uploads",
        device: "hm9wvt",
        load: [
          { dev_id: "hm9wvt", data: [{ id: 1, v: [30], t: [1587975851.3602] }] }
        ],
        plugin: [
          {
            pName: "MapType",
            defaultType: 1,
            events: {
              init(instance) {
                console.log(instance);
              }
            }
          }
        ]
      }
    };
  },
  // created() {
  //   this.initWebSocket();
  // },
  // destroyed() {
  //   this.websock.close(); //离开路由之后断开websocket连接
  // },
  // methods: {
  //   initWebSocket() {
  //     //初始化weosocket
  //     const wsuri = "ws://106.52.169.25:9506";
  //     this.websock = new WebSocket(wsuri);
  //     this.websock.onmessage = this.websocketonmessage;
  //     this.websock.onopen = this.websocketonopen;
  //     this.websock.onerror = this.websocketonerror;
  //     this.websock.onclose = this.websocketclose;
  //   },
  //   websocketonopen() {
  //     //连接建立之后执行send方法发送数据\
  //     this.websocketsend(JSON.stringify(this.message));
  //   },
  //   websocketonerror() {
  //     //连接建立失败重连
  //     this.initWebSocket();
  //   },
  //   websocketonmessage(e) {
  //     //数据接收
  //     this.websock = JSON.parse(e.data);
  //     console.log(this.websock);
  //   },
  //   websocketsend(Data) {
  //     //数据发送
  //     this.websock.send(Data);
  //   },
  //   websocketclose(e) {
  //     //关闭
  //     console.log("断开连接", e);
  //   }
  // },
  // mounted() {}
};
</script>

<style lang="less" scoped>
#map {
  .search {
    height: 60px;
  }
  #amap_wrapper {
    display: flex;
    justify-content: space-around;
    .amap-demo {
      width: 960px;
      height: 600px;
    }
    .amap_right {
      margin-left: 50px;
      .total {
        box-sizing: border-box;
        width: 180px;
        height: 200px;
        padding: 10px 24px 1px 24px;
        background: #eeeeee;
        margin-bottom: 30px;
        box-shadow: 0px 4px 4px 0px rgba(42, 43, 43, 0.15);
        h3 {
          padding: 10px 0;
          border-bottom: 1px solid #ffffff;
          color: #888686;
          font-size: 14px;
        }
      }
    }
  }
}
</style>