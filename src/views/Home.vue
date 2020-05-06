<template>
  <div id="home">
    <el-container>
      <el-header height="50px">
        <Header />
      </el-header>
      <el-container>
        <el-aside width="235px">
          <Aside />
        </el-aside>
        <el-main>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item v-for="item in this.$route.meta" :key="item.id">{{item.name}}</el-breadcrumb-item>
                </el-breadcrumb>
              </span>
            </div>
            <div class="text item">
              <router-view />
            </div>
          </el-card>
        </el-main>
      </el-container>
      <el-footer height="33px">2018 &copy; Metronic Theme By</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Aside from "@/components/Aside.vue";
export default {
  components: {
    Header,
    Aside
  },
  computed: {}
};
</script>

<style lang="less">
#home {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      background-color: #2b3643;
      padding: 0;
    }
    .el-aside {
      background-color: #364150;
      height: 100%;
    }
    .el-main {
      height: 100%;
    }
    .el-footer {
      padding: 8px 20px 5px;
      font-size: 13px;
      background-color: #364150;
      color: #98a6ba;
    }
  }
}
</style>