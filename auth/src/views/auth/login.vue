<template>
  <div class="">
    <h2 class="title">欢迎登录</h2> 
    
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <UserName name="username" />
        <Password name="password" />
        <div class="demo-auto-login">
          <Button @click="handleRegistry()" type="text">注册</Button>
        </div>
        <Submit />
      </Login>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { Login, Checkbox, Submit, UserName, Password, Button } from "view-ui-plus"
const $router = useRouter()

const handleSubmit = (valid, { username, password }) => {
  console.log(username, password);
};

const handleRegistry = () => $router.push({ name: 'registry' })


</script>

<style lang="scss" scoped>
@import './m.scss';
</style>
