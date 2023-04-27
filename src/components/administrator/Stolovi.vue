<template>
<div>
    <h3>Ukupno stolova: {{ukupnoStolova}}</h3>
  <table>
      <tr>
      <th>ID</th>
      <th>Broj stola</th>
      <th>Zauzet</th>
      </tr>
      <tr v-for="sto in stolovi" :key="sto.id">
          <td>{{sto.id}}</td>
          <td>{{sto.broj_stola}}</td>
          <td>{{sto.zauzet}}</td>
          <td><EditButton :path="{ path: '/admin/stolovi/edit/'+ sto.id}"/></td>
          <td><DeleteButton @click="deleteSto(sto.id)"/></td>
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
            stolovi: [],
        }
    },
    components:{
        EditButton
    },
    methods: {
        fetchStolovi(){
            axios.get('http://127.0.0.1:8000/api/stolovi')
            .then(res => this.stolovi = res.data);
        },
        deleteSto(id){
            axios.delete('http://127.0.0.1:8000/api/stolovi/delete/'+id)
            .then(res => {console.log(res)
        alert("Sto obrisan!");
        this.$router.go();
            })
        }
    },
    mounted(){
        this.fetchStolovi();
    },
    components: {
        EditButton,
        DeleteButton
    },
    computed:{
        ukupnoStolova(){
            return this.stolovi.length;
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
        margin: 30px;
    }
</style>