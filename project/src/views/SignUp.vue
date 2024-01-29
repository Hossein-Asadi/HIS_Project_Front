<template>
  <v-container fluid style="background-color: #6a9aed; height: 100%; width: 100%; position: fixed;">
    <particles/>
    <img src="@/assets/hospital1.jpg" style="width: 650px; height: 550px; position: absolute; left: 110px; top: 100px; border-radius: 25px 0px 0px 25px;"/>
    <v-icon size="40" style="position: absolute; left: 115px; top: 105px;" @click="mainPage">mdi-exit-to-app</v-icon>
    <div style="background-color: #bbb; width: 650px; height: 550px; position: absolute; right: 110px; top: 100px; border-radius: 0px 25px 25px 0;">
      <div class="item-group-center" style="margin-top: 30px;">
        <v-text-field v-model="formData.password" outlined class="shrink" style="width: 200px; margin-left: 40px;" :background-color="textFieldBackgroundColor" dense color="#000"></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px; margin-right: 50px;">:رمز عبور</p>
        <v-text-field v-model="formData.username" outlined class="shrink" style="width: 200px;" :background-color="textFieldBackgroundColor" dense color="#000"></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px;">:نام کاربری</p>
      </div>
      
      <div class="item-group-center" style="margin-top: 20px;">
        <v-text-field v-model="formData.lastName" outlined class="shrink" style="width: 200px;" :background-color="textFieldBackgroundColor" dense color="#000"></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px; margin-right: 20px;">:نام خانوادگی</p>
        <v-text-field v-model="formData.firstName" outlined class="shrink" style="width: 200px;" :background-color="textFieldBackgroundColor" dense color="#000"></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px;">:نام</p>
      </div>

      <div class="item-group-center" style="margin-top: 20px;">
        <v-text-field v-model="formData.phoneNumber" outlined class="shrink" style="width: 200px; margin-left: 20px;" :background-color="textFieldBackgroundColor" dense color="#000" type="number"></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px; margin-right: 20px;">:شماره تماس</p>
        <v-text-field v-model="formData.nationalNumber" outlined class="shrink" style="width: 200px;" :background-color="textFieldBackgroundColor" dense color="#000" type="number"></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px;">:کدملی</p>
      </div>
      
      <div class="item-group-center" style="margin-top: 20px;">
        <v-text-field v-model="formData.address" outlined class="shrink" style="width: 510px; margin-left: 15px;" :background-color="textFieldBackgroundColor" dense color="#000"></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px;">:آدرس</p>
      </div>

      <div class="item-group-center" style="margin-top: 20px;">
        <v-radio-group v-model="formData.sex" style="margin: 0px;">
          <div class="item-group-center">
            <v-radio label="مرد" value="male" style="margin-right: 20px;margin-top: 7px;"></v-radio>
            <v-radio label="زن" value="female" style="margin-right: 10px;"></v-radio>
          </div>
        </v-radio-group>
        <p style="margin-top: 7px; margin-left: 5px; margin-right: 20px;">:جنسیت</p>
        <datePicker v-model="formData.birthdate" placeholder="لطفا یک تاریخ انتخاب کنید" :autoSubmit="true" :popover="true" :clearable="true" color="#607D8B" ></datePicker>
        <p style="margin-top: 7px; margin-left: 5px;">:تاریخ تولد</p>
      </div>

      <div class="item-group-center" style="padding-top: 10px;">
        <v-btn @click="signup" width="100px" class="loginBtn">ثبت نام</v-btn>
      </div>

      <div class="item-group-center" style="margin-top: 10px;">
        <v-alert :type="alertType" :value="!valid" dense width="250px" class="item-group-center">{{ errorMessage }}</v-alert>
      </div>
    </div>
  </v-container>
</template>

<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
import api from '@/api'

export default {
  name: "login",
  components: {
    particles: () => import("@/components/particles"),
    datePicker: VuePersianDatetimePicker,
  },
  data() {
    return {
      username: null,
      password: null,
      textFieldBackgroundColor: '#acaeab',
      formData: {
        firstName: null,
        lastName: null,
        nationalNumber: null,
        sex: null,
        phoneNumber: null,
        birthdate: null,
        address: null,
        username: null,
        password: null
      },
      valid: true,
      errorMessage: '',
      alertType: 'error'
    }
  },
  methods: {
    signup() {
      let tmp = 1
      Object.keys(this.formData).forEach((item) => {
        if ([null,''].includes(this.formData[item])){
          this.valid = false
          this.alertType = 'error'
          tmp = 0
        }
      })
      
      if (tmp == 1) {
        api.auth.djangoSignUp(this.formData)
        .then(({data}) => {
          if (data == '0') {
            this.errorMessage = '.ثبت نام با موفقیت انجام شد'
            this.alertType = 'success'
            this.valid = false
          }
          else {
            this.errorMessage = data
            this.alertType = 'error'
            this.valid = false
          }
        })
        .catch((error) => {
          console.log(error);
        })
      }
      else
        this.errorMessage = '.تمامی فیلد ها باید پر شوند'
    },
    mainPage() {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
.item-group-center{
  display: flex;
  justify-content: center;
  margin-top: -5px;
}
.loginBtn {
  float: right;
  margin-top: 5px;
  background-color: rgba(40, 40, 40, 0.5) !important;
  color: #fff;
}

</style>