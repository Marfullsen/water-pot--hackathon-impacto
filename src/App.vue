<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"><img class="logo" src="./assets/logo-water-pot.png" alt="" width="30"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" aria-current="page">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/comienza_reciclar" class="nav-link" >Comienza a reciclar</router-link>
            </li><div class="space">&nbsp;&nbsp;&nbsp;</div>
            <router-link to="/" class="logo-wp navbar-brand" >
            <img class="logo" src="./assets/logo-water-pot.png" alt="" width="30"></router-link>
            <li class="nav-item">
              <router-link to="/aportar_ya" class="nav-link">Aporta ya!</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/acerca_de" class="nav-link" >Acerca de</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <!-- <div id="nav">
    <router-link to="/">Inicio</router-link>&nbsp;
    <router-link to="/comienza_reciclar">Comienza a Reciclar</router-link>&nbsp;
    <router-link to="/aporta_ya">Aporta ya</router-link>&nbsp;
    <router-link to="/acerca_de">Acerca de</router-link>
  </div> -->
  <router-view />
    <!-- Site footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="row">

          <div class="col-12">
            <h6>Categorías</h6>
            <ul class="footer-links">
              <li><a class="text-secondary" id href="/">Inicio</a></li>
              <li><a class="text-secondary" href="/comienza_reciclar">Comienza a reciclar</a></li>
              <li><a class="text-secondary" href="/aportar_ya">Aporta ya!</a></li>
              <li><a class="text-secondary" href="/acerca_de">Acerca de</a></li>
            </ul>
          </div>
        </div>
        <hr>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><img src="./assets/fb-logo.png" alt=""></a></li>
              <li><a class="twitter" href="#"><img src="./assets/ig-logo-1.png" alt=""></a></li>
              <li><a class="dribbble" href="#"><img src="./assets/twitter-logo-1.png" alt=""></a></li>
            </ul>
          </div>
        </div>
      </div>
</footer>
</template>
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
  color:#fff;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  padding-bottom: 1vh;
  letter-spacing:2px
}
.site-footer ul li a:hover{
  color:#fff;
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
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#33353d
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
.social-icons a{
  background-color:#eceeef;
  color:#818a91;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
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

.footer-links a:hover
{
  text-decoration: none;
}
/* #nav {
  padding: 30px;
  background: #333;
}

#nav a {
  font-weight: bold;
  color: #9a9da0;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #fff;
} */
</style>
