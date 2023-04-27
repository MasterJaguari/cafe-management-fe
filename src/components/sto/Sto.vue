<template>
<div class="flex">
<div class="container">
  <div class="table" :class="klasa" @click="racun = !racun">
      <h1>{{data.broj_stola}}</h1>
  </div>
</div>
      <Racun v-if="racun" :data="porudzbina" :sto_id="data.id" @dodataStavka="toggleKlasa"/>
</div>
</template>

<script>
import Racun from '../racun/Racun.vue'
import axios from 'axios'
export default {
    name: "Sto",
    props: ['data'],
    components: {
        Racun
    },
    data(){
        return {
            racun: false,
            eventData: [],
            zauzet: 0
        }
    },
    computed: {
        porudzbina(){
            return this.data.porudzbina;
        }
    },
    mounted(){
        this.getStolovi();
        },
    updated(){
        //   this.getStolovi();
    },
    methods:{
        toggleKlasa(data){
            this.eventData = data;
        },
        // klasa: () => {
        //     if(this.eventData.length > 0 || this.zauzet === 1){
        //         return 'taken';
        //     }
        //     else if(this.evendData.length === 0 || this.zauzet === 0){
        //         return 'free';
        //     }
        // },
        getStolovi(){
            axios.get('http://127.0.0.1:8000/api/stolovi/'+this.data.id)
        .then(res => this.zauzet = res.data.zauzet)
        }
    },
    computed: {
        klasa(){
             if(this.eventData.length > 0 || this.zauzet === 1)
                return 'taken';
            else if(this.eventData.length === 0 || this.zauzet === 0)
                return 'free';
        }
    }

}
</script>

<style scoped>
    .table{
        text-align: center;
        padding: 30px 15px;
        width: 250px;
        cursor:pointer;
        margin-left: 20px;
        margin-right: 0;
        margin-top: 20px;
    }
    .table:hover{
        box-shadow: 1px 1px 5px gray;
    }
    .taken{
        border: 1px solid crimson;
        background-color: rgba(237, 75, 67, 0.8)
    }
    .free{
        border: 1px solid green;
        background-color: rgba(77, 232, 145, 0.8);
    }
    .container{
        min-width: 25%;
        display:flex;
        flex-direction: column;
    }
    .flex{
        display:flex;
        flex-direction: column;
        
    }
</style>