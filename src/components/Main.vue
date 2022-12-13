<template>
  <div className="main column-center">
    <Navbar></Navbar>
    <List></List>>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import List from './List.vue';

export default {
  name: 'Main',
  props: {
    
  },
  components:{
    Navbar,List
  }
}
</script>


<style>

</style>
