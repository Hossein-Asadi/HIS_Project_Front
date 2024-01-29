<template>
  <div style="display: flex; justify-content: center; align-items: center;">
    <v-data-table class="table-layout" :headers="headers" :items="items" disable-sort disable-pagination hide-default-footer></v-data-table>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'doctorList',
  data() {
    return {
      experties: {
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
      headers: [
        { text: 'چهارشنبه', value: '4' },
        { text: 'سه شنبه', value: '3' },
        { text: 'دوشنبه', value: '2' },
        { text: 'یکشنبه', value: '1' },
        { text: 'شنبه', value: '0' },
        { text: 'متخصص', value: 'expertie' },
      ],
      items: [],
    }
  },
  async mounted() {
    await api.calender.searchAll()
    .then(({data}) => {
      Object.keys(data).forEach((expertie) => {
        this.items.push({'expertie': this.experties[expertie], '0': data[expertie]['0'], '1': data[expertie]['1'], '2': data[expertie]['2'], '3': data[expertie]['3'], '4': data[expertie]['4']})
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
</script>

<style>
.table-layout{
  width: 95%;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: white !important;
}  

.v-data-table > .v-data-table__wrapper > table > tbody > tr:nth-child(even){
  background-color: #d9d9d9 !important;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover{
  background-color: #a6a6a6 !important;
}

</style>