<template>
  <div class="card shadow-1">
    <div class="row">
      <div style="width: 33%">نام بیمار: {{ name }}</div>
      <div style="width: 33%">زمان ویزیت: {{ visitTime }}</div>
      <div style="width: 33%">سن: {{ age }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "patientInfo",
  components: {},
  props: ["name", "visitTime", "age", "illness", "insurement"],
  mounted() {},
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleCard() {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    },
  },
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
  position: relative;
  height: 60px;
  background: #fcfcfc;
  margin: 20px 40px;
  transition: 0.2 ease-out;
  width: 90%;
  border-radius: 5px;
}

.card.open {
  height: 100px;
  background: #ffffff;
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 10px;
  height: 50px;
  color: black;
}
</style>
