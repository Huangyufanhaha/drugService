<template>
    <div class="article_all">
        <img :src=imgUrl alt="" class="article_img">
        <div class="article_cont">
            <div class="article_cont_title">
                {{articlTitle}}
            </div>
            <div class="article_cont_time">
                {{articlTime}}
            </div>
        </div>
        <div class="article_line"></div>
    </div>
</template>

<script>
export default{
    props:['articlTitle','articlTime','imgUrl']
}


</script>

<style>
.article_all{
    display: flex;
    cursor: pointer;
    margin-bottom: 34px;
    position: relative;
}
.article_img{
    width: 200px;
    height: 126px;
}
.article_cont{
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.article_line{
   position: absolute;
   bottom: -16px;
   width: 100%;
   height: 1px;
   background-color: #EEEEEE;
}
.article_cont_title{
    width: 504px;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #333;
    line-height: 28px;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;



}
.article_cont_time{
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    color: #999;
    line-height: 25px;
    margin-bottom: 21px;
}
</style>