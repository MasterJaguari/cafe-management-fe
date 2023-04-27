<template>
<Nav />
<AdminNav />
<div class="container">
  <Korisnici />
  <CreateKorisnik />
</div>
</template>

<script>
import AdminNav from '../components/administrator/AdminNav.vue'
import Nav from '../components/Nav.vue'
import Korisnici from '../components/administrator/Korisnici.vue'
import CreateKorisnik from '../components/administrator/CreateKorisnik.vue'
export default {
    components: {
        Korisnici,
        CreateKorisnik,
        AdminNav,
        Nav
    }
}
</script>

<style scoped>
  .container{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-height: 100vh;
    }
</style>