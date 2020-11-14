<template>
    <div class="insert">
        
        <div class="container">
            <div class="card">
                <div class="card-content">
                    <h1>Insert</h1>
                    <form @submit.prevent="insertData()">

                    
                    <div class="container input-field">
                        <div class="row">
                            <div class="col l12 m12 ">
                                <input placeholder="Title" name="title" for="title" type="text" v-model="title"/>
                                <label>Title</label>
                            </div>
                            
                        </div>
                        <div class="row">
                            <div class="col l6 m6 s12">
                                <input placeholder="Publisher Name" v-model="publisher"/>
                                <label>publisher</label>
                            </div>
                            <div class="col l6 m6 s12">
                                <input placeholder="Developer Name" v-model="developer"/>
                                <label>Developer</label>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col l6 m6 s12">
                                  <div class="input-field col s12">
                                    <select v-model="rating">
                                    <option value="N/A" disabled selected>Choose your option</option>
                                    <option value="NR">NR for Not Rated</option>
                                    <option value="E">E for Everyone</option>
                                    <option value="T">T for Teen</option>
                                    <option value="M">M for Mature</option>
                                    </select>
                                    <label>Rating</label>
                                </div>
                            </div>
                             <div class="col l6 m6 s12">
                                <div class="input-field col s12">
                                    <select v-model="console">
                                    <option value="N/A" disabled selected>Choose your option</option>
                                    <option value="nintendo-switch">Nintendo Switch</option>
                                    <option value="playstation-5">Playstation 5</option>
                                    <option value="playstation-4">Playstation 4</option>
                                    <option value="playstation-3">Playstation 3</option>
                                    <option value="Xbox">Xbox</option>
                                    <option value="pc">PC</option>
                                    </select>
                                    <label>Console</label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                           <div class="col l6 m6 s12">
                                <input min="1980" max="2022" type="number" class="datepicker" placeholder="Release Year" v-model="releaseYear">
                                <label>Year</label>
                            </div>
                        </div>
                    </div>
                    <button class="primary btn">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Insert',
    data(){
        return{
            title:null,
            publisher:null,
            developer:null,
            rating:null,
            console:null,
            releaseYear:null,
            
        }
    },
    
    methods:{
        insertData(){
            this.releaseYear = parseInt(this.releaseYear)
            console.log(this.title,this.publisher,this.developer,this.rating,this.console, typeof this.releaseYear)
            console.log(this.releaseYear)
            console.log(this.rating)
        
        },
        
    },
    mounted(){

     ($(document).ready(function(){
    $('select').formSelect();
  }))
   
       
        }
}
</script>
<style>
</style>