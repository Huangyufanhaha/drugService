<template>
    <drugInfo
    :name="name"
    :info="info"
    @toGuideList="toGuideList"></drugInfo>
</template>
<script>
import drugInfo from "./drugInfo.vue";
export default{
    data(){
        return{
            name:'社区指导',
            info:'每年开展2场进社区药事服务活动,\n提供量血压，帮助居民整理药箱及对过期药品进行回收，\n中药材的真假鉴别及器械使用指导、校准等服务'
        }
    },
    methods:{
        toGuideList(){
            this.$emit('toGuideList')
        }
    },
    components:{
        drugInfo
    }
}
</script>