<template>
  <div>
    <Input v-model="phone" placeholder="请输入手机号" />
    <Input type="password" v-model="password" placeholder="请输入密码" />
<<<<<<< HEAD
    <Button type="info">登 录</Button>
=======
    <Button type="primary">登录</Button>
>>>>>>> master
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
