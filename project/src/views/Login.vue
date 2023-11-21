<template>
  <v-container fluid style="background-color: #00356b; height: 100%; width: 100%; position: fixed;">
    <particles/>
    <img src="@/assets/hospital1.jpg" style="width: 800px; height: 600px; position: absolute; left: 300px; top: 180px; border-radius: 25px 0px 0px 25px;"/>
    <div style="background-color: #bbb; width: 500px; height: 600px; position: absolute; right: 305px; top: 180px; border-radius: 0px 25px 25px 0;">
      <div class="item-group-center" style="margin-top: 200px;">
        <v-text-field v-model="username" outlined class="shrink" style="width: 300px;" :background-color="textFieldBackgroundColor" dense color="#000"></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px;">:نام کاربری</p>
      </div>
      <div class="item-group-center">
        <v-text-field v-model="password" outlined class="shrink" style="width: 300px;" :background-color="textFieldBackgroundColor" dense color="#000"></v-text-field>
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
      textFieldBackgroundColor: '#acaeab',
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