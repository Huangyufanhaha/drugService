<template>
    <div class="info_content_onLine" >
        <img src="../assets/buyTran.png" alt="">
        <div class="buy_purchase_test">
            {{text}}
        </div>
        <div class="buy_purchase_button">
            <button class="button_confirm">确认</button>
            <button class="button_goback" @click="goBack">返回</button>
        </div>
    </div>
</template>
<script>
  export default{
      methods:{
        goBack(){
            this.$emit('goBack')
        }
      },
      props:['text']
  }

</script>


<style>
.info_content_onLine{
    display: flex;
    position: relative;
    height: 768px;
    flex-direction: column;
    margin: 80px 50px 50px 0;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 43px 3px #e5e5e5;
    padding-bottom: 52px;
}
.buy_purchase_test{
    padding:80px 40px 0;
    text-align: center;
    line-height: 48px;
    font-weight: 700;
    font-size: 30px;
    color: #222e5e;
    white-space: pre-wrap;
}
.buy_purchase_button{
    padding-top: 60px;
}
.button_confirm,.button_goback{
    width: 192px;
    height: 68px;
    line-height: 70px;
    margin: 0 27px;
    font-size: 30px;
    border: 1px solid #007afd ;
}
.button_confirm{
    color: #fff;
    background: #007afd;
}
.button_goback{
    color: #007afd;
    background: #fff;
}

</style>