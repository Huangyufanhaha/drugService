<template>
    <div class="info_content_onLine" >
        <img src="../assets/cha.png" alt="" @click="toGuideList" class="onLine_img">
         <img src="../assets/doctorImg.png" alt="">
        <div class="doctor_erweima">
            <div class="doctor_erweima_su">
                <img src="../assets/su.png" alt="" class="erweima_su">
                <div class="doctor_name">苏药师</div>
            </div>
        <div class="doctor_erweima_su">
            <img src="../assets/su.png" alt="" class="erweima_su">
            <div class="doctor_name">叶药师</div>
        </div>
        </div>
        <div class="info_content_bot">扫码关注华东大药房东海大道店药事服务中心微信公众号，线上咨询药事指导。</div>
    </div>
</template>

<script>
export default{
   data(){
    return{
    }
   },
   props:['name','info'],
   methods:{
    toGuideList(){
        this.$emit('toGuideList')
    }
   }
}


</script>
<style scoped>
.info_content_onLine{
    display: flex;
    position: relative;
    height: 768px;
    flex-direction: column;
    margin: 80px 50px 50px 0;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 43px 3px #e5e5e5;
}
.onLine_img{
    position: absolute;
    top: 37px;
    right: 46px;
    cursor: pointer;
}
.doctor_erweima{
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 575px;
    height: 224px;
    top: 210px;
    left: 50%;
    transform: translateX(-49.5%);
}
.erweima_su{
    width: 225px;
    height: 225px;
    background: #d7eaff;
}
.doctor_name{
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    padding-top: 25px;
    color: #2272da;
}
.info_content_bot{
    font-size: 24px;
    color: #222e5e;
}
</style>
