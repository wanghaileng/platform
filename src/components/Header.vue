<template>
  <div id="header">
    <div class="logo">
      <a rel="stylesheet" href="/">
        <img src="@/assets/images/logo_1.png" alt="logo" class="logo_defalut" />
      </a>
    </div>
    <div class="top_menu">
      <a href="#">监控大屏</a>

      <a class="dropdown-toggle">
        <el-badge :value="0" class="item el-icon-message-solid"></el-badge>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
#header {
  display: flex;
  justify-content: space-between;
  .logo {
    width: 235px;
    padding: 0 20px;
    .logo_defalut {
      height: 45px;
    }
  }
  .top_menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .dropdown-toggle {
      width: 21px;
      height: 20px;
      padding: 19px 10px 10px;
      .item {
        padding: 0 4px;
      }
    }
  }
}
</style>
