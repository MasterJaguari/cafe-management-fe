<template>
  <div class="container">
      <h1>Racun</h1>
      <div v-if="data !== null">
          <StavkaRacuna v-for="stavka in racun" :data="stavka" :key="stavka.id" @click="removeStavka(stavka.id)"/>
      </div>
      <h3 class="text-end">Za plaćanje: <span>{{zaPlacanje}}</span> din</h3>
      <div class="text-end">
      <button class="btn1" @click="platiRacun" v-if="racun.length > 0">Plati</button>
      </div>
      <button @click="ikonicaClick" class="btn2">{{ikonica}}</button>
        <MeniRacun v-if="racunMeni" :data="data" :meni="stavkeIspis" :sto_id="sto_id" @triggerFetch="fetchRacun"/>
  </div>
</template>

<script>
import StavkaRacuna from './StavkaRacuna.vue'
import MeniRacun from './MeniRacun.vue'
import axios from 'axios'
export default {
    props:['data','sto_id'],
    components:{
        StavkaRacuna,
        MeniRacun
    },
    data(){
        return{
            racunMeni: false,
            racun: [],
            stavkeIspis: [],
            ikonica : "+"
        }
    },
    methods: {
        async fetchStavkeIspis(){
            const res = await axios.get('http://127.0.0.1:8000/api/meni');
            const data =  await res.data;
            this.stavkeIspis = data;
            },
        platiRacun(){
            const sendingData = {porudzbina: [], zauzet: 0};
            fetch('http://127.0.0.1:8000/api/stolovi/update/'+this.sto_id,
                {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendingData)
            })
            .then(res => {res.text();
            this.$router.go();});   
            alert("Racun plaćen!");
        },
        fetchRacun(){
            axios.get('http://127.0.0.1:8000/api/stolovi/'+this.sto_id)
            .then(res => {this.racun = res.data.porudzbina;
            this.$emit('dodataStavka', this.racun);
            }
            )
        },
        ikonicaClick(){
            this.racunMeni = !this.racunMeni;
            (this.ikonica === "+") ? this.ikonica = '-' : this.ikonica = '+';
        },
        removeStavka(id){
            let porudzbina = this.racun.filter(stavka => stavka.id !== id);
            let zauzet = (porudzbina.length > 0)? 1 : 0;
            let sendingData = {porudzbina, zauzet}
             fetch('http://127.0.0.1:8000/api/stolovi/update/'+this.sto_id,
                {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(sendingData)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.fetchRacun();
                alert('Stavka uklonjena sa računa!');
            })
        }
    },
    mounted(){
        this.fetchStavkeIspis();
        this.fetchRacun();
    },
    computed: {
        zaPlacanje(){
            let cena = 0;
            // console.log(this.racun);
            for(let stavka of this.racun){
                cena += stavka.cena;
            }   
            return cena;
        },
    }
}
</script>

<style scoped>
    .container{
        width: 280px;
        background: #ddd;
        border: 1px solid black;
        transition: 0.5s ease-in-out;
        margin-left: 20px;
    }
    .btn2{
        width: 10%;
        margin: 5px auto;
        font-size: 20px;
        cursor: pointer;
    }
    .btn1{
        width: 25%;
        background: limegreen;
        font-weight: bold;
        border: 0;
        border-radius: 10px;
        padding: 5px 10px;
        cursor: pointer;
    }
    .text-end{
        text-align: end;
        margin-right: 10px;
    }
</style>