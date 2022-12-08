<template>
    <div className="list" v-for="(a,i) in movies" :key="i">
        <p>{{a.Title}}</p>
        <!-- <img :src="a[i].Poster"/> -->
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'List',
  props: {

  },
  data(){
    return{
      movies:[],
      API_KEYS:'c97ea8e3',
      SEARCH_VALUE:'frozen'
    }
  },
  created(){
    console.log('완성');
    this.more();
  },
  methods:{
    more(){
      axios.get(`http://www.omdbapi.com/?apikey=${this.API_KEYS}&s=${this.SEARCH_VALUE}`)
      .then((result)=>{
        // console.log(result.data.Search);
       
      this.movies.push(result.data.Search);
      this.movies = this.movies.flat();
      console.log(this.movies)
    })
    }
  }
}
</script>


<style>
p{color:white}
</style>