<template>
         <div class="infotwo_cont" >
           <div class="infotwo_content_title">
              <div class="infotwo_content_title_name">
                <div class="titletwo_name">{{name}}</div>
              </div>
              <div class="smallCha">  <img src="../assets/cha.png" alt="" @click="toGuideList"></div>
           </div>
           <div class="infotwo_content_cent">
              {{info}}
           </div>
           <div class="infotwo_content_bot">—— 此为线下服务，请咨询店员 ——</div>
           <img src="../assets/bot.png" alt="" class="infotwo_content_bot_pic">
       </div>
</template>

<script>
export default{
   data(){
    return{
        // drugInfo:true
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
<style>
.infotwo_cont{
    display: flex;
    position: relative;
    height: 815px;
    flex-direction: column;
    margin:40px 110px ;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 43px 3px #e5e5e5;
    padding-bottom: 52px;
}
.infotwo_content_title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 30px;
    width: 100%;
    padding: 0 40px;
}
.infotwo_content_title_name{
    position: relative;
    padding-top: 40px;
    font-size: 36px;
    font-weight: 700;
    color: #007afd;
    margin-left:30px ;
}
.infotwo_content_title_name::before{
    position: absolute;
    content: "";
    width: 12px;
    height: 34px;
    top: 50%;
    left: -30px;
    background: #3699ff;
}
.infotwo_content_cent{
    text-align: center;
    padding: 0 70px;
    line-height: 80px;
    font-size: 48px;
    font-weight: 700;
    white-space: pre-wrap;
}
.infotwo_content_bot{
    font-size: 24px;
    font-weight: 700;
    color: #2a3765;
    bottom: 24px;
}
.infotwo_content_bot_pic{
    position: absolute;
    right: 0;
    bottom: 0;
}
.smallCha{
    cursor: pointer;
}
</style> 
