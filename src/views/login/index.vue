<template>
  <div class="container-login">
      <el-card class="my-card">
          <img src="../../assets/logo_index.png" alt="">
          <!-- 表单-->
           <el-form :model="loginForm" :rules="loginRules" status-icon ref="loginForm">
             <el-form-item prop="mobile">
               <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
             </el-form-item>

             <el-form-item prop="code">
             <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:230px;margin-right:10px">
             </el-input>
             <el-button>发送验证码</el-button>
             </el-form-item>

              <el-form-item>
                <el-checkbox :value="true">我已经阅读和同意用户协议和隐私条款</el-checkbox>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" style="width:100%" @click="login">登录</el-button>
              </el-form-item>
           </el-form>
      </el-card>
      <!-- 测试ref  标识-->
      <!-- <div ref="dom">我是dom</div>
      <el-button ref="com"></el-button> -->
  </div>
</template>

<script>
import store from '@/store'
export default {
  // mounted () {
  //   // 生命周期钩子函数（组件渲染完毕执行）
  //   // 获取
  //   console.log(this.$refs)
  //   console.log(this.$refs.dom)
  //   console.log(this.$refs['com'])
  // },
  data () {
    // 声明自定义校验规则
    const checkMobile = (rule, value, callback) => {
      // 校验逻辑1开头第二位必须是3-9之间  最后9个数字结尾
      if (!/^1[3-9]\d{9}$/.test(value)) {
        return callback(new Error('手机号不正确'))
      }
      callback()
    }
    return {
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          // 自定义校验规则
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录
    login () {
      this.$refs.loginForm.validate(async (valid) => {
        // valid判断是否校验成功，失败在输入时自动提示
        if (valid) {
          // 进行登录
          // this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)
          //   .then(res => {
          //     // res响应对象   res.data 是响应主体以后会使用
          //     // 存储用户信息
          //     store.setUser(res.data.data)
          //     // 直接跳转
          //     this.$router.push('/')
          //   })
          //   .catch(e => {
          //     // e 错误对象
          //     // 提示手机号或者验证码错误
          //     this.$message.error('错了哦，手机号验证码错误')
          //     // 246810万能验证码13911111111测试
          //   })
          try {
            const res = await this.$http.post('authorizations', this.loginForm)
            store.setUser(res.data.data)
            this.$router.push('/')
          } catch (e) {
            this.$message.error('手机号或验证码错误')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.container-login{
    width: 100%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    background: url(../../assets/login_bg.jpg) no-repeat center / cover;
}
.my-card{
    width: 400px;
    height:350px;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    img{
        width:200px;
        margin:0 auto 20px;

    }
}
</style>
