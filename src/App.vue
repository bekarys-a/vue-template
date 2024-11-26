<template>
  <el-config-provider>
    <el-container>
      <el-header
        style="
          background-color: var(--el-color-primary);
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <el-button>
          <el-icon class="el-icon--left">
            <icon-mdi-home />
          </el-icon>
          LOGO
        </el-button>
        <el-button-group>
          <el-button>
            <el-icon class="el-icon--left">
              <icon-mdi-home />
            </el-icon>
            about
          </el-button>
          <el-button>
            <el-icon class="el-icon--left">
              <icon-mdi-home />
            </el-icon>
            about
          </el-button>
        </el-button-group>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<script setup lang="ts"></script>
