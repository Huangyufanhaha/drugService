<template>
    <div class="pulicity_item_all">
        <div class="pulicity_item">
            <div class="item">
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
   data(){
        return{
        }
    },
    props:['name','imgUrl']
}



</script>

<style scoped>
.pulicity_item_all{
    width: 33.3%;
    cursor: pointer;
    padding: 24px 19px;
}
.pulicity_item{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 360px;
    background: #ffffff;
    box-shadow: 0 0 43px 3px #e5e5e5;
    border-radius: 20px;
}
.item{
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