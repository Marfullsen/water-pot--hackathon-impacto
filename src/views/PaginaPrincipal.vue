<template>
  <main>
    <div class="container.fluid">
      <div class="row">
        <div class="col-4">
          <img class="img-index img-fluid" src="../assets/Tree-T-PEE2.jpg" alt="">
        </div>
        <div class="col-8">
          <h2>¿Qué Es?</h2>
          <p>El Water Pot es un contenedor de agua y fertilizantes, construido a base de plástico reciclado. El dispositivo se ubica en la base del árbol en cuestión.</p>
        </div>
      </div>

      <div class="row">
        <div class="col-8">
          <h2>¿Para qué?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tenetur unde reprehenderit minus nam fugiat saepe quia, quis eum quo provident facilis ipsam, molestias nihil similique delectus corrupti cumque nemo.
          Illum amet, repellat accusantium voluptates optio ut totam natus ullam pariatur quia delectus hic ea expedita cupiditate iste. Maiores fugiat impedit accusantium minima aut eaque alias fuga dolore odit harum!</p>
        </div>
        <div class="col-4">
          <img class="img-index img-fluid" src="../assets/irrigation.jpg" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <img class="img-index img-fluid" src="../assets/climate-1.jpg" alt="">
        </div>
        <div class="col-8">
          <h2>¿Por qué?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatum, quae, minus repudiandae ut sit, itaque magnam qui laboriosam hic minima quibusdam! Aperiam, sit quasi! Odit sunt quae totam a.
          Autem necessitatibus aut accusantium, distinctio adipisci non dolorem unde nesciunt expedita fugit corrupti rem fuga nemo perferendis aliquid possimus eligendi, in saepe facilis corporis placeat illo quibusdam odit deleniti. Impedit?</p>
        </div>
      </div>

      <div class="row">
        <div class="col-8">
          <h2>Tipo de Water Pot</h2>
          <br>
          <p>- Blanco: Water Pot orientado a árboles de climas fríos. <br><br>
            - Negro: Water Pot orientado a árboles de climas cálidos.
          </p>
        </div>
        <div class="col-4">
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/Black-Tree-T-PEE.jpg" class="t-wp d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/White-Tree-T-PEE.jpg" class="t-wp d-block w-100" alt="...">
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
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <br><br>
            <h2>Beneficios</h2>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore reiciendis adipisci maxime voluptatibus unde. Sed repudiandae reprehenderit tempora quis quam. Hic est velit quibusdam voluptates minus quia unde nulla.
            Quae nemo incidunt, tempora quo esse ex odio quibusdam facere, in ipsam nulla porro tempore aut itaque corrupti corporis placeat officiis! In voluptatem iure debitis distinctio voluptatum cupiditate vitae excepturi!</p>
          </div>
        </div>
      </div>

    </div>
  </main>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'PaginaPrincipal'
}
</script>

<style scoped>
  main{
    background-color: #def4c6;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  h2{
    padding-top: 4vh;
    font-size: 4vh;
  }
  p{
    padding-top: 4vh;
    font-size: 2vh;
  }
  .col-8{
    background-color: #1c7c54 ;
    color: #def4c6;
    padding: 3vh 3vh;
  }
  .col-4{
    padding:0;
  }
  .col-8:nth-of-type(2), .col-12{
    background-color: #def4c6;
    color: #1c7c54;
  }
  .col-12{
    padding-bottom: 5vh;
  }
  .t-wp{
    height: 428px;
    width: 642px;
  }
</style>
