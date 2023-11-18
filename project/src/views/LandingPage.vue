<template>
  <div class="landing-container" dir="rtl">
    <div class="navbar-container">
      <div class="logo">
          Logo
      </div>
  
      <div class="info">
          <a class="about-us">
              درباره ما
          </a>
      </div>

      <div class="login-signup">
          <a class="login">
            ورود
          </a>
          <a class="signup">
            ثبت نام
          </a>
      </div>

      
    </div>
    
  </div>
  
</template>

<script>
export default{
  name: "landingPage",
  components: {
    
  },
  mounted() {
  this.addActiveClass();
  },
  data() {
    return{
      isActive: false,
    }
  },
  methods: {
      addActiveClass() {
          setTimeout(this.activate,100);
      },
      activate(){
          this.isActive = true;
      }


  }
}


</script>

<style scoped>
.landing-container {
  background-color: rgb((242, 230, 230)35, 223, 223);
  height: 100%;
  width: 100%;
}
.navbar-container {
  background-color: rgb(238, 244, 248);
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  padding-top: 5px;
}

.logo{
  width: 30%;
  padding-right: 40px;
  padding-top: 20px;
}

.info{
  width: 50%;
  padding-left: 10px;
  padding-top: 20px;
  direction: ltr;
  cursor: pointer;
}

.about-us{
  height: 20px;
  width: 80px;
}
.login-signup{
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-left: 30px;
  padding-top: 10px;
  text-align: center;
  cursor: pointer;
}

.login{
  height: 20px;
  border-radius: 5px;
  width: 80px;
  margin-top: 10px;
}

.signup{
  height: 30px;
  border-radius: 5px;
  border: 2px solid #0099FF;
  color: #0099FF;
  width: 80px;
  margin-right: 20px;
  margin-top: 7px;
  padding-top: 3px;
  justify-content: center;
}

.signup:hover{
  color: white;
  background-color: #0099FF;
}





</style>