<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          // 非空校验
          {
            required: true,
            message: "用户名不能为空",
            trigger: ["change", "blur"]
          },
          // 长度校验
          {
            min: 5,
            max: 11,
            message: "长度为5~11位字符",
            trigger: ["change", "blur"]
          }
        ],
        password: [
          // 非空校验
          {
            required: true,
            message: "密码不能为空",
            trigger: ["change", "blur"]
          },
          // 长度校验
          {
            min: 3,
            max: 12,
            message: "长度为3~12位字符",
            trigger: ["change", "blur"]
          }
        ]
      }
    };
  },
  methods: {
    async login() {
      try {
        await this.$refs.form.validate();
        console.log("表单校验成功，发送请求");
        const res = await this.$axios.post("/login", this.form);
        const { statusCode, data } = res.data;
        if (statusCode === 200) {
          this.$message.success("登录成功");
          this.$router.push("/");
          console.log(data);
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
        } else {
          this.$message.error("用户名或密码错误");
        }
      } catch (e) {
        console.log("表单校验失败", e);
      }
    },
    reset() {
      this.$refs.form.resetFields();
    }
  }
};
</script>

<style lang="less" scoped>
.el-form {
  width: 400px;
  margin: 200px auto;
  border: 1px solid #ccc;
  padding: 20px;
  .el-form-item {
    .el-button:first-child {
      margin-right: 80px;
    }
  }
}
</style>