import { toHandlers } from 'vue';
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        stolovi: [],
        proizvodi: [],
    },
    getters: {},
    mutations: {
        getStolovi(state, payload){
            state.stolovi = payload;
        },
        getProizvodi(state, payload){
            state.proizvodi = payload;
        }
    },
    actions: {
        getStolovi(context, payload){
            axios.get('http://127.0.0.1:8000/api/stolovi')
            .then(res => payload = res.data)
            context.commit('getStolovi',payload);
        },
        getProizvodi(context){
            let payload = [];
            axios.get('http://127.0.0.1:8000/api/meni')
            .then(res => {payload = res.data;
            console.log(payload);})
            context.commit('getProizvodi',payload);
        }
    }
})