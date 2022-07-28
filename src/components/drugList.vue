<template>
    <div class="show_item">
            <div class="item_pho">
            <img :src="imgUrl">
            </div>
        <div class="item_title">{{title}}</div>
        </div>
</template>


<script>
 export default({
    data:{
       
    },
    props:['imgUrl','title'],
    methods: {
    },
 })
</script>
<style scoped>
.v-enter,
.v-leave-to{
     opacity: 0;
     transform: translateX(100%);
}
.v-enter-active,
.v-leave-active{
    transition: all 0.5s ease;
}

.show_item{
    display: flex;
    width: 490px;
    height: 360px;
    align-items: center;
    justify-content: center;
    margin: 0 20px 48px 20px;
    background: #ffffff;
    border-radius: 20px;
    box-shadow: 0 0 43px 3px #e5e5e5;
    text-decoration: none;
    cursor: pointer;
}
.item_pho{
    display: flex;
    width: 144px;
    height: 144px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(0,122,253,.2);
}
.item_pho img{
    width: 100px;
    height: 100px;
}
.item_title{
    padding-left: 48px;
    font-size: 36px;
    font-weight: 700;
    color: #17498c;
}
</style>