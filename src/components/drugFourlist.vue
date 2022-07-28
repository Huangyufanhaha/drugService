<template>
    <div class="drug_serve_item">
       <div class="serve_item">
            <div class="item_cont">
                <div class="item_pic">
                    <img :src="imgUrl">
                </div>
                <div class="item_title">{{name}}</div>
            </div>
       </div>
    </div>
</template>
<script>


export default{
    props:['name','imgUrl'],
    
}

</script>

<style scoped>
.drug_serve_item{
    width: 25%;
    cursor: pointer;
    padding: 24px 19px;
}
    
.serve_item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 360px;
    background: #ffffff;
    box-shadow: 0 0 43px 3px #e5e5e5;
    border-radius: 20px;
    cursor: pointer;
    padding: 24px 19px;
}

.item_cont{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.item_pic{
    display: flex;
    width: 144px;
    height: 144px;
    border-radius: 50%;
    background: rgba(0,122,253,.2);
    align-items: center;
    justify-content: center;
}
.item_title{
    padding-top:38px ;
    font-size: 36px;
    font-weight: 700;
    color: #17498c;
}

</style>

