<template>
    <transition name="modal-fade">
      <div class="modal-overlay" @click="closeModal">
        <div class="modal" @click.stop>
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
                <v-btn width="100px" class="submitBtn" @click="closeModal">تایید</v-btn>
            </div>
            <div class="item-group-center" style="padding-top: 10px;">
                <v-btn width="100px" class="cancelBtn" @click="closeModal">بازگشت</v-btn>
            </div>

            <div class="item-group-center" style="margin-top: 10px;">
                <v-alert :type="alertType" :value="!valid" dense width="250px" class="item-group-center">{{ errorMessage }}</v-alert>
            </div>
        </div>
    </div>
    </transition>
</template>
  
<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
  export default {
    components:{
        datePicker: VuePersianDatetimePicker,
    },
    data() {
    return{
      username: null,
      password: null,
      textFieldBackgroundColor: '#d9d9d9',
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
        closeModal(){
            this.$emit('closeModal');
        }
    }
  }
  </script>
  
  <style scoped>
  .modal-overlay {
    direction: ltr;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
  }
  
  .modal {
    text-align: center;
    background-color: white;
    height: 550px;
    width: 700px;
    margin-top: 7%;
    padding-bottom: 10%;
    border-radius: 20px;
  }
  
  
  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }
  
  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.5s ease;
  }

.item-group-center{
  display: flex;
  justify-content: center;
  margin-top: -5px;
}
.submitBtn {
  float: right;
  margin-top: 5px;
  background-color: rgba(47, 185, 23, 0.5) !important;
  color: #fff;
}

.cancelBtn{
  float: right;
  margin-top: 5px;
  background-color: rgba(232, 46, 46, 0.752) !important;
  color: #fff;
}
  </style>