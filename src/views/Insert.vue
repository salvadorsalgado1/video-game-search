<template>
    <div class="insert">
        <div class="container">
            <div class="card">
                <div class="card-content">
                    <h1 class="insert-heading">Insert</h1>
                    <form @submit.prevent="insertData()">
                    <div class="container input-field">
                        <div class="row">
                            <div class="col l12 m12 s12">
                                <input placeholder="Title" name="title" for="title" type="text" v-model="title"/>
                                <label>Title</label>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col l6 m6 s12">
                                <input placeholder="Publisher Name" v-model="publisher"/>
                                <label>Publisher</label>
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
                    <p class="feedback-error">{{feedbackErr}}</p>
                    <div v-if="loading">
                        <Loading/>
                    </div>
                    
                    <button class="primary btn">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
import Loading from '@/components/Loading'
export default {
    name:'Insert',
    components:{
        Loading

    },
    data(){
        return{
            title:null,
            publisher:null,
            developer:null,
            rating:null,
            console:null,
            releaseYear:null,
            feedbackErr:'Must Have a year more than 200',
            loading:false
        }
    },
    methods:{
        insertData(){

            if(this.title || this.publisher || this.developer || this.rating || this.console || this.releaseYear == null){
                this.feedbackErr = true;
                this.feedbackErr = "Form Values Cannot Be Null"
            }else if(this.releaseYear > 2022){
                this.feedbackErr = "Year Cannot Be More Than 2022";
                this.releaseYear = null;
            }


            this.releaseYear = parseInt(this.releaseYear)
            console.log(this.title,this.publisher,this.developer,this.rating,this.console, typeof this.releaseYear)
            console.log(this.releaseYear)
            console.log(this.rating)

            Axios.post('http://localhost:8081/api/insert', {
                console:this.console,
                publisher:this.publisher,
                developer:this.developer,
                rating:this.rating,
                releaseYear:this.releaseYear,
                title:this.title
            }).then(()=>{
                
            
             console.log("Successful Insert");
                    
            }).then(()=>{
                this.loading = true;
                setTimeout(()=>{
                    this.loading = false;
                    this.$router.push({name:'Home'}) 
                    
                    
                    },1400)
                
            })


        },
    },
    mounted(){
        ($(document).ready(function(){
            $('select').formSelect();}))
    }
}
</script>
<style>
.insert-heading{
    font-size:1.8em;
    
}
.card .card-content .feedback-error{
    color:red;
    margin-bottom:20px;
}

</style>