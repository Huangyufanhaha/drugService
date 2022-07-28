<template>
     <div class="list_page_license">
        <img src="../assets/scoped.png" alt="" class="page_license_img_scoped">
        <img src="../assets/scoped.png" alt="" class="page_license_img_scoped">
        <img src="../assets/scoped.png" alt="" class="page_license_img_scoped">
        <img src="../assets/scoped.png" alt="" class="page_license_img_scoped">
        <img src="../assets/scoped.png" alt="" class="page_license_img_scoped">
     </div>
</template>

<script>
export default {
    name:'pagePharmacist'
}


</script>

<style>
.list_page_license{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    overflow: scroll;
    overflow-y: auto;
    padding-top: 20px;
    height: calc(100% - 25px);
}
.list_page_license::-webkit-scrollbar{
    width: 1px;   
    height: 1px;
}
.page_license_img_scoped{
    width: 233px;
    margin-right: 24px;
    margin-bottom: 14px;
}
</style>