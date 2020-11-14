<template>
    <div class="intro">
        <div class="container">
            <div class="card">
                <div class="card-content">
                    <div class="container">
                        <h1 class="intro-h-one">Game Search</h1>
                        <img alt="" class="intro-img" src="@/assets/controller-spin.png" /> 
                        <p class="intro-p">{{desc}}.</p>
                        <br/>
                        <router-link class="waves-effect waves-light btn-large" :to="{name:'Home'}">Continue</router-link>  
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name:'Intro',
    data(){
        return{
            desc:'Search for your favorite games by looking up basic information such as your favorite game titles by rating, publishers, or developers You have the ability to make edits or perhaps add your favorite game to your collection'
        }
    }
    
}
</script>
<style>
.intro-h-one{
    font-size:2em;
}
.intro-p{
    font-size:1.6em;
}
.card{
    max-width:100%;
}
.intro-img{
    width:30%;
    margin-top:50px;
    margin-bottom:40px;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
}
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>