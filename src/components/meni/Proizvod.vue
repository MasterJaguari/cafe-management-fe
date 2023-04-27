<template>
  <div class="proizvod" @click="() => {
      if(role_id === '2'){
      toggleDivs = !toggleDivs}}">
      <div v-if="!toggleDivs" class="podaci"  @click="() => { if(role_id === '2'){
      toggleDivs = !toggleDivs}}">          
      <h3>{{data.naziv}}</h3>
      <h2>{{data.cena}} din</h2>
      </div>
      <div v-if="toggleDivs"  @click="() => {
      toggleDivs = !toggleDivs}">
      <EditButton :path="{ path: '/editProizvod/'+ this.data.id}"/>
      <DeleteButton @click="deleteProizvod"/>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import EditButton from '../buttons/EditButton.vue'
import DeleteButton from '../buttons/DeleteButton.vue'
export default {
    props:['data'],
    data(){
        return{
            toggleDivs: false,
            role_id : localStorage.getItem('userRoleId')
        }
    },
    methods: {
        test(){
            console.log("test");
        },
        deleteProizvod(){
            axios.delete('http://127.0.0.1:8000/api/meni/delete/'+this.data.id)
            .then(res => {console.log(res);
            alert('Proizvod obrisan!');
            this.$router.go()});
        },
    },
    components: {
        EditButton,
        DeleteButton
    }
}
</script>

<style scoped>
    .proizvod{
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 15%;
       /* border-radius: 1px; */
       background: #fff;
        padding: 5px;
        text-align: center;
        height: 150px;
        cursor: pointer;
        margin-top: 40px;
        margin: 40px 20px 40px 20px;
        border: 1px solid gray;
        color: black;
        font-weight: bold;
    }
    .podaci{
        /* border:1px solid black; */
        padding: 0;
    }
    .proizvod:hover{
box-shadow: 1px 1px 5px gray;
    }
    h3, h2{
        color: black;
        margin-bottom: 0;
    }
    .btn{
        border: 0;
        padding: 10px 16px;
        margin: 0 5px;
        border-radius: 10px;
        cursor: pointer;
        z-index: 999;
        text-decoration: none;
        font-size: 15px;
    }
    .btn-blue{
        background: linear-gradient(to bottom right, blue, royalblue);
        color: white;
    }
    .btn-blue:hover{
        background: linear-gradient(to bottom right, royalblue,  blue);
        color: white;
    }
    .btn-red{
        background: linear-gradient(to bottom right, firebrick, crimson);
        color: white;
    }
    .btn-red:hover{
        background: linear-gradient(to bottom right, crimson, firebrick);

    }
</style>