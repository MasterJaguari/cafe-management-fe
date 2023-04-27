<template>
<Nav />
<AdminNav />
<div class="container">
    <Stolovi />
  <DodajSto />
</div>
</template>

<script>
import Stolovi from '../components/administrator/Stolovi.vue'
import DodajSto from '../components/administrator/DodajSto.vue'
import Nav from '../components/Nav.vue'
import AdminNav from '../components/administrator/AdminNav.vue'
export default {
    components: {
        DodajSto,
        Nav,
        AdminNav,
        Stolovi
    }
}
</script>

<style scoped>
    .container{
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
</style>