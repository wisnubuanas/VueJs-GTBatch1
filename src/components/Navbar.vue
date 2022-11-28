<template>
        <nav class="navbar navbar-light bg-light justify-content-between">
          <img src="../assets/logo.png"/>
          <div class="d-flex">
              <a class="nav-link text-dark" href="">Home</a>
              <a class="nav-link text-dark" href="">Catalog</a>
              <a class="nav-link text-dark" href="">Delivery</a>
              <a class="nav-link text-dark" href="">Rewards</a>
              <a > <img src="../assets/cart-icon.png"> </a>  
            </div>
        </nav>
</template>

<script>
export default {
    name: 'NavbarComponents',
  props: {
    msg: String
  }
}
</script>

<style>

</style>