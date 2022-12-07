<template>
  <div>
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <Gallery :ImgTampungFoto="ImgTampung"></Gallery>
    <Card></Card>
    <Slider @changePictureSlider="changePictureFunc"></Slider>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import Gallery from '../components/Gallery.vue'
import Card from '../components/Card.vue'
import Slider from '../components/Slider.vue'
import Footer from '../components/Footer.vue'
import Copyright from '../components/Copyright.vue'

export default {
name : 'DetailPage',
components: {
    Navbar, 
    Breadcrumb, 
    Gallery,  
    Card,
    Slider,
    Footer,
    Copyright
  },
  data() {
    return {
      ImgTampung: "chair",
    };
  },
  methods: {
    changePictureFunc: function (cardImage) {
      this.ImgTampung = cardImage;
    }
  }
}
</script>

<style>

</style>