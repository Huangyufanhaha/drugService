<template>
     <div class="list_page_license">
        <img src="../assets/license.png" alt="" class="page_license_img">
        <img src="../assets/medicalEquipment.png" alt="" class="page_license_img">
        <img src="../assets/license.png" alt="" class="page_license_img">
        <img src="../assets/license.png" alt="" class="page_license_img">
     </div>
</template>

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
.page_license_img{
    width: 503px;
    height: 301px;
    margin-right: 16px;
    margin-bottom: 14px;
}
</style>