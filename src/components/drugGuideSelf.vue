<template>
    <div class="guide_body_show">
        <div class="guide_body_show_item">
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
            {title:'个人药历',imgUrl:require('../../public/img/self.png')},
            {title:'药物整理',imgUrl:require('../../public/img/drugP.png')},
            {title:'不良反应上报',imgUrl:require('../../public/img/onto.png')},
            {title:'慢病档案',imgUrl:require('../../public/img/useDrug.png')}
        ]
       }
    }
     
}
</script>