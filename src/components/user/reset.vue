<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>账号管理</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
        </el-breadcrumb>

          <!--卡片视图-->
        <!-- <el-card> -->
        <!-- <el-form :label-position="labelPosition" label-width="80px" :model="resetList">
            <el-form-item label="请输入用户名">
                <el-input v-model=""></el-input>
            </el-form-item>
            <el-form-item label="请输入密码">
                <el-input v-model=""></el-input>
            </el-form-item>
            <el-form-item label="请设置新密码">
                <el-input v-model=""></el-input>
            </el-form-item>
            <el-form-item label="确认新密码">
                <el-input v-model=""></el-input>
            </el-form-item>
            <el-button type="primary" @click="">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form>
        </el-card>
     -->
     </div>
</template>

<script>
export default {
    data(){
        return{
            resetList:{
                username:'',
                password:''
            }
        }
    }
    
}
</script>

<style lang="less" scoped>

</style>