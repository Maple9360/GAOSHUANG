<template>
     <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>图书管理</el-breadcrumb-item>
        <el-breadcrumb-item>图书列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!--卡片视图-->
        <el-card>
        <el-row :gutter="20">
            <el-col :span="9">
                <el-input placeholder="请输入书名或作者查询" v-model="searchIndex">
                    <el-button slot="append" icon="el-icon-search" @click="serchBook"></el-button>
                </el-input>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="ifadd=true">添加图书</el-button>
            </el-col>
        </el-row>
        <!--书籍列表区域-->
        <el-table :data="booklist" border stripe>
            <el-table-column type="index"></el-table-column>
            <el-table-column label="书名" prop="bookname"></el-table-column>
            <el-table-column label="作者" prop="author"></el-table-column>
            <el-table-column label="出版日期" prop="date"></el-table-column>
            <el-table-column label="操作" >
                <!--添加作用域插槽slot-scope，来取得:data绑定的数据-->
                <template slot-scope="scope">
                    <!--scope.$index,scope.row可以获取到操作对象的数组下标或整个对象-->
                    <el-tooltip  effect="dark" content="查看详情" placement="top-start" :enterable="false">
                    <el-button type="warning" icon="el-icon-question" size="small" @click="getDetail(scope.row)"></el-button>
                    </el-tooltip>
                    <el-tooltip  effect="dark" content="修改" placement="top-start" :enterable="false">
                    <el-button type="primary" icon="el-icon-edit" size="small" @click="updateBook(scope.row)"></el-button>
                    </el-tooltip>
                    <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteBook(scope.row)"></el-button>
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

        <!--添加图书的弹框-->
        <el-dialog
            title="添加图书"
            :visible.sync="ifadd"
            width="70%"
            >
            <!--内容主体区-->
            <el-form :model="addBookList" :rules="addBookListRules" ref="addBookListRef" label-width="70px" >
                <el-form-item label="书名" prop="bookname">
                    <el-input v-model="addBookList.bookname"></el-input>
                </el-form-item>
                <el-form-item label="作者" prop="author">
                    <el-input v-model="addBookList.author"></el-input>
                </el-form-item>
                <el-form-item label="出版日期" prop="date">
                    <el-input v-model="addBookList.date"></el-input>
                </el-form-item>
                <el-form-item label="详情" prop="detail">
                    <el-input v-model="addBookList.detail"></el-input>
                </el-form-item>
                <el-form-item label="图片地址" prop="img">
                    <el-input v-model="addBookList.img"></el-input>
                </el-form-item>
            </el-form>
            <!--底部按钮区域-->
            <span slot="footer" class="dialog-footer">
                <el-button @click="ifadd = false">取 消</el-button>
                <el-button type="primary" @click="addbook">确 定</el-button>
            </span>
        </el-dialog>

        <!--是否删除的弹框-->
        <el-dialog
            title="提示"
            :visible.sync="ifdelete"
            width="30%">
            <span>确定删除此书籍？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="ifdelete = false">取 消</el-button>
                <el-button type="primary" @click="deleteConfirm">确 定</el-button>
            </span>
        </el-dialog>

         <!--修改图书的弹框-->
        <el-dialog
            title="修改图书"
            :visible.sync="ifupdate"
            width="70%"
            >
            <!--内容主体区-->
            <el-form :model="updateBookList" :rules="updateBookListRules" ref="updateBookListRef" label-width="70px" >
                <el-form-item label="书名" prop="bookname">
                    <el-input v-model="updateBookList.bookname"></el-input>
                </el-form-item>
                <el-form-item label="作者" prop="author">
                    <el-input v-model="updateBookList.author"></el-input>
                </el-form-item>
                <el-form-item label="出版日期" prop="date">
                    <el-input v-model="updateBookList.date"></el-input>
                </el-form-item>
                <el-form-item label="详情" prop="detail">
                    <el-input v-model="updateBookList.detail"></el-input>
                </el-form-item>
                <el-form-item label="图片地址" prop="img">
                    <el-input v-model="updateBookList.img"></el-input>
                </el-form-item>
            </el-form>
            <!--底部按钮区域-->
            <span slot="footer" class="dialog-footer">
                <el-button @click="ifupdate = false">取 消</el-button>
                <el-button type="primary" @click="updateBookConfirm">确 定</el-button>
            </span>
        </el-dialog>
         <!--详情的弹框-->
        <el-dialog
            title="详情"
            :visible.sync="ifdetail"
            width="60%"
            >
            <!--内容主体区-->
            <el-image
                style="width: 100px; height: 100px"
                :src="details.img"
                :fit="fit">
            </el-image>
            <p>{{details.detail}}</p>

            <!--底部按钮区域-->
            <span slot="footer" class="dialog-footer">
                <el-button @click="fanhui">返 回</el-button>
            </span>
        </el-dialog>
        
    </div>
</template>

<script>
export default {
    data(){
        return{  
            booklist:{},
            addBookList:{
                bookname:'',
                author:'',
                date:'',
                detail:'',
                img:''
            },
            deleteBookList:{
                id:'',
                bookname:'',
                author:'',
                date:'',
                detail:'',
                img:''
            },
            serchBookList:{
                bookname:'',
                author:'',
                date:'',
                detail:'',
                img:''
            },
            updateBookList:{
                id:'',
                bookname:'',
                author:'',
                date:'',
                detail:'',
                img:''
            },
            details:{
                id:'',
                bookname:'',
                author:'',
                date:'',
                detail:'',
                img:''
            },
            ifadd:false,
            ifdelete:false,
            ifupdate:false,
            ifdetail:false,
            searchIndex:''
            
        }
    },
    created(){
        this.getbooklist()
    },
    methods:{
        //获取列表数据
        getbooklist(){
            this.$axios({
                methods:'GET',
                url:'http://127.0.0.1:7001/booklist'
            })
            .then((res)=>{
                console.log(res)
                this.booklist=res.data
            })
        },
        addbook(){
            this.$refs.addBookListRef.validate( async valid =>{
                if(!valid){
                    this.$message.error("添加失败！")
                }
                const res = await this.$axios.post('http://127.0.0.1:7001/add',this.addBookList)
                if(res.data == 400){
                    this.$message.error("添加失败！");
                    ifadd = false
                    this.addBookList.bookname=''
                    this.addBookList.author=''
                    this.addBookList.date=''
                    this.addBookList.detail=''
                    return
                }
                this.$message.success("添加成功！")
                this.ifadd = false
                this.addBookList.bookname=''
                this.addBookList.author=''
                this.addBookList.date=''
                this.addBookList.detail=''
                this.addBookList.img=''
                this.getbooklist()
            })
        },
        deleteBook(row){
            this.ifdelete = true
            this.deleteBookList = row
        },
       
        async deleteConfirm(){
            const res = await this.$axios.post('http://127.0.0.1:7001/delete',this.deleteBookList)
            //console.log(res)
        
            if(res.data=='400'){
                this.$message.error("删除失败！")
                this.ifdelete = false
                return
            }
            this.$message.success("删除成功！")
            this.ifdelete = false
            this.deleteBookList.id = ''
            this.deleteBookList.bookname = ''
            this.deleteBookList.author = ''
            this.deleteBookList.date = ''
            this.deleteBookList.detail = ''
            this.getbooklist()
        },
        async serchBook(){
            
            const res = await this.$axios.get('http://127.0.0.1:7001/search?bookname='+ this.searchIndex)
            console.log(res)
            this.booklist = res.data
        },
        updateBook(row){
            this.updateBookList = row
            this.ifupdate = true
        },
        async updateBookConfirm(){
            const res = await this.$axios.put('http://127.0.0.1:7001/update',this.updateBookList)
            console.log(this.updateBookList)
            if(res.data == '200'){
                this.$message.success("修改成功！")
            }else{
                this.$message.error("修改失败！")
            }
            this.ifupdate = false
            this.getbooklist()
            this.updateBookList.id = ''
            this.updateBookList.bookname = ''
            this.updateBookList.author = ''
            this.updateBookList.date = ''
            this.updateBookList.detail = ''
        },
        getDetail(row){
            this.ifdetail = true
            this.details = row 
        },
        fanhui(){
            this.ifdetail = false
        }
    },
    watch:{
        searchIndex(){
            this.getbooklist()
        }
    }
    
}
</script>

<style lang="less" scoped>

</style>