<template>
  <!-- <div class="container"></div> -->
  <el-container class="container-home">
  <el-aside :width="isOpen?'200px':'64px' ">
      <!-- logo -->
      <div class="logo" :class="{minLogo:!isOpen}"></div>
      <!-- 菜单 -->
   <el-menu
      :default-active="$route.path"
      background-color="#002033"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="!isOpen"
      :collapse-transition="false"
      router>
       <!-- 开启路由功能加router  router为布尔值  使用router就是真-->
      <!-- 以 index 作为 path 进行路由跳转 -->
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/article">
        <i class="el-icon-document"></i>
        <span slot="title">内容</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-picture"></i>
        <span slot="title">素材</span>
      </el-menu-item>
      <el-menu-item index="/publish">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">发布</span>
      </el-menu-item>
      <el-menu-item index="/comment">
        <i class="el-icon-chat-line-round"></i>
        <span slot="title">评论</span>
      </el-menu-item>
      <el-menu-item index="/fans">
        <i class="el-icon-s-data"></i>
        <span slot="title">粉丝</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <i class="el-icon-s-custom"></i>
        <span slot="title">个人设置</span>
      </el-menu-item>

    </el-menu>

  </el-aside>
  <el-container>
    <el-header>

        <span class="el-icon-s-fold" @click="toggleAside"></span>
        <span>文字</span>

        <!-- 下拉菜单 -->
        <el-dropdown class="my-dropdown" @command="handler">
  <span class="el-dropdown-link">
    <img :src="photo" alt="" class="user-icon">
    <span class="user-name">{{name}}</span>
    <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <!-- 点击个人设置变成式导航进行跳转  @click.native="setting()"-->
    <el-dropdown-item icon="el-icon-s-home" command="setting">个人设置</el-dropdown-item>
    <!-- 退出登录功能  清楚本地的用户信息  跳转到登录页面  @click.native="logout()"-->
    <el-dropdown-item icon="el-icon-s-opportunity" command="logout">退出登录</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>

    </el-header>
    <el-main>
        <!-- 二级路由的显示位置 -->
        <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import store from '@/store'
export default {
  data () {
    return {
      isOpen: true,
      name: '',
      photo: ''
    }
  },
  methods: {
    toggleAside () {
      // 宽度logo 导航菜单组件
      this.isOpen = !this.isOpen
    },
    setting () {
      // 跳转个人设置
      // console.log(this)

      this.$router.push('/setting')
    },
    logout () {
      // 先清除用户信息
      store.delUser()
      // 然后再进行跳转登录页面
      this.$router.push('/login')
    },
    handler (command) {
      this[command]()
    }
  },
  created () {
    // 页面一开始需要加载的数据，是生命周期钩子
    // 在本地中获取头像和用户名
    const user = store.getUser()
    this.name = user.name
    this.photo = user.photo
  }
}
</script>

<style lang="less" scoped>
.container-home{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // element-ui组件要被解释成标签 解析后在容器上追加一个和组件名相同的类
    .el-aside{
     background-color: #002033;

     .logo{
         width: 100%;
         height: 60px;
         background: #002244 url(../../assets/logo_admin.png) no-repeat center / 140px auto;
     }
    //  覆盖logo样式要在logo后面
     .minLogo{
         background-image: url(../../assets/logo_admin_01.png);
         background-size: 30px auto;
     }
     .el-menu{
         border-right: solid 0px #002233;
     }
    }
    .el-header{
        border-bottom: 1px solid #ddd;
        line-height: 60px;
        .icon{
            font-size: 24px;
            vertical-align: middle;
        }
        .text{
            font-size: 24px;
             vertical-align: middle;
        }
        .my-dropdown{
          float: right;
          .user-icon{
              width: 30px;
              height: 30px;
             vertical-align: middle;
              border-radius: 50%;
          }
          .user-name{
              color: #333;
              font-weight: blod;
              vertical-align: middle;
              padding-left: 5px;
          }
        }
    }
}
</style>
