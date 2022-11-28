<template>
  <footer>
        <div class="footerTitle text-center my-5">

            <a class="navbar-brand" href="#">
                <img src="../assets/logo.png" alt="">
            </a>

        </div>

        <div class="footerItem d-flex justify-content-around mb-5 p-5">

            <div class="overview d-flex flex-column">
                <b>Overview</b>
                <a class="p-0 nav-link text-dark" href="">Shipping</a>
                <a class="p-0 nav-link text-dark" href="">Refund</a>
                <a class="p-0 nav-link text-dark" href="">Promotion</a>
            </div>

            <div class="company d-flex flex-column">
                <b>Company</b>
                <a class="p-0 nav-link text-dark" href="">About</a>
                <a class="p-0 nav-link text-dark" href="">Career</a>
                <a class="p-0 nav-link text-dark" href="">Contact Us</a>
            </div>

            <div class="explore d-flex flex-column">
                <b>Explore</b>
                <a class="p-0 nav-link text-dark" href="">Terms & Condition</a>
                <a class="p-0 nav-link text-dark" href="">Privacy Policy</a>
                <a class="p-0 nav-link text-dark" href="">For Developer</a>
            </div>

            <div class="search">
                <b>Special Letter</b>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="email" placeholder="Your email adress" aria-label="Email" id="inputemail" required>
                        <button class="btn btn-danger my-2 my-sm-0" type="submit" id="btnAlert"><img src="../assets/tele-icon.png"></button>
                </form>
            </div>
        </div><hr>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponents',
}
</script>
<style>

</style>