<template>
  <div class="main">
    <div class="sidebar" :style="{width:spread?'200px':'60px'}">

    </div>
    <div class="header" :style="{left:spread?'200px':'60px'}">
      <span class="spread" @click="spread=!spread"></span>
    </div>
    <div class="container" :style="{left:spread?'200px':'60px'}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      spread: true
    }
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
@import '../assets/style/vars.less';
.main{
  position: absolute;
  width: 100%;
  height: 100%;
  .sidebar{
    float: left;
    height: 100%;
    background-color: @content;
    transition: width ease 300ms;
  }
  .header{
    position: absolute;
    top: 0;
    right: 0;
    height: 80px;
    transition: left ease 300ms;
    .spread{
      display: block;
      width: 20px;
      height: 20px;
      background:red;
    }
  }
  .container{
    position: absolute;
    top: 80px;
    right: 0;
    bottom: 0;
    background-color: @background;
    transition: left ease 300ms;
  }
}
</style>

