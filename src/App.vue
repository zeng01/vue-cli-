<template>
  <div class='main'>
    <div class='tab-bar'>
      <img src="./assets/images/tl.png" class='tl' alt="">
      <router-link to="/find">发现音乐</router-link>
      <router-link to="/myMusic">我的音乐</router-link>
      <router-link to="/friend">朋友</router-link>
      <router-link to="/shopping">商城</router-link>
      <router-link to="/musician">音乐人</router-link>
      <router-link to="/download">下载客户端</router-link>
      <img src="./assets/images/tr.png" class='tr' alt="">
    </div>
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  data() {
    return {
      message:'holle'
    }
  },
}
</script>

<style>

.main{
  height: 100%;
}
  .tab-bar{
    height: 70px;
    background: #242424;
    display: flex;
    align-items: center;
  }
  .tab-bar a{
    color:white;
    text-decoration: none;
    padding:0 16px;
    font-size: 14px;
    color:#ccc;
    height: 70px;
    line-height: 70px;
  }
  .tab-bar a:hover{
    background: #000;
    color: #fff;
  }

</style>
