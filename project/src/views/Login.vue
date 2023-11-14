<template>
  <v-container fluid style="background-color: #00356b; height: 100%; width: 100%; position: fixed;">
    <particles/>
    <img src="@/assets/hospital1.jpg" style="width: 800px; height: 600px; position: absolute; left: 300px; top: 180px; border-radius: 25px 0px 0px 25px;"/>
    <div style="background-color: #bbb; width: 500px; height: 600px; position: absolute; right: 305px; top: 180px; border-radius: 0px 25px 25px 0;">
      <div class="item-group-center" style="margin-top: 200px;">
        <v-text-field v-model="username" outlined class="shrink" style="width: 300px;" background-color="#acaeab" dense color="#000"></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px;">:نام کاربری</p>
      </div>
      <div class="item-group-center">
        <v-text-field v-model="password" outlined class="shrink" style="width: 300px;" background-color="#acaeab" dense color="#000"></v-text-field>
        <p style="margin-top: 7px; margin-left: 9px; margin-right: 5px;">:رمز عبور</p>
      </div>
      <div class="item-group-center">
        <v-btn @click="login" width="100px" class="loginBtn">ورود</v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
export default{
  name: "login",
  components: {
    particles: () => import("@/components/particles"),
  },
  data() {
    return{
      username: null,
      password: null,
    }
  },
  methods: {
    login() {
      console.log('######',this.username,this.password);
    }
  }
}
</script>

<style scoped>
.background-style {
  padding-top: 0px;
  /* background-image: url("../assets/images/LoginBack2.jpg"); */
  background-position: bottom !important;
  /* background-color: #373e46 !important; */
  background-image: linear-gradient(
    0deg,
    rgba(118, 104, 91, 0.9) 0%,
    rgba(144, 127, 112, 0.9) 50%,
    rgba(118, 104, 91, 0.9) 100%
  );
  color: #aaa;
  position: fixed;
  height: 100%;
  width: 100%;
}
.loginContainer {
  background-color: #fff;
  padding: 0;
  margin-top: 5%;
  position: relative;
}
.section-1 {
  position: relative;
  padding: 0;
  z-index: 1;
  /* background-image: url("../assets/images/loginSection-1.jpg"); */
}
.section-1 img {
  border-radius: 0px 25px 25px 0;
  width: 100%;
  height: 100%;
}
.section-2 {
  position: relative;
  padding: 0;
  /* background-image: url("../assets/images/loginSection-2.jpg"); */
  background-size: cover;
  z-index: 1;
  margin-left: 200px;
}
.section-2 img {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 25px 0px 0px 25px;
}
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #00356b;
}
.item-group-center{
  display: flex;
  justify-content: center;
}
.loginBtn {
  float: right;
  margin-top: 5px;
  background-color: rgba(40, 40, 40, 0.5) !important;
  color: #fff;
}
</style>