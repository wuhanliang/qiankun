<template>
  <el-dialog v-model="dialogVisible" title="新增" width="30%" draggable>
     
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleSubmit"
          >submit</el-button
        >
      </span>
    </template>
    
    <el-form
    label-position="right"
    label-width="100px"
    :model="formData"
    style="max-width: 460px"
  >
    <el-form-item label="Name">
      <el-input v-model="formData.value.name" />
    </el-form-item>
    <el-form-item label="activeRule">
      <el-input v-model="formData.value.activeRule" />
    </el-form-item>
    <el-form-item label="container">
      <el-input v-model="formData.value.container" />
    </el-form-item>
    <el-form-item label="entry">
      <el-input v-model="formData.value.entry" />
    </el-form-item>
  </el-form>
  </el-dialog>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance();

const dialogVisible = ref(false)
const formData = reactive({
  name: '',
  activeRule: '',
  container: '#container',
  entry: ''
})

const handleOpen = (record) => {
  dialogVisible.value = true
  formData.value = record
}
defineExpose({ handleOpen })


const handleSubmit = async () => { 
  
  const res = await proxy.$fetch({
    url: '/api/app/createOrUpdate',
    data: formData.value,
    method: 'post'
  })
  if (res.data.success) {
    dialogVisible.value = false
    proxy.$emit('changeLink')
  }
  console.log(res)
}
</script>