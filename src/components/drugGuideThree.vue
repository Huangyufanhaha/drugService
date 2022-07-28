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
            name:'医疗器械校准',
            info:'居民家庭常用的血压计、体温计等无法测量时，\n我们可以帮忙进行调整校准，\n必要时，我们可以帮忙联系厂方进行维修。'
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