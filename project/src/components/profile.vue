
<template>
  <div class="profile-layout">
    <h4 style="padding-right: 3px;">وقت بخیر، {{ name }} </h4>
    <div class="info">
      <div class="box">
        <div class="icon">
          <v-icon>mdi-account</v-icon>
        </div>
        <div>نام و نام خانوادگی: {{ name }}</div>
      </div>

      <div class="box">
        <div class="icon">
          <v-icon>mdi-account</v-icon>
        </div>
        <div>نام کاربری: {{ username }}</div>
      </div>

      <div class="box">
        <div class="icon">
          <v-icon>mdi-lock</v-icon>
        </div>
        <div>رمز عبور: {{ password }}</div>
      </div>

      <div class="box">
        <div class="icon">
          <v-icon>mdi-id-card</v-icon>
        </div>
        <div>کد ملی: {{ nationalNumber }}</div>
      </div>

      <div class="box">
        <div class="icon">
          <v-icon>mdi-cake</v-icon>
        </div>
        <div>تاریخ تولد: {{ birthdate }}</div>
      </div>

      <div class="box">
        <div class="icon">
          <v-icon>mdi-human-male-female</v-icon>
        </div>
        <div>جنسیت: {{ faGender }}</div>
      </div>
    </div>
    <div class="settings">
      <div class="box" @click="openModal">
        <div class="icon">
          <v-icon>mdi-rename</v-icon>
        </div>
        <div>ویرایش</div>
      </div>

      <div class="box" @click="exit">
        <div class="icon">
          <v-icon>mdi-logout</v-icon>
        </div>
        <button>خروج</button>
      </div>
      <modal v-if="modalValid" @main="modalValid = false" @closeModal="closeModal" @changeUserInfo="changeUserInfo" :userInfo=userInfo></modal>
    </div>
  </div>
</template>
  

<script>
import modal from '@/components/modal.vue'

export default {
  name: "patientInfo",
  components: {modal},
  props: ['name','gender','age','nationalNumber','username','password','birthdate','userInfo'],
  data() {
    return{
      modalValid: false,
    }
  },
  methods: {
    openModal() {
      this.modalValid=true;
    },
    closeModal() {
      this.modalValid = false;
    },
    changeUserInfo() {
      this.modalValid = false;
      this.$emit('changeUserInfo');
    },
    exit() {
      localStorage.setItem('token', JSON.stringify('invalid'))
      this.$router.push({ path: '/' })
    }
  },
  computed: {
    faGender() {
      if (this.gender == 'male')
        return 'مرد'
      return 'زن'
    }
  }
}
</script>

<style scoped>
.profile-layout{
    background-color: white;
    color: black;
    width: 300px;
    height: 290px;
    border: 1px solid gray;
    border-radius: 5px;
    box-shadow: inset 5px gray;
    padding: 5px 2px 10px 2px;
}

.info{
    margin-top: 5px;
    margin-bottom: 5px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
}

.settings{
    margin-bottom: 10px;
}
.icon{
    padding-left: 10px;
}
.box{
    display: flex;
    padding-right: 5px;
    padding-top: 5px;
}

.box:hover{
    background-color: #a6a6a6;
    border-radius: 5px;
}

.profile-layout::after{
  content: "";
  position: absolute;
  top: -7.5%;
  left: 90%;
  margin-left: -10px;
  border-width: 10px;
  border-style: solid;
  border-color: gray transparent transparent transparent;
  transform: rotate(180deg);
}
</style>