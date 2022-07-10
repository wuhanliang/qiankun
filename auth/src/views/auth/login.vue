<template>
  <div class="">
    <h2 class="title">欢迎登录</h2> 
    
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <UserName name="userName" />
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
import { ref, getCurrentInstance } from "vue";
import { useRouter } from 'vue-router'
import { Login, Checkbox, Submit, UserName, Password, Button } from "view-ui-plus"
const { proxy } = getCurrentInstance()

const $router = useRouter()

const handleSubmit = async (valid, { userName, password }) => {
  const res = await proxy.$fetch({
    url: '/api/auth/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
  localStorage.setItem('authenticated', JSON.stringify(res.data))
  localStorage.setItem('token', res.data.token)
  $router.push({ name: 'home' })
};

const handleRegistry = () => $router.push({ name: 'registry' })


</script>

<style lang="scss" scoped>
@import './m.scss';
</style>
