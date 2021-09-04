<template>
    <div>
        <h3>asd</h3>
        <h2>asdasdasdsad</h2>
    </div>

    <section class="contenedor recicla">
            <div class="contenedor Servicios">
                <h2 class="titulo">Recicla ¡YA!</h2>
                <div class="servicio contenedor">
                    <div class="contenedor-reciclaCard">
                        <h3>Es tu deber</h3>
                        <img class="imagenRecycla" src="../assets/recycle.jpg" alt="asd">
                        <p class="reciclaP">Gracias a ti se podrá tener un futuro mejor</p>
                    </div>
                </div>
            </div>
    </section>

<div class="wave" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none"
 style="height: 100%; width: 100%;"><path d="M0.00,49.98 C149.99,150.00 271.49,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
 style="stroke: none; fill: #1c7c54 ;"></path></svg></div>

 <section class="contenedorMapa">
     <div class="mapaDiv">

     </div>
     <iframe class="mapa" src="https://www.google.com/maps/d/embed?mid=1Y_rRDHYD9VBEVNz2LJIldKU-j4U" width="640" height="480"></iframe>
     <img src="../assets/Tree-T-PEE2-2.jpg" alt="">
 </section>
</template>

<style scope>

    .contenedor{
            padding: 15px;
            height: 500px;
            width: 100%;
            max-height: 500px;
            overflow: hidden;
            background-color: #1c7c54 ;
        }
    .wave{
        position: absolute;
        width: 100%;
        }
    .titulo{
        text-decoration:underline;
        font-family: 'Fredoka One', cursive;
        }

    .contenedor-reciclaCard{
            width:100%;
            height: 80%;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
        }

    .imagenRecycla{
        width: 15%;
        max-width: 50%;
        height: 40%;
        max-height: 100%;
        border-radius: 25%;
        }

    .mapa{
        border-radius: 60%;
        }

</style>
