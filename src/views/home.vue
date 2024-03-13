<template>
  <el-container class="container-css">
    <!-- 头部区
    <el-header>服装商城后台管理系统</el-header> -->
    <!-- 侧边栏 -->
    <el-aside width="200px" class="sidebar-container">
      <el-menu background-color="rgb(48,65,86)" text-color="#fff" unique-opened router>
        <!-- 一级菜单 -->
        <el-submenu :index="item.id + ''" v-for="item in menulist" :key="item.id">
          <!-- 一级菜单模板区 -->
          <template slot="title">
            <svg-icon v-if="item.icon" :name="item.icon"></svg-icon>
            <span>{{ item.title }}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item :index="subItem.name" v-for="subItem in item.children" :key="subItem.id">
            <template slot="title">
              <svg-icon v-if="subItem.icon" :name="subItem.icon"></svg-icon>
              <span>{{ subItem.title }}</span>
            </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- 头部区域 -->
      <el-header style="text-align: right; font-size: 15px">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><a href="#/home">首页</a></el-breadcrumb-item>
          <el-breadcrumb-item>权限</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- 内容区 -->


  </el-container>
</template>
<script>

export default {
  data() {
    return {
      //左侧菜单数据
      menulist: []
    }

  }
  ,
  created() {
    this.getMenuList()
  },
  methods: {
    //获取所有的菜单
    async getMenuList() {
      const { data: res } = await this.$http.get('menu')
      if (res.code !== 200) return this.$message.error(res.message)
      this.menulist = res.data
      // console.log(res)
    }
  }
}
</script>
<style>
.container-css {
  height: 100%;
}

.el-header {
  background-color: rgb(179, 192, 209);
}

.el-aside {
  background-color: rgb(48, 65, 86);

  .el-menu {
    border-right: none;
  }
}

.el-main {
  background-color: rgb(255, 255, 255);
}
</style>