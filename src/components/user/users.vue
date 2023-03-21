<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!--卡片视图-->
        <el-card>
        <el-row :gutter="20">
            <el-col :span="9">
                <el-input placeholder="请输入内容" >
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary">添加用户</el-button>
            </el-col>
        </el-row>
        <!--用户列表区域-->
        <el-table :data="userlist" border stripe>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="用户名" prop="username"></el-table-column>
            <el-table-column label="电话" prop="mobile"></el-table-column>
            <el-table-column label="角色" prop="role"></el-table-column>
            <el-table-column label="状态" >
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.state"></el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作" >
                <template slot-scope="scope">
                    <el-tooltip  effect="dark" content="修改" placement="top-start" :enterable="false">
                    <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
                    </el-tooltip>
                    <el-button type="danger" icon="el-icon-delete" size="small"></el-button>
                </template>
            </el-table-column>    
        </el-table>
        <!--分页区域-->
        <!-- <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1, 2, 5, 10]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination> -->
        </el-card>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            
            userlist:[],
            total:2
        }
    },
    created(){
        this.getList()
    },
    methods:{
        //监听pagesize改变的事件
        // handleSizeChange(){

        // },
        // //监听页码值改变的事件
        // handleCurrentChange(){

        // },
        btnclick(){
            this.$axios({
                method:'GET',
                url:'http://127.0.0.1:7001/userlist'
            })
            .then((res)=>{
                console.log(res);
                this.userlist=res.data;
            })
        },
        getList(){
            this.$axios({
                method:'GET',
                url:'http://127.0.0.1:7001/userlist'
            })
            .then((res)=>{
                console.log(res);
                this.userlist=res.data;
            })
        },
    }
    
}
</script>

<style lang="less" scoped>

</style>