<template>
    <div class="header">
        <!-- <img src="../assets/homeTime.png" alt=""> -->
        <div class="time">
           <div class="clock">{{nowTime}}</div>
           <div class="date">
              <div class="calendar">{{getLunarDay.lunarYear}}{{getLunarDay.dateStr}}</div>
              <div class="calendar">{{nowDate}} {{week}}</div>
           </div>
        </div>
        <img src="../assets/homeHeader.png" alt=""  class="header_title">
        <div class="header_serve"><img src="../assets/date.png" alt=""></div>
    </div>
</template>

<script>
// 导入阴历时间
  import {getLunar} from 'chinese-lunar-calendar'
  export default{
        data(){
            return{
                nowTime:"",
                nowDate:"",
                week:"",
                getLunarDay:'',
                // year:new Date().getFullYear
                year: new Date().getFullYear(),
      	        month: new Date().getMonth() + 1,
      	        date: new Date().getDate()
            }
        },
        mounted:function(){
            var tim = this;
		      let hh = new Date().getHours()<10 ? '0' + new Date().getHours() :new Date().getHours();
		      let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
		      tim.nowTime = hh + ':' + mf;
              let yy = new Date().getFullYear();
              let mm = new Date().getMonth() < 9 ? '0'+ (new Date().getMonth()+1) : new Date().getMonth()+1;
              let dd = new Date().getDate();
              tim.nowDate = yy + '/' + mm + '/' + dd;
              let wk = new Date().getDay() 
              let weeks =  ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
              tim.week = weeks[wk]
              this.getLunarDay = getLunar(this.year,this.month,this.date)
        },
       
  }
 



</script>

<style>
.header{
    width: 100%;
    height: 142px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 50px;
    padding-right: 50px;
    box-shadow: 0px 6px 20px 0px rgba(0,121,253,0.10);
    background-color: #ffffff;
}
.header_title{
    margin-top: 16px;
}
.time{
    display: flex;
    align-items: center;
}
.clock{
    font-size: 60px;
    font-family: 'HBOLogoSupplement', 'HBOLogoSupplement-Regular';
    font-weight: 800;
    text-align: left;
    color: #007afd;
}
.header_serve{
    width: 285px;
    text-align: right;
}
.calendar{
    margin-left: 14px;
    color: #969696;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    font-family: 'Microsoft YaHei', 'Microsoft YaHei-Regular';
}
</style>