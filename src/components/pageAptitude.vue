<template>
  <div class="list_page_license">
    <img src="../assets/aptitudeOne.png" alt="" class="pages_item">
    <img src="../assets/aptitudeOne.png" alt="" class="pages_item">
  </div>
</template>

<script>
export default {
    
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
.pages_item{
    width: 286px;
    height: 390px;
    margin-right: 16px;
    margin-bottom: 14px;
}


</style>