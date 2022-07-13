<template>
  <div class="login-auth-container">
    <div class="banner">
      <img src="~@/assets/imgs/login-banner.jpg" alt="" />
    </div>
    <div class="content"> 
      <router-view />
    </div>
  </div>
</template>
 <script setup></script>
<style lang="scss" scoped>
.login-auth-container {
  position: relative;
  height: 100vh;
  .banner {
    img {
      width: 100%;
      height: 100%;
    }
  }
   
  .content {
    width: 500px;
    height: 500px;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #fff;
    margin-top: -250px;
    margin-left: -250px;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(100, 100, 100, 0.5);
    overflow: hidden;
    animation-iteration-count: 1;
    padding: 32px;
    
  }
}
</style>
