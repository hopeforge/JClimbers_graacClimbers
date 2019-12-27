<template>
  <div>
    <div class='div-nave'>
      <appNavBar></appNavBar>
    </div>

  </div>
</template>

<script>
import NavBar from '../../shared/navbar_tools/NavBarTools.vue'
//import Carousel from '../../shared/carrousel/Carousel.vue'

export default {
    components: {
        appNavBar : NavBar,
        //appCarousel : Carousel
    }
}
</script>

<style >
body {
  background-color: rgba(0, 0, 0, 0.49);
}
.box{
  color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.49);
  box-sizing: 100%;
}
.malha{
  background-color:rgba(0, 0, 0, 0.40)inher;
  background: url('https://graacc.org.br/wp-content/uploads/2017/08/topograacc.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
}
.div-nave{
  position: fixed;
  width: 100%;
}
.zoom{
transition: transform .2s; /* Animation */
margin: auto;
}
.zoom:hover{
  transform: scale(1.02)
}
</style>
