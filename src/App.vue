<template>
  <div id="app">
    <el-header style="height: 50px">
      <el-row>
        <el-button type="primary" v-on:click="elSideCollapse()">收起</el-button>
      </el-row>
    </el-header>
    <el-container>
      <el-aside :width="esWidth">
        <Header :isCollapse=isCollapse></Header>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>

import Header from './components/Header.vue'

export default {
  components: { Header },
  name: 'App',
  data () {
    return {
      esWidth: '200px',
      isCollapse: false
    }
  },
  methods: {
    elSideCollapse () {
      this.isCollapse = !this.isCollapse

      this.esWidth = this.isCollapse ? 'auto' : '200px'

      console.log(this.isCollapse)
    },
    show: function () {
      let screenWidth = document.body.clientWidth
      let screenHeight = document.body.clientHeight
      console.log(`${screenWidth},${screenHeight}`)
    }
  },
  mounted () {
    console.log('mounted is start')
    this.show()
  }
}
</script>

<style>

  body{
    margin: 0;
  }
  .el-header, .el-footer {
    background-color: #FFFFFF;
    color: #333;
    /*text-align: center;*/
    line-height: 50px;
  }
  .el-aside {
    background-color: #F4F5F9;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-main{
    height: 100%;
  }
</style>
