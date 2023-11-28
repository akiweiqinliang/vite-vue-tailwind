<template>
    <div style="margin: 200px 100px">
      <div style="position: relative">
        <el-divider content-position="left">奖项设置</el-divider>
        <div class="btns" style="position: absolute;top: -16px;right: 0">
          <el-button>设置</el-button>
          <el-button>设置</el-button>
        </div>
      </div>
      <el-card>
        <UpLoadImg />
      </el-card>
    </div>
</template>

<script setup>

import UpLoadImg from "@/components/UpLoadImg.vue";
</script>

<style scoped>

</style>
