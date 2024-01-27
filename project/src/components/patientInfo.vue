<template>
    <div :class="['card', {'open': isOpen, 'shadow-2': isOpen, 'shadow-1': !isOpen}]">
        <div class="row">
            <div style="width: 33%;">
                نام بیمار: {{ name }}
            </div>
            <div style="width: 33%">
                زمان ویزیت: {{ visitTime }}
            </div>
            <div style="width: 33%; text-align: left; padding-left: 25px;">
                <button @click="toggleCard">
                    <img style="width: 10px; height: 10px; transition: 0.4s all;" :class="[{'reverse': isOpen}]" src="@/assets/arrow-down.svg"/>
                </button>
            </div>
        </div>
        <div style="padding-bottom: 20px;" :class="['row',{'hidden-row': !isOpen, 'visible-row': isOpen}]">
            <div style="width: 33%;">
                سن: {{ age }}
            </div>
            <div style="width: 33%;">
                بیماری: {{ illness }}
            </div>
            <div style="width: 33%;">
                بیمه: {{ insurement ? 'دارد' : 'ندارد' }}
            </div>
        </div>
    </div>
</template>
  
<script>
  export default{
    name: "patientInfo",
    components: {
      
    },
    props: ['name','visitTime','age','illness','insurement'],
    mounted() {
    
    },
    data() {
      return{
        isOpen: false,
      }
    },
    methods: {
        toggleCard() {
            if (this.isOpen) {
                this.isOpen = false;
            } else {
                this.isOpen = true;
            }
        },
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

.shadow-2:before {
  box-sizing: border-box;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.1);
}

.shadow-2:after {
  box-sizing: border-box;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}


.card {
  position: relative;
  height: 100px;
  background: #fcfcfc;
  margin: 20px 40px;
  transition:  0.2 ease-out;
  width: 90%;
  border-radius: 5px;
}

.card.open {
  height: 100px;
  background: #ffffff;
}

.row{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-right: 10px;
    height: 50px;
}

.visible-row{
    display: flex;
}

.hidden-row{
    display: none;
}

.reverse{
    rotate: 180deg;
    transition: 0.4s all;
}
</style>