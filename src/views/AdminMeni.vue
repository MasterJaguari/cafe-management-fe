<template>
<Nav />
<AdminNav />
<div class="container">
<Proizvodi />
<NoviProizvod />
</div>
</template>

<script>
import axios from 'axios'
import Nav from '../components/Nav.vue'
import AdminNav from '../components/administrator/AdminNav.vue'
import Proizvodi from '../components/administrator/Proizvodi.vue'
import NoviProizvod from '../components/meni/NoviProizvod.vue'
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
        }
    },
    components: {
        Nav,
        AdminNav,
        Proizvodi,
        NoviProizvod
    }
}
</script>

<style scoped>
.container{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }
</style>