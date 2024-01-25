<template>
  <div class="navbar-container">
    <div class="navbar-item">
        <a style="height: 20px; width: 80px;" @click="doctorList">تقویم پزشکان </a>
        <a style="height: 20px; width: 80px; margin-right: 40px;" @click="onlineReservation">نوبت دهی آنلاین</a>
    </div>
  </div>
</template>

<script>
export default{
  name: 'navbar',
  data() {
    return{

    }
  },
  methods: {
    doctorList() {
      this.$emit('doctorList')
    },
    onlineReservation() {
      this.$emit('onlineReservation')
    }
  }
}
</script>

<style>
.navbar-container {
  background-color: rgb(238, 244, 248);
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
}
.navbar-item{
  width: 50%;
  padding-left: 10px;
  padding-top: 15px;
  direction: ltr;
  cursor: pointer;
}
</style>