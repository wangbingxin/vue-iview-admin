<template>
  <div>
    <Input v-model="phone" placeholder="请输入手机号" />
    <Input type="password" v-model="password" placeholder="请输入密码" />
    <Button type="info">登 录</Button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      phone:'',
      password: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>
