<template>
    <div class="page">
        <drugGuideHeader title="药物整理预约"></drugGuideHeader>
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
        head:'药物整理预约',
        text:'患三种以上慢病，服用5种以上药物，寻找多科室或多名医生就诊的，且用药后有明显不良反应症状的患者，通过网上预约或来药店登记用药情况，由我们的药师沟通了解情况后，经与药师专家团共同分析，给出用药指导和注意提醒或建议。需要预约请点确认。',
        cont:'每周四下午提供药物整理服务',
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