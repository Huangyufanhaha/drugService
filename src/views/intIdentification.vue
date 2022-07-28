<template>
    <div class="page">
        <drugGuideHeader title="中药材鉴别预约"></drugGuideHeader>
        <decoctionAppoin v-if="flag"
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
        head:'中药材鉴别预约',
        text:'通过网上或来店预约，定每周四下午提供免费鉴别中药真伪服务。',
        cont:'每周四下午提供中药材鉴别服务',
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