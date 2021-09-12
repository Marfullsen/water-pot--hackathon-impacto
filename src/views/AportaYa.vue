<template>
  <main>
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center" id="drought-img">
        <router-link to="#" id="dona"><h2 v-text="idioma[idiomaSeleccionado].titulo"></h2></router-link>

        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center" id="recycle-img">
          <router-link to="/comienza_reciclar" id="recicla"><h2 v-text="idioma[idiomaSeleccionado].titulo2"></h2></router-link>
        </div>
      </div>
  </main>
</template>

<script>
export default {
  name: 'AportaYa',
  data () {
    return {
      idiomaSeleccionado: this.$idiomaGlobal,
      idioma: {
        spanish: {
          titulo: '¿Cómo puedo aportar?',
          titulo2: 'Recicla ya!'
        },
        english: {
          titulo: 'How can I help?',
          titulo2: 'Recycle now!'
        }
      }
    }
  },
  methods: {
    onClickChild (value) {
      this.idiomaSeleccionado = value
    }
  }
}
</script>

<style scoped>
  main{
    background-color: #1b512d;
  }
  #drought-img{
    background: url('../assets/donation.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 900px;
  }
  #recycle-img{
    background: url('../assets/recycle.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 900px;
  }
  h2{
    color: #dcdcdc;
    font-family: 'Russo One', sans-serif;
    font-size: 11vh;
    font-weight: 700;
    letter-spacing: 4vh;
    text-transform: uppercase;
    text-shadow: 5px 5px 8px #404040;
    display: inline-flex;
    }
  #recicla, #dona{
    text-decoration: none;
  }
  h2:hover{
    transition: all 180ms linear;
    color: #dcdcdc;
    text-shadow: 5px 5px 8px #fff;
    font-size: 11.5vh;
  }
  h2:hover:before{
    transition: all 200ms linear;
    color: #dcdcdc;
    text-shadow: 5px 5px 8px #fff;
  }
  /* #btn1{
    font-size: 3vh;
    margin-top: 30vh;
    margin-right: 1vh;
    padding: 2vh 1vh;
  }
  #btn2{
    font-size: 6.5vh;
    padding: 1.5vh 2.5vh;
    margin-top: 55vh;
    margin-left: 120vh;
  }
  @media (max-width:768px){
  #btn1{
    font-size: 4vh;
    margin-top: 40vh;
    margin-right: 4vh;
    padding: 1vh 1vh;
  }
  }
  @media (max-width:992px){
  #btn1{
    font-size: 8vh;
    margin-top: 30vh;
    margin-right: 4vh;
    padding: 2vh 1vh;
  }
  }
  @media (max-width:1200px){
  #btn1{
    font-size: 3vh;
    margin-top: 30vh;
    margin-right: 4vh;
    padding: 3vh 1vh;
  }
  }

  @media (max-width:768px){
  #btn2{
    margin-left: 40vh;
  }
  }
  @media (max-width:992px){
  #btn2{
    font-size: 1vh;
    margin-top: 60vh;
    margin-right: -10vh
  }
  }
  @media (max-width:1200px){
  #btn2{
    font-size: 3vh;
    margin-left: 70vh;
    padding: 2vh 4vh;
  }
  } */

</style>
