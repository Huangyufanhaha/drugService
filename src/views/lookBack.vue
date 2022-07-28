<template>
    <div class="page">
       <drugGuideHeader title="往期回顾"></drugGuideHeader>
       <div class="past_review">
          <img  v-for="(item,index) in imgList" :key="index" 
          :src="item.imgUrl" class="past_review_img">
       </div>
    </div>
</template>

<script>
import drugGuideHeader from '../components/drugGuideHeader.vue'
export default{
    data(){
       return{
        imgList:[
            {imgUrl:require('../assets/one.png')},
            {imgUrl:require('../assets/two.png')},
            {imgUrl:require('../assets/three.png')},
            {imgUrl:require('../assets/four.png')},
            {imgUrl:require('../assets/five.png')},
            // {imgUrl:require('../assets/six.png')}
        ]
       }
    },
    components:{
        drugGuideHeader
    }
}
</script>
<style>
.past_review{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 48px 0;
    background-color: #fff;
}
.past_review_img{
    width: 821px;
    margin-top: 10px;
}

</style>