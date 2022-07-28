<template>
      <div class="decoc_content_decoction" >
           <div class="decoc_content_title">
              <div class="decoc_content_title_name">
                <div class="title_name">{{title}}</div>
              </div>
           </div>
           <div class="decoc_cent">
             {{content}}
           </div>
            <div class="buy_decoction_button">
                <button class="button_confirm" @click.prevent="center">确认</button>
                <button class="button_goback" @click=$router.back()>返回</button>
            </div>
           <img src="../assets/daiijian.png" alt="" class="content_bot_pic">
      </div>
</template>
<script>
export default{
    methods:{
        center(){
            this.$emit('center')
        }
    },
    props:['title','content']
}


</script>
<style scoped>
.decoc_content_decoction{
    display: flex;
    position: relative;
    height: 815px;
    flex-direction: column;
    align-items: center;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 43px 3px #e5e5e5;
    margin-top: 40px;
    margin-left: 110px;
    margin-right: 110px;
    overflow-y:auto ;
}
.decoc_content_decoction::-webkit-scrollbar{
    display: none;
}
.decoc_content_title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 30px;
    width: 100%;
    padding: 0 40px;
}
.decoc_content_title_name{
    position: relative;
    padding-top: 40px;
    font-size: 36px;
    font-weight: 700;
    color: #007afd;
    margin-left:30px ;
}
.decoc_content_title_name::before{
    position: absolute;
    content: "";
    width: 12px;
    height: 34px;
    top: 50%;
    left: -30px;
    background: #3699ff;
}
.decoc_cent{
    padding: 80px 40px 0;
    line-height: 72px;
    font-size: 30px;
    font-weight: 700;
    white-space: pre-wrap;
    text-indent: 2em;
    color: #222e5e;
}
.content_bot_pic{
    width: 348px;
    height: 273px;
    position: absolute;
    right: 75px;
    bottom: 35px;
}
.smallCha{
    cursor: pointer;
}
.buy_decoction_button{
    padding-top: 220px;
}

</style> 
