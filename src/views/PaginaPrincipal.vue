<template>
  <main>
    <div class="container.fluid">
      <div class="row">
        <div id="bg-index" class="col-12 d-flex justify-content-center align-items-center">
          <a id="wp" href="#producto"><h1>Water Pot</h1></a>
        </div>
        <div class="vc col-lg-8 col-md-12 col-sm-12">
          <h2 v-text="idioma[idiomaSeleccionado].titulo"></h2>
          <p v-text="idioma[idiomaSeleccionado].p1"></p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12">
          <img class="img-index borde-1 img-fluid" src="../assets/faucet-2.1.jpg" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12" id="img-wrap-2">
          <img class="img-index borde-2 img-fluid" src="../assets/consumo3.jpg" alt="">
        </div>
        <div class="vo col-lg-8 col-md-12 col-sm-12">
          <h2 v-text="idioma[idiomaSeleccionado].titulo2"></h2>
          <p v-text="idioma[idiomaSeleccionado].p2"></p>
        </div>
      </div>

      <div class="row" id="producto">
        <div class="vc col-lg-8 col-md-12 col-sm-12">
          <h2 v-text="idioma[idiomaSeleccionado].titulo3"></h2>
          <p v-text="idioma[idiomaSeleccionado].p3"></p>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12" id="img-wrap-3">
          <img class="img-index borde-1 img-fluid" src="../assets/slider5.jpg" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-12 col-sm-12">
          <div id="carouselExampleCaptions" class="carousel-dark carousel slide carousel" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/slider7.jpg" class="carous-img t-wp d-block w-100" alt="..." style="height:70vh; width:70vh;" >
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/slider6.jpg" class="carous-img st-wp d-block w-100" alt="..." style="height:70vh; width:70vh;" >
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        <div class="vo col-lg-8 col-md-12 col-sm-12">
          <h2 v-text="idioma[idiomaSeleccionado].titulo4"></h2>
          <br><br>
          <p v-html="idioma[idiomaSeleccionado].p4"></p>
          <br><br>
          <p></p>
        </div>
      </div>
      <div class="container.fluid">
        <div class="row">
          <div class="vc col-12">
            <br><br>
            <h2 v-text="idioma[idiomaSeleccionado].titulo5"></h2>
            <br>
            <p v-html="idioma[idiomaSeleccionado].p5"></p>
          </div>
        </div>
      </div>

    </div>
  </main>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'PaginaPrincipal',
  data () {
    return {
      idiomaSeleccionado: this.$idiomaGlobal,
      idioma: {
        spanish: {
          titulo: 'Sequías en Chile',
          p1: 'El 72% de la superficie de Chile sufre de sequía en algún grado. 156 de las 345 comunas del país presentan riesgo de desertificación',
          titulo2: 'Consumo de agua',
          p2: 'El sector agrícola es el mayor usuario de agua consuntiva en Chile con un 72%, seguido por el agua potable, consumo industrial y uso minero, con el 12%, 7% y 4%, respectivamente',
          titulo3: 'Producto',
          p3: 'El Water Pot es un contenedor de agua y fertilizantes, construido a base de plástico reciclado, ubicandose en la base del árbol',
          titulo4: 'Tipo de Water Pot',
          p4: '• Blanco: Water Pot orientado a árboles de climas fríos. <br><br> • Negro: Water Pot orientado a árboles de climas cálidos.',
          titulo5: 'Beneficios',
          p5: '• Promueve el crecimiento de raíces. <br>• Impulsa el crecimiento del cultivo en un 30% <br>• Reducción en el uso de recursos, como: agua, fertilizantes y energía (electricidad/combustible). La disminución en el uso de recursos puede llegar incluso a cifras del 90% <br>• Aumenta la temperatura interna del Water Pot gracias a su efecto invernadero, lo que protege los árboles contra bajas temperaturas. <br>• Protege contra el viento, llevando al desarrollo de un tronco sólido y estable.'
        },
        english: {
          titulo: 'Droughts in Chile',
          p1: "72% of the Chilean's surface suffers from drought to some degree. 156 of the 345 communes in the country are at risk of desertification",
          titulo2: 'Water consumption',
          p2: 'The agricultural sector is the largest water consumer in Chile with 72%, followed by drinking water, industrial consumption and mining use, with 12%, 7% and 4%, respectively',
          titulo3: 'Product',
          p3: 'The Water Pot is a water and fertilizer container built from recycled plastic, the product is placed at the base of the tree',
          titulo4: 'Water Pot Variations',
          p4: '• White: Water Pot for cold climate trees. <br><br>• Black: Water Pot for warm climate trees.',
          titulo5: 'Benefits',
          p5: '• Promotes root growth. <br>• Boosts crop growth by 30% <br>• Resource reduction, such as: water, fertilizer and energy (electricity/fuel). The decrease in the use of resources can even reach figures of 90% <br>• It increases the internal temperature of the Water Pot thanks to its greenhouse effect, which protects the trees against low temperatures. <br>• Protects against the wind, leading to the development of a solid and stable trunk.'
        }
      }
    }
  }
}
</script>

<style scoped>
  main{
    background-color: #def4c6;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  #bg-index{
  background: url('../assets/orange-farm.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  min-height: 900px;
  }
  h1{
    color: #F0F0F0;
    font-family: 'Russo One', sans-serif;
    font-size: 11vh;
    font-weight: 700;
    letter-spacing: 4vh;
    text-transform: uppercase;
    text-shadow: 5px 5px 8px #404040;
    display: inline;
  }
  #wp{
    text-decoration: none;
  }
  h2{
    font-family: 'Fredoka One', cursive;
    /* font-family: 'Righteous', cursive; */
    /* font-family: 'Staatliches', cursive; */
    /* font-family: 'Russo One', sans-serif; */
    padding-top: 7vh;
    font-size: 3.5vh;
    font-weight: 700;
    letter-spacing: 1.3vh;
    text-transform: uppercase;
  }
  h1:hover{
    transition: all 180ms linear;
    color: #F0F0F0;
    text-shadow: 5px 5px 8px #fff;
    font-size: 11.5vh;
  }
  h1:hover:before{
    transition: all 200ms linear;
    color: #F0F0F0;
    text-shadow: 5px 5px 8px #fff;
  }
  p{
    font-size: 3.5vh;
    padding: 1vh 7vh;
    padding-bottom: 6vh;
    font-family: 'Hind Vadodara', sans-serif;
    letter-spacing: 0.4vh;
  }
  .vo{
    background-color: #1c7c54;
    color: #def4c6;
  }
  .vc{
    background-color: #def4c6;
    color: #1c7c54;
  }
  .col-lg-4{
    padding:0;
  }
  .img-index{
    padding:0;
  }
  .t-wp{
    height: 428px;
    width: 642px;
  }
  .borde-1{
    border-top-left-radius: 5%;
    border-bottom-left-radius: 5%;
  }
  .borde-2{
    border-top-right-radius: 5%;
    border-bottom-right-radius: 5%;
  }
  #img-wrap-2, #img-wrap-3{
    background-color: #b1e775;
  }

</style>
