<template>
<div class="container">
  <label for="name">
      Korisnicko ime:<br>
      <input type="text" name="name" placeholder="radnik" v-model="name">
       <i class="material-icons" id="show">a</i>
  </label>
   <label for="password">
       Lozinka: <br>
       <div class="pw">
      <input :type="inputType" name="password" placeholder="********" v-model="password">
      <i class="material-icons" id="show" @click="iconToggle">{{icon}}</i>
       </div>
  </label>
  <div class="alert" v-if="errorMsg">{{errorMsg}}</div>
  <input type="submit" value="PRIJAVI SE" @click="login">
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            name: "",
            password: "",
            token : localStorage.getItem('userToken'),
            role_id : localStorage.getItem('userRoleId'),
            user_name : localStorage.getItem('userName'),
            errorResStatus : 0,
            errorMsg: "",
            icon: 'visibility',
            inputType: 'password'
        }
    },
    methods:{
        login(){
            let data = {name: this.name, password: this.password}
            axios.post('http://127.0.0.1:8000/api/login', data, {
                headers:{
                    mode: 'no-cors'
                }
            })
            .then(res => {console.log(res);
            localStorage.setItem('userToken', res.data.token);
            localStorage.setItem('userRoleId', res.data.user.role_id);
            localStorage.setItem('userName', res.data.user.name);
            this.$router.push('/lokal')})
            .catch(
                err => {
                    this.errorResStatus = err.response.status;
            this.errorHandling();
                }
            );
        },
        errorHandling(){
            if(this.errorResStatus === 422){
                this.errorMsg = "Polja su obavezna!";
            }
            else if(this.errorResStatus === 401){
                this.errorMsg = "Uneti podaci neispravni!";
            }
        },
        iconToggle(){
            if(this.icon === 'visibility'){
                this.icon = 'visibility_off';
                this.inputType = 'text';
            }
            else{
                this.icon = 'visibility';
                this.inputType = 'password';
            }
        }
    },
}
</script>

<style scoped>
    label{
        display:block;
        text-align: start;
        color: black;
        font-size: 12px;
        color: gray;
    }
    .container{
       margin-top: 15%;
       /* border: 1px solid gray; */
       box-shadow: 1px 1px 5px gray;
       border-radius: 20px;
       background: whitesmoke;
       width: 20%;
       margin-left: auto;
       margin-right: auto;
       padding: 40px 20px;
       display:flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
        /* border: 2px solid #618685; */
    }
    input{
        padding: 5px;
        font-size: 15px;
        margin-bottom: 20px;
        margin-top: 5px;
        /* border-radius: 5px; */
        border: 0;
        border-bottom: 1px solid #618685;
        background: transparent;
    }
    input:focus{
        border: 1px solid #618685;

    }
    input[type="submit"]{
        padding: 10px 15px;
        border-radius: 10px;
        border: 0;
        font-weight: bold;
        background: linear-gradient(to bottom right, #80ced6, #618685);
        color:white;
        cursor: pointer;
    }
     input[type="submit"]:hover{
        background: linear-gradient(to bottom right,#618685,  #80ced6);
    }
    .alert{
        border: 1px solid red;
        background: rgba(255,50,50, 0.7);
        padding: 15px;
        margin-bottom: 20px;
        color:white;
    }
    #show{
        position:absolute;
        top: 355px;
        right: 655px;
        cursor:pointer;
        margin: 0;
    }
    .pw{
        margin: 5px auto;
    }
</style>