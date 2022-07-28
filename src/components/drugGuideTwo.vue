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
            name:'店铺指导',
            info:'提供店内用药指导，药师交待各种药品的用法、用量及注意事项，\n遇到不良反应该如何处理，及碰到紧急情况如何处理等等'
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