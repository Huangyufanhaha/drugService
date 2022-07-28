<template>
    <div class="other_one">
        <div class="other_one_all">
            <img :src=videoImg alt=""  class="small_video">
            <div class="small_video_title">{{videoTitle}}</div>
            <div  class="small_video_time">{{videoTime}}</div>
            <div class="small_video_start">
                <img src="../assets/start.png" alt="" class="smallStart_img">
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['videoImg','videoTitle','videoTime']
}

</script>

<style>
.other_one{
   margin-bottom: 36px;
}
.other_one_all{
    position: relative;
    margin-right: 35px;
    width: 393px;
    height: 350px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    cursor: pointer;
}
.small_video{
    width: 100%;
}
.small_video_title{
    font-size: 30px;
    font-weight: 700;
    color: #333;
    line-height: 46px;
    letter-spacing: .39px;
    margin-top: 8px;
    margin-left: 15px;
}
.small_video_time{
    font-size: 28px;
    font-weight: 500;
    color: #999;
    line-height: 45px;
    letter-spacing: .34px;
    margin-left: 15px;
}
.small_video_start{
    position: absolute;
    top: 83px;
    width: 393px;
    text-align: center;
}
.smallStart_img{
    width: 61px;
    height: 61px;
    opacity: 0.8;
}

</style>