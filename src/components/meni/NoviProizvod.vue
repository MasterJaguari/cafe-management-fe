<template>
  <div class="wrapper">
      <h2>Dodaj proizvod</h2>
      <label for="naziv">Naziv proizvoda</label>
      <input type="text" v-model="naziv">
      <label for="cena">Cena proizvoda</label>
      <input type="number" v-model="cena">
      <button @click="addProizvod">Dodaj proizvod</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            naziv: "",
            cena: 0
        }
    },
    methods:{
        addProizvod(){
            let data = {naziv: this.naziv, cena: this.cena};
            axios.post('http://127.0.0.1:8000/api/meni/create', data, {
                headers: {
                    'Authorization' : 'Bearer '+ localStorage.getItem('userToken')
                }})
            .then(res => console.log(res));
            alert("Proizvod dodat u meni!");
            this.$router.go();
        }
    }
}
</script>

<style scoped>
    .wrapper{
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 20%;
        /* margin: 30px auto; */
        height: 50%;
        margin-bottom: 50px;
        border: 1px solid #618685;
        padding: 20px;
        border-radius: 20px;
        box-shadow: 1px 1px 5px gray;
    }
    h2{
        color:#618685;
    }
    h2:hover{
        color:black;
    }
     input[type="text"]{
        width: 150px;
        margin: 5px auto;
        padding: 5px;
        border: 0;
        border-bottom: 1px solid #618685;
        /* border-radius: 10px; */
    }
    input[type="number"]{
        width: 45px;
        margin: 5px auto;
        /* border-radius: 10px; */
        padding: 5px;
        border: 0;
        border-bottom: 1px solid #618685;
    }
    button{
    padding: 10px 15px;
        border-radius: 10px;
        border: 0;
        font-weight: bold;
        background: linear-gradient(to bottom right, #80ced6, #618685);
        color:white;
        cursor: pointer;
        width: 50%;
        margin: 5px auto;
        text-transform: uppercase;
    }
    button:hover{
         background: linear-gradient(to bottom right,#618685, #80ced6);
    }
    label{
        margin-top: 10px;
        font-size: 12px;
        color:gray;
        text-align: start;
        margin-left: 100px;
    }
</style>