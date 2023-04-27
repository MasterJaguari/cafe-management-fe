<template>
<Nav />
  <div class="wrapper">
      <h2>Izmeni korisnika</h2>
      <label for="name">Ime korisnika</label>
      <input type="text" v-model="this.korisnik.name">
      <label for="email">Email:</label>
      <input type="email" v-model="this.korisnik.email">
      <label for="number">Role ID:</label>
     <select name="role_id" v-model="this.korisnik.role_id">
         <option value="1">Admin</option>
         <option value="2">Sef</option>
         <option value="3">Radnik</option>
     </select>
      <!-- <label for="password_confirmation">Potvrdi lozinku:</label>
      <input type="password" v-model="this.korisnik.password_confirmation"> -->
      <button @click="updateKorisnik">Izmeni korisnika</button>
  </div>
</template>

<script>
import axios from 'axios'
import Nav from '../components/Nav.vue'
export default {
    data(){
        return{
            korisnik: {},
            korisnik_id: this.$route.params.id
        }
    },
    components: {
        Nav
    },
    mounted(){
        this.fetchKorisnik();
    },
    methods:{
        fetchKorisnik(){
            axios.get('http://127.0.0.1:8000/api/korisnici/'+this.korisnik_id)
            .then(res => this.korisnik = res.data);
        },
        updateKorisnik(){
            axios.put('http://127.0.0.1:8000/api/korisnici/update/'+this.korisnik_id, this.korisnik)
            .then(res => {console.log(res)
            alert("Korisnik izmenjen!");
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
        border: 0;
        border-bottom: 1px solid gray;
        /* border-radius: 10px; */
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
        font-size: 12px;
        text-align: start;
        margin-left: 30px;
    }
    select{
        width: 75%;
        margin: 5px auto;
        padding: 5px;
    }
</style>