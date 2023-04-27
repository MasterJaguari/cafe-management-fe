<template>
  <Nav/>
  <h3 v-if="role_id === '2' || role_id === '1'">Ukupno proizvoda: {{ukupnoProizvoda}}</h3>
<div class="container">    
  <Proizvod v-for="proizvod in proizvodi" :key="proizvod.id" :data="proizvod"/>
</div>
</template>

<script>
import Proizvod from '../components/meni/Proizvod.vue'
import NoviProizvod from '../components/meni/NoviProizvod.vue'
import Nav from '../components/Nav.vue'
import axios from 'axios'
export default {
    components: {
        Proizvod,
        NoviProizvod,
        Nav
    },
    data(){
        return{
            proizvodi: [],
            token: localStorage.getItem('userToken'),
            role_id: localStorage.getItem('userRoleId')
        }
    },
    methods: {
        fetchData(){
            axios.get('http://127.0.0.1:8000/api/meni')
            .then(res => this.proizvodi = res.data);
            // this.$store.dispatch('getProizvodi');
        },  
    },
    mounted() {
        this.fetchData();
        this.token = localStorage.getItem('userToken');
    },
    computed: {
        ukupnoProizvoda() {
            return this.proizvodi.length;
        },
    }

}
</script>

<style scoped>
    .container{
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .forma{
        margin: 0 auto;
    }
</style>