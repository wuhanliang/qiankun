<template>
  <div class="">
    <h2 class="title">欢迎注册</h2> 
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <UserName name="username" />
        <Password name="password" />
        <div class="demo-auto-login">
          <Button @click="handleRegistry" type="text">登录</Button>
        </div>
        <Submit />
      </Login>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter , useRoute } from 'vue-router'
import { Login, Checkbox, Submit, UserName, Password, Button } from "view-ui-plus";
const $router = useRouter()
const handleSubmit = (valid, { username, password }) => {
  console.log(username, password);
};

const handleRegistry = () => { 
  $router.push({ name: 'login'})
}
</script>

<style lang="scss" scoped>
@import './m.scss';
</style>
