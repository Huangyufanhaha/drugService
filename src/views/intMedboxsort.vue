<template>
    <div class="page">
        <drugGuideHeader title="药箱整理预约"></drugGuideHeader>
        <decoctionAppoin  v-if="flag"
        :head="head"
        :text="text"
        @confirm="confirm"></decoctionAppoin>
        <decoctionConfirm v-else
        :cont="cont"></decoctionConfirm>
    </div>
</template>
<script>
import drugGuideHeader from "../components/drugGuideHeader.vue";
import decoctionAppoin from "../components/decoctionAppoin.vue";
import decoctionConfirm from '../components/decoctionConfirm.vue'
export default{
    data(){
       return{
        head:'药箱整理预约',
        text:'通过帮助居民整理家庭药箱，指导药品储存方法，指导用药，帮居民建立用药清单，并将过期药品进行回收、合规处理。',
        cont:'每周四下午提供药箱整理服务',
        flag:true
       }
    },
    methods:{
        confirm(){
            // 点击确认按钮，切换组件
            this.flag = false
        }
    },
    components:{
    drugGuideHeader,
    decoctionAppoin,
    decoctionConfirm
}
}


</script>