<template>
  <Nav />
  <AdminNav />
<div class="container">
  <router-view />
</div>
</template>

<script>
import DodajSto from '../components/administrator/DodajSto.vue'
import NoviProizvod from '../components/meni/NoviProizvod.vue'
import Nav from '../components/Nav.vue'
import Korisnici from '../components/administrator/Korisnici.vue'
import AdminNav from '../components/administrator/AdminNav.vue'
export default {
    components: {
        DodajSto,
        NoviProizvod,
        Nav,
        Korisnici,
        AdminNav
    }
}
</script>

<style scoped>
  .container{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
  }
</style>