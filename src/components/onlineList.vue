<template>
    <div class="online_first" @click="videoStart">
        <img src="../assets/shuoyao.png" alt="" class="online_video">
        <div class="video_title">【小依说药3】药不能停</div>
        <div class="video_time">2022-1-8</div>
        <div class="button">
            <img src="../assets/start.png" alt="" class="video_start">
        </div>
    </div>
</template>
<script>
export default{
    methods:{
        videoStart(){
            window.open('https://mp.weixin.qq.com/s/1Ers57CyW08LpE6DIgcrPg')
        }
    }
}

</script>

<style>
.online_first{
    position: relative;
    display: flex;
    flex-direction: column;
    width: 821px;
    height: 595px;
    background: #fff;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.16); 
    border-radius: 10px;
    cursor: pointer;
}
.online_video{
    width: 100%;
}
.video_title{
    /* text-align: left; */
    line-height: 60px;
    margin-top: 3px;
    font-size: 32px;
    font-weight: 700;
    color: #333;
}
.video_time{
    line-height: 45px;
    font-size: 28px;
    font-weight: 500;
    color: #999999;
    line-height: 45px;
    letter-spacing: 0.34px;
    margin-left: 15px;
}
.button{
    position: absolute;
    top: 0;
    width: 100%;
    height: calc(100% - 121px);
    display: flex;
    align-items: center;
    justify-content: center;
}
.video_start{
    width: 100px;
    height: 100px;
    opacity: 0.8;
}
</style>