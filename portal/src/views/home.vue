<template>
    <div class="home">
        Lorem ipsum dolor sit amet 
        consectetur adipisicing 
        elit. Quae perferendis iure voluptatum
        quod. Qui neque totam tenetur quos natus
        doloribus libero, ipsum perferendis 
        repudiandae eaque, nobis labore dolore vero sunt.
         <br>
        <button @click="pushState('/system')">system</button>
        <br>
        <button @click="pushState('/exam')">exam</button>
        <br>
        <button @click="pushState('/')">home</button>
        <button @click="history">history</button>
    </div>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
const {proxy } =  getCurrentInstance()
console.log(proxy.$fetch, '------------')
</script>

<style scoped>
.home{
    padding: 16px;
}
</style>