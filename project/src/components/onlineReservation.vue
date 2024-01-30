<template>
  <v-app>
    <div class="info-label">ابتدا بخش مورد نظر و سپس نام پزشک مورد نظر خود را انتخاب فرمایید</div>
    <div class="item-group-center" style="width: 50%;margin-left: 25%;">
      <v-select label=" انتخاب پزشک" dense outlined reverse :items="doctors" v-model="selectedDoctor" item-text="name" return-object></v-select>
      <v-select label=" انتخاب بخش" dense outlined reverse :items="clinics" v-model="selectedClinic" item-text="text" item-value="value"></v-select>
    </div>
    
    <v-radio-group v-model="selectedTime" style="margin: 0px;">
      <div v-for="doctorDayTime in doctorTimes">
        <div style="text-align: center; margin-top: 30px;">
          {{ weekday[doctorDayTime[0].time.slice(0,1)] }}
        </div>
        <div class="item-group-center mt-5">
          <v-radio v-for="time in doctorDayTime" :label="time.time.slice(2)" :value="time.time" :disabled="time.value"></v-radio>
        </div>
      </div>
    </v-radio-group>
    <div style="text-align: center;">
      <v-btn @click="confirm" class="confirmButton mt-5">تایید</v-btn>
    </div>

    <div class="item-group-center" style="margin-top: 20px;">
      <v-alert type="success" :value="valid" dense width="280px" class="item-group-center">نوبت با موفقیت رزرو شد</v-alert>
    </div>
  </v-app>
</template>

<script>
import api from '@/api'

export default {
  name: 'onlineReservation',
  data() {
    return {
      expertise: {
        'orthopedics': 'ارتوپدی',
        'digestion': 'گوارش',
        'kidney': 'کلیه',
        'ear_nose_throat': 'گوش و حلق و بینی',
        'neurosurgery': 'جراحی اعصاب',
        'general_surgery': 'جراحی عمومی',
        'psychology': 'روانشناسی',
        'ophthalmology': 'چشم پزشکی',
        'heart': 'قلب',
        'rheumatology': 'روماتولوژی',
        'glands': 'غدد',
        'children': 'اطفال',
        'infectious_diseases': 'بیماری های عفونی',
        'blood': 'خون',
        'skin': 'پوست',
        'dental': 'دندانپزشکی',
        'laboratory': 'آزمایشگاه',
        'photography': 'تصویربرداری'
      },
      doctors: [],
      selectedClinic: null,
      selectedDoctor: null,
      selectedTime: null,
      doctorTimes: [],
      weekday: {
        '0': 'شنبه',
        '1': 'یکشنبه',
        '2': 'دوشنبه',
        '3': 'سه شنبه',
        '4': 'چهارشنبه',
      },
      valid: false
    }
  },
  computed: {
    clinics() {
      let tmp = []
      Object.keys(this.expertise).forEach((expertise) => {
        tmp.push({text: this.expertise[expertise], value: expertise})
      })
      return tmp
    }
  },
  methods: {
    async doctorsSearch() {
      await api.calender.search(this.selectedClinic)
      .then(({data}) => {
        this.doctors = data
      })
      .catch((error) => {
        console.log(error);
      })
    },
    async doctorTimeSearch() {
      await api.calender.getDoctorFreeTimes(this.selectedDoctor.id)
      .then(({data}) => {
        this.doctorTimes = []
        let dayTmp = []
        let dataTmp = []

        data.forEach((time) => {
          if (dayTmp.includes(time.time.split('-')[0])) {
            dataTmp.push(time)
          }
          else {
            if (dataTmp.length != 0)
              this.doctorTimes.push(dataTmp)
            
            dayTmp.push(time.time.split('-')[0])
            dataTmp = [time]
          }
        })
        this.doctorTimes.push(dataTmp)
      })
      .catch((error) => {
        console.log(error);
      })
    },
    async confirm() {
      let userId = JSON.parse(localStorage.getItem("userId"));

      await api.calender.setAppointment({id: this.selectedDoctor.id, time: this.selectedTime, patientId: userId})
      .then(({data}) => {
        this.doctorTimes = []
        let dayTmp = []
        let dataTmp = []

        data.forEach((time) => {
          if (dayTmp.includes(time.time.split('-')[0])) {
            dataTmp.push(time)
          }
          else {
            if (dataTmp.length != 0)
              this.doctorTimes.push(dataTmp)
            
            dayTmp.push(time.time.split('-')[0])
            dataTmp = [time]
          }
        })
        this.doctorTimes.push(dataTmp)
      })
      .catch((error) => {
        console.log(error);
      })

      this.valid = true
      setTimeout(() => {
        this.$emit('main')
      }, 2000);
    }
  },
  watch: {
    selectedClinic() {
      this.doctorsSearch()
    },
    selectedDoctor() {
      this.doctorTimeSearch()
    }
  }
}
</script>

<style>
.info-label{
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: white !important;
}
.item-group-center{
  display: flex;
  justify-content: center;
}
.v-select{
  width: 200px;
  margin-left: 20px !important;
  margin-right: 20px !important;
}

.confirmButton{
  width: 100px;
  background-color: green !important;
  color: white !important;
}
</style>