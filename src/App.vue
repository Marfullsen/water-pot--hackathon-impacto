<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><img class="logo" src="./assets/logo-water-pot.png" alt="" width="30"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">{{idioma[idiomaSeleccionado].inicio}}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/comienza_reciclar" class="nav-link" >{{idioma[idiomaSeleccionado].Comienza_a_reciclar}}</router-link>
            </li><div class="space">&nbsp;&nbsp;&nbsp;</div>
            <router-link to="/" class="logo-wp navbar-brand" >
            <img class="logo" src="./assets/logo-water-pot.png" alt="" width="30"></router-link>
            <li class="nav-item">
              <router-link to="/aportar_ya" class="nav-link">{{idioma[idiomaSeleccionado].Aporta_ya}}</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/acerca_de" class="nav-link" >{{idioma[idiomaSeleccionado].Acerca_de}}</router-link>
            </li>
            <li style="display: flex; align-items: center;">
              <CambiarIdioma @clicked="onClickChild"></CambiarIdioma>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <router-view />
    <!-- Site footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="row">

        <div class="col-12" id="categ">
          <h6>{{idioma[idiomaSeleccionado].categ}}</h6>
          <ul class="footer-links">
            <li><a class="ft-item" href="/">{{idioma[idiomaSeleccionado].inicio}}</a></li>
            <li><a class="ft-item" href="/comienza_reciclar">{{idioma[idiomaSeleccionado].Comienza_a_reciclar}}</a></li>
            <li><a class="ft-item" href="/aportar_ya">{{idioma[idiomaSeleccionado].Aporta_ya}}</a></li>
            <li><a class="ft-item" href="/acerca_de">{{idioma[idiomaSeleccionado].Acerca_de}}</a></li>
          </ul>
        </div>
      </div>
      <hr>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <ul class="social-icons">
            <li><a class="logo-rrss" href="#"><img src="./assets/fb-logo.png" alt=""></a></li>
            <li><a class="logo-rrss" href="#"><img src="./assets/ig-logo-1.png" alt=""></a></li>
            <li><a class="logo-rrss" href="#"><img src="./assets/twitter-logo-1.png" alt=""></a></li>
          </ul>
        </div>
      </div>
    </div>
</footer>
</template>

<script>
import CambiarIdioma from '@/components/CambiarIdioma.vue'

export default {
  components: {
    CambiarIdioma
  },
  data () {
    return {
      idiomaSeleccionado: this.$idiomaGlobal,
      idioma: {
        spanish: {
          inicio: 'Inicio',
          Comienza_a_reciclar: 'Comienza a reciclar',
          Aporta_ya: '¡Aporta ya!',
          Acerca_de: '¿Quienes somos?',
          categ: 'Categorías'
        },
        english: {
          inicio: 'Home',
          Comienza_a_reciclar: 'Start Recycling',
          Aporta_ya: 'Contribute',
          Acerca_de: 'About Us',
          categ: 'Categories'
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

<style>
body {
  margin: 0;
}
.site-footer
{
  background-color:#333333;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color:#737373;
}
.site-footer hr
{
  border-top-color:#bbb;
  opacity:0.5
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color: #fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  padding-bottom: 1vh;
  letter-spacing:2px
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  padding-top: 1vh;
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links.inline li
{
  display:inline-block
}
.site-footer .social-icons
{
  text-align:center;
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.logo-rrss{
  padding-right: 2vh;
}
.logo-rrss img{
  width: 6vh;
}
.logo-rrss:last-child{
  padding-right: none;
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-item a.nav-link-exact-active{
  color:  #fff;
}
#navbarNav{
  justify-content: center;
}
.logo-wp {
  width: 30px;
}
@media (max-width: 768px){
  .logo-wp, .space{
    display: none;
  }
}
.ft-item{
  text-decoration: none;
}
.ft-item:hover{
  text-decoration: none;
  color: #dcdcdc;
}

</style>
