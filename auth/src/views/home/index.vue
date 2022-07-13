<template>
  <div class="home">
    <router-link to="/auth/login">login</router-link>
    <router-link to="/">home</router-link>

    <Button @click="getData">click</Button>
    <div>
      <Table border :columns="columns" :data="dataSource"></Table>
      <Page @on-change="getData" v-model="pageOpt.pageNum" v-bind="pageOpt"/>
    </div>
  </div>
</template>
<script setup>
import { Button, Table, Page } from "view-ui-plus"

import { ref, getCurrentInstance, onMounted,  } from "vue";
const { proxy } = getCurrentInstance()

let dataSource = ref([])
let pageOpt = ref({
  pageSize: 10,
  total: 200,
  pageNum: 1
})
const columns = [
  {
    title: 'Name',
    key: 'name'
  },
  {
    title: 'Age',
    key: 'age'
  },
  {
    title: 'Address',
    key: 'address'
  }
]
const getData = async () => {
  const res = await proxy.$fetch({
    url: '/api/system/list/app',
    method: 'get',
    params: {
      ...pageOpt.value
    }
  })
  if (res.data.success) {
    dataSource.value = res.data.data.rows
    pageOpt.value.total = res.data.data.total
  }

};

onMounted(() => { 
  getData()
}) 
</script>