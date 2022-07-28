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
            name:'拆零销售',
            info:'为便利居民并减少药物浪费，在不影响药品质量的前提下，\n常规的特大包装的药品，提供拆零销售服务。'
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