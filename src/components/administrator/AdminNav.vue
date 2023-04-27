<template>
  <div>
    <router-link class="nav-item" to="/admin/korisnici">Korisnici</router-link>
    <router-link  class="nav-item" to="/admin/stolovi">Stolovi</router-link>
    <router-link  class="nav-item" to="/admin/meni">Meni</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div{
        /* border: 1px solid black; */
        width: 20%;
        text-align: start;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        min-height: 40%;
        padding: 20px;
        margin: 0 auto;
    }
    .nav-item
    {
        color:white;
        text-decoration: none;
        background: #618685;
        margin: 5px 0;
        text-align: center;
        padding: 5px;
      border: 2px solid white;
      width: 25%;
    }
    .nav-item:hover{
      background: white;
      color:#618685;
      border: 2px solid #618685;
    }
    .nav-item.router-link-exact-active{
       background: white;
      color: #618685;
      border: 2px solid  #618685;
    }
</style>