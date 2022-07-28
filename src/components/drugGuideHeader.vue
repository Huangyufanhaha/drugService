<template>
    <div class="guide_header">
        <div @click="$router.back()" class="aaa">
            <div class="guide_header_goback">
            <img src="../assets/goback.png" alt="" class="goback_pho">
            返回
        </div>
        </div>
       
        <div class="guide_header_title" >{{title}}</div>
       
        <div @click="drugHome" class="aaa">
             <div class="guide_header_home">
            <img src="../assets/home.png" alt="" class="goback_pho_aa">
             首页
        </div>
        </div>
        </div>
</template>
<script>
 export default{
    props:{
        title:String
    },
    methods:{
        drugHome(){
            this.$router.push('/drugHome')
        }
    }
 }

</script>


<style scoped>
.guide_header{
    width: 100%;
    height: 142px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 50px ;
    box-shadow: 0px 6px 20px 0px rgba(0,121,253,0.10);
    background-color: #ffffff;
    color: #007afd;
    font-size: 30px;
}
.guide_header_goback{
    display: flex;
    align-items: center;
}
.goback_pho{
    width: 22px;
    height: 40px;
    margin-right: 22px;
}
.goback_pho_aa{
    width: 50px;
    height: 47px;
    margin-right: 22px;
}
.guide_header_title{
    flex-shrink: 0;
    font-size: 60px;
    font-weight: 700;
    text-align: center;
}
.guide_header_home{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.aaa{
    cursor: pointer;
}
</style>