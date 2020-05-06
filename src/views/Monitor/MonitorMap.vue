<template>
  <div>
    实时地图
    <div id="container"></div>
  </div>
</template>

<script>
// import AMap from "//webapi.amap.com/maps?v=2.0&key=3898759649cf11b731b38f1eac2645e0";
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
        ]
      }
    };
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
  },
  methods: {
    initWebSocket() {
      //初始化weosocket
      const wsuri = "ws://106.52.169.25:9506";
      this.websock = new WebSocket(wsuri);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      //连接建立之后执行send方法发送数据\
      this.websocketsend(JSON.stringify(this.message));
    },
    websocketonerror() {
      //连接建立失败重连
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //数据接收
      this.websock = JSON.parse(e.data);
      console.log(this.websock);
    },
    websocketsend(Data) {
      //数据发送
      this.websock.send(Data);
    },
    websocketclose(e) {
      //关闭
      console.log("断开连接", e);
    },
    //地图
  },
  mounted() {
    // this.getMap();
  }
};
</script>

<style lang="less" scoped>
#container{
    width: 560px;
    height: 640px;
}
</style>