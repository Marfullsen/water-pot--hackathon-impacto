<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
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
</template>
<style>
body {
  margin: 0;
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
