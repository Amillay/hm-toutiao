<template>
<!-- 筛选条件区域 -->
  <el-card class="box-card">
    <!-- 头部面包屑区域 -->
    <!-- 面包屑插槽 -->
   <my-bread>内容管理</my-bread>
       <!-- 内容区域表单插件 -->
      <el-form label-width="80px" size="small">
        <el-form-item label="状态：">
          <el-radio-group v-model="filterParams.status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="频道：">
          <el-select v-model="filterParams.channel_id" placeholder="请选择">
            <el-option
              v-for="item in channelOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="日期：">
          <el-date-picker
            v-model="dateArr"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>

        <el-form-item>
          <el-button type="primary">筛选</el-button>
        </el-form-item>
      </el-form>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      filterParams: {
        status: null,
        channel_id: null

      },
      channelOptions: [],
      dateArr: []
    }
  }
}
</script>

<style lang="less" scoped>
.container-welcome{
    width: 100%;
    height: 100%;
    background: url(../../assets/welcome.jpg) no-repeat center;
}
</style>
