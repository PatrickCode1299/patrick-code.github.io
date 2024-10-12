<script setup lang="ts">
import {useRoute} from "vue-router";
import Header from "../components/Header.vue";
const route=useRoute();
console.log(route.params.id);
</script>

<template>
<Header />
<div style="color:white; padding-top:10px;" v-if="route.params.id === 'bbet.com'">
<h2 style="text-align:center; color:white; font-size:25px;">Big Brother Naija Betting Website</h2>
<div class="description">
<p>A defunct website, targeted at the fans of the African Reality show in Nigeria.</p>
<p>I built this website making use of tools such as, php,javascript and mysql..</p>
<div class="flex-holder">
    <img  src="../assets/weeklyhoh.jpg"/>
    <img src="../assets/newodd.jpg" />
</div>
</div>
</div>
</template>

<style scoped>
h2{
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.description{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}
.flex-holder{
    display:flex;
    justify-content:center;
    flex-direction:row;
    align-items: center;
    flex-wrap:wrap;
    padding:10px 10px;
}
.flex-holder > img{
    flex:1;
    width:100%;
    height:300px;
    object-fit:cover;
    margin-left:10px;
    margin-top:20px;
    border-radius:5px;
}
</style>
