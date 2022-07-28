<template>
    <div class="drug_guide">
        <div class="guide_body_nav" >
        <div class="body_nav">
            <div class="body_nav_item"
            @click="toggleTab('drugGuideList')"
            :class="{active : active == 'drugGuideList' }">
            <img :src="active == 'drugGuideList' ? WhiteUrl : Url " class="nav_item_pho">
             药械指导
            </div>
        </div>
        <div class="body_nav">
            <div class="body_nav_item" 
             @click="toggleTab('drugBuySevice')"
            :class="{active : active == 'drugBuySevice' }">
            <img :src="active == 'drugBuySevice' ? WhiteUrl2 : Url2 " class="nav_item_pho">
            购药服务
            </div>
        </div>
         <div class="body_nav">
            <div class="body_nav_item"  
            @click="toggleTab('drugGuideSelf')"
             :class="{active : active == 'drugGuideSelf' }">
             <img :src="active == 'drugGuideSelf' ? WhiteUrl3 : Url3 " class="nav_item_pho">
             个人药历档案
             </div>
         </div>
        <div class="body_nav">
        <div class="body_nav_item" 
            @click="toggleTab('drugGuideHealth')"
            :class="{active : active == 'drugGuideHealth' }">
            <img :src="active == 'drugGuideHealth' ? WhiteUrl4 : Url4 " class="nav_item_pho">
            健康自助
        </div>
        </div>
     </div> 

       
          <component :is="active"></component>
        
       

    </div> 
        
   
</template>
<script>
import drugGuideList from '../components/drugGuideList.vue'
import drugBuySevice from './drugBuySevice'
import drugGuideSelf from '../components//drugGuideSelf.vue'
import drugGuideHealth from '../components//drugGuideHealth.vue'
export default{
    data(){
      return{
        active:'drugGuideList',
        Url:'',
        WhiteUrl:'',
      }
    },
    methods:{
        toggleTab(tab){
            this.active = tab;
        } ,
    },
    created(){
       this.Url = require('../assets/drugGuide.png')
       this.WhiteUrl = require('../assets/drugGuideTwo.png')
       this.Url2 = require('../assets/buyDrug.png')
       this.WhiteUrl2 = require('../assets/buyDrugTwo.png')
       this.Url3 = require('../assets/archives.png')
       this.WhiteUrl3 = require('../assets/archivesTwo.png')
       this.Url4 = require('../assets/health.png')
       this.WhiteUrl4 = require('../assets/healthTwo.png')
    },
    components:{
        drugGuideList,
        drugBuySevice,
        drugGuideSelf,
        drugGuideHealth,
    }
   
}

</script>
<style scoped >
.select{
    background: #007afd;
    color: #ffffff;
}
.drug_guide{
    display: flex;
}
.body_nav{
    background: #fff;
    border-radius: 0 50px 50px 0 ;
    box-shadow: 0 0 43px 3px #e5e5e5;
}

.active{
    background: #007afd;
    color: #fff;
    box-shadow:none;
}
.guide_body_nav{
    margin-top: 226px;
    left: 0;
    color:#32518A ;
}
.body_nav_item{
    width: 283px;
    height: 100px;
    display: flex;
    align-items: center;
    margin-bottom: 13px;
    font-size: 24px;
    font-weight: 700;
    border-radius: 0 50px 50px 0 ;
    
    cursor: pointer;
}
.nav_item_pho{
    width: 60px;
    height: 60px;
    margin-left:30px ;
    margin-right: 20px;
}
</style>