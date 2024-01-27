<template>
    <div dir="rtl" class="box-layout">
       <div class="list-layout">
        
         <patientInfo name="محمدرضا قادری" age="2" insurement=false illness="کصخلیت مزمن" visit-time="1403/2/1"/>
         <patientInfo name="محمدرضا قادری" age="2" insurement=false illness="کصخلیت مزمن" visit-time="1403/2/1"/>
         <patientInfo name="محمدرضا قادری" age="2" insurement=false illness="کصخلیت مزمن" visit-time="1403/2/1"/>
         <patientInfo name="محمدرضا قادری" age="2" insurement=false illness="کصخلیت مزمن" visit-time="1403/2/1"/>
         <patientInfo name="محمدرضا قادری" age="2" insurement=false illness="کصخلیت مزمن" visit-time="1403/2/1"/>
         <patientInfo name="محمدرضا قادری" age="2" insurement=false illness="کصخلیت مزمن" visit-time="1403/2/1"/>
         <patientInfo name="محمدرضا قادری" age="2" insurement=false illness="کصخلیت مزمن" visit-time="1403/2/1"/>

       </div>
    </div>
</template>
  
<script>
import patientInfo from './patientInfo.vue';
  export default{
    name: "patientsList",
    components: {
      patientInfo
    },
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
.box-layout{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
}
.list-layout{
   display: flex;
   flex-direction: column;
   width: 60%;
   height: 80vh;
   background-color: #99bbf5;
   overflow-y: auto;
   border-radius: 10px;
}
  
</style>