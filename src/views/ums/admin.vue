<template>
    <div>
        <el-card class="filter-container" shadow="never">
            <div>
                <i class="el-icon-search"></i>
                <span>筛选搜索</span>
                <el-button style="float:right" type="primary" size="small">
                    查询搜索
                </el-button>
                <el-button style="float:right;margin-right: 15px" size="small">
                    重置
                </el-button>
            </div>
            <div style="margin-top: 15px">
                <el-form :inline="true" size="small" label-width="140px">
                    <el-form-item label="输入搜索：">
                        <el-input class="input-width" placeholder="帐号/姓名" clearable></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-card class="operate-container" shadow="never">
            <i class="el-icon-tickets"></i>
            <span>数据列表</span>
            <el-button size="mini" class="btn-add" style="margin-left: 20px">添加</el-button>
        </el-card>
        <!-- 用户列表区域 -->
        <div class="table-container">
        <el-table ref="adminTable" style="width: 100%;" border :data="userlist">
            <el-table-column label="编号" width="100" align="center">
                <template slot-scope="scope">{{ scope.$index + 1 }}</template>
            </el-table-column>
            <el-table-column label="帐号" align="center">
                <template slot-scope="scope">{{ scope.row.username }}</template>
            </el-table-column>
            <el-table-column label="姓名" align="center">
                <template slot-scope="scope">{{scope.row.nickName}}</template>
            </el-table-column>
            <el-table-column label="邮箱" align="center">
                <template slot-scope="scope">{{scope.row.email}}</template>
            </el-table-column>
            <el-table-column label="添加时间" width="160" align="center">
                <template slot-scope="scope">{{scope.row.username}}</template>
            </el-table-column>
            <el-table-column label="最后登录" width="160" align="center">
                <template slot-scope="scope">{scope.row.username}</template>
            </el-table-column>
            <el-table-column label="是否启用" width="140" align="center">
                <template slot-scope="scope">
                    <el-switch :active-value="1" :inactive-value="0">
                    </el-switch>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="180" align="center">
                <template slot-scope="scope">
                </template>
            </el-table-column>
        </el-table>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //获取用户列表的参数对象
            queryInfo:{
                query:'',
                pagenum:1,
                pagesize:3
            },
            userlist:[],
            total:0
        }
    },
    created(){
        this.getUserList()
    },
    methods:{
        async getUserList(){
            const {data:res} = await this.$http.get('user',{params:this.queryInfo})
            console.log(res)
            this.userlist=res.data
            // this.total
        }
    }
}
</script>