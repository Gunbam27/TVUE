import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state(){
    return {
        API_KEYS:'c97ea8e3',
        more:{},
        SEARCH_VALUE:'Frozen',
        movies:[],
    }
  },
  mutations:{
    setSearchVal(state,data){
        state.SEARCH_VALUE= data;
    },
    setMore(state,data){
        state.movies=data;
        console.log(state.movies);
    },
  },
  actions:{
    getData(){
        axios.get(`http://www.omdbapi.com/?apikey=${this.state.API_KEYS}&s=${this.state.SEARCH_VALUE}`)
        .then((result)=>{
            console.log(result.data);
            this.commit('setMore',result.data);
        })
    }
  },
})

export default store