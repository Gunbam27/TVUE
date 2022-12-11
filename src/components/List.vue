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
        <router-link to="details" className="list" v-for="(a,i) in $store.state.movies" :key="i" @click="">
          <p>{{a.Title}}</p>
          <img :src="a.Poster"/>
        </router-link>
      </ul>
    </div>
  </main>
</template>
<script>

export default {
  name: 'List',
}
</script>


<style>

</style>