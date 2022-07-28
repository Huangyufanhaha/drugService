<template>
    <div class="page">
        <drugGuideHeader title="科普宣传"></drugGuideHeader>
        <div class="publicity_cont">
            <drugThreelist v-for="item in list" 
            :key="item.id"
            :name="item.name" 
            :imgUrl="item.imgUrl" 
            @click.native="toScience(item.id)"></drugThreelist>
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
                {id:1,name:'科普文章',imgUrl:require('../../public/img/essay.png')},
                {id:2,name:'在线讲座',imgUrl:require('../../public/img/lecture.png')},
                {id:3,name:'往期回顾',imgUrl:require('../../public/img/backLook.png')},
                {name:'万方医疗数据库',imgUrl:require('../../public/img/review.png')}
            ]
        }
    },
    methods:{
        toScience(id){
            // 根据id值跳转不同的路由链接
            if(id == 1){
                this.$router.push('/scienceArticles')
            }else if(id == 2){
                this.$router.push('/onlineTeach')
            }else if(id == 3){
                this.$router.push('/lookBack')
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
