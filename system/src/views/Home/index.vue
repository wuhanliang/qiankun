<template>
  <div>
    <CreateOrEditVue ref="createOrEdit" @changeLink="getSystemAppList"/>
    <el-table :data="dataSource" style="width: 100%">
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" />
      <el-table-column prop="address" label="Address" />

      <el-table-column prop="create_time" label="创建时间" width="180" />
      <el-table-column prop="update_time" label="更新时间" width="180" />
      <el-table-column prop="actions" label="操作" width="280">
        <template #default="scope">
          <el-button type="primary" @click="handleCreate(scope.$index)">新增</el-button>
          <el-button type="primary" @click="handleEdit(scope.$index)">编辑</el-button>
          <el-button type="delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";
import CreateOrEditVue from "./components/createOrEdit";
const { proxy } = getCurrentInstance();
// import { Delete, Edit, Search, Share, Upload } from 'element-plus/icons-vue'
// 列表数据业务
let dataSource = ref([]);
const getSystemAppList = async () => {
  const res = await proxy.$fetch({
    url: "/api/app/list",
    params: { parentId: 0},
  });
  if (res.data.success) {
    dataSource.value = res.data.data;
  }
};

const handleCreate = (index) => { 
  const record = dataSource.value[index]
  const parentId = record.id
  handleOpen({parentId})
}

const handleEdit = (index) => { 
  const record = dataSource.value[index]
  handleOpen({...record, parentId: record.parent_id})  
}
// 处理新增逻辑
const createOrEdit = ref(null);
const handleOpen = (record = {}) => {
  createOrEdit.value.handleOpen(record);
};

onMounted(() => {
  getSystemAppList();
});
</script>
