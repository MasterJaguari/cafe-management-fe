<template>
<Nav />
  <div class="wrapper">
      <h2>Izmeni proizvod</h2>
      <label for="naziv">Naziv proizvoda</label>
      <input type="text" v-model="this.proizvod.naziv">
      <label for="cena">Cena proizvoda</label>
      <input type="number" v-model="this.proizvod.cena">
      <button @click="updateProizvod">Izmeni proizvod</button>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '../components/Nav.vue'
export default {
    data(){
        return{
            proizvod: {},
            proizvod_id: this.$route.params.id
        }
    },
    components: {
        Nav
    },

    mounted(){
        this.findProizvod();
    },
    methods:{
        findProizvod(){
            axios.get('http://127.0.0.1:8000/api/meni/'+this.proizvod_id)
            .then(res => {this.proizvod = res.data;
            console.log(this.proizvod);})
        },
        updateProizvod(){
            axios.put('http://127.0.0.1:8000/api/meni/update/'+this.proizvod_id, this.proizvod)
                .then(res => {console.log(res);
                alert('Proizvod izmenjen!');
                this.$router.push('/meni')});
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
    input[type="text"]{
        width: 150px;
        margin: 10px auto;
        padding: 5px;
        border: 0;
        border-bottom: 1px solid gray;
        /* border-radius: 10px; */
    }
    input[type="number"]{
        width: 45px;
        margin: 10px 30px;
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
         background: linear-gradient(to bottom right,#618685, #80ced6);
    }
    label{
        margin-top: 10px;
        font-size: 12px;
        color: gray;
        text-align: start;
        margin-left: 30px;
    }
</style>