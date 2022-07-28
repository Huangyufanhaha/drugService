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
            name:'送药上门',
            info:'DTP品种全台州免费送货，台州市中心医院内15分钟内送到，\n台州市立医院内30分钟内送到，黄岩路桥一小时内送到。'
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