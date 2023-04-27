<template>
  <div class="wrapper">
      <h2>Kreiraj korisnika</h2>
      <label for="name">Ime korisnika:</label>
      <input type="text" v-model="this.korisnik.name">
      <label for="email">Email:</label>
      <input type="email" v-model="this.korisnik.email">
      <label for="password">Lozinka:</label>
      <input type="password" v-model="this.korisnik.password">
      <label for="password_confirmation">Potvrdi lozinku:</label>
      <input type="password" v-model="this.korisnik.password_confirmation">
      <label for="role_id">Uloga korisnika: </label>
      <select name="role_id" v-model="this.korisnik.role_id">
          <option value="1">Admin</option>
          <option value="2">Sef</option>
          <option value="3">Radnik</option>
      </select>
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
        box-shadow: 1px 1px 5px gray;
        width: 25%;
        /* margin: 30px auto; */
        height: 50%;
        margin-bottom: 50px;
        border: 1px solid #618685;
        padding: 20px;
        border-radius: 20px;
    }
    
    input{
        width: 200px;
        margin: 5px auto;
        padding: 5px;
        border: 0;
        border-bottom: 1px solid #618685;
        /* border-radius: 10px; */
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
        margin: 10px auto;
        text-transform: uppercase;
    }
    button:hover{
         background: linear-gradient(to bottom right, #618685, #80ced6);
    }
    label{
        margin-top: 10px;
        font-size: 12px;
        color: gray;
        text-align: start;
        margin-left: 80px;
    }
     h2{
        color:#618685;
    }
    select{
        width: 200px;
        margin: 5px auto;
        padding: 5px;
    }
</style>