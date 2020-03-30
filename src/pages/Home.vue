<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <div class="left">
            <img :src="$axios.defaults.baseURL+user.head_img" alt />
          </div>
          <div class="center">{{user.nickname}}</div>
          <div class="right">
            <a href="#">退出</a>
          </div>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  created() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.user = user;
    console.log(this.user);
    console.log("oooo", this.$axios.defaults.baseURL + user.head_img);
  }
};
</script>

<style lang="less" scoped>
.home {
  position: absolute;
  width: 100%;
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      background-color: #545c64;
    }
    .el-header {
      background-color: #b3c0d1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 12px;
      img {
        width: 50px;
        border-radius: 25px;
      }
      .center {
        margin: 0 10px;
      }
    }
    .el-main {
      background-color: #e9eef3;
    }
  }
}
</style>