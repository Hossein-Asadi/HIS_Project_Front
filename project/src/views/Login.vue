<template>
  <v-container
    fluid
    style="
      background-color: #99bbf5;
      height: 100%;
      width: 100%;
      position: fixed;
    "
  >
    <particles />
    <img
      src="@/assets/hospital1.jpg"
      style="
        width: 600px;
        height: 450px;
        position: absolute;
        left: 210px;
        top: 140px;
        border-radius: 25px 0px 0px 25px;
      "
    />
    <v-icon
      size="40"
      style="position: absolute; left: 215px; top: 145px; color: white"
      @click="mainPage"
      >mdi-exit-to-app</v-icon
    >
    <div
      style="
        background-color: #bbb;
        width: 500px;
        height: 450px;
        position: absolute;
        right: 210px;
        top: 140px;
        border-radius: 0px 25px 25px 0;
      "
    >
      <div class="item-group-center" style="margin-top: 150px">
        <v-text-field
          v-model="username"
          outlined
          class="shrink"
          style="width: 300px"
          :background-color="textFieldBackgroundColor"
          dense
          color="#000"
        ></v-text-field>
        <p style="margin-top: 7px; margin-left: 5px">:نام کاربری</p>
      </div>
      <div class="item-group-center">
        <v-text-field
          v-model="password"
          outlined
          class="shrink"
          style="width: 300px"
          :background-color="textFieldBackgroundColor"
          dense
          color="#000"
        ></v-text-field>
        <p style="margin-top: 7px; margin-left: 9px; margin-right: 5px">
          :رمز عبور
        </p>
      </div>
      <div class="item-group-center">
        <v-btn @click="login" width="100px" class="loginBtn">ورود</v-btn>
      </div>
      <div class="item-group-center" style="margin-top: 20px">
        <v-alert
          type="error"
          :value="!valid"
          dense
          width="280px"
          class="item-group-center"
          >{{ errorMessage }}</v-alert
        >
      </div>
    </div>
  </v-container>
</template>

<script>
import api from "@/api";

export default {
  name: "login",
  components: {
    particles: () => import("@/components/particles"),
  },
  data() {
    return {
      username: null,
      password: null,
      textFieldBackgroundColor: "#acaeab",
      errorMessage: null,
      valid: true,
    };
  },
  async mounted() {
    let token = JSON.parse(localStorage.getItem("token"));

    await api.auth
      .tokenVerify({ token: token })
      .then((res) => {
        this.$router.push({ path: "/dashboard" });
      })
      .catch((error) => {
        // console.log(error);
      });
  },
  methods: {
    login() {
      api.auth
        .djangologin(this.username, this.password)
        .then(({ data }) => {
          if (data.token == undefined) {
            this.errorMessage = data;
            this.valid = false;
          } else {
            localStorage.setItem("token", JSON.stringify(data.token.access));
            localStorage.setItem("role", JSON.stringify(data.role));
            localStorage.setItem("userId", JSON.stringify(data.userId));
            this.$router.push({ path: "/dashboard" });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    mainPage() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style scoped>
.item-group-center {
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
