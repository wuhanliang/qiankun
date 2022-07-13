<template>
  <div class="">
    <h2 class="title">欢迎注册</h2> 
    <div class="demo-login">
      <Login @on-submit="handleSubmit">
        <UserName name="userName" />
        <UserName name="nickName" />
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
import { ref, getCurrentInstance } from "vue";
import { useRouter , useRoute } from 'vue-router'
import { Login, Checkbox, Submit, UserName, Password, Button } from "view-ui-plus"

const {proxy} = getCurrentInstance()
const $router = useRouter()
const handleSubmit = async (valid, { userName, password, nickName }) => {
   
  const res = await proxy.$fetch({
    url: '/api/auth/registry',
    method: 'post',
    data: {
      userName,
      password,
      nickName
    }
  })
  if (res.data.success) {
    console.log(res);
    localStorage.setItem('user', JSON.stringify(res.data.data))
    localStorage.setItem('authorization', res.data.data.token)
    $router.push({ name: 'home' })
  }
};

const handleRegistry = () => { 
  $router.push({ name: 'login'})
}
</script>

<style lang="scss" scoped>
@import './m.scss';
</style>
