<template>
    <div class="page">
        <drugGuideHeader title="生活服务"></drugGuideHeader>
        <div class="drug_service">
            <drugFourlist 
            v-for="item in list" :key="item.id" 
            :name="item.name" 
            :imgUrl="item.imgUrl"></drugFourlist>
        </div>
    </div>
</template>
<script>
import drugGuideHeader from '../components/drugGuideHeader.vue'
import drugFourlist from '@/components/drugFourlist.vue'
export default{
    data(){
        return{
            list:[
                {name:'提供茶水',imgUrl:require('../../public/img/water.png')},
                {name:'提供雨具',imgUrl:require('../../public/img/rain.png')},
                {name:'提供消毒液',imgUrl:require('../../public/img/box.png')},
                {name:'提供充电设备',imgUrl:require('../../public/img/giveAng.png')}
            ],
        }
    },
    components:{
        drugGuideHeader,
        drugFourlist
        
    }
}


</script>

<style scoped>
.drug_service{
    padding: 80px 50px 50px ;
    display: flex;
    flex-wrap: wrap;
}

</style>