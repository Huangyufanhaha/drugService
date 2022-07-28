<template>
     <div class="guide_body_show" >
        <!-- 点击社区指导里面的子项目  切换组件 -->
        <div class="guide_body_show_item"  v-if="show">
            <drugList   
            v-for="(item,index) in guide"  :key="index" 
            :title="item.title" 
            :imgUrl="item.imgUrl" 
            @click.native="current(index)"
            ></drugList>
        </div>
        <component :is='comName' @toGuideList="toGuideList"></component>
    </div> 
</template>

<script>
import drugList from './drugList.vue'
import drugGuideOne from './drugGuideOne.vue'
import drugGuideTwo from './drugGuideTwo.vue'
import drugGuideOnLine from './drugGuideOnLine.vue'
import drugGuideThree from './drugGuideThree.vue'
import drugGuidePhone from './drugGuidePhone.vue'
export default{
    data(){
       return{
         guide:[
            {title:'社区指导',imgUrl:require('../../public/img/community.png'),num:'1'},
            {title:'店内指导',imgUrl:require('../../public/img/shop.png'),num:'2'},
            {title:'线上指导',imgUrl:require('../../public/img/try.png'),num:'3'},
            {title:'电话指导',imgUrl:require('../../public/img/online.png'),num:'4'},
            {title:'医疗器械校准',imgUrl:require('../../public/img/phone.png'),num:'5'}
        ],
        show:true,
        comName:''
       }
    },
    methods:{
       current(index){
          if(index == 0){
            this.comName = drugGuideOne,
            this.show = false
          }else if(index == 1){
            this.comName = drugGuideTwo,
            this.show = false
          }else if(index == 2){
            this.comName = drugGuideOnLine,
            this.show = false
          }else if(index == 3){
            this.comName = drugGuidePhone,
            this.show = false
          }else if(index == 4){
            this.comName = drugGuideThree,
            this.show = false
          }
       },
       toGuideList(){
           this.show = true
           this.comName = ''
       }
    },
     components:{
        drugList,
        drugGuideOne,
        drugGuideTwo,
        drugGuideOnLine,
        drugGuideThree,
        drugGuidePhone
    }
     
}

</script>
<style>
.guide_body_show{
    padding-left: 39px;
    width: 100%;
}
.guide_body_show_item{
    display: flex;
    padding-top: 80px;
    align-items: center;
    flex-wrap: wrap;
    transition: all o.3s;
}



</style>