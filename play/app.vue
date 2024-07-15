<template>
  <div class="common-layout">
    <el-container>
        <el-aside width="500px">Aside</el-aside>
        <el-container :style="{height: '100px'}">
          <el-header>header</el-header>
          <el-main  :style="{height: '10px'}">
            <div>main</div>
            <div>main</div>
            <div>main</div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
  </div>
</template>

<style scoped>
.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ff0000;
  color: #00ff00;
}
</style>
