<template>
    <div class="page">
       <drugGuideHeader title="在线讲座"></drugGuideHeader>
       <div class="online_list_all">
          <onlineList></onlineList>
          <div class="more_video">更多讲座</div>
          <div class="online_others">
              <moreVideo v-for="(item,index) in smallVideo" :key="index"
              :videoImg="item.img"
              :videoTitle="item.title"
              :videoTime="item.time"></moreVideo>
          </div>
       </div>
    </div>
</template>

<script>
import drugGuideHeader from '../components/drugGuideHeader.vue'
import onlineList from '../components/onlineList.vue'
import moreVideo from '@/components/moreVideo.vue'
export default{
    data(){
         return{
            smallVideo:[
                {title:'【小依说药2】药不能停',time:'2022-1-8',img:require('../assets/smallVideoOne.png')},
                {title:'【小依说药1】药不能停',time:'2022-1-8',img:require('../assets/smallVideoTwo.png')},
                {title:'2018药审报告',time:'2022-1-8',img:require('../assets/smallVideoThree.png')},
                {title:'执业药师去哪了？',time:'2022-1-8',img:require('../assets/smallVideoFour.png')},
            ]
         }
    },
    components:{
    drugGuideHeader,
    onlineList,
    moreVideo
}
}
</script>

<style>
.online_list_all{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 48px 0;
    background-color: #fff;
}
.more_video{
    width: 821px;
    margin: 30px 0;
    font-size: 37px;
    font-weight: 700;
    color: #333;
    line-height: 46px;
    letter-spacing: .45px;
}
.online_others{
    width: 856px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 35px;
}


</style>