<script lang="ts" setup></script>
<template>
<nav>
<span class="owner"><RouterLink to="/">Akintola Patrick</RouterLink></span>
<ul class="navigation-menu d-none-mobile">
    <li>Patrick</li>
    <li>Career Highlights</li>
    <li>Previous Role</li>
    <li>Affiliations</li>
</ul>
</nav>
</template>
<style scoped>
/* For mobile devices */
@media (max-width: 600px) {
    nav{
    display: flex;
    justify-content:flex-start;
    padding:4px 4px;
    color:white;
    font-size:18px;
}
.navigation-menu{
    display:none;
    margin-top:10px;
    margin-right:10px;
}
.navigation-menu > li{
    display:inline;
    margin-left:30px;
    font-size:15px;
    text-transform:uppercase;
    cursor: pointer;
}
.navigation-menu > li:hover{
    font-size:18px;
}
.owner{
    margin-right:auto;
    margin-left:30px;
    margin-top:10px;
    font-weight:bold;
    font-size:25px;
    cursor:pointer;
}
}
/* For tablets */
@media (min-width: 601px) and (max-width: 1024px) {
    nav{
    display: flex;
    justify-content:flex-start;
    padding:4px 4px;
    color:white;
    font-size:18px;
}
.navigation-menu{
    margin-top:10px;
    margin-right:10px;
}
.navigation-menu > li{
    display:inline;
    margin-left:30px;
    font-size:15px;
    text-transform:uppercase;
    cursor: pointer;
}
.navigation-menu > li:hover{
    font-size:18px;
}
.owner{
    margin-right:auto;
    margin-left:30px;
    margin-top:10px;
    font-weight:bold;
    font-size:25px;
    cursor:pointer;
}
}
/* For desktops */
@media (min-width: 1025px) {
    nav{
    display: flex;
    justify-content:flex-start;
    padding:4px 4px;
    color:white;
    font-size:18px;
}
.navigation-menu{
    margin-top:10px;
    margin-right:10px;
}
.navigation-menu > li{
    display:inline;
    margin-left:30px;
    font-size:15px;
    text-transform:uppercase;
    cursor: pointer;
}
.navigation-menu > li:hover{
    font-size:18px;
}
.owner{
    margin-right:auto;
    margin-left:30px;
    margin-top:10px;
    font-weight:bold;
    font-size:25px;
    cursor:pointer;
}
}





</style>
