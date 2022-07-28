<template>
    <div class="info_content_onLine" >
        <img src="../assets/cha.png" alt="" @click="toGuideList" class="onLine_img">
        <div class="phone_img">
            <img src="../assets/phone.png" alt="">
            <div class="phone_num_ye">
                <div class="phone_name">叶药师</div>
                <div class="phone_tel">138-6767-7357</div>
            </div>
            <div class="phone_num_su">
                <div class="phone_name">苏药师</div>
                <div class="phone_tel">138-1967-7101</div>
            </div>
        </div>
        <div class="phone_tip">欢迎拨打电话，联系药师</div>
        <div class="phone_tip_sec">该服务为电话服务，均为专业药师，欢迎来电咨询</div>
    
    
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
.phone_img{
    position: relative;
}
.phone_num_ye{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 233px;
    height: 85px;
    top: 255px;
    left: 180px;
    color: #002cc1
}
.phone_num_su{
    display: flex;
    position: absolute;
    width: 233px;
    height: 85px;
    top: 315px;
    left: 430px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
}
.phone_name{
    font-size: 18px;
}
.phone_tel{
    font-size: 24px;
    font-weight: 700;
}
.phone_tip{
    padding: 30px 0;
    font-size: 36px;
    font-weight: 700;
    color: #2a3765;
}
.phone_tip_sec{
    font-size: 24px;
    color: #222e5e;
}
</style>
