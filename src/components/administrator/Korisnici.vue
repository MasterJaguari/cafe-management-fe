<template>
<div>
    <h3>Ukupno korisnika: {{ukupnoKorisnika}}</h3>
  <table>
      <tr>
      <th>ID</th>
      <th>Korisnicko ime</th>
      <th>Email</th>
      <th>Role_ID</th>
      </tr>
      <tr v-for="korisnik in korisnici" :key="korisnik.id">
          <td>{{korisnik.id}}</td>
          <td>{{korisnik.name}}</td>
          <td>{{korisnik.email}}</td>
          <td>{{korisnik.role_id}}</td>
          <td><EditButton :path="{ path: '/admin/korisnici/edit/'+ korisnik.id}" /></td>
          <td><DeleteButton @click="deleteKorisnik(korisnik.id)"/></td>
      </tr>
  </table>
  </div>
</template>

<script>
import axios from 'axios'
import EditButton from '../buttons/EditButton.vue'
import DeleteButton from '../buttons/DeleteButton.vue'

export default {
    data(){
        return{
            korisnici: []
        }
    },
    components:{
        EditButton,
        DeleteButton
    },
    methods: {
        fetchKorisnici(){
            axios.get('http://127.0.0.1:8000/api/korisnici')
            .then(res => this.korisnici = res.data);
        },
        deleteKorisnik(id){
            axios.delete('http://127.0.0.1:8000/api/korisnici/delete/'+id)
            .then(res => {console.log(res)
        alert("Korisnik obrisan!");
        this.$router.go();
            })
        }
    },
    mounted(){
        this.fetchKorisnici();
    },
   computed:{
       ukupnoKorisnika(){
           return this.korisnici.length;
       }
   }

}
</script>

<style scoped>
div{
    width: 80%;
}
    table{
        border: 1px solid #618685;
        box-shadow: 1px 1px 5px gray;
        border-collapse: collapse;
        margin: 30px;
        width: 100%;
        text-align: center;
        font-size: 18px;
    }
    th, td{
        border: 1px solid #618685;
        padding: 5px;
    }

    div{
        text-align: start;
    }
</style>