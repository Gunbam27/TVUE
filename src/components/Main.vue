<template>
  <div className="main column-center">
    <Navbar></Navbar>
    <List></List>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from './Navbar.vue';
import List from './List.vue';

export default {
  name: 'Main',
  props: {
    
  },
  components:{
    Navbar,List
  }
  // data(){
  //   return{
  //     movies:[],
      
  //   }
  // },
  // created(){
  //   console.log('완성');
  //   this.more();
  // },
  // methods:{
  //   more(){
  //     axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c97ea8e3')
  //     .then((result)=>{
  //       console.log(result.data);
  //     this.movies.push(result.data)
  //   })
  //   }
  // }
}
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
