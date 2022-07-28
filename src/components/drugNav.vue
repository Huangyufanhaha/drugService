<template>
    <div class="section_main_function">
        <div class="main_function_top">
            <div @click="goTodrugGuide" class="aaa">
                <div class="top_guide">
                    <div class="top_guide_title">药事指导</div>
                    <img src="../assets/guide.gif" alt="" class="top_guide_pho">
                    <div class="top_guide_goto">立即前往</div>
                </div>
            </div>

            <div class="top_serve">
                <div class="top_serve_inquire">
                    <img src="../assets/inquire.gif" alt="">
                    <div class="top_serve_titel">药品查询</div>
                </div>

                <div class="top_serve_inquire" @click="todrugService">
                    <img src="../assets/serve.gif" alt="">
                    <div class="top_serve_titel">中医药服务</div>
                </div>
        </div>
    </div>

    <div class="main_function_bottom">
        <div @click="todrugPublicity">
            <div class="bottom_item">
                <img src="../assets/publicize.gif" alt="" class="bottom_item_pho">
                <div class="bottom_item_title">科普宣传</div>
            </div>
        </div>

        <div @click="todrugLife" >
            <div class="bottom_item">
                <img src="../assets/life.gif" alt="" class="">
                <div class="bottom_item_title">生活服务</div>
            </div>
        </div>               

        <div @click="todrugAppointment">
            <div class="bottom_item">
                <img src="../assets/custom.gif" alt="">
                <div class="bottom_item_title">一键预约</div>
                </div>
        </div>                 
    </div>
 </div> 
</template>
<script>
export default{
    methods:{
        goTodrugGuide(){
            this.$router.push('/drugGuide')
        },
        todrugService(){
            this.$router.push('/drugService')
        },
        todrugPublicity(){
            this.$router.push('/drugPublicity')
        },
        todrugLife(){
            this.$router.push('/drugLife')
        },
        todrugAppointment(){
            this.$router.push('/drugAppointment')
        }
    }
}


</script>

<style>
.section_main_function{
    margin-left: 40px;
}
.main_function_top{
    display: flex;
}
.top_guide{
    flex: 1;
    width: 320px;
    height: 480px;
    background-color: #ffffff;
    text-align: center;
    box-shadow: 0 0 43px 3px #e5e5e5;
    cursor: pointer;
}
.top_guide_title{
    padding: 51px 0 31px 0;
    font-size: 30px;
    font-weight: 700;
    color: #006150;
}
.top_guide_pho{
    width: 300px;
}
.top_guide_goto{
    width: 194px;
    height: 50px;
    margin: 0 auto;
    border-radius: 25px;
    margin-bottom: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    box-shadow: 0px 1px 30px 0px rgba(255,195,59,0.50); 
    background:  #ffc33c;
}
.top_serve{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 39px;
    cursor: pointer;
}
.top_serve_inquire{
    width: 320px;
    height: 222.5px;
    display: flex;
    position: relative;
    background-color: #ffffff;
    box-shadow: 0px 0px 41.71px 1.29px #e5e5e5; 
}
.top_serve_titel{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 30px;
    color: #006150;
    font-weight: 700;
    right: 22px;
}
.main_function_bottom{
    margin-top: 39px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bottom_item{
    width: 200px;
    height: 306px;
    position: relative;
    text-align: center;
    background-color: #ffffff;
    box-shadow: 0px 0px 41.71px 1.29px #e5e5e5; 
    cursor: pointer;
}
.bottom_item_pho{
    width: 100%;
    vertical-align: middle;
}
.bottom_item_title{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 54px;
    font-size: 30px;
    color:#006150;
    font-weight: 700;
}


</style>