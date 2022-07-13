<template>
  <div class="home">
    <router-link to="/auth/login">login</router-link>
    <router-link to="/">home</router-link>

    <Button @click="getData">click</Button>
    <div></div>
  </div>
</template>
<script setup>
import { Button } from "view-ui-plus"

import { ref, getCurrentInstance } from "vue";
const { proxy } = getCurrentInstance()

const getData = async () => {
  const res = await proxy.$fetch({
    url: '/api/system/list/app',
    method: 'get',
    params: {
      pageSize: 10,
      pageNum: 1
    }
  })
  console.log(res);
  // if (res.data.success) {

  //   // localStorage.setItem('user', JSON.stringify(res.data.data))
  //   // localStorage.setItem('authorization', res.data.data.token)
  //   // $router.push({ name: 'home' })
  // }

};
</script>