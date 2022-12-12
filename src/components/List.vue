<!-- <template>
  <main className="wrap_list">
    <div className="container">
      <ul>
        <li className="list" v-for="(a,i) in $store.state.movies" :key="i" @click="">
          <p>{{a.Title}}</p>
          <img :src="a.Poster"/>
        </li>
      </ul>
    </div>
  </main>
</template> -->
<template>
  <main className="wrap_list">
    <div className="container">
      <ul>
        <li className="list" v-for="(a,i) in $store.state.movies" :key="i" @click="$store.commit('controleModal',true)">
          <p>{{a.Title}}</p>
          <img :src="a.Poster"/>
        </li>
      </ul>
    </div>
    <!-- 모달창 -->
    <div className="modal" v-if="$store.state.modal===true">
      <div className="modal-inner">
        <span @click="$store.commit('controleModal',false)"><i className="fa-regular fa-circle-xmark"></i></span>
        <p>hi</p>
      </div>
    </div>
    <!-- 모달창 -->
  </main>
</template>
<script>

export default {
  name: 'List',
  data(){
    return {
      // modal : false,
    }
  }
}
</script>


<style>

</style>