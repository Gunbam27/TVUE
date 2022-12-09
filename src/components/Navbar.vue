<template>
    <div className="navbar row-center">
      <h1>TVUE</h1><input @input="$store.commit('setSearchVal',$event.target.value)" type="text" id="search" />
      <button @click="$store.dispatch('getData')">SEARCH</button>
      <p>{{keyword}}</p>
    </div>
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
      console.log(e.target.value);
    }
  }
}
</script>

<style>
h1{color:white}
</style>