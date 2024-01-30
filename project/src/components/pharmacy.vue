<template>
  <v-app>
    <div dir="rtl" class="box-layout">
      <div class="change-box-layout">
        <div class="change-box">
          <h2>افزودن داروی جدید</h2>
          <div
            style="
              display: flex;
              justify-content: start;
              width: 100%;
              margin-top: 5px;
            "
          >
            <div class="item-group-center" style="margin-top: 20px; width: 50%">
              <v-text-field
                density="comfortable"
                reverse
                underlined
                label="نام دارو"
                placeholder="نام دارو..."
                v-model="newMedicineFormData.name"
                class="shrink form-input"
                style="width: 150px; margin-left: 25px"
                :background-color="textFieldBackgroundColor"
                color="#000"
              ></v-text-field>
            </div>
            <div class="item-group-center" style="margin-top: 20px; width: 50%">
              <v-text-field
                type="number"
                v-model="newMedicineFormData.dose"
                reverse
                underlined
                label="دوز دارو"
                placeholder="دوز دارو..."
                class="shrink form-input"
                style="width: 100px; margin-left: 15px"
                :background-color="textFieldBackgroundColor"
                color="#000"
              ></v-text-field>
            </div>
            <div class="item-group-center" style="margin-top: 20px; width: 50%">
              <v-select
                v-model="newMedicineFormData.type"
                reverse
                underlined
                label="شکل دارو"
                placeholder="شکل دارو..."
                class="shrink form-input"
                style="width: 100px; margin-left: 15px"
                :background-color="textFieldBackgroundColor"
                color="#000"
                :items="medicineTypes"
              ></v-select>
            </div>
          </div>
          <div
            class="item-group-center"
            style="margin-top: 20px; margin-bottom: 15px; width: 50%"
          >
            <datePicker
              v-model="newMedicineFormData.expireDate"
              placeholder="تاریخ انقضا دارو"
              :autoSubmit="true"
              :popover="true"
              :clearable="true"
              color="#607D8B"
            ></datePicker>
          </div>
          <div class="submit-box">
            <v-btn @click="addMedicine" width="100px" class="loginBtn"
              >تایید</v-btn
            >
          </div>
        </div>
        <div class="change-box">
          <h2>افزودن تعداد دارو</h2>
          <div style="display: flex; width: 100%; justify-content: start">
            <div class="item-group-center" style="margin-top: 20px; width: 45%">
              <v-select
                reverse
                v-model="addMedicineFormData.name"
                label="نام دارو    "
                placeholder="نام دارو..."
                required
                class="shrink form-input"
                style="width: 150px; margin-right: 0 !important"
                :background-color="textFieldBackgroundColor"
                color="#000"
                :items="medicines"
                item-text="name"
                item-value="name"
              ></v-select>
            </div>
            <div class="item-group-center" style="margin-top: 20px; width: 25%">
              <v-text-field
                type="number"
                v-model="addMedicineFormData.count"
                reverse
                underlined
                label="تعداد دارو"
                placeholder="تعداد دارو..."
                class="shrink form-input"
                style="width: 100px; margin-left: 15px"
                :background-color="textFieldBackgroundColor"
                color="#000"
              ></v-text-field>
            </div>
          </div>
          <div class="submit-box">
            <v-btn @click="addAmount" width="100px" class="loginBtn"
              >تایید</v-btn
            >
          </div>
        </div>
      </div>
      <div class="list-layout">
        <medicine
          v-for="med in medicines"
          :name="med.name"
          :dose="med.dose"
          :remain-number="med.amount"
          :expiredDate="med.expire_date"
          :type="med.type"
        ></medicine>
      </div>
    </div>
  </v-app>
</template>

<script>
import medicine from "./medicine.vue";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import api from "@/api";

export default {
  name: "pharmacy",
  components: {
    medicine,
    datePicker: VuePersianDatetimePicker,
  },
  data() {
    return {
      textFieldBackgroundColor: "#ffffff",
      newMedicineFormData: {
        name: null,
        dose: null,
        type: null,
        expireDate: null,
      },
      addMedicineFormData: {
        name: null,
        count: null,
      },
      medicineTypes: ["قرص", "کپسول", "آمپول", "قطره", "کرم", "ژل"],
      medicines: [],
    };
  },
  async created() {
    await api.pharmacy
      .getAllMedicine()
      .then(({ data }) => {
        this.medicines = data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async addMedicine() {
      await api.pharmacy
        .addNewMedicine(this.newMedicineFormData)
        .then(({ data }) => {
          this.medicines = data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.newMedicineFormData = {
        name: null,
        dose: null,
        type: null,
        expireDate: null,
      };
    },
    async addAmount() {
      await api.pharmacy
        .addMedicineAmount(this.addMedicineFormData)
        .then(({ data }) => {
          this.medicines = data;
        })
        .catch((error) => {
          console.log(error);
        });

      this.addMedicineFormData = {
        name: null,
        count: null,
      };
    },
  },
};
</script>
<style scoped>
.box-layout {
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: start;
  align-items: center;
}
.change-box-layout {
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-items: start;
  align-items: center;
  height: 90vh;
  margin-left: 20px;
  margin-top: 10vh;
}
.change-box {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  direction: rtl;
  width: 80%;
  height: 45vh;
  margin-bottom: 10vh;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: white;
}
.list-layout {
  display: flex;
  flex-direction: column;
  width: 55%;
  height: 80vh;
  background-color: #99bbf5;
  overflow-y: auto;
  border-radius: 10px;
}

.item-group-center {
  display: flex;
  margin-top: -5px;
  justify-content: start;
}

.submit-box {
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
  background-color: rgba(82, 144, 71, 0.5);
}

.v-select {
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
