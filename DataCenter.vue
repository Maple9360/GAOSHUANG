<template>
  <div class="common-layout">
    <div class="zhengshu">
      <div class="zhengshu-top">
        <div class="title">ESD證書</div>
        <div class="search-1">
          <i class="el-icon-search"></i> Search
          <i class="el-icon-search"></i>
        </div>
        <div class="upload-1">
          <i class="el-icon-upload"> Upload</i>
        </div>
        <div class="export-1">
          <i class="el-icon-download"> Export</i>
        </div>
        <div class="new-1">
          <i class="el-icon-plus"> New</i>
        </div>
      </div>
      <div class="kuang1">
        <div class="biaotou-1">
          <table class="table-1" :data="data">
            <thead>
              <tr>
                <th
                  :width="item.width"
                  v-for="(item, index) in columns"
                  :key="index"
                  class="th"
                >
                  {{ item.title }}
                </th>
              </tr>
            </thead>
            <tbody class="body">
              <tr v-for="(data, index) in dataSource" :key="index" class="tr">
                <td
                  v-for="(col, ind) in columns"
                  :key="ind"
                  :title="data[col.dataIndex]"
                  class="td"
                >
                  <!-- <template slot-scope="scope" slot="edit">
                   <el-button type="primary" icon="el-icon-edit" size="small" ></el-button>
                    </template>
                    <template slot-scope="scope" slot="delete">
                    <el-button type="danger" icon="el-icon-delete" size="small" ></el-button>
                    </template> -->
                </td>
              </tr>
            </tbody>
           
          </table>
        </div>
      </div>
    </div>
    <div class="biaozhun">
      <div class="biaozhun-top">
        <div class="title"></div>
        <div class="search-2"></div>
        <div class="upload-2"></div>
        <div class="export-2"></div>
        <div class="new-2"></div>
      </div>
      <div class="kuang2"></div>
    </div>
    <div class="wenjian">
      <div class="wenjian-top">
        <div class="title"></div>
        <div class="search-3"></div>
      </div>
      <div class="kuang3"></div>
    </div>
  </div>
</template>

<!-- <script setup lang="ts"> -->
<script>
export default {
  name: "DataCenter",
  data() {
    return {
      columns: [
        {
          title: "No.",
          width: 50,
          dataIndex: "No",
        },
        {
          title: "Site",
          width: 50,
          dataIndex: "Site",
        },
        {
          title: "證書編號",
          width: 200,
          dataIndex: "a",
        },
        {
          title: "證書標準",
          width: 200,
          dataIndex: "s",
        },
        {
          title: "證書附件",
          width: 100,
          dataIndex: "d",
        },
        {
          title: "发证日期",
          width: 100,
          dataIndex: "f",
        },
        {
          title: "失效日期",
          width: 100,
          dataIndex: "g",
        },
        {
          title: "状态",
          width: 100,
          dataIndex: "h",
        },
        {
          title: "上传人",
          width: 100,
          dataIndex: "j",
        },
        {
          title: "编辑",
          width: 50,
          dataIndex: "k",
        },
        {
          title: "删除",
          width: 50,
          dataIndex: "l",
        },
      ],
      
    };
  },
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>

<!-- <style lang="less" scoped></style> -->

<style  lang="scss" scoped>
.common-layout {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  position: relative;
}
.zhengshu {
  display: flex;
  flex-direction: column;

  width: 1280px;
  height: 150px;

  position: absolute;
  left: 50%;
  top: 20px;
  transform: translate(-50%, 0%);
}
.zhengshu-top {
  height: 30px;
  display: flex;
  flex-direction: row;
  position: relative;
}
.title {
  margin-right: auto;
  width: 150px;
  background-color: #60e21f;
}
.search-1 {
  width: 146px;
  font-size: 12pt;
  cursor: pointer;
}
.upload-1 {
  margin-left: 20px;
  font-size: 12pt;
  cursor: pointer;
}
.export-1 {
  margin-left: 20px;
  font-size: 12pt;
  cursor: pointer;
}
.new-1 {
  margin-left: 20px;
  font-size: 12pt;
  cursor: pointer;
}
.kuang1 {
  position: relative;
  background-image: url("./background/1280x120-邊框4px.png");
  width: 1280px;
  height: 120px;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.biaotou-1 {
  width: 1200px;
  height: 40px;
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translate(-50%, 0%);
  background-color: rgba($color: #ffffff, $alpha: 0.5);
  border-radius: 10px;
  color: #ffffff;
  font-size: 12pt;
}
.table-1 {
  text-align: center;
  font: 12pt "幼圆";
  line-height: 35px;
  .th {
    padding-left: 10px;
  }
}
</style>