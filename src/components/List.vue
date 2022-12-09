<template>
    <div className="wrap_list">
      <div className="list" v-for="(a,i) in $store.state.movies" :key="i">
        <p>{{a.Title}}</p>
        <img :src="a.Poster"/>
      </div>
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

    }
  },
  created(){

  },
  methods:{

  }
}
</script>


<style>
p{color:white}
</style>