<template>
  <div>
    <Input v-model="tel" placeholder="请输入手机号" />
    <Input type="password" v-model="pwd" placeholder="请输入密码" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      tel:'',
      pwd: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
