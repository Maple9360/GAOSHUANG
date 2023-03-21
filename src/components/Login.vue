<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!--表单区域-->
            <el-form ref="loginFormRef"  :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="yanzheng">登录</el-button>
                    <el-button type="info" @click="resetloginForm">重置</el-button>
                    <el-button @click="ifzhuce=true">注册</el-button>
                </el-form-item>
            </el-form>    
        </div>
        
        <!--注册用户的对话框-->

        <el-dialog
            title="注册"
            :visible.sync="ifzhuce"
            width="50%"
            >
            <!--内容主体区-->
            <el-form :model="addUserList" :rules="addUserListRules" ref="addUserListRef" label-width="70px" >
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="addUserList.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="addUserList.password" type="password"></el-input>
                </el-form-item>
            </el-form>
            <!--底部按钮区域-->
            <span slot="footer" class="dialog-footer">
                <el-button @click="resetZhuce">取 消</el-button>
                <el-button type="primary" @click="addUser">确 定</el-button>
            </span>
            </el-dialog>
    </div>
</template>
<script>
import axios from "axios"

export default {
    data(){
        return {
            userlist: [],
            //登录表单的数据绑定对象
            loginForm:{
                username: '',
                password: ''

            },
            //表单的验证规则对象
            loginFormRules:{
                //验证用户名是否合法
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                //验证密码是否合法
                password :[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            },
            //控制注册对话框的显示与隐藏
            ifzhuce: false,
            addUserList:{
                username: '',
                password: ''
            },
            addUserListRules:{
                username:[
                    {required: true, message: '请输入用户名', trigger: 'blur'},
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                password :[
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        //点击重置按钮，重置登录表单
        
        resetloginForm(){
            this.$refs.loginFormRef.resetFields();
        },
        resetZhuce(){
            this.ifzhuce = false
            this.$refs.addUserListRef.resetFields();
        },
        // zhuce(){
        //     this.ifzhuce = true
        //     this.$axios({
        //         method:'GET',
        //         url:'http://127.0.0.1:7001/zhuce'
        //     })
        //     .then((res)=>{
        //         console.log(res);
        //     })
        // },
        // btnclick(){
        //     this.$axios({
        //         method:'GET',
        //         url:'http://127.0.0.1:7001/userlist'
        //     })
        //     .then((res)=>{
        //         console.log(res);
        //         this.userlist=res.data;
                
        //     })
        // },
        addUser(){
            this.$refs.addUserListRef.validate( async valid =>{
                if(!valid)return
                const { data:res } = await this.$axios.post('http://127.0.0.1:7001/zhuce',this.addUserList)
                if(res!='200'){
                    this.$message.error("该用户名已被注册！")
                    return
                }
                this.$message.success("注册成功！")
                this.ifzhuce = false
                this.addUserList.username='',
                this.addUserList.password=''
            })
        },
        yanzheng(){
          
            this.$refs.loginFormRef.validate( async valid =>{
                if(!valid)return
                const res = await this.$axios.post('http://127.0.0.1:7001/yanzheng',this.loginForm)
                if(res.data =='200'){
                    window.sessionStorage.setItem('token',res.data.token)
                    this.$router.push('/home')
                }else{
                    this.$message.error("用户名或密码错误！")
                }
            })
        }
    }   
}
</script>

<style lang="less" scoped>
.login_container{
    background-color: #2b4b6b;
    height: 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top:50%;
    transform:translate(-50%,-50%) ;

}

.avatar_box {
    height: 130px; 
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
}

.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.btns {
    display: flex;
    justify-content: flex-end;
}

</style>