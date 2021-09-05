<template>
  <main>
    <div class="containerfluid">
      <div class="row">
        <div class="drought-img col-9"></div>
      </div>
      <div class="row">
        <div class="recycle-img col-12"></div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AportaYa'
}
</script>
<style scoped>
  .drought-img{
    background: url('../assets/climate-7.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 92vh;
  }
  .recycle-img{
    background: url('../assets/recycle.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 92vh;
  }
</style>
