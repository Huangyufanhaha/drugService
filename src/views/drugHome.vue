<template>
    <div class="page">
       <drugHeader></drugHeader>
        <div class="section">
            <div class="section_main">
                 <hospitalIntro></hospitalIntro>
                 <drugNav></drugNav>
            </div>
           <drugFooter></drugFooter>
        </div>
    </div>
</template>
<script>
    import drugHeader from '../components/drugHeader.vue'
    import hospitalIntro from '../components/hospitalIntro.vue'
    import drugNav from '../components/drugNav.vue'
    import drugFooter from '../components/drugFooter.vue'
    


    export default{
        components:{
            drugHeader,
            hospitalIntro,
            drugNav,
            drugFooter
            
        }
    }
</script>
<style>
.section{
   padding:38px 51px 24px 50px ; 
}
.section_main{
    display: flex;
}

</style>