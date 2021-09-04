<template>
  <main>
    <div class="container.fluid">
      <div class="acerca-de">
          <h1>Nuestro equipo</h1>
      </div>
    </div>
    <div class="container">
    <div class="container">
      <div class="row">
        <div class="name-wrap col-lg-8 col-md-6 col-sm-6">
          <h2>Francisco Marfull</h2>
          <p> Un Capo</p>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <img class="img-index img-fluid" src="../assets/nature-pattern-6.jpg" alt="">
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-6">
          <img class="img-index img-fluid" src="../assets/nature-pattern-6.jpg" alt="">
        </div>
        <div class="name-wrap col-lg-8 col-md-6 col-sm-6">
          <h2>Fabian Astorga</h2>
          <p>El Negro</p>
        </div>
      </div>

      <div class="row">
        <div class="name-wrap col-lg-8 col-md-6 col-sm-6">
          <h2>Alvaro Morales</h2>
          <p>El Bilingue</p>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <div>
            <img class="img-index img-fluid" src="../assets/nature-pattern-6.jpg" alt="">
          </div>
        </div>
      </div>
        <!-- <div style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-0.28,-0.50 C163.93,108.05 513.25,173.18 533.57,140.62 L498.02,225.48 L0.00,150.00 Z" style="stroke: none; fill: #1c7c54;"></path></svg></div> -->
     <div class="row">
        <div class="img-wrap col-lg-4 col-md-6 col-sm-6">
          <img class="img-index img-fluid" src="../assets/nature-pattern-6.jpg" alt="">
        </div>
        <div class="name-wrap col-lg-8 col-md-6 col-sm-6">
          <h2>Heins Fuenzalida</h2>
          <p>El de los diseños</p>
        </div>
      </div>
      <div class="row">
        <div class="name-wrap col-lg-8 col-md-6 col-sm-6">
          <h2>Gustavo Neira</h2>
          <p>El mamadisimo</p>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
          <img class="img-index img-fluid" src="../assets/nature-pattern-6.jpg" alt="">
        </div>
      </div>
    </div></div>
  </main>
</template>

<style scoped>

  .container{
    background-color: #def4c6;
  }
  h1{
      color: #F0F0F0;
      font-family: 'Russo One', sans-serif;
      padding-top: 35vh;
      font-size: 11vh;
      font-weight: 700;
      letter-spacing: 4vh;
      text-transform: uppercase;
      text-shadow: 5px 5px 8px #A9A9A9;
    }

  h2{
    padding-top: 8vh;
  }

  .acerca-de{
    background: url('../assets/water-drop.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 92vh;
    }
  .row{
    padding: 2vh;
  }

  div.row{
    background-color: def4c6;
  }

  main{
    background-color: #def4c6;
  }
  p{
      font-size: 3vh;
      padding: 5vh 7vh;
      font-family: 'Hind Vadodara', sans-serif;
      letter-spacing: 0.4vh;
    }
  .name-wrap{
    background-color: #1b512d;
    color: #def4c6;
    border-radius: 5%;
  }
  .img-index{
    padding:0;
  }
  .t-wp{
    height: 428px;
    width: 642px;
  }

  .img-index{
    border-radius: 50%;
  }
</style>
