<template>
  <div class="hello">
    <h1>영화순위앱</h1>
    <button>버튼</button>
    <p>제목:{{movies[0].Title}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Main',
  props: {
  },
  data(){
    return{
      movies:[]
    }
  },
  created(){
    console.log('완성');
    this.more();
  },
  methods:{
    more(){
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=c97ea8e3')
      .then((result)=>{
        console.log(result.data);
      this.movies.push(result.data)
    })
    }
  }
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
