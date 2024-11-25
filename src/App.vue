<template>
  <el-config-provider>
    <el-container>
      <el-header style="background-color: #409eff">Header</el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<script setup lang="ts"></script>
