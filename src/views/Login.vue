<template>
  <div>
    <Input v-model="phone" placeholder="请输入手机号" />
    <Input type="password" v-model="pwd" placeholder="请输入密码" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      value:'',
      ped: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
