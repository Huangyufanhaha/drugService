<template>
     <div class="section_main_intro">
                    <div class="intro_head">
                         <div class="intro_head_firm">
                            <div class="firm_head">
                                <img src="../assets/firm.png" alt="" class="hospital_pho">
                                <div class="firm_name">
                                    <div class="firm_name_title">华东医药台州有限公司东海大道店</div>
                                    <div class="firm_name_address">台州市椒江区东海大道793号</div>
                                    <div class="firm_star">
                                        <img src="../assets/littleStar.png" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="firm_intro">华东大药房东海大道店，是椒江区内开设的一家5星药事服务中心。面向所有居民，让居民在“家门口”享受到专业、优质、安全、人性化的用药用械咨询指导服务，满足群众知药、懂药、购好药、会用药的需求。华东大药房东海大道店，是椒江区内开设的一家5星药事服务中心。面向所有居民，让居民在“家门口”享受到专业、优质、安全、人......</div>
                         </div>
                         <div class="intro_head_erweima">
                            <div class="erweima_title">药师热线</div>
                            <img src="../assets/doctor.png" alt="" class="erweima_doctor">
                            <div class="doctor_name">蒋医师</div>
                            <div class="doctor_phone">1358 5864 8526</div>
                            <div class="erweima">
                                <img src="" alt="">
                            </div>
                            <div class="erweima_name">扫码关注</div>
                         </div>
                    </div>
                    <div class="intro_list">
                        <div class="intro_list_title">
                            <div class="list_title_item" 
                             @click="toggleTab('pageLicense')"
                             :class="{active:currentTab === 'pageLicense'}">相关证件</div>
                            <div class="list_title_item"
                             @click="toggleTab('pageAptitude')"
                             :class="{active:currentTab === 'pageAptitude'}">药师资质</div>
                            <div class="list_title_item"
                             @click="toggleTab('pageSystem')"
                             :class="{active:currentTab === 'pageSystem'}">药事服务站工作制度</div>
                            <div class="list_title_item"
                             @click="toggleTab('pagePharmacist')"
                             :class="{active:currentTab === 'pagePharmacist'}">执业药师风采</div>
                        </div>
                        <component v-bind:is="currentTab"></component>
                    </div>
     </div>
</template>

<script>
 import pageLicense from './pageLicense'
 import PageAptitude from './pageAptitude'
 import pageSystem from './pageSystem'
 import pagePharmacist from './pagePharmacist'
  export default{
    data(){
        return{
            currentTab:'pageLicense', 
        }
        
    },
    methods:{
          toggleTab:function(tab){
            this.currentTab = tab;
          }
    },
    components:{
        pageLicense,
        PageAptitude,
        pageSystem,
        pagePharmacist
    }
  }
</script>


<style scoped>

.section_main_intro{
    width: 1100px;
    height: 825px;
    box-shadow: 0 0 43px 3px #e5e5e5;
}
.intro_head{
    height: 308px;
    display: flex;
    background-color: #fff;
}
.intro_head_firm{
    flex: 1;
    overflow: hidden;
    padding: 30px 35px 49px 30px;
    border-right: 1px solid #d7eaff;
}
.firm_head{
    display: flex;
}
.hospital_pho{
    width: 126px;
    height: 126px;
}
img{
    vertical-align: middle;
    border-style: none;
}
.firm_name{
    margin-left: 29px;
}
.firm_name_title{
    font-size: 30px;
    color: #2f2f2f;
    font-weight: 700;
    padding-bottom: 15px;
}
.firm_name_address{
    padding-bottom: 18px;
    font-size: 14px;
    font-weight: 500;
    color: #646464; 
}
.firm_star{
    width: 156px;
    height: 27px;
}
.firm_intro{
    margin-top: 25px;
    font-size: 14px;
    color: #323232;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -web-box-orient:vertical;
}
.intro_head_erweima{
    width: 225px;
    position: relative;
    text-align: center;
    margin: 23px 0 14px 0;
}
.erweima_title{
    font-size: 16px;
    font-weight: 700;
    color: #323232;
}
.erweima_doctor{
    margin-top: 15px;
    margin-bottom: 5px;
    width: 30px;
    height: 34px;
}
.doctor_name{
    font-size: 14px;
    color: #969696;
}
.doctor_phone{
    font-size: 14px;
    color: #323232;
}
.erweima{
    padding-top: 15px;
}
.erweima img{
    width: 109px;
    height: 109px;
    background-color: #d7eaff;
}
.erweima_name{
    font-size: 14px;
    font-weight:500;
    color: #323232;
}
.intro_list{
    height: 517px;
    background-color: #d7eaff;
    padding: 29px 30px 26px 27px;
}
.intro_list_title{
    display: flex;
    align-items: center;

}
.list_title_item{
    margin-right: 59px;
    padding-bottom: 14px;
    font-size: 24px;
    color: #32518a;
    cursor: pointer;
}
.active{
    position: relative;
    font-weight: 700;
}
.active::before{
    
    content: "";
    position: absolute;
    color: #32518a;
    cursor: pointer;
    font-weight: bolder;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 87px;
    height: 8px;
    opacity: 1;
    background: #32518a;
}
/* .list_title_item::before{
   
} */

</style>


