<template>
    <div class="edit">
        <div class="container">
            <div class="card">
                <div class="card-content">
                    <h1 class="heading-h1">Game Data</h1>
                    <table class="table bordered striped centered responsive-table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Developer</th>
                            <th>Publisher</th>
                            <th>Rating</th>
                            <th>Console Available</th>
                            <th>Release Year</th>
                        </tr>  
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{this.id}}</td>
                                <td>{{this.title}}</td>
                                <td>{{this.developer}}</td>
                                <td>{{this.publisher}}</td>
                                <td>{{this.rating}}</td>
                                <td>{{this.console}}</td>
                                <td>{{this.releaseYear}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h1 class="heading-h1">Edit Information</h1>
                    <form @submit.prevent="submitEdit()">
                    <div class="container input-field">
                        <div class="row">
                            <div class="col l12 m12 ">
                                <input placeholder="Title" name="title" for="title" type="text" v-model="gettitle"/>
                                <label>Title</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col l6 m6 s12">
                                <input placeholder="Developer Name" v-model="developer"/>
                                <label>Developer</label>
                            </div>
                            <div class="col l6 m6 s12">
                                <input placeholder="Publisher Name" v-model="publisher"/>
                                <label>Publisher</label>
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
                        <p v-if="feedbackErr">{{feedback}}</p>
                        <div v-if="loading">
                            <p class="p-loading">Edit Successful</p>
                            <Loading/>
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
import Axios from 'axios';
import Loading from '@/components/Loading'
export default {
    name:'Edit',
    props:['id', 'title', 'developer','publisher', 'rating', 'console','releaseYear'],
    components:{Loading},
    data(){
        return{
            gettitle:this.title,
            getid:this.id,
            getrating:this.rating,
            getreleaseYear:this.releaseYear,
            loading:false,
            feedbackErr:null,
            feedback:null
        }
    },
    methods:{
        submitEdit(){
            this.loading = true;
            Axios.put('http://localhost:8081/api/update', 
            {
                id:this.getid,
                title:this.gettitle
            
            })
            setTimeout(()=>{
                this.loading = false;
                this.$router.push({name:'Home'})
            }, 1000)
        }
    },
    mounted(){
    ($(document).ready(function(){
    $('select').formSelect();
  }))
    }
}
</script>
<style>
.card .card-content p{
    margin-bottom:20px;
}
.p-loading{
    color:darkgreen;
    margin-top:50px;
}
</style>