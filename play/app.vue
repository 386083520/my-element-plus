<template>
  <div class="common-layout">
    <ell-container>
      <ell-header :style="{background: '#f5f6f8'}" height="120px">Header</ell-header>
      <!-- <ell-container>
        <ell-aside width="200px">Aside</ell-aside>
        <ell-container>
          <ell-main>Main</ell-main>
          <ell-footer>Footer</ell-footer>
        </ell-container>
      </ell-container> -->
      <div>
        a
      </div>
      <div>
        b
      </div>
    </ell-container>
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
