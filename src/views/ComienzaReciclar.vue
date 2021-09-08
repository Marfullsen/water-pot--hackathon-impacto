<template>
  <div class="cont-1">
    <div class="container" id="first-div">
      <div class="row align-items-center">
        <div class="col-xl-6">
          <img class="img-cr img-fluid" src="../assets/recycle.jpg" alt="" />
        </div>
        <div class="div-mg col-xl-6">
          <a class="d-flex justify-content-center" href="#mapa" id="recicla"><h2 v-text="idioma[idiomaSeleccionado].titulo2"></h2></a>
          <p v-text="idioma[idiomaSeleccionado].p1">
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="wave" style="height: 150px; overflow: hidden">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style="height: 100%; width: 100%"
    >
      <path
        d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
        style="stroke: none; fill: #1c7c54"
      ></path>
    </svg>
  </div>

  <section class="contenedorMapa">
    <div class="mapaDiv container" id="mapa">
      <h2 v-text="idioma[idiomaSeleccionado].titulo3"></h2>
      <iframe
        class="mapa col-sm-12 col-md-12 col-lg-8"
        src="https://www.google.com/maps/d/embed?mid=1Y_rRDHYD9VBEVNz2LJIldKU-j4U"
        width="640"
        height="480"
      ></iframe>
    </div>
    <div style="height: 150px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #1c7c54"
        ></path>
      </svg>
    </div>
    <div class="divImagenFinal">
      <div class="container">
        <div class="row align-items-center">
          <div class="div-mg col-xl-6">
            <p v-text="idioma[idiomaSeleccionado].p2">
            </p>
          </div>
          <div class="col-xl-6">
            <img
              class="img-cr img-fluid"
              src="../assets/together-1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="wave" style="height: 150px; overflow: hidden">
    <svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style="height: 100%; width: 100%"
    >
      <path
        d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
        style="stroke: none; fill: #1c7c54"
      ></path>
    </svg>
  </div>

  <section class="contenedorMapa">
    <div style="height: 150px; overflow: hidden">
      <svg
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
        style="height: 100%; width: 100%"
      >
        <path
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
          style="stroke: none; fill: #1c7d55"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ComienzaReciclar',
  data () {
    return {
      idiomaSeleccionado: this.$idiomaGlobal,
      idioma: {
        spanish: {
          titulo: '¿Cómo puedo aportar?',
          titulo2: 'Recicla Ya!',
          titulo3: 'Puntos de reciclaje cercanos!',
          p1: 'Si no puedes realizar un aporte monetario no hay problema! Puedes aportar a la causa reciclando. El Water Pot está construido a base de plástico reciclado, así que puedes ayudar mucho y además al medio ambiente solo reciclando.',
          p2: 'Ya sabes, aportar monetariamente no es la única forma de ayudarnos y además de ayudarnos le haces un gran favor al medio ambiente. Recuerda, el cambio parte por uno mismo. '
        },
        english: {
          titulo: 'How can I help?',
          titulo2: 'Recycle now!',
          titulo3: 'Recycle spots near you!',
          p1: 'If you cannot make a monetary contribution, no problem! You can contribute to the cause by recycling. The Water Pot is built from recycled plastic, so you can help us a lot and also the environment just by recycling.',
          p2: 'You already know, contributing monetarily is not the only way to help us and in addition to helping us you do the environment a great favor. Remember, the change starts with yourself.'
        }
      }
    }
  },
  methods: {
    onClickChild (value) {
      this.idiomaSeleccionado = value
    }
  },
  mounted () {
    this.idiomaSeleccionado = this.$root.$idiomaGlobal
  }
}
</script>

<style scoped>
.cont-1 {
  background-color: #1c7c54;
}
h2 {
  color: #73e2a7;
  font-family: "Fredoka One", cursive;
  font-size: 4vh;
  font-weight: 700;
  letter-spacing: 1vh;
  text-transform: uppercase;
}
#recicla:hover {
  transition: all 180ms linear;
  color: #73e2a7;
  text-shadow: 5px 5px 8px #b1cf5f;
  font-size: 4.5vh;
}
#recicla:hover:before {
  transition: all 200ms linear;
  color: #73e2a7;
  text-shadow: 5px 5px 8px #b1cf5f;
}
.mapaDiv h2 {
  color: #1c7c54;
  font-family: "Fredoka One", cursive;
  padding-top: 150px;
  font-size: 4vh;
  font-weight: 700;
  letter-spacing: 1vh;
  text-transform: uppercase;
}
/* .img-fluid{
        padding-top: 13vh;
        width: 60vh;
        border-radius: 5%;
    } */
.img-cr {
  width: 60vh;
  border-radius: 5%;
}
p {
  font-size: 3vh;
  padding: 9vh 7vh;
  font-family: "Hind Vadodara", sans-serif;
  letter-spacing: 0.4vh;
  color: #73e2a7;
}
.wave {
  position: absolute;
  width: 100%;
}
.contenedorMapa {
  background-color: #73e2a7;
}
.mapa {
  padding-top: 3vh;
  border-radius: 10%;
}
.divImagenFinal {
  background-color: #1c7c54;
}
#recicla {
  text-decoration: none;
}
#first-div{
  padding-top: 8vh;
}
@media (max-width:1200px){
  .img-cr{
    padding-bottom: 5vh;
  }
  }
</style>
