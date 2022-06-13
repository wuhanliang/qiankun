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
const pushState = (url) => { 
    window.history.pushState({temp: url}, url, url)
    console.log(window.history)
}
const history = () => { 
    console.log(window.history.state)
}
</script>

<style scoped>
.home{
    padding: 16px;
}
</style>