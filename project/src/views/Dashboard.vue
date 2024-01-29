<template>
  <div class="main-container">
    <navbar @doctorList="doctorList" @onlineReservation="onlineReservation" @patientsList="patientsList" @pharmacy="pharmacy"></navbar>
    <doctorList v-if="doctorListValid"></doctorList>
    <onlineReservation v-if="onlineReservationValid" @main="onlineReservationValid = false"></onlineReservation>
    <patientsList v-if="patientsListValid" @main="patientsListValid = false"></patientsList>
    <pharmacy v-if="pharmacyValid" @main="pharmacyValid = false"></pharmacy>
  </div>
</template>

<script>
import api from '@/api'
import navbar from '@/components/navbar.vue'
import doctorList from '@/components/doctorList.vue'
import onlineReservation from '@/components/onlineReservation.vue'
import patientsList from '@/components/patientsList.vue'
import pharmacy from '@/components/pharmacy.vue'


export default{
  name: 'dashboard',
  components: {navbar, doctorList, onlineReservation,patientsList,pharmacy},
  data() {
    return{
      doctorListValid: false,
      onlineReservationValid: false,
      patientsListValid: false,
      pharmacyValid: false,
    }
  },
  async mounted() {
    let token = JSON.parse(localStorage.getItem('token'))

    await api.auth.tokenVerify({token: token})
    .then((res) => {
      // console.log(res);
    })
    .catch((error) => {
      this.$router.push({ path: '/login' })
    })
  },
  methods: {
    doctorList() {
      this.doctorListValid = true
      this.onlineReservationValid = false
      this.patientsListValid = false
      this.pharmacyValid = false
    },
    onlineReservation() {
      this.onlineReservationValid = true
      this.doctorListValid = false
      this.patientsListValid = false
      this.pharmacyValid = false
    },
    patientsList() {
      this.onlineReservationValid = false
      this.doctorListValid = false
      this.patientsListValid = true
      this.pharmacyValid = false
    },
    pharmacy() {
      console.log(1)
      this.onlineReservationValid = false
      this.doctorListValid = false
      this.patientsListValid = false
      this.pharmacyValid = true
    },
  }
}
</script>

<style>
.main-container {
  background-color: #E0E0E0;
  height: 100%;
  width: 100%;
}
</style>