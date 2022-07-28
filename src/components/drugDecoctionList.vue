<!-- 中药代煎登记列表组件 -->
<template>
    <div class="drugdecoction_list" >
       <div class="drugdecoction_form">
            <div class="form_head">委托人信息</div>
            <!-- 联系人信息区域 -->
            <div class="form_cont">
                    <div class="form_cont_left">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="联系人:" prop="name">
                                <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                            </el-form-item>
                            <el-form-item label="取药方式:" prop="resource">
                                <el-radio-group v-model="ruleForm.resource">
                                <el-radio label="自提"></el-radio>
                                <el-radio label="快递"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                        </el-form>
                        </div>
                        <div class="form_cont_right">
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="联系方式:" prop="name">
                                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-form>
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="收货方式:" prop="name">
                                    <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-form>
                </div>
            </div>
            <!-- 备注 -->
            <div class="form_text">
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="备注" prop="desc">
                         <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                    </el-form-item>
                </el-form>
            </div>   
            <!-- 提交按钮 -->
            <div class="form_button">
                <el-button type="primary">保存</el-button>
                <el-button @click=$router.back()>返回</el-button>
            </div>  

       </div>
    </div>
</template>

<script>
import DrugServiceDetail from './drugServiceDetail.vue';
 export default {
    data() {
        return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules:{

        }
        }
    },
    methods: {
       
    },
    components: { DrugServiceDetail }
}

</script>


<style scoped>

.drugdecoction_list{
    display: flex;
    height: 815px;
    flex-direction: column;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 0 43px 3px #e5e5e5;
    padding: 40px;
    margin-top: 40px;
    margin-left: 110px;
    margin-right: 110px;
    overflow-y:hidden ;
}
.el-form-item{
    margin-bottom: 60px;
}
.form_head{
    position: relative;
    padding-left: 17px;
    margin-bottom: 20px;
    margin-left: 50px;
    font-size: 30px;
    font-weight: 700;
    color: #3d4871;
}
.form_head::after{
    position: absolute;
    content: "";
    top: 50%;
    left: 0;
    width: 8px;
    height: 36px;
    background: #007bfd;
    border-radius: 4px;
    transform: translateY(-50%);
}
.form_cont{
    display: flex;
    justify-content: space-around;
}
.form_cont_left,.form_cont_right{
    display: block;
    width: 44.5%;
}
.form_cont_name{
    display: flex;
    justify-content: flex-end;
    height: auto;

}
.cont_name{
    /* width: 25%; */
    width: 80px;
    margin-right: 32px;
    height: 23px;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
}
.form_text{
   padding-left: 2.7%;
   padding-right: 2.7%;

}
.el-form-item{
    margin-bottom: 24px;
}
::v-deep .el-textarea__inner{
    height: 263px;
}
.form_button{
    text-align: center;
}
.el-button{
    width: 180px;
    height: 32px;
    font-size: 14px;
    padding: 0;
    margin: 0 20px;
}




</style>