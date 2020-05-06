<template>
  <div id="aside">
    <!-- 
            default-active    : 当前激活菜单的 index
            background-color  : 菜单的背景色
            text-color        : 菜单的文字颜色
            active-text-color : 当前激活菜单的文字颜色（仅支持 hex 格式）
            unique-opened	    ：是否只保持一个子菜单的展开
            router            : 开启导航路由模式
            @select="handSelect"
    -->
    <div class="search">
      <el-input placeholder="Search..." v-model="search">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      unique-opened
      router
      
      background-color="#364150"
      text-color="#b4bcc8"
      active-text-color="#b4bcc8"
    >
      <!-- 做动态菜单 -->
      <template v-for="menu in filterList">
        <!-- 没有子 -->
        <el-menu-item v-if="!menu.children" :index="menu.index" :xx="menu.index" :key="menu.id">
          <i :class="menu.cls"></i>
          <!-- 菜单图标-->
          <span slot="title">{{menu.title}}</span>
          <!-- 菜单文字 -->
        </el-menu-item>
        <!-- 有子集 -->
        <el-submenu v-else :index="menu.index" :key="menu.id">
          <template slot="title">
            <i :class="menu.cls"></i>
            <!-- 标题图片 -->
            {{menu.title}}
            <!-- 标题文字 -->
          </template>
          <el-menu-item v-for="item in menu.children" :key="item.index" :index="item.index">
            {{item.name}}
            <!-- 子菜单文字 -->
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import "../assets/icon/iconfont.css"

export default {
  data() {
    return {
      menulist: [
        {
          id: 1,
          index: "1",
          cls: "iconfont el-iconlightbulb",
          title: "设备监测",
          role: [1, 2], // 可访问角色有：超级管理员，普通员工
          children: [
            { index: "/home/monitormap", name: "实时地图" },
            { index: "/home/monitordev", name: "实时列表" }
          ]
        },
        {
          id: 2,
          index: "2",
          cls: "el-icon-user-solid",
          title: "个人信息",
          role: [1], // 可访问角色有：超级管理员
          children: [
            { index: "/home/messages", name: "我的消息" },
            { index: "/home/profile", name: "个人资料" }
          ]
        },
        {
          id: 3,
          index: "3",
          cls: "iconfont el-iconRectangleCopy1",
          title: "用户管理",
          role: [1], // 可访问角色有：超级管理员
          children: [
            { index: "/home/users", name: "分管理员" },
            { index: "/home/admins", name: "系统管理员" },
            { index: "/home/addusers", name: "添加用户" },
            { index: "/home/menuper", name: "管理员权限" }
          ]
        },
        {
          id: 4,
          index: "4",
          cls: "iconfont el-iconchanpinguanli",
          title: "设备管理",
          role: [1, 2],
          children: [
            { index: "/home/device_list", name: "设备列表", role: [1] },
            { index: "/home/models", name: "型号列表", role: [1, 2] },
            { index: "/home/alarms_list", name: "警报列表", role: [1] },
            { index: "/home/hisdatas", name: "历史数据", role: [1, 2] },
            { index: "/home/tags", name: "标签管理", role: [1] },
            { index: "/home/triggers", name: "警报触发器", role: [1] },
            { index: "/home/hisdownex", name: "下载申请审核", role: [1] },
            { index: "/home/upload", name: "数据上传", role: [2] },
            { index: "/home/datadownload", name: "数据下载", role: [2] },
            { index: "/home/genreindex", name: "型号分组", role: [1] }
          ]
        },
        {
          id: 5,
          index: "5",
          cls: "el-icon-s-data",
          title: "数据统计",
          role: [1], // 可访问角色有：超级管理员
          children: [
            { index: "/home/device_statistics", name: "设备统计" },
            { index: "/home/user_statistics", name: "用户统计" }
          ]
        },
        {
          id: 6,
          index: "6",
          cls: "el-icon-setting",
          title: "平台系统",
          role: [1], // 可访问角色有：超级管理员
          children: [
            { index: "/home/menu", name: "系统菜单" },
            { index: "/home/sets", name: "系统设置" },
            { index: "/home/news", name: "系统消息" },
            { index: "/home/logs", name: "系统日志" }
          ]
        },
        {
          id: 7,
          index: "7",
          cls: "el-icon-s-tools",
          title: "成果管理",
          role: [1], // 可访问角色有：超级管理员
          children: [{ index: "/home/allgains", name: "成果列表" }]
        },
        {
          id: 8,
          index: "8",
          cls: "el-icon-date",
          title: "设备借用",
          role: [1], // 可访问角色有：超级管理员
          children: [
            { index: "/home/deviceCount", name: "设备统计" },
            { index: "/home/lendCount", name: "借出统计" },
            { index: "/home/returnCount", name: "归还统计" }
          ]
        }
      ],
      currentUserRole: 1, // 默认普通员工
      search: ""
    };
  },
  created() {
    // console.log(this.filterList);
  },
  mounted() {
    this.showList(this.menulist);
  },
  methods: {
    // handSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    showList(menu) {
      let array = [];
      let vm = this;
      array = menu.filter(menu => {
        menu.children = menu.children.filter(res => {
          if (res.role) {
            return res.role.includes(vm.currentUserRole);
          } else {
            return res;
          }
        });
        return menu.role.includes(vm.currentUserRole);
      });
      return array;
    }
  },
  computed: {
    filterList() {
      // 过滤后的"菜单集合"
      let array = [],
        vm = this;
      //处理
      array = vm.menulist.filter(menu => {
        return menu.role.includes(vm.currentUserRole);
      });
      //结果
      return array;
    }
  }
};
</script>

<style lang="less">
#aside {
  padding-top: 20px;
  .search {
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    .el-input {
      width: 200px;
      height: 25px;
      color: #435060;
      border-bottom: 1px solid #435060;
      .el-input__inner {
        width: 180px;
        height: 20px;
        border: 0;
        padding: 0;
        color: #4e5d6f;
        background: #364150;
      }
      .el-input__icon {
        cursor: pointer;
        color: #4e5d6f;
        line-height: 24px;
      }
    }
  }
  .el-menu-vertical-demo {
    width: 235px;
    min-height: 400px;
  }
  .el-menu {
    border: 0;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 40px;
    line-height: 20px;
    padding: 10px 15px;
  }
  .el-submenu [class^="el-icon-"] {
    vertical-align: middle;
    margin-right: 4px;
    text-align: center;
    font-size: 16px;
    line-height: 20px;
  }
  .is-active {
    .el-submenu__title {
      background-color: #36c6d3 !important;
      color: #fff !important;
      i {
        color: #fff;
      }
    }
  }
}
</style>

