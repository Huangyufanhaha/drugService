<template>
    <div class="page">
       <drugGuideHeader title="科普文章"></drugGuideHeader>
       <div class="science_list_all">
          <scienceList v-for="(item,index) in articlList" :key="index"
          :articlTitle="item.title"
          :articlTime="item.time"
          :imgUrl="item.imgUrl"></scienceList>
       </div>
    </div>
</template>

<script>
import drugGuideHeader from '../components/drugGuideHeader.vue'
import scienceList from '@/components/scienceList.vue'
export default{
    data(){
        return{
            articlList:[
                {title:'【尖兵日记18】莫道桑榆晚 为霞尚满天',time:'发布时间：2022-05-24 14:14',imgUrl:require('../assets/pic.png')},
                {title:'监管科学 你我同行 | 糖皮质激素不良反应及对策',time:'发布时间：2022-05-24 14:14',imgUrl:require('../assets/sience.png')},
                {title:'《医疗器械临床试验备案表》送达方式有变化，请关注！',time:'发布时间：2022-05-24 14:14',imgUrl:require('../assets/pic.png')},
                {title:'【基层实践】这项工作被列入打假治劣“药剑”行动，湖州 全市检查覆盖面达100%！',time:'发布时间：2022-05-24 14:14',imgUrl:require('../assets/pic.png')},
                {title:'【基层实践】温州苍南县局念好“三字诀”开展儿童化妆品 专项检查',time:'发布时间：2022-05-24 14:14',imgUrl:require('../assets/true.png')},
                {title:'【基层实践】温州苍南县局念好“三字诀”开展儿童化妆品 专项检查',time:'发布时间：2022-05-24 14:14',imgUrl:require('../assets/xiaomai.png')},
                {title:'【药监“浙”一周】5.16—5.20',time:'发布时间：2022-05-24 14:14',imgUrl:require('../assets/sience.png')},
            ],
        }
    },
    components:{
        drugGuideHeader,
        scienceList
    }

}
</script>
<style>
.science_list_all{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 49px 0;
    background-color: #fff;
}

</style>