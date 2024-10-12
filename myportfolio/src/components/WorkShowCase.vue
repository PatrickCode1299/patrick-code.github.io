<script setup lang="ts">
function gotoWebsite(name:string){
    window.location.href=`https://${name}`;
}
</script>
<template>
<div>
<h2 style="text-align:center; color:white; font-size:25px; margin-bottom:20px;">Delivered Projects</h2>
</div>
<div class="works">
    <div id="works" @click="gotoWebsite('primesupportsolutions.com')">
        <img src="../assets/primesupport.jpg" />
        <h2 class="absolute">PrimeSupport Solutions, a California based Phone Answering Company.</h2>
    </div>
    <div @click="gotoWebsite('hexarex.com')">
        <img src="../assets/hexarex.jpg" />
        <h2 class="absolute">Hexarex a Social Media Platform that promotes diversity by tailoring user contents with Artificial Intelligence</h2>
    </div>
    <div @click="gotoWebsite('193.203.167.208')">
        <img src="../assets/vtechschool.jpg" />
        <h2 class="absolute">Vtechschool, An E-learning platform in beta,  developed to train retired veterans in the United States... </h2>
    </div>
    <div>
        <img src="../assets/newodd.jpg"/>
        <h2 class="absolute"><RouterLink to="/project/bbet.com">Bbet, a defunct betting platform aimed at predicting an African Game Reality Show..</RouterLink></h2>
    </div>
</div>
</template>
<style scoped>
/* For mobile devices */
@media (max-width: 600px) {
    .works{
    max-width:100%;
    display: flex;
    flex-direction:column;
    flex-wrap:nowrap;
    height:auto;
    color:white;
    overflow-x:hidden;
    overflow-y: hidden;
    cursor: pointer;
}
.works > div{
    color:white;
    flex:1;
    position:relative;
}
.works > div > h2{
    position:absolute;
    bottom:20px;
    font-size:12px;
    word-wrap:break-word;
    background-color: rgba(0, 0, 0, 0.5);
    z-index:1;
    text-align:center;
    padding:5px 5px;
    margin-left:10px;
}
.works > div > img{
    object-fit:cover;
    height:100%;
    transition: transform 2s ease; /* Slow transition for smooth zoom */
            transform: scale(1); 
}
.works > div > img:hover{
    object-fit:cover;
    height:100%;
    transform: scale(1.2);
}
}
/* For tablets */
@media (min-width: 601px) and (max-width: 1024px) {
    .works{
    max-width:100%;
    display: flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:500px;
    color:white;
    overflow-x:hidden;
    overflow-y: hidden;
    cursor: pointer;
}
.works > div{
    color:white;
    flex:1;
    position:relative;
}
.works > div > h2{
    position:absolute;
    bottom:20px;
    font-size:12px;
    word-wrap:break-word;
    background-color: rgba(0, 0, 0, 0.5);
    z-index:1;
    text-align:center;
    padding:5px 5px;
    margin-left:10px;
}
.works > div > img{
    object-fit:cover;
    height:100%;
    transition: transform 2s ease; /* Slow transition for smooth zoom */
            transform: scale(1); 
}
.works > div > img:hover{
    object-fit:cover;
    height:100%;
    transform: scale(1.2);
}
}
/* For desktops */
@media (min-width: 1025px) {
    .works{
    max-width:100%;
    display: flex;
    flex-direction:row;
    flex-wrap:nowrap;
    height:500px;
    color:white;
    overflow-x:hidden;
    overflow-y: hidden;
    cursor: pointer;
}
.works > div{
    color:white;
    flex:1;
    position:relative;
}
.works > div > h2{
    position:absolute;
    bottom:20px;
    font-size:12px;
    word-wrap:break-word;
    background-color: rgba(0, 0, 0, 0.5);
    z-index:1;
    text-align:center;
    padding:5px 5px;
    margin-left:10px;
}
.works > div > img{
    object-fit:cover;
    height:100%;
    transition: transform 2s ease; /* Slow transition for smooth zoom */
            transform: scale(1); 
}
.works > div > img:hover{
    object-fit:cover;
    height:100%;
    transform: scale(1.2);
}
}


</style>
