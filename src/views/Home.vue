<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col m12 l6">
          <div class="card">
            <div class="card-content">
            <h1>Home</h1>
              <form>
                <label>Search</label>
                <div class="input-field">
                <input placeholder="Title, Rating, Developer..." />
                <button class="btn-search btn blue">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col m12 l6">
          <div class="card">
            <div class="card-content">
            <h1>Results 1 of </h1>
            <div v-if="loading">
              <Loading/>
            </div>
              <div>
                <ul class="collection" v-for="item in items" :key="item.id">
                  <li>{{item.id}} {{item.title}}<br/> {{item.developer}}</li>
                  <div v-if="toggleEdit">
                     <router-link class="btn-edit-delete btn blue" :to="{name:'Edit', 
                  params:{
                    id:item.id, 
                    title:item.title, 
                    developer:item.developer,
                    publisher:item.publisher,
                    rating:item.rating,
                    console:item.console,
                    releaseYear:item.releaseYear
                    }}">Edit <i class="material-icons right">edit</i></router-link>
                  <button class="btn-edit-delete btn red" @click="removeQuery(item.id)">Delete <i class="material-icons right">delete_forever</i></button>
                  </div>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div @click="toggleEditHandler">
      <Floating @click="toggleEditHandler"/>
    </div>
    
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Floating from '@/components/Floating.vue'
import Loading from '@/components/Loading.vue'
export default {
  name: 'Home',
  components:{Loading, Floating},
  data(){
    return{
      loading:false,
      toggleEdit:false,
      queryCount:null,
      items:[
            {
              "userId": 1,
              "id": 1,
              "title": "Grand Theft Auto",
              "developer": "By Some Big Company",
              "publisher": "By a bigger company",
              "rating":"M",
              "console":"playstation-5",
              "releaseYear":2020
            },
            {
              "userId": 1,
              "id": 2,
              "title": "Call Of Duty: Modern Warfare",
              "developer": "Skullz",
              "publisher": "Activision",
              "rating":"M",
              "console":"pc",
              "releaseYear":2019
            },
          ],
         
    }
  },
   methods:{
      toggleEditHandler(){
        console.log("handler")
        
        if(this.toggleEdit){
          return this.toggleEdit = false;
        }else if(!this.toggleEdit){
          return this.toggleEdit = true;
        }else{
          console.log("Outside")
        }
      },
          removeQuery(id){
            this.items = this.items.filter(item=>{
              return item.id != id
            })
          },
       
        },
        mounted(){
        document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
  });
     
      
        }
}
</script>
<style>
.btn-search{
  margin-top:30px;
}
.collection{
  font-size:1.6em;
}
.btn-edit-delete{
  margin:10px 5px;
  margin-bottom:20px;
  margin-top:10px;
}
</style>

