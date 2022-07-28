<template>
    <div class="drug_servic">
        <drugGuideHeader :title="title"></drugGuideHeader>
        <div class="drug_service_content">
             <drugInfoTwo  v-if="itemShow"
             :name="name"
             :info="info"
             @toGuideList="toGuideList"></drugInfoTwo>
             <DrugDecoctionShow v-else-if="itemShowNow"></DrugDecoctionShow>
        </div>
    </div>
</template>
<script>
import drugGuideHeader from './drugGuideHeader.vue'
import drugInfoTwo from './drugInfoTwo.vue'
import drugDecoction from './drugDecoction.vue'
import DrugDecoctionShow from './drugDecoctionShow.vue'
export default{
    data(){
       return{
        itemShow:true,
         name:'',
         info:'',
         title:''
       }
    },
    methods:{
        // 返回上一个路由
        toGuideList(){
            this.$router.back()
        }
    },
    components:{
    drugGuideHeader,
    drugInfoTwo,
    drugDecoction,
    DrugDecoctionShow
},
  mounted(){
    // 根据id切换对应的路由
     if(this.$route.params.id == 1){
        this.title = this.name = '药材切片',
        this.info ='西洋参、高丽参、天麻等中药免费切片'
    }else if(this.$route.params.id == 2){
        this.title = this.name = '药材打粉',
        this.info ='西洋参、铁皮枫斗、阿胶等中药免费打粉'
    }else if(this.$route.params.id == 3){
        this.title = '中药代煎登记'
        this.itemShowNow = true
        this.itemShow = false
    }
  }

}

</script>
<style>
/* .drug_service_conten{
    margin:40px 110px ;
} */

</style>