<template>


  <div class="all">

    <el-row type="flex" class="row-bg" justify="center" align="middle">
      
      <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
        <el-form :model="ruleForm" :rules="LoginRules" ref="ruleForm"  label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" >
            <el-input v-model="ruleForm.password" autocomplete="off"  show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      
    </el-row>
    
  </div>

</template>

<script>
    import axois from "axios"
    export default {
    data() {
      return {
        ruleForm: {
          username:"",
          password:""
        },
        LoginRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' },
             { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
       onSubmit(formName)  {
         this.$refs[formName].validate((valid) => {
          if(valid){
            try {
              axois({
                url:"http://localhost:8888/api/private/v1/login",
                method:"post",
                params:this.ruleForm,
               
              }).then(res => {
                if(res.data.meta.status == 200){
                  console.log(res.data);
                  localStorage.setItem("token",res.data.token)
                  this.$router.push('/home');
                }else{
                  this.$message({
                    type:"error",
                    message:res.data.meta.msg,
                    duration:1000
                  })
                }
              })
            } catch (error) {
            
            }
          }
        })
        
         
        
       
      },
    }
  }

</script>

<style>
.all{
  height: 100%;
  background-color: #2c3e50;
}
.el-form{
  background-color: #fff;
  padding:  50px 30px 20px 0px;
}
.el-row{
  height: 100%;
}

</style>