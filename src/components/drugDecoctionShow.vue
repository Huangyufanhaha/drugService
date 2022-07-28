<template>
    <div>
        <drugDecoction  v-if="flag"
        :title="title"
        :content="content"
        @center="center"></drugDecoction>
        <drugDecoctionList v-else></drugDecoctionList>
    </div>
</template>
<script>
import drugDecoction from "./drugDecoction.vue";
import drugDecoctionList from "./drugDecoctionList.vue";
export default{
    components:{
        drugDecoction,
        drugDecoctionList
    },
    data(){
       return{
           title:'中药代煎',
           content:'华东医药智能煎药服务中心是目前国内第一家实现调配半自动化、煎药无人化的代煎企业，在传统煎药基础上运用互联网、大数据、智能制造等技术，实现智能调剂、智能煎煮、智能仓储以及智能包装， 总投资7000余万元，现已为省内多家大医院提供精准高效安全的电子处方对接以及一站式智能化煎药服 务，日接方超过4000张。需要代煎中药的，我们帮忙与杭州华东中药饮片公司对接代煎服务，煎好的中药用顺丰快递寄到家。有需要请点确认。',
           flag:true
        }
    },
    methods:{
        center(){
            // console.log('app');
            this.flag = false
        }
    }
}

</script>