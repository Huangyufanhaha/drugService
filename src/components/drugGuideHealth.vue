<template>
    <div class="guide_body_show">
        <div  class="guide_body_show_item">
            <drugList  
            v-for="(item,index) in guide"  
            :title="item.title" 
            :imgUrl="item.imgUrl" 
            :index="index" 
            :key="index"></drugList>
        </div>     
    </div>
        
        

</template>

<script>

import drugList from './drugList.vue'
export default{
    components:{
        drugList
    },
    data(){
       return{
         guide:[
            {title:'店内药品查询',imgUrl:require('../../public/img/serch.png')},
            {title:'国家药品查询',imgUrl:require('../../public/img/china.png')},
            {title:'健康测量',imgUrl:require('../../public/img/health.png')},
            {title:'自助清创',imgUrl:require('../../public/img/selfDrug.png')},
            {title:'免费冷藏袋',imgUrl:require('../../public/img/book.png')}
        ]
       }
    }
     
}
</script>