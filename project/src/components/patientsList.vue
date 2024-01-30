<template>
  <div dir="rtl" class="box-layout">
    <div style="width: 30%">
      <div style="margin-bottom: 10px">
        <p>لطفا روز مورد نظر را انتخاب کنید:</p>
      </div>
      <div class="select">
        <select v-model="selectedOption">
          <option
            v-for="(day, index) in days"
            :value="index"
            :selected="index === selectedOption"
          >
            {{ day }}
          </option>
        </select>
      </div>
    </div>
    <div class="list-layout">
      <patientInfo
        v-for="(patient, index) in filteredPatients"
        :key="index"
        :name="patient.name"
        :visit-time="
          patient.visitTime.substring(2).split('-').reverse().join('-')
        "
        :age="patient.age"
      />
    </div>
  </div>
</template>

<script>
import patientInfo from "./patientInfo.vue";

export default {
  name: "patientsList",
  components: { patientInfo },
  data() {
    return {
      patients: [
        { name: "چهارشنبه", age: "4", visitTime: "0-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "2-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "3-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "4-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "0-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "1-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "5-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "6-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "0-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "1-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "6-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "6-8:15-8:30" },
        { name: "چهارشنبه", age: "4", visitTime: "5-8:15-8:30" },
      ],
      selectedOption: 0,
    };
  },
  computed: {
    filteredPatients() {
      return this.patients.filter(
        (patient) => patient.visitTime.charAt(0) == this.selectedOption
      );
    },
    days() {
      return [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سه شنبه",
        "چهارشنبه",
        "پنچشنبه",
        "جمعه",
      ];
    },
  },
};
</script>

<style scoped>
.box-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
}
.list-layout {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 80vh;
  background-color: #99bbf5;
  color: white;
  overflow-y: auto;
  border-radius: 10px;
}

select {
  appearance: none;
  border: 0;
  outline: 0;
  background: #99bbf5;
  color: white;
  box-shadow: none;
}
select::-ms-expand {
  display: none;
}
/* Custom Select wrapper */
.select {
  position: relative;
  display: flex;
  width: min(20rem, 90vw);
  background: var(--background-select);
  border-radius: 0.25rem;
  overflow: hidden;

  select {
    flex: 1;
    padding: 1em;
    cursor: pointer;
  }

  &::after {
    content: "\25BC";
    position: absolute;
    left: 1rem;
    top: 1rem;
    transition: 0.25s all ease;
    pointer-events: none;
    direction: ltr;
    color: white;
  }

  &:hover::after {
    color: gray;
    animation: bounce 0.5s infinite;
  }
}
@keyframes bounce {
  25% {
    transform: translatey(5px);
  }
  75% {
    transform: translatey(-5px);
  }
}
</style>
