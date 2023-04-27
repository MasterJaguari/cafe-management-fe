<template>
  <div>
      <h3>Ukupno proizvoda: {{ukupnoProizvoda}}</h3>
  <table>
      <tr>
      <th>ID</th>
      <th>Naziv</th>
      <th>Cena</th>
      </tr>
      <tr v-for="proizvod in proizvodi" :key="proizvod.id">
          <td>{{proizvod.id}}</td>
          <td>{{proizvod.naziv}}</td>
          <td>{{proizvod.cena}}din</td>
          <td><EditButton :path="{ path: '/editProizvod/'+ proizvod.id}"/></td>
          <td><DeleteButton @click="deleteProizvod(proizvod.id)"/></td>
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
            proizvodi: []
        }
    },
    methods: {
        fetchProizvodi(){
            axios.get('http://127.0.0.1:8000/api/meni')
            .then(res => this.proizvodi = res.data);
        },
        deleteProizvod(id){
            axios.delete('http://127.0.0.1:8000/api/meni/delete/'+id)
            .then(res => {console.log(res)
        alert("Proizvod obrisan!");
        this.$router.go();
            })
        }
    },
    mounted(){
        this.fetchProizvodi();
    },
    components: {
        EditButton,
        DeleteButton
    },
    computed: {
        ukupnoProizvoda(){
            return this.proizvodi.length;
        }
    }

}
</script>

<style scoped>
div
{
    width: 80%;
    margin: 30px;
}
 table{
        border: 1px solid #618685;
        box-shadow: 1px 1px 5px gray;
        border-collapse: collapse;
        width: 100%;
        text-align: center;
        font-size: 16px;
    }
    th, td{
        border: 1px solid #618685;
        padding: 5px;
    }
    div{
        text-align: start;
    }
</style>