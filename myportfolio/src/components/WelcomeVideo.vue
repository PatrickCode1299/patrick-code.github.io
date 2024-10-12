<script setup lang="ts">
function play(){
    let pause=document.getElementById("pause") as HTMLElement;
    pause.style.display="block";
    let play=document.getElementById("play") as HTMLElement;
    play.style.display="none";
    let video = document.getElementById("video") as HTMLVideoElement;
    video?.play();
}
function pause(){
    let play=document.getElementById("play") as HTMLElement;
    play.style.display="block";
    let pause=document.getElementById("pause") as HTMLElement;
    pause.style.display="none";
    let video = document.getElementById("video") as HTMLVideoElement;
    video?.pause();
}
</script>
<template>
<div class="video-container">
    <div class="contact-me">
    <h2>Meet Patrick, Full Stack Website Developer with 7 years experience in Building Web Apps and Graphic Design</h2>
    <a href="mailto:akintolaoluwaseun73@gmail.com" style="background-color:black; margin-top:20px; border-radius:5px; color:white; padding:10px 10px;">Contact Me</a>
    </div>
<div class="overlay">
</div>
<video 
id="video"
autoplay
class="video"
>
<source type="video/mp4" src="../assets/ME.mp4" />
</video>
<div class="video-controls">
<button style="display:none;" id="play" @click="play" class="play-pause-btn">&#9654;</button>
<button id="pause" @click="pause" class="play-pause-btn">&#9208;
</button>
</div>
</div>
</template>
<style scoped>
.video-container{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    position: relative;
    height:400px;
    margin-top:50px;
}
.overlay{
    position:absolute;
    top:0px;
    height:auto;
    width:100%;
    height:100%;
    background-color:gray;
    opacity:0.4;
}
.video{
    width:100%;
    height:400px;

}
.video-controls{
    position: absolute;
    top:100px;
   
}
.play-pause-btn{
font-size:35px;
border:none;
color:white;
height:50px;
width:50px;
text-align:center;
border-radius:50px;
}
h2{
    color:white;
    margin-bottom:20px;
}
.contact-me{
    text-align:center;
    margin-top:60px;
    font-size:25px;
    position:absolute;
    z-index:1;
}
</style>