<template>
  <div>
    <Navbar></Navbar>
    <Breadcrumb></Breadcrumb>
    <Shipform></Shipform>
    <SuccessForm class="d-none"></SuccessForm>
    <Footer></Footer>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import Shipform from '../components/Shipform.vue'
import SuccessForm from "../components/SuccessForm.vue"
import Footer from '../components/Footer.vue'
import Copyright from '../components/Copyright.vue'

export default {
    name : 'ShippingPage',
    components: {
        Navbar, 
        Breadcrumb, 
        Shipform,
        Footer,
        Copyright,
        SuccessForm
    },
}
</script>

<style>

</style>