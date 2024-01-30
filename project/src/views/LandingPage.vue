<template>
  <div class="landing-container" dir="rtl">
    <div class="navbar-container">
      <div class="logo">
        <img class="logo-img" src="@/assets/Logo.png" />
      </div>

      <div class="info">
        <a class="about-us"> درباره ما </a>
      </div>

      <div class="login-signup">
        <a class="login" @click="login"> ورود </a>
        <a class="signup" @click="signup"> ثبت نام </a>
      </div>
    </div>
    <div class="main-section">
      <div class="text-container fade-in-right" :class="{ active: isActive }">
        <div>
          <h2>سلامت شما، تخصص ما</h2>
          <p>
            ما به شما کمک می کنیم مراقب کسانی باشید که بیشترین اهمیت را دارند.
          </p>
        </div>
      </div>
      <div class="image-container fade-in-left" :class="{ active: isActive }">
        <img src="@/assets/doctor.png" style="width: 400px; height: 450px" />
      </div>
    </div>

    <div class="card-container">
      <div>
        <h1>24/7</h1>
        <p>خدمات آنلاین</p>
      </div>
      <div>
        <h1>+100</h1>
        <p>پزشک متخصص</p>
      </div>
      <div>
        <h1>+10,000</h1>
        <p>بیمار ترخیص شده</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "landingPage",
  data() {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.addActiveClass();
  },
  methods: {
    addActiveClass() {
      setTimeout(this.activate, 100);
    },
    activate() {
      this.isActive = true;
    },
    signup() {
      this.$router.push({ path: "/signup" });
    },
    login() {
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style scoped>
.landing-container {
  background-color: #e0e0e0;
  height: 100%;
  width: 100%;
}
.navbar-container {
  background-color: inherit;
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
}

.logo {
  width: 30%;
  padding-right: 40px;
  /* padding-top: 5px; */
  height: 100px;
}

.logo-img {
  height: 75px;
  width: 105px;
}

.info {
  width: 50%;
  padding-left: 10px;
  padding-top: 20px;
  direction: ltr;
  cursor: pointer;
  color: black;
}

.about-us {
  height: 20px;
  width: 80px;
}
.login-signup {
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-left: 30px;
  padding-top: 10px;
  text-align: center;
  cursor: pointer;
}

.login {
  height: 20px;
  border-radius: 5px;
  width: 80px;
  margin-top: 10px;
  color: black;
}

.signup {
  height: 30px;
  border-radius: 5px;
  border: 2px solid #0099ff;
  color: #0099ff;
  width: 80px;
  margin-right: 20px;
  margin-top: 7px;
  padding-top: 3px;
  justify-content: center;
}

.signup:hover {
  color: white;
  background-color: #0099ff;
}

.fade-in-left {
  position: relative;
  transform: translateX(-500px);
  opacity: 0;
  transition: 1s all ease;
}

.main-section {
  width: 100%;
  height: 100%;
  display: flex;
  /* border-bottom: 1px rgb(192, 192, 192) solid; */
}
.image-container {
  width: 50%;
  padding-top: 2%;
  padding-right: 10%;
}

.text-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.fade-in-right {
  position: relative;
  transform: translateX(100%);
  opacity: 0;
  transition: 1s all ease;
}

.active {
  transform: translateX(0);
  opacity: 1;
}

.card-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 50px;
}

.card-container > div {
  background-color: #ccd5dc;
  width: 20%;
  height: 100px;
  text-align: center;
  padding-top: 15px;
  border-radius: 10px;
}
</style>
