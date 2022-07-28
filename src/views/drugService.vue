<template>
    <div class="page">
        <drugGuideHeader title="中医药服务"></drugGuideHeader>
        <div class="drug_service">
            <drugFourlist 
            v-for="item in list" :key="item.id" 
            :name="item.name" 
            :imgUrl="item.imgUrl"
            @click.native="toDetail(item.id)"></drugFourlist>
        </div>
    </div>
</template>
<script>
import drugGuideHeader from '../components/drugGuideHeader.vue'
import drugFourlist from '@/components/drugFourlist.vue'
export default{
    components:{
        drugGuideHeader,
        drugFourlist
    },
    data(){
        return{
            list:[
                {id:1,name:'药材切片',imgUrl:require('../../public/img/pace.png')},
                {id:2,name:'药材打粉',imgUrl:require('../../public/img/flour.png')},
                {id:3,name:'中药代煎',imgUrl:require('../../public/img/instead.png')}
            ],
        }
    },
    methods:{
        toDetail(id){
            // console.log(this.$route);
            // 跳转路由并携带query参数
            this.$router.push(
                {path:'/drugServiceDetail/' + id,})
        }
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