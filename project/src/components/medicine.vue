<template>
    <div class="card">
        <div class="row shadow1">
            <div style="width: 33%;">
                <v-icon>mdi-pill</v-icon>
                نام دارو: {{ name }}
            </div>
            <div style="width: 33%;">
                <v-icon>mdi-alert</v-icon>
                دوز: {{ dose }}
            </div>
            <div style="width: 33%;">
                <v-icon>mdi-counter</v-icon>
                تعداد باقی مانده: {{ remainNumber }}
            </div>
        </div>
    </div>
</template>
  
<script>
  export default{
    name: "medicine",
    components: {
      
    },
    props: ['name','dose','remainNumber'],
    mounted() {
    
    },
    data() {
      return{
      }
    },
    methods: {
    }
}
  
  
  
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
  justify-items: center;  
  align-items: center;
  height: 80px;
  background: #fcfcfc;
  margin: 20px 40px;
  width: 90%;
  border-radius: 5px;
  
}


.row{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    height: 80px;
}

</style>