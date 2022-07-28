<template>
    <div class="page">
        <drugGuideHeader title="药品代购预约"></drugGuideHeader>
        <decoctionAppoin 
        :head="head"
        :text="text"
        @confirm="confirm"></decoctionAppoin>
    </div>
</template>
<script>
import drugGuideHeader from "../components/drugGuideHeader.vue";
import decoctionAppoin from "../components/decoctionAppoin.vue";
// import decoctionConfirm from '../components/decoctionConfirm.vue'
export default{
    data(){
       return{
        head:'药品代购预约',
        text:'提供代购药品服务：对居民购买不到的药品，通过网上或药店现场预约登记后，我们可以借助华东医药总部遍布全国的采购网络，帮忙予以代购，解决群众的燃眉之急。代购药品需要预约登记，请点击确认。',
        // cont:'每周四下午提供药物整理服务',
        // flag:true
       }
    },
    methods:{
        confirm(){
            // 点击确认按钮，切换组件
            // this.flag = false
        }
    },
    components:{
    drugGuideHeader,
    decoctionAppoin,
    // decoctionConfirm
}
}


</script>