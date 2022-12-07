<template>

    <div class="d-flex justify-content-center flex-row p-5 my-5 ">
        <div class="d-flex flex-column">
            <div class="side 1">
                <img src="../assets/side-1.png" style="border-radius: 10px;"/>
            </div>
            <div class="side 2">
                <img src="../assets/side-2.png" style="border-radius: 10px;"/>
            </div>
            <div class="side 3">
                <img src="../assets/side-3.png" style="border-radius: 10px;"/>
            </div>
            <div class="side 4">
                <img src="../assets/side-1.png" style="border-radius: 10px;"/>
            </div>
            <div class="side 5">
                <img src="../assets/side-2.png" id="kursi5" style="border-radius: 10px;"/>
            </div>   
        </div>
     
        
        <div>
            <img alt="kursi" id="kursi0" :src="require('../assets/' + ImgTampungFoto + '.png')" width="500px">
        </div>
        
        <div>
            <h2> Chair Thatty</h2>
            <p> IDR 12.000.000 </p>
            <a class="btn p-3 mb-2 text-dark" style="border-radius: 80px; width: 55%; border:1px solid; background-color: pink;" type="submit" href="#" > <img src="../assets/cart-icon.png"> Add to Cart</a>
            <br><br>
            <div class="about">
                <b>About the product</b>
                <p>Tailored to a level of perfection synonymous with that <br>
                of a Savile Row suit and with understated quality in the <br>
                detail, Jetty has been influenced by timeless 1950s style. </p>
                <p>Providing a subtle nod tothe past, Jetty also provvides <br> 
                a perfect solution for the way we work today. <br>
                A comprehensive product family, Jetty features a variety <br>
                of elegant chairs and sofas.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GalleryComponents',
    props: ["ImgTampungFoto"]
}
</script>

<style>

</style>