<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link>
    <router-link to="/comienza_reciclar">Comienza a Reciclar</router-link>
    <router-link to="/aporta_ya">Aporta ya</router-link>
    <router-link to="/acerca_de">Acerca de</router-link>
  </div>
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

#nav {
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
}
</style>
