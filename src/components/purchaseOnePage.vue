<template>
    <drugPurchase :text="text" @goBack="goBack"></drugPurchase>
</template>
<script>
import drugPurchase from "./drugPurchase.vue";
export default{
    data(){
       return{
        text:'提供代购药品服务：对居民购买不到的药品， \n通过网上或药店现场预约登记后，我们可以借助华东医药总部遍布全国的采购网络，帮忙予以代购，\n解决群众的燃眉之急。代购药品需要预约登记，请点击确认。'
       }
    },
    components:{
        drugPurchase
    },
    methods: {
       goBack(){
        this.$emit('goBack')
       }  
    },
}

</script>