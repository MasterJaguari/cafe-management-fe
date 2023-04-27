<template>
  <div class="wrapper">
      <h2>Kreiraj korisnika</h2>
      <label for="name">Ime korisnika</label>
      <input type="text" v-model="this.korisnik.name">
      <label for="email">Email:</label>
      <input type="email" v-model="this.korisnik.email">
      <label for="password">Lozinka:</label>
      <input type="password" v-model="this.korisnik.password">
      <label for="password_confirmation">Potvrdi lozinku:</label>
      <input type="password" v-model="this.korisnik.password_confirmation">
      <button @click="createKorisnik">Kreiraj korisnika</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            korisnik: {},
            proizvod_id: this.$route.params.id
        }
    },
    mounted(){
    },
    methods:{
        createKorisnik(){
            let sendingData = this.korisnik;
            axios.post('http://127.0.0.1:8000/api/korisnici/create', sendingData)
            .then(res => {console.log(res)
                alert('Korisnik kreiran!');
                this.$router.push('/admin/korisnici');
            });
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
    input{
        width: 150px;
        margin: 10px auto;
        padding: 5px;
        border: 1px solid gray;
        border-radius: 10px;
    }
    input[type="number"]{
        width: 45px;
        margin: 10px auto;
        border-radius: 10px;
        padding: 5px;
        border: 1px solid gray;
    }
    button{
    padding: 10px 15px;
        border-radius: 10px;
        border: 0;
        font-weight: bold;
        background: linear-gradient(to bottom right, orange, darkorange);
        color:white;
        cursor: pointer;
        width: 75%;
        margin: 10px auto;
    }
    button:hover{
         background: linear-gradient(to bottom right,darkorange, orange);
    }
    label{
        margin-top: 10px;
    }
</style>