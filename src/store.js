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
    //Navbar에 있는 input value가져옴 &한국어일시 alert
    setSearchVal(state,data){
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        if(korean.test(data)){
          alert('영어로 입력해 주세요!')
        }else{
        state.SEARCH_VALUE= data;
        }
    },
    //axios로 가져온 데이터가 담김
    setMore(state,data){
        state.movies=data.Search;
        console.log(state.movies);
    },
  },
  //Navbar에있는 버튼을 누르면 setSearchVal()값으로 axios 요청
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