<template>
    <div class="page">
        <drugGuideHeader title="药事指导"></drugGuideHeader>
        <DrugGuideNav></DrugGuideNav>
    </div>
</template>
<script>
import drugGuideHeader from '../components/drugGuideHeader.vue'
import DrugGuideNav from '@/components/drugGuideNav.vue'
export default{
    components:{
    drugGuideHeader,
    DrugGuideNav
}
}


</script>

<style>
.page{
    height: 100%;
    background-color: #f1f8ff;
    overflow-y: auto;
    overflow-x: hidden;
}
</style>