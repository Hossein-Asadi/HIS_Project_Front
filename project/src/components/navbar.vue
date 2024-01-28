<template>
  <div class="navbar-container">
    <div class="navbar-item">
      <a style="height: 20px; width: 80px; margin-left: 40px;" @click="patientsList">لیست بیماران </a>
      <a style="height: 20px; width: 80px;" @click="doctorList">تقویم پزشکان </a>
      <a style="height: 20px; width: 80px; margin-right: 40px;" @click="onlineReservation">نوبت دهی آنلاین</a>
    </div>
    <div class="info-item">
      <a class="user-info" @click="userInfoToggle">
          مشخصات
      </a>
      <div class="user-info-box" :style="{ display: userInfoOpen ? 'block' : 'none' }" >
          <profile name="حسین اسدی" national-number="012345678" gender="مرد" username="hossein" password="123456"/>
      </div>
    </div>
  </div>
</template>

<script>
import profile from '@/components/profile.vue'
export default{
  name: 'navbar',
  components: {profile},
  data() {
    return{
      userInfoOpen: false,
    }
  },
  methods: {
    doctorList() {
      this.$emit('doctorList')
    },
    onlineReservation() {
      this.$emit('onlineReservation')
    },patientsList() {
      this.$emit('patientsList')
    },
    userInfoToggle() {
      if(this.userInfoOpen){
        this.userInfoOpen = false;
      }else{
        this.userInfoOpen = true;
      }
      console.log(this.userInfoOpen);
    },
  }
}
</script>

<style>
.navbar-container {
  /* background-color: rgb(238, 244, 248); */
  background-color: #99bbf5;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
  border-radius: 5px;
  color: white;
}
.navbar-item{
  width: 50%;
  padding-left: 10px;
  padding-top: 15px;
  direction: ltr;
  cursor: pointer;
}
.info-item{
  width: 50%;
  padding-left: 10px;
  padding-top: 15px;
  direction: rtl;
  cursor: pointer;
}
.user-info{
  position: relative;
  height: 20px;
  width: 80px;
  margin-right: 40px;
}
.user-info-box{
  position: absolute;
  top: 50px;
  right: 40px;
}
</style>