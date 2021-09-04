<template>
    <div class="acerca-de">
        <h1>Nuestro equipo</h1>
    </div>
  <main>
    <div class="container.fluid">
      <div class="row">
        <div class="col-4">
        </div>
        <div class="col-8 imagen-1">
          <p class="txt">Hola</p>
          <img class="img-1 img-fluid" src="../assets/nature-pattern-6.jpg" alt="">

        </div>
      </div>

      <div class="row">
        <div class="col-8 imagen-1">
          <img class="img-1 img-fluid" src="../assets/orange-trees.jpg" alt="">
        </div>
        <div class="col-4">
        </div>
      </div>

      <div class="row">
        <div class="col-4">
        </div>
        <div class="col-8 imagen-1">
          <img class="img-1 img-fluid" src="../assets/orange-trees-2.jpg" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col-8 imagen-1">
          <img class="img-1 img-fluid" src="../assets/leaves-1.jpg" alt="">
        </div>
        <div class="col-4">
        </div>
      </div>
      <div class="row">
        <div class="col-4">
        </div>
        <div class="col-8 imagen-1">
          <img class="img-1 img-fluid" src="../assets/peach-tree.jpg" alt="">

        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <br><br>
            <h2>Beneficios</h2>
            <br>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolore reiciendis adipisci maxime voluptatibus unde. Sed repudiandae reprehenderit tempora quis quam. Hic est velit quibusdam voluptates minus quia unde nulla.
            Quae nemo incidunt, tempora quo esse ex odio quibusdam facere, in ipsam nulla porro tempore aut itaque corrupti corporis placeat officiis! In voluptatem iure debitis distinctio voluptatum cupiditate vitae excepturi!
            Ullam incidunt, dolorem corporis libero laudantium repellendus similique culpa, autem aliquam ut nam sed ipsa quis accusantium nostrum atque nihil iure consequatur tempora expedita quod eum? Aut id eius voluptate?</p>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<style scope>
h1{
  color: white;
  background: transparent;
  margin: 0;
}
img{
  width: 100%;
}

.acerca-de{
  background: url('../assets/water-drop.jpg');
  background-repeat: no-repeat;
  background-size:100%;
  min-height: 100vh;
  }

main{
  background-color: #def4c6;
}
.col-8{
  padding: 0;
  background: white;
}

.imagen-1{
  clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
}

.col-4{
  padding:0;
  background: rgb(18, 181, 18);
  clip-path: circle(30% at 50% 50%);
}
.col-8:nth-of-type(2){
  background-color: #def4c6;
}
.col-12{
  background-color: #def4c6;
}
.row{
  background: #1b512d;
}
.row img{
  max-height: 40vw;
}

.txt{
  color: white;
}

.container.fluid{
  padding: 0;
}
</style>
