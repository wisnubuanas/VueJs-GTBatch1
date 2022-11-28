<template>
  <div class="p-5 mt-5 bg-light-grey">
    <h5>Complete Your Room</h5>
    <h5>With What We Designed</h5>
    <div class="d-flex justify-content-between mt-4">
        <Card v-for="(item, index) in arrCardTitle"
            :key="index"
            :card-title="item"
            :card-price="arrCardPrice[index]"
            :card-image="arrCardImage[index]"></Card>
    </div>

  </div>
</template>

<script>
import Card from './Card.vue'
export default {
name: 'SlideComponents',
components: {
    Card
},
data() {
    return{
        arrCardTitle : ["Cangkir Mauttie", "Saman Kakka", "Lino Dino", "Syail Ammeno"],
        arrCardPrice : ["89.300.000", "14.500.000", "22.000.000", "12.000.000"],
        arrCardImage : ["chair-4", "chair-3", "chair-2", "chair-1"],
    }
} 
}
</script>

<style>

</style>