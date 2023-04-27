<template>
  <Nav v-if="token"/>
<div class="container">
  <Sto v-for="sto in stolovi" :key="sto.id" :data="sto"/>
</div>
</template>

<script>
import Sto from '../components/sto/Sto.vue'
import Nav from '../components/Nav.vue'
import axios from 'axios'
export default {
    components:{
        Sto, Nav
        },
    data(){
        return{
            stolovi: [],
            token: localStorage.getItem('userToken')
        }
    },
    methods: {
        fetchData(){
            axios.get('http://127.0.0.1:8000/api/stolovi')
            .then(res => this.stolovi = res.data)
        }
    },
    mounted(){
        this.fetchData();
        this.token = localStorage.getItem('userToken');
    },
}
</script>

<style scoped>
    .container{
        display:flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        margin: 20px auto;
        flex-wrap: wrap;
    }
</style>