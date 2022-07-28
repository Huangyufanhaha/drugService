<template>
    <div class="guide_body_show">
        <div class="guide_body_show_item" v-if="show">
            <drugList  
                v-for="(item,index) in guide"  
                :title="item.title" 
                :imgUrl="item.imgUrl" 
                :key="index"
                @click.native="current(index)"
                ></drugList>
        </div>
        <component :is='comName' 
        @goBack="goBack"
        @toGuideList="toGuideList"></component>     
    </div>
</template>

<script>
import drugList from './drugList.vue'
import purchaseOnePage from './purchaseOnePage.vue'
import deliverMedicine from './deliverMedicine.vue'
import retailSplit from './retailSplit.vue'
export default{
    data(){
       return{
         guide:[
            {title:'药品代购',imgUrl:require('../../public/img/shopCar.png')},
            {title:'送药上门',imgUrl:require('../../public/img/car.png')},
            {title:'拆零销售',imgUrl:require('../../public/img/drug.png')},
            {title:'家庭药箱整理',imgUrl:require('../../public/img/homeDrug.png')},
            {title:'免费冷藏袋',imgUrl:require('../../public/img/leng.png')}
        ],
        comName:'',
        show:true
       }
      
    },
    methods: {
        current(index){
           if(index == 0){
             this.comName = purchaseOnePage,
             this.show = false
           }else if(index==1){
            this.comName = deliverMedicine,
            this.show = false
           }else if(index==2){
            this.comName = retailSplit,
            this.show = false
           }
        },
        // 返回按钮
        goBack(){
            this.show=true,
            this.comName = ''
        
        },
        toGuideList(){
            this.show=true,
            this.comName = ''
        }
    // },
     
    },
    components:{
        drugList,
        purchaseOnePage,
        deliverMedicine,
        retailSplit

    }
     
}
</script>