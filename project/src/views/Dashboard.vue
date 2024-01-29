<template>
  <div class="main-container">
    <navbar @doctorList="doctorList" @onlineReservation="onlineReservation" @patientsList="patientsList"></navbar>
    <doctorList v-if="doctorListValid"></doctorList>
    <onlineReservation v-if="onlineReservationValid" @main="onlineReservationValid = false"></onlineReservation>
    <patientsList v-if="patientsListValid"></patientsList>
  </div>
</template>

<script>
import api from '@/api'
import navbar from '@/components/navbar.vue'
import doctorList from '@/components/doctorList.vue'
import onlineReservation from '@/components/onlineReservation.vue'
import patientsList from '@/components/patientsList.vue'


export default {
  name: 'dashboard',
  components: {navbar, doctorList, onlineReservation,patientsList},
  data() {
    return {
      doctorListValid: false,
      onlineReservationValid: false,
      patientsListValid: false,
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
    },
    onlineReservation() {
      this.onlineReservationValid = true
      this.doctorListValid = false
      this.patientsListValid = false
    },
    patientsList() {
      this.onlineReservationValid = false
      this.doctorListValid = false
      this.patientsListValid = true
    },
  }
}
</script>

<style>
.main-container {
  background-color: rgb((242, 230, 230)35, 223, 223);
  height: 100%;
  width: 100%;
}
</style>