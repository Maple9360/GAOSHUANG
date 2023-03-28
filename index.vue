<!--应该能申请更改-->

<template>
  <div class="container">
    <div class="zhengshu">
      <div class="interval">
      <el-row style="height:20px"></el-row>
      <el-row class="second_row" :gutter="24" style="height:30px">
        <el-col :span="4" :offset="15" style="height: 25px;padding-top: 6px;  ">
          <el-input v-model="queryInfo.query" placeholder="Please input" @clear="getUserList" clearable
            style="width: 200px">
            <template #prepend>
              <el-icon>
                <Filter />
              </el-icon>

            </template>
            <template #append>
              <!-- <el-button :icon="Search" /> -->
              <el-button>
                <el-icon>
                  <Search />
                </el-icon>
              </el-button>
            </template>
          </el-input>
        </el-col>
        <el-col :span="1.5" style="padding-top: 6px; padding-right: 0; padding-left: 5px;">
          <img src="./icons/上傳.png" class="upload_icon" style="width:16px;height: 12px;" />
          <!-- <el-icon><UploadFilled /></el-icon>  -->
          <el-button @click="addDialogVisible = true" style="height: 25px;  color: white; background: transparent; border: none;">
            Upload</el-button>
          
        </el-col>
        <el-col :span="1.5" style="padding-top: 6px; padding-right: 0; padding-left: 10px;">
          <img src="./icons/下載-63.png" class="export_icon" style="width:16px;height: 12px;" />
          <!-- <el-icon><Download /></el-icon>  -->
          <el-button @click="addDialogVisible = true" style="height: 25px;  color: white; background: transparent; border: none;">
            Export</el-button>
          </el-col>
        <el-col :span="1.5" style="padding-top: 4px; padding-right: 0; padding-left: 5px;">
          <el-button @click="addDialogVisible = true" style="height: 25px;  color: white; background: transparent; border: none;">
            <el-icon>
              <Plus />
            </el-icon>New</el-button>
        </el-col>

      </el-row>
    </div>
    <div class="onePicture">


      <el-table :row-style="{ height: 30}" height="100" :data="tableData" :row-class-name="tableRowClassName"
        :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">
        <el-table-column label="No." prop="no" width="75px"></el-table-column>
        <el-table-column label="Site" prop="site" width="50px"></el-table-column>
        <el-table-column label="證書編號" prop="bianhao" width="150px"></el-table-column>
        <el-table-column label="證書標準" prop="biaozhun" width="200px"></el-table-column>
        <el-table-column label="證書附件" prop="fujian" width="100px"></el-table-column>
        <template>
          <!-- 上传文件 -->
          <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple>
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>
        </template>
        <el-table-column label="發證日期" prop="dengji" width="150px"></el-table-column>
        <el-table-column label="失效日期" prop="shixiao" width="150px"></el-table-column>
        <el-table-column label="狀態" prop="zhuangtai" width="75px"></el-table-column>
        <el-table-column label="上傳人" prop="name" width="100px"></el-table-column>
        <el-table-column label="編輯" prop="edit" width="75px">
          <template #default="scope">
            <el-button :icon="Edit" size="small" @click="handleEdit(scope.$index, scope.row)"></el-button>
          </template>
        </el-table-column>

        <el-table-column label="刪除" width="75px">
          <template #default="scope">
            <el-button :icon="Delete" size="small" type="danger"
              @click="handleDelete(scope.$index, scope.row)"></el-button>
          </template>
        </el-table-column>


      </el-table>

    </div>
    </div>
    <div class="biaozhun">
      <div class="interval">
      <el-row style="height:20px"></el-row>
      <el-row class="second_row" :gutter="24" style="height:30px">
        <el-col :span="4" :offset="15" style="height: 25px;padding-top: 6px;  ">
          <el-input v-model="queryInfo.query" placeholder="Please input" @clear="getUserList" clearable
            style="width: 200px">
            <template #prepend>
              <el-icon>
                <Filter />
              </el-icon>

            </template>
            <template #append>
              <!-- <el-button :icon="Search" /> -->
              <el-button>
                <el-icon>
                  <Search />
                </el-icon>
              </el-button>
            </template>
          </el-input>
        </el-col>
        <el-col :span="1.5" style="padding-top: 6px; padding-right: 0; padding-left: 5px;">
          <img src="./icons/上傳.png" class="upload_icon" style="width:16px;height: 12px;" />
          <!-- <el-icon><UploadFilled /></el-icon>  -->
          Upload</el-col>
        <el-col :span="1.5" style="padding-top: 6px; padding-right: 0; padding-left: 20px;">
          <img src="./icons/下載-63.png" class="export_icon" style="width:16px;height: 12px;" />
          <!-- <el-icon><Download /></el-icon>  -->
          Export</el-col>
        <el-col :span="1.5" style="padding-top: 4px; padding-right: 0; padding-left: 10px;">
          <el-button @click="addDialogVisible = true"
            style="height: 25px;  color: white; background: transparent; border: none;">
            <el-icon>
              <Plus />
            </el-icon>New</el-button>
        </el-col>

      </el-row>
    </div>
    <div class="twoPicture">
      <el-table :row-style="{ height: 30 }" max-height="250" :data="tableData" :row-class-name="tableRowClassName"
        :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center'}">

        <el-table-column label="No." prop="no" width="75px"></el-table-column>
        <el-table-column label="Site" prop="site" width="50px"></el-table-column>
        <el-table-column label="文件編號" prop="bianhao" width="150px"></el-table-column>
        <el-table-column label="文件名稱" prop="biaozhun" width="200px"></el-table-column>
        <el-table-column label="版本" prop="fujian" width="100px"></el-table-column>
        <el-table-column label="發證日期" prop="dengji" width="150px"></el-table-column>
        <el-table-column label="附件" prop="shixiao" width="150px"></el-table-column>
        <template>
          <!-- 上传文件 -->
          <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple>
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>
        </template>
       
        <el-table-column label="狀態" prop="zhuangtai" width="75px"></el-table-column>
        <el-table-column label="上傳人" prop="name" width="100px"></el-table-column>
        <el-table-column label="編輯" prop="edit" width="75px">
          <template #default="scope">
            <el-button :icon="Edit" size="small" @click="handleEdit(scope.$index, scope.row)"></el-button>
          </template>
        </el-table-column>

        <el-table-column label="刪除" width="75px">
          <template #default="scope">
            <el-button :icon="Delete" size="small" type="danger"
              @click="handleDelete(scope.$index, scope.row)"></el-button>
          </template>
        </el-table-column>

      </el-table>

      <div class="page_row">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5]" :page-size="queryInfo.pagesize"
          layout=" ->,total, prev, pager, next,sizes, jumper" :total="total"  popper-class="pageSelect"></el-pagination>
      </div>

    </div>
    </div>
    <div class="wenjian">
      <div class="interval">
      <el-row style="height:20px"></el-row>
      <el-row class="second_row" :gutter="24" style="height:30px">
        <el-col :span="4" :offset="15" style="height: 25px;padding-top: 6px;  ">
          <el-input v-model="queryInfo.query" placeholder="Please input" @clear="getUserList" clearable
            style="width: 200px">
            <template #prepend>
              <el-icon>
                <Filter />
              </el-icon>

            </template>
            <template #append>
              <!-- <el-button :icon="Search" /> -->
              <el-button>
                <el-icon>
                  <Search />
                </el-icon>
              </el-button>
            </template>
          </el-input>
        </el-col>
        <el-col :span="1.5" style="padding-top: 6px; padding-right: 0; padding-left: 5px;">
          <img src="./icons/上傳.png" class="upload_icon" style="width:16px;height: 12px;" />
          <!-- <el-icon><UploadFilled /></el-icon>  -->
          Upload</el-col>
        <el-col :span="1.5" style="padding-top: 6px; padding-right: 0; padding-left: 20px;">
          <img src="./icons/下載-63.png" class="export_icon" style="width:16px;height: 12px;" />
          <!-- <el-icon><Download /></el-icon>  -->
          Export</el-col>
        <el-col :span="1.5" style="padding-top: 4px; padding-right: 0; padding-left: 10px;">
          <el-button @click="addDialogVisible = true"
            style="height: 25px;  color: white; background: transparent; border: none;">
            <el-icon>
              <Plus />
            </el-icon>New</el-button>
        </el-col>

      </el-row>
    </div>
    <div class="threePicture">
      <el-table :row-style="{ height: 30 }" max-height="170" :data="tableData" :row-class-name="tableRowClassName"
        :header-cell-style="{ textAlign: 'center' }" :cell-style="{ textAlign: 'center' }">

        <el-table-column label="No." prop="no" width="240px"></el-table-column>
        <el-table-column label="Site" prop="site" width="240"></el-table-column>
        <el-table-column label="文件名稱" prop="bianhao" width="240"></el-table-column>
        <el-table-column label="文件編號" prop="biaozhun" width="240"></el-table-column>
        <el-table-column label="附件" prop="fujian" width="240"></el-table-column>
        <template>
          <!-- 上传文件 -->
          <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple>
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
              Drop file here or <em>click to upload</em>
            </div>
            <template #tip>
              <div class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </template>
          </el-upload>
        </template>

      </el-table>

      <div class="page_row">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="queryInfo.pagenum" :page-sizes="[1, 2, 5]" :page-size="queryInfo.pagesize"
          layout=" ->,total, prev, pager, next,sizes, jumper" :total="total"  popper-class="pageSelect"></el-pagination>
      </div>

    </div>
    </div>
  </div>
</template>

<!-- <script setup lang="ts"> -->
<script lang="ts" setup>
import { Plus, Search, Filter, UploadFilled, Download, Edit, Delete } from '@element-plus/icons-vue'
const queryInfo = {
  query: '',
  pagenum: 1,
  pagesize: 2
}
let userList = []
let total = 0
interface User {
  date: string
  name: string
  address: string
}
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}
const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
// 监听pagesize改变的事件
function handleSizeChange(newSize: number) {
  // console.log(newSize)
  queryInfo.pagesize = newSize
  getUserList()
}
function handleCurrentChange(newPage: number) {
  // console.log(newPage)
  queryInfo.pagenum = newPage
  getUserList()
}
function getUserList() {
  userList = tableData
  total = tableData.length
}
const tableRowClassName = ({
  rowIndex
}: {
  // row: User,
  rowIndex: number
}) => {
  if (rowIndex % 2 === 1) {
    return 'odd-row'
  } else if (rowIndex % 2 === 0) {
    return 'even-row'
  }
  return ''
}
</script>



<style  lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
}
.zhengshu{
  width: 1280px;
  height: 150px;
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translate(-50%, 0%);
}
.biaozhun{
   width: 1280px;
  height: 320px;

  position: absolute;
  left: 50%;
  top: 190px;
  transform: translate(-50%, 0%);
}
.wenjian{
   width: 1280px;
  height: 240px;

  position: absolute;
  left: 50%;
  top: 530px;
  transform: translate(-50%, 0%);
}
::v-deep .el-table {
  border: 0;
  background-color: transparent !important;
  color: #fff !important;
  border-collapse: separate;

  // max-height:100px;
  --el-table-row-hover-bg-color: #b2d3bd;
}

.el-button--small {
  background: transparent;
  border: none;
}
.el-pagination {
  margin-right: 30px;
  height: 25px;
  ::v-deep button {
    background: transparent !important;
    border: 1px aqua solid;
    height: 20px;
  }
  // ::v-deep .btn-next {tableData
  //   background: transparent !important;
  //   border-color:aqua;
  // }
  ::v-deep .el-icon {
    color: aqua;
  }
  // ::v-deep  .el-pager li{
  //   background:transparent;
  // }
  ::v-deep .el-pagination__total {
    color: black;
  }
  ::v-deep .el-pagination__rightwrapper {
    margin-top: 15px;
  }
}
::v-deep .pageSelect.el-popper.is-light{
  background-color: #00bbff;
}
::v-deep .pageSelect.el-popper.is-light .el-popper__arrow::before{
  background-color: #ff0000;
}
.el-pagination__total {
  color: black;
}
::v-deep .el-pager li.is-active {
  background: transparent;
  color: aqua;
}
.el-col {
  color: white;
}

::v-deep .el-table__header {
  height: 40px;
  width: 1200px;
}
::v-deep .el-table__body {
  
     height: 30px;
  
}
::v-deep .el-table__inner-wrapper {
  margin: 20px 40px 20px 40px;
}
::v-deep .el-table th {
  background-color: #828282;
  color: white;
  
}
::v-deep .el-table th:first-of-type {
  background-color: #828282;
  color: white;
  border-radius: 10px  0  0 10px;
}
::v-deep .el-table th:last-of-type {
  background-color: #828282;
  color: white;
  border-radius:0  10px  10px 0;
}
::v-deep .el-table tr {
  color: white;
  background: transparent;
  
  .el-table__cell{
    padding: 0;
     border: 0px;
  }
}

::v-deep .el-table td {
  color: white;
}
::v-deep .odd-row {
  background: transparent;
  .el-table__cell{
    height: 30px;
    background-color:#828282 ;
  }
  .el-table__cell:first-of-type{
  border-radius: 10px  0  0 10px ;
  background-color: #828282 ;
  }
  .el-table__cell:last-of-type{
  border-radius: 0  10px  10px 0 ;
  background-color: #828282 ;
  }
  
}

::v-deep .even-row {
  height: 30px;
  --el-table-tr-bg-color: transparent;
}
.second_row {
  ::v-deep .el-input__wrapper {
    color: white;
    background-color: transparent;
    box-shadow: 0 0 0 0;
    border: none;
    border-bottom: 1px solid #eee;
  }
  ::v-deep .el-input-group {
    height: 20px;
  }
  ::v-deep .el-input-group__prepend {
    width: 0px;
    background: transparent;
    box-shadow: 0 0 0 0;
  }
  ::v-deep .el-input-group__append {
    width: 0px;
    background: transparent;
    box-shadow: 0 0 0 0;
    .el-button {
      background-color: transparent;
      padding-right: 5px;
      padding-left: 5px;
    }
  }
}

::v-deep .el-button{
  padding-left: 10px;
  padding-right: 10px;
}
.page_row {
  ::v-deep .el-input__wrapper {
    color: white;
    background-color: transparent;
    // box-shadow: 0 0 0 0;
    // border:none; 
    // border-bottom:none;
    // border-color: aqua;
    height: 20px;
  }
  ::v-deep .el-input {
    --el-input-border-color: aqua;
  }
  // .el-pager{
  //   ::v-deep li.is-active{
  //   background:transparent;
  //   color:aqua;
  // }
  // }  
  ::v-deep .el-input__inner {
    color: #fff;
  }
  ::v-deep .el-pagination__goto {
    color: white;
  }
}
.el-button:hover {
  background: #126c9e !important;
}
::v-deep .el-icon {
  color: white;
}
.interval {
  width: 1280px;
  height: 50px;
}
.onePicture {
  background-image: url("./background/1280x120-邊框4px.png");
  width: 1280px;
  height: 120px;
  background-size: 1280px 120px;
}
.twoPicture {
  background-image: url("./background/1280x290\ 邊框4px-62-62.png");
  width: 1280px;
  height: 290px;
  background-size: 1280px 290px;
}
.threePicture {
  background-image: url("./background/1280x210\ 邊框4px-62.png");
  width: 1280px;
  height: 210px;
  background-size: 1280px 210px;
}

</style>
