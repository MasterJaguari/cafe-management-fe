<template>
  <div id="nav">
    <router-link to="/lokal" class="nav-item">LOKAL</router-link> 
    <router-link to="/meni" class="nav-item">MENI</router-link>
    <router-link to="/admin" v-if="role_id === '1'" class="nav-item">ADMIN</router-link>
    <a href="/" @click="logout" class="nav-item">ODJAVI SE</a>
  </div>
    <h2>Korisnik: {{username}}</h2>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            role_id : localStorage.getItem('userRoleId'),
            username: localStorage.getItem('userName')
        }
    },
    beforeMount() {
        this.role_id = localStorage.getItem('userRoleId');
    },
    methods: {
      logout(e){
          e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/logout', {}, {headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('userToken')
        }})
        .then(res => {console.log(res);
        localStorage.removeItem('userToken');
        localStorage.removeItem('userRoleId');
        this.$router.push('/');
        });
        this.token = localStorage.getItem('userToken');
        this.role_id = localStorage.getItem('userRoleId');
      }
    },
}
</script>

<style scoped>

#nav {
  padding: 30px;
  display:flex;
  justify-content: space-between;
  width: 25%;
  margin: 10px auto;
}
 .nav-item
    {
        color:white;
        text-decoration: none;
        background:  #618685;
        margin: 5px 0;
        text-align: center;
        padding: 10px;
      border: 2px solid white;
      font-weight: bold;
      border-radius: 5px;
    }
    .nav-item:hover{
      background: white;
      color: #618685;
      border: 2px solid  #618685;
    }
    .nav-item.router-link-exact-active{
       background: white;
      color: #618685;
      border: 2px solid  #618685;
    }
</style>
