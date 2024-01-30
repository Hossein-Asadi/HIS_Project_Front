<template>
  <div :class="['card', { 'alert-border': remainNumber < 10 }]">
    <div class="row shadow1">
      <div style="width: 33%">
        <v-icon>mdi-pill</v-icon>
        نام دارو: {{ name }}
      </div>
      <div style="width: 33%">
        <v-icon>mdi-alert</v-icon>
        دوز: {{ dose }}
      </div>
      <div style="width: 33%" :class="[{ 'alert-count': remainNumber < 10 }]">
        <v-icon>mdi-counter</v-icon>
        تعداد باقی مانده: {{ remainNumber }}
      </div>
    </div>
    <div class="row shadow1">
      <div style="width: 33%">
        <v-icon>mdi-shape-outline</v-icon>
        نوع دارو: {{ type }}
      </div>
      <div style="width: 66%">
        <v-icon>mdi-calendar-range</v-icon>
        تاریخ انقضا: {{ expiredDate }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "medicine",
  components: {},
  props: ["name", "dose", "remainNumber", "expiredDate", "type"],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.shadow-1:before {
  box-sizing: border-box;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.13);
}

.shadow-1:after {
  box-sizing: border-box;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
}

.card {
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: 160px;
  background: #fcfcfc;
  margin: 20px 40px;
  width: 90%;
  border-radius: 5px;
}

.alert-border {
  border: 3px solid #ff0000;
}

.alert-count {
  color: #ff0000;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  height: 80px;
}
</style>
