<template>
  <div class="wrapper">
      <h2>Dodaj sto</h2>
      <label for="broj">Broj stola</label>
      <input type="number" v-model="br_stola">
      <button @click="dodajSto">Dodaj sto</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            br_stola: 0
        }
    },
    methods: {
        dodajSto(){
            let data = {broj_stola: this.br_stola, porudzbina: []};
            axios.post('http://127.0.0.1:8000/api/stolovi/create', data)
            .then(res => console.log(res));
            alert("Sto dodat!");
            this.$router.go();
            // fetch('http://127.0.0.1:8000/api/meni/create', {
            //     method: 'POST',
            //     mode: 'no-cors',
            //     headers: {
            //         'Content-type': 'application/json',
            //         'Access-Control-Allow-Origin': '*'
            //     },
            //     body: JSON.stringify(data)
            // })
            // .then(res => res.json())
            // .then(data => console.log('Success', data))
            // .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.wrapper{
        display:flex;
        flex-direction: column;
        justify-content: space-evenly;
        box-shadow: 1px 1px 5px gray;
        width: 15%;
        margin-bottom: 50px;
        height: 50%;
        border: 1px solid #618685;
        padding: 20px;
        border-radius: 20px;
    }
    h2{
        color: #618685;
    }
input[type="number"]{
        width: 45px;
        margin: 5px auto;
        /* border-radius: 10px; */
        padding: 5px;
        border:0;
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
        margin: 2px auto;
        text-transform: uppercase;
    }
    button:hover{
         background: linear-gradient(to bottom right,#618685, #80ced6);
    }
    label{
        font-size: 12px;
        color:gray;
        text-align: center;
    }
</style>