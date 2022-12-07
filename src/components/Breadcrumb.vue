<template>
  <div class="d-flex p-2 mx-3">
            <router-link to="./Detail" class="text-dark">Home </router-link>
            <a>&nbsp; /  &nbsp;</a>
            <router-link to="./Detail" class="text-dark" > Details</router-link>
            <a>&nbsp; /  &nbsp;</a>
            <router-link to="./Shipping" class="text-dark" > Shipping </router-link>
            <a>&nbsp; /  &nbsp;</a>
            <router-link to="./shippingList" class="text-dark">Shipping List</router-link>
        </div>
</template>

<script>
export default {
    name: 'BreadcrumbComponents',
    props: {
    msg: String
  }
}
</script>

<style>

</style>