<template>
    <div class="drugdecoction_list" >
       <div class="drugdecoction_form">
            <div class="form_head">预约人信息</div>
            <!-- 联系人信息区域 -->
            <div class="form_cont">
                <div class="form_cont_left">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="联系人:" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="form_cont_left">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="联系方式:" prop="name">
                            <el-input v-model="ruleForm.name" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-form>
                </div>
                <div class="form_cont_left">
                    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="预约时间:" prop="name">
                            <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="请选择日期">
                            </el-date-picker>
                        </el-form-item>
                    </el-form>
                    <div class="form_text">{{cont}}</div>  
                </div>
                 <div class="form_cont_left">
                </div>
            </div>
          
            <!-- 提交按钮 -->
            <div class="form_button">
                <el-button type="primary">保存</el-button>
                <el-button @click=$router.back() class="button_border">返回</el-button>
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
        value1:'',
        rules:{

        }
        }
    },
    methods: {
       
    },
    props:['cont'],
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
    height: auto;
    display: block;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-self: flex-start;
}
.form_cont_left{
    width: 43.5%;
}
.form_cont_name{
    display: flex;
    justify-content: flex-end;
    height: auto;

}
.cont_name{
    width: 80px;
    margin-right: 32px;
    height: 23px;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
}
.form_text{
    font-size: 24px;
    color: rgb(54, 151, 255);
    margin-left: 100px;

}
.el-form-item{
    margin-bottom: 24px;
}
::v-deep .el-textarea__inner{
    height: 263px;
}
.form_button{
    margin-top: 40vh;
    text-align: center;
}
.el-button{
    width: 180px;
    height: 32px;
    font-size: 14px;
    padding: 0;
    margin: 0 20px;
}
.button_border{
    border: 1px solid #007afd;
}
::v-deep .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 100%;
}



</style>