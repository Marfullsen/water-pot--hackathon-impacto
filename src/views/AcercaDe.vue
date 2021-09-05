<template>
  <main>
    <div class="container.fluid">
      <div class="acerca-de">
          <a href="#integrantes" id="equipo"><h1>Nuestro equipo</h1></a>
      </div>
      <div class="container">
        <div class="row" id="integrantes">
          <div class="integ col-lg-6 col-md-6 col-sm-12">
            <div class="card" style="width: 20rem;">
              <img src="" class="card-img-top" alt="...">
              <div class="card-body">
                <h2>Francisco Marfull</h2>
                <p class="card-text">Fullstack Developer</p>
              </div>
            </div>
          </div>
          <div class="integ col-lg-6 col-md-6 col-sm-12">
            <div class="card" style="width: 20rem;">
              <img src="" class="card-img-top" alt="...">
              <div class="card-body">
                <h2>Fabián Astorga</h2>
                <p class="card-text">Fullstack Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="integ col-lg-6 col-md-6 col-sm-12">
            <div class="card" style="width: 20rem;">
              <img src="" class="card-img-top" alt="...">
              <div class="card-body">
                <h2>Álvaro Morales</h2>
                <p class="card-text">Fullstack Developer</p>
              </div>
            </div>
          </div>
          <div class="integ col-lg-6 col-md-6 col-sm-12">
            <div class="card" style="width: 20rem;">
              <img src="" class="card-img-top" alt="...">
              <div class="card-body">
                <h2>Gustavo Neira</h2>
                <p class="card-text">Fullstack Developer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="integ col-12">
            <div class="card" style="width: 20rem;">
              <img src="" class="card-img-top" alt="...">
              <div class="card-body">
                <h2>Heins Fuenzalida</h2>
                <p class="card-text">Fullstack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
  .container{
    background-color: #def4c6;
  }
  h1{
      color: #dcdcdc;
      font-family: 'Russo One', sans-serif;
      padding-top: 35vh;
      font-size: 11vh;
      font-weight: 700;
      letter-spacing: 4vh;
      text-transform: uppercase;
      text-shadow: 5px 5px 8px #404040;
    }
  h1:hover{
    transition: all 180ms linear;
    color: #dcdcdc;
    text-shadow: 5px 5px 8px #fff;
    font-size: 11.5vh;
  }
  h1:hover:before{
    transition: all 200ms linear;
    color: #dcdcdc;
    text-shadow: 5px 5px 8px #fff;
  }
  h2{
    font-family: 'Fredoka One', cursive;
    text-transform: uppercase;
    font-size: 2.5vh;
  }
  .acerca-de{
    background: url('../assets/water-drop.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    min-height: 900px;
    }

  .integ{
    padding: 5vh 15vh;
  }
  .card{
    background-color: #1c7c54;
    color: #def4c6;
  }
  .row{
    padding: 2vh;
  }
  main{
    background-color: #def4c6;
  }
  p{
      font-size: 2vh;
      font-family: 'Hind Vadodara', sans-serif;
      letter-spacing: 0.2vh;
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
  #equipo{
    text-decoration: none;
  }
  @media (max-width:575.98px){
    h1{
      font-size: 7vh;
    }
  }
  #btn1{
    font-size: 4vh;
    margin-top: 40vh;
    margin-right: 4vh;
    padding: 1vh 1vh;
  }
</style>
