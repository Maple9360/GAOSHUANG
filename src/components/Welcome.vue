<template>
        <!-- <h2>Welcome</h2> -->
        <el-image
                class="welcome"
                :src="img"
                :fit="fit"
                >
        </el-image>
</template>
<script>
export default {
    data(){
        return{
            img:'https://img1.baidu.com/it/u=1837875776,1899913135&fm=26&fmt=auto'
        }
    }
}
</script>

<style lang="less" scoped>
.welcome{
    // margin: 0%;
    // padding: 0%;
    height: 100%;
    width: 100%;

}
</style>