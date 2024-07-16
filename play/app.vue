<template>
  <div class="common-layout">
    <ell-button-group>
    <ell-button type="primary">Previous Page</ell-button>
    <ell-button type="primary">
      Next Page
    </ell-button>
  </ell-button-group>
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
