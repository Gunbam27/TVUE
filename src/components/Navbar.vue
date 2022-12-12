<template>
  <nav className="wrap_navbar">
    <div className="container">
      <div className="navbar row-center">
        <h1>TVUE</h1><input @input="$store.commit('setSearchVal',$event.target.value)" type="text" id="search" placeholder="Please search the movie title in English ex)frozen"/>
        <button @click="$store.dispatch('getData')">SEARCH</button>
        <p>{{keyword}}</p>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  data(){
    return{
      keyword:'',
    }
  },

  methods:{
    updateMessage(e){
      this.$store.commit('keyword',e.target.value);
    }
  }
}
</script>

<style>

</style>