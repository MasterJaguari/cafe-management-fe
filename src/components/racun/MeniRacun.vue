<template>
  <div class="meni">
      <h1>Meni</h1>
          <StavkaRacunMeni v-for="stavka in meni" :key="stavka.id" :data="stavka" @click="dodajStavku(stavka.id)"/>
  </div>
</template>

<script>
import StavkaRacunMeni from './StavkaRacunMeni.vue'
import axios from 'axios'
export default {
    components:{
        StavkaRacunMeni,
    },
    data(){
        return{
            stavkeIspis: [],
            sto: {},
            triggerFetch: false
        }
    },
    props: ['data', 'sto_id', 'meni'],
    methods: {
       async fetchStavkePorudzbina(){
        //    axios.get('http://127.0.0.1:8000/api/stolovi/'+this.sto_id)
        //    .then(res =>console.log(res));
            const res = await fetch('http://127.0.0.1:8000/api/stolovi/'+this.sto_id)
            const data = await res.json();
            this.sto = data;
    },
        async dodajStavku(id){
            await this.fetchStavkePorudzbina();
            this.triggerFetch = false;
            console.log(this.sto);
            for(let proizvod of this.meni){
                if(id === proizvod.id){
                    this.sto.porudzbina.push(proizvod);
                }
            }
            const sendingData = {porudzbina: this.sto.porudzbina, zauzet: 1};
            axios.put('http://127.0.0.1:8000/api/stolovi/update/'+this.sto_id, sendingData)
            .then(res => {console.log(res);
            this.$emit('triggerFetch')}); 
        },
        test(){
            console.log(this.stavkeIspis);
        }
    },
    mounted(){
        // console.log(this.fetchStavkePorudzbina());
    }
}
</script>

<style scoped>
    .meni{
        margin: 0 auto;
        border-top: 1px solid black;
        /* border-top: 1px solid black; */
        width: 90%;
        padding: 5%;
        margin: 0;
    }
</style>