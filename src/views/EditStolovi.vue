<template>
  <div class="wrapper">
      <h2>Izmeni sto</h2>
      <label for="naziv">Broj stola:</label>
      <input type="number" v-model="this.sto.broj_stola">
      <button @click="updateSto">Izmeni sto</button>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '../components/Nav.vue'
export default {
    data(){
        return{
            sto: {},
            sto_id: this.$route.params.id
        }
    },
    components: {
        Nav
    },
    mounted(){
        this.findSto();
    },
    methods:{
        findSto(){
            axios.get('http://127.0.0.1:8000/api/stolovi/'+this.sto_id)
            .then(res => {this.sto = res.data;
            console.log(this.sto);})
        },
        updateProizvod(){
            axios.put('http://127.0.0.1:8000/api/meni/update/'+this.sto_id, this.sto)
                .then(res => {console.log(res);
                alert('Sto izmenjen!');
                this.$router.push('/admin/stolovi')});
        }
    }
}
</script>

<style scoped>
.wrapper{
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 15%;
        margin: 30px auto;
        margin-bottom: 50px;
    }

    input[type="number"]{
        width: 45px;
        margin: 10px auto;
        /* border-radius: 10px; */
        padding: 5px;
        border: 0;
        border-bottom: 1px solid gray;
    }
    button{
    padding: 10px 15px;
        border-radius: 10px;
        border: 0;
        font-weight: bold;
        background: linear-gradient(to bottom right, #80ced6, #618685);
        color:white;
        cursor: pointer;
        width: 75%;
        margin: 10px auto;
    }
    button:hover{
         background: linear-gradient(to bottom right, #618685, #80ced6);
    }
    label{
        margin-top: 10px;
        font-size: 13px;
        color:gray;
        text-align: start;
        margin-left: 60px;
    }
</style>