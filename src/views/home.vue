<template>
  <el-container class="container-css">
    <!-- 头部区 -->
    <el-header>服装商城后台管理系统</el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px" class=".sidebar-container">
        <el-menu background-color="rgb(48,65,86)" text-color="#fff" unique-opened>
          <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单模板区 -->
            <template slot="title">
              <svg-icon v-if="item.icon" :name="item.icon"></svg-icon>
              <span>{{ item.title }}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="subItem.id+''" v-for="subItem in item.children" :key="subItem.id">
              <template slot="title">
                <svg-icon v-if="subItem.icon" :name="subItem.icon"></svg-icon>
              <span>{{ subItem.title }}</span>
            </template>
            </el-menu-item>


          </el-submenu>
        </el-menu>

      </el-aside>
      <!-- 内容区 -->
      <el-main>Main</el-main>
    </el-container>
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
      console.log(res)
    }
  }
}
</script>
<style  scoped>
.container-css {
  height: 100%;
}

.el-header {
  background-color: rgb(70, 70, 68);
}

.el-aside {
  background-color: rgb(48, 65, 86) ;
  .el-menu {
    border-right: none ;
  }
}

.el-main {
  background-color: rgb(255, 255, 255);
}

</style>