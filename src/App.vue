<template>
  <div id="nav">
    <router-link to="/">Inicio</router-link> |
    <router-link to="/comienza_reciclar">Comienza a Reciclar</router-link> |
    <router-link to="/aporta_ya">Aporta ya</router-link> |
    <router-link to="/acerca_de">Acerca de</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #1c7c54;
}

#nav a {
  font-weight: bold;
  color: #b1cf5f;
}

#nav a.router-link-exact-active {
  color: white;
}
</style>
