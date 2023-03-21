<template>
        <el-container class="home-container">
            <!--头部区域-->
            <el-header class="el-header">
                <div>
                    <img src="">
                    <span>图书管理系统</span>
                </div>
                <el-button type="info" @click="logout">退出</el-button>
            </el-header>
            <!--页面主体区域-->
            <el-container>
                <!--侧边栏-->
                <el-aside :width="iscollaose ?'64px':'200px' " >
                    <div class="toggle-button" @click="togglecollapse">|||</div>
                    <el-menu
                        background-color="#333744"
                        text-color="#fff"
                        active-text-color="#409fff" :collapse="iscollaose" router :default-active="activePath">
                        <!--一级菜单-->
                        <el-submenu :index="item.id+ ''" v-for="item in menulist" :key="item.id">
                            <!--一级菜单的模板区域-->
                            <template slot="title">
                                <!--图标-->
                                <i :class="iconOBJ[item.id]"></i>
                                <!--文本-->
                                <span>{{item.name}}</span>
                            </template>
                            <!--二级菜单-->
                            <el-menu-item :index="subitem.path" v-for="subitem in item.children" :key="subitem.id"
                            @click="saveNavstate(subitem.path)">
                                <template slot="title">
                                <!--图标-->
                                <i class="el-icon-menu"></i>
                                <!--文本-->
                                <span>{{subitem.name}}</span>
                            </template>
                            </el-menu-item>
                        </el-submenu> 

                    </el-menu>
                </el-aside>
                <!--右侧内容主体-->
                <el-main >
                    <!--欢迎的路由占位符-->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
</template>

<script>
export default {
    data(){
        return{
            menulist:[
                {
                    id:1,
                    name:'借阅管理',
                    path:'/lendmanage',
                    children: [
                        {
                            id:1,
                            name:'借书信息',
                            path:'/lend'
                        },
                        {
                            id:2,
                            name:'还书信息',
                            path:'/return'
                        }
                    ]
                },
                {
                    id:2,
                    name:'图书管理',
                path:'/bookmanage',
                    children: [
                        {
                            id:1,
                            name:'图书列表',
                            path:'/booklist'
                        }
                    ]
                },
                {
                    id:3,
                    name:'用户管理',
                    path:'/users',
                    children: [{
                            id:1,
                            name:'用户列表',
                            path:'/userlist'

                        }
                    ]
                },
                {
                    id:4,
                    name:'账号管理',
                    path:'/account',
                    children: [
                        {
                            id:1,
                            name:'修改密码',
                            path:'/reset'
                        }
                    ]
                }
            ], 
            iconOBJ: {
                '1': 'el-icon-s-order',
                '2': 'el-icon-reading',
                '3': 'el-icon-s-custom',
                '4': 'el-icon-setting',
            },
            iscollaose:false ,
            //被激活的链接地址
            activePath :'' 
        }
        
    },
    created(){
        this.activePath = window.sessionStorage.getItem('activePath')
    },
    methods: {
        logout(){
            window.sessionStorage.clear()
            this.$router.push('/login')
        },
        //点击按钮，切换菜单的折叠和展开
        togglecollapse(){
            this.iscollaose = !this.iscollaose
        },
        saveNavstate(activePath){
            window.sessionStorage.setItem('activePath',activePath)
            this.activePath = activePath
        }
    }   
}
</script>

<style lang="less" scoped>
.home-container {
    height: 100%;
}

.el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    >div {
        display: flex;
        align-items: center;
        span {
            margin-left: 15px;
        }
    }

}

.el-aside {
    background-color: #333744;
    .el-menu {
        border-right: none;
    }
   
}
  
.el-main {
    background-color: #E9EEF3;
    
}

.toggle-button {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
}
</style>