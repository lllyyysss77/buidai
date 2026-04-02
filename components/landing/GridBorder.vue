<template>
  <section
    class="grid-border"
    :class="{
      'has-top': showTopBorder,
      'has-bottom': showBottomBorder,
      'has-divider': showDivider
    }"
  >
    <!-- 顶部边框区域 -->
    <div v-if="showTopBorder" class="grid-border-edge grid-border-top" />

    <!-- 内容区域 -->
    <div class="grid-border-body">
      <!-- 左右竖线背景 - 位于 container 边缘 -->
      <div class="grid-border-vline grid-border-vline-left" />
      <div class="grid-border-vline grid-border-vline-right" />

      <!-- 实际内容 - 使用 container 默认宽度 -->
      <div class="grid-border-content">
        <slot />
      </div>
    </div>

    <!-- 底部边框区域 -->
    <div v-if="showBottomBorder" class="grid-border-edge grid-border-bottom" />
  </section>
</template>

<script setup lang="ts">
/**
 * 网格边框系统组件
 * @description 提供统一的双横竖线网格边框视觉效果
 * @example
 * <GridBorder>
 *   <div class="container mx-auto px-4">内容区域</div>
 * </GridBorder>
 */

interface Props {
  /** 是否显示顶部边框 */
  showTopBorder?: boolean
  /** 是否显示底部边框 */
  showBottomBorder?: boolean
  /** 是否显示为分隔线模式（仅中间内容，无边框） */
  showDivider?: boolean
}

withDefaults(defineProps<Props>(), {
  showTopBorder: true,
  showBottomBorder: true,
  showDivider: false
})
</script>

<style scoped>
/**
 * ============================================
 * 网格边框系统
 * ============================================
 */

.grid-border {
  --gb-border-color: rgba(229, 229, 229, 0.7);
  --gb-stripe-color: rgba(3, 7, 18, 0.05);
  --gb-stripe-size: 10px;
  /* 横竖线宽度基于 container 宽度计算 */
  --gb-edge-width: clamp(1rem, calc(100vw / 768), 2.5rem);

  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  position: relative;
}

/**
 * 顶部/底部边框区域
 */
.grid-border-edge {
  position: relative;
  height: var(--gb-edge-width);
  flex-shrink: 0;
  border-top: 1px solid var(--gb-border-color);
  border-bottom: 1px solid var(--gb-border-color);
  background-color: white;
  background-image: repeating-linear-gradient(
    315deg,
    var(--gb-stripe-color) 0,
    var(--gb-stripe-color) 1px,
    transparent 0,
    transparent 50%
  );
  background-size: var(--gb-stripe-size) var(--gb-stripe-size);
  background-attachment: fixed;
}

/**
 * 主体内容区域
 */
.grid-border-body {
  position: relative;
  width: 100%;
  flex: 1;
  min-width: 0;
  background-color: white;
}

/**
 * 左右竖线背景
 * 与横线相同的设计：双竖线+斜纹背景
 */
.grid-border-vline {
  position: absolute;
  top: 0;
  bottom: 0;
  width: var(--gb-edge-width);
  background-color: white;
  background-image: repeating-linear-gradient(
    315deg,
    var(--gb-stripe-color) 0,
    var(--gb-stripe-color) 1px,
    transparent 0,
    transparent 50%
  );
  background-size: var(--gb-stripe-size) var(--gb-stripe-size);
  background-attachment: fixed;
  pointer-events: none;
  z-index: 10;
}

/* 左侧竖线 - 与 container 左边缘对齐（考虑 px-4 padding） */
.grid-border-vline-left {
  left: max(0px, calc((100% - 1536px) / 2 + 1rem));
  border-left: 1px solid var(--gb-border-color);
  border-right: 1px solid var(--gb-border-color);
}

/* 右侧竖线 - 与 container 右边缘对齐（考虑 px-4 padding） */
.grid-border-vline-right {
  right: max(0px, calc((100% - 1536px) / 2 + 1rem));
  border-left: 1px solid var(--gb-border-color);
  border-right: 1px solid var(--gb-border-color);
}

/**
 * 内容区域
 */
.grid-border-content {
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: 0;
}

/**
 * ============================================
 * 变体样式
 * ============================================
 */

.grid-border:not(.has-top) .grid-border-top {
  display: none;
}

.grid-border:not(.has-bottom) .grid-border-bottom {
  display: none;
}

.grid-border.has-divider {
  background: transparent;
}

.grid-border.has-divider .grid-border-vline {
  display: none;
}

.grid-border.has-divider .grid-border-edge {
  display: none;
}

/**
 * ============================================
 * 响应式适配
 * ============================================
 */

/* 平板设备 - container max-width: 1024px */
@media (max-width: 1280px) {
  .grid-border-vline-left {
    left: max(0px, calc((100% - 1024px) / 2 + 1rem));
  }

  .grid-border-vline-right {
    right: max(0px, calc((100% - 1024px) / 2 + 1rem));
  }
}

/* 移动设备 - container 全宽，考虑 px-4 padding */
@media (max-width: 1024px) {
  .grid-border-vline-left {
    left: 1rem;
  }

  .grid-border-vline-right {
    right: 1rem;
  }
}

/**
 * ============================================
 * 深色模式支持（预留）
 * ============================================
 */
@media (prefers-color-scheme: dark) {
  .grid-border {
    --gb-border-color: rgba(255, 255, 255, 0.1);
    --gb-stripe-color: rgba(255, 255, 255, 0.03);
    background-color: rgb(3, 7, 18);
  }

  .grid-border-vline,
  .grid-border-body,
  .grid-border-edge {
    background-color: rgb(3, 7, 18);
  }
}
</style>
