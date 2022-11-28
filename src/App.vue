<template>
  <div id="app">
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <Gallery></Gallery>
    <Card></Card>
    <Slider></Slider>
    <Footer></Footer>
    <Copyright></Copyright>


  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Gallery from '@/components/Gallery.vue'
import Card from '@/components/Card.vue'
import Slider from '@/components/Slider.vue'
import Footer from '@/components/Footer.vue'
import Copyright from '@/components/Copyright.vue'

export default {
  name: 'App',
  components: {
    Navbar, 
    Breadcrumb, 
    Gallery,  
    Card,
    Slider,
    Footer,
    Copyright
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
