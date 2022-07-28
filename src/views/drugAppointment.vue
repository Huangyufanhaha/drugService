<template>
    <div class="page">
        <drugGuideHeader title="一键预约"></drugGuideHeader>
        <div class="publicity_cont">
            <drugThreelist v-for="(item,index) in list" :key="index" 
            :name="item.name" 
            :imgUrl="item.imgUrl" 
            @click.native="toAppointItem(index)"></drugThreelist>
        </div>
       
    </div>
</template>
<script>
import drugGuideHeader from '../components/drugGuideHeader.vue'
import drugThreelist from '../components/drugThreelist.vue'
export default{
    components:{
        drugGuideHeader,
        drugThreelist
    },
    data(){
        return{
            list:[
                {name:'药物整理预约',imgUrl:require('../../public/img/tidyUp.png')},
                {name:'药品代购预约',imgUrl:require('../../public/img/purchasing.png')},
                {name:'中药代煎预约',imgUrl:require('../../public/img/fryInstead.png')},
                {name:'药箱整理预约',imgUrl:require('../../public/img/kit.png')},
                {name:'中药材鉴别预约',imgUrl:require('../../public/img/differential.png')}
               
            ]
        }
    },
    methods:{
        toAppointItem(index){
            // 根据索引值跳转路由
            if(index == 0){
                  this.$router.push('/intDrugsorting')
            }else if(index == 1){
                this.$router.push('/intPurchasing')
            }else if(index == 2){
                this.$router.push('/drugServiceDetail/3')
            }else if(index == 3){
                this.$router.push('/intMedboxsort')
            }else if(index == 4){
                this.$router.push('/intIdentification')
            }
        }
    }
}
</script>
<style scoped>
.publicity_cont{
    padding: 80px 50px 50px ;
    display: flex;
    flex-wrap: wrap;
}

</style>