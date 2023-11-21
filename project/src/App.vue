<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default{
  name: "app",
  data() {
    return{
      
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: Shabnam;
  src: url("assets/fonts/Shabnam-FD.eot");
  src: url("assets/fonts/Shabnam-FD.eot?#iefix") format("embedded-opentype"),
    url("assets/fonts/Shabnam-FD.woff") format("woff"),
    url("assets/fonts/Shabnam-FD.ttf") format("truetype");
  font-weight: normal;
}
* {
  font-family: "Shabnam";
}
.my-custom-class-name {
  font-family: "Shabnam" !important;
}
.my-custom-class-name * {
  font-family: "Shabnam" !important;
}
</style>
