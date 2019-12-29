<template>
  <div></div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.btn_box{
    margin-bottom: 20px;
}
.img_list{
    .img_item{
        width: 180px;
        height: 180px;
        border: 1px solid #ddd;
        position: relative;
        display: inline-block;
        margin-top: 0 30px 20px;
    }
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .option{
        height: 30px;
        width: 100%;
        background: rgba(0,0,0,.3);
        position: absolute;
        left: 0;
        bottom: 0;
        text-align: center;
        line-height: 30px;
    }
    span{
        color: #fff;
        margin: 0 20px;
    }
    .red{
        color: red;
    }
}
</style>
