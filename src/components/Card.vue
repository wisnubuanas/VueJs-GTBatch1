<template>
  <div class="bg-white p-4 border-radius-25">
    <a href="#" class="chair" @click.prevent="$emit('changePicture', cardImage)">
        <img class="border-radius-25" :src="require('@/assets/' + cardImage + '.png')">
    </a>
    <p class="font-weight-bold mt-3 my-0">{{ cardTitle }}</p>
    <p> IDR {{ cardPrice }}</p>
  </div>
</template>

<script>
export default {
    name: 'CardComponents',
    props: ["cardTitle", "cardPrice", "cardImage"],
}
</script>

<style>

</style>