<template>
    <div dir="rtl" class="box-layout">
        <div class="change-box-layout">
            <div class="change-box">
                <h2>افزودن داروی جدید</h2>
                <div style="display: flex; justify-content: start; width: 100%; margin-top: 5px;">
                    <div class="item-group-center" style="margin-top: 20px; width: 50%;">
                        <v-text-field density="comfortable" reverse underlined label="نام دارو" placeholder="نام دارو..." v-model="newMedicineFormData.name" class="shrink form-input" style="width: 150px; margin-left: 25px;" :background-color="textFieldBackgroundColor" color="#000"></v-text-field>
                    </div>
                    <div class="item-group-center" style="margin-top: 20px; width: 50%;">
                        <v-text-field type="number" v-model="newMedicineFormData.dose" reverse underlined label="دوز دارو" placeholder="دوز دارو..." class="shrink form-input" style="width: 100px; margin-left: 15px;" :background-color="textFieldBackgroundColor" color="#000"></v-text-field>
                    </div>
                </div>
                <div class="submit-box">
                    <v-btn @click="signup" width="100px" class="loginBtn">ثبت نام</v-btn>
                </div>
            </div>
            <div class="change-box">
                <h2>افزودن تعداد دارو</h2>
                <div style="display: flex; width: 100%; justify-content: start;">
                    <div class="item-group-center" style="margin-top: 20px; width: 45%;">
                        <v-autocomplete reverse v-model="addMedicineFormData.name" label="نام دارو    " placeholder="نام دارو..." required class="shrink form-input" style="width: 150px; margin-right: 0 !important;" :background-color="textFieldBackgroundColor" color="#000"></v-autocomplete>
                    </div>
                    <div class="item-group-center" style="margin-top: 20px; width: 30%;">
                        <v-text-field type="number" v-model="addMedicineFormData.dose" reverse underlined label="دوز دارو" placeholder="دوز دارو..." class="shrink form-input" style="width: 100px; margin-left: 15px;" :background-color="textFieldBackgroundColor" color="#000"></v-text-field>
                    </div>
                    <div class="item-group-center" style="margin-top: 20px; width: 25%;">
                        <v-text-field type="number" v-model="addMedicineFormData.count" reverse underlined label="تعداد دارو" placeholder="تعداد دارو..." class="shrink form-input" style="width: 100px; margin-left: 15px;" :background-color="textFieldBackgroundColor" color="#000"></v-text-field>
                    </div>
                </div>
                <div class="submit-box">
                    <v-btn @click="signup" width="100px" class="loginBtn">ثبت نام</v-btn>
                </div>
            </div>
       </div> 
       <div class="list-layout">
         <medicine name="آزیترومایسین" dose="100" remain-number="2"/>
         <medicine name="آزیترومایسین" dose="100" remain-number="2"/>
         <medicine name="آزیترومایسین" dose="100" remain-number="2"/>
         <medicine name="آزیترومایسین" dose="100" remain-number="2"/>
         <medicine name="آزیترومایسین" dose="100" remain-number="2"/>
         <medicine name="آزیترومایسین" dose="100" remain-number="2"/>
         <medicine name="آزیترومایسین" dose="100" remain-number="2"/>
         <medicine name="آزیترومایسین" dose="100" remain-number="2"/>
       </div>
    </div>
</template>
  
<script>
import medicine from './medicine.vue';
  export default{
    name: "pharmacy",
    components: {
      medicine
    },
    mounted() {
    
    },
    data() {
      return{
        textFieldBackgroundColor: '#ffffff',
        newMedicineFormData: {
            name: null,
            dose: null,
        },
        addMedicineFormData: {
            name: null,
            dose: null,
            count: null,
        },
      }
    },
    methods: {
      
    }
}
  
  
  
</script>
<style scoped>
.box-layout{
    display: flex;
    width: 100%;
    height: 90vh;
    justify-content: start;
    align-items: center;
}
.change-box-layout{
    display: flex;
    flex-direction: column;
    width: 40%;
    justify-items: start;
    align-items: center;
    height: 80vh;
    margin-left: 20px;
}
.change-box{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    direction: rtl;
    width: 80%;
    height: 30vh;
    margin-bottom: 10vh;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: white;
}
.list-layout{
   display: flex;
   flex-direction: column;
   width: 55%;
   height: 80vh;
   background-color: #99bbf5;
   overflow-y: auto;
   border-radius: 10px;
}

.item-group-center{
  display: flex;
  margin-top: -5px;
  justify-content: start;
}

.submit-box{
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
}

.loginBtn {
    background-color: #4e9a4e !important;
    color: #fff;
}

.loginBtn:hover {
    background-color: rgba(82, 144, 71, 0.5)
}

.v-select{
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

  
</style>