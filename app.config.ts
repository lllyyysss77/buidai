/**
 * Nuxt 应用配置文件 (App Configuration)
 *
 * 此文件主要用于配置 @nuxt/ui 模块的全局样式和行为。
 * 可以在此处覆盖默认的主题颜色、图标集合以及其他 UI 组件的默认属性。
 *
 * 文档: https://ui.nuxt.com/getting-started/configuration
 */
export default defineAppConfig({
  ui: {
    /**
     * 全局颜色配置
     *
     * @property primary - 定义应用的主品牌色。
     * Nuxt UI 会自动生成该颜色的色阶 (50-950) 并应用到所有组件中。
     * 可选值参考 Tailwind CSS 颜色板，如 'violet', 'blue', 'rose' cyan Primary Secondary Warning Error Success Info 等。
     */
    colors: {
      primary: 'violet'
    },

    /**
     * 图标映射配置 (Icon Aliases)
     *
     * 将 Nuxt UI 组件内部使用的逻辑图标名称映射到具体的图标集合。
     * 当前配置使用 Phosphor Icons (i-ph-*) 风格。
     *
     * 格式: '逻辑名称': 'CSS类名/图标名'
     */
    icons: {
      // 箭头与方向 (Arrows & Direction)
      arrowDown: 'i-ph-arrow-down',
      arrowLeft: 'i-ph-arrow-left',
      arrowRight: 'i-ph-arrow-right',
      arrowUp: 'i-ph-arrow-up',
      chevronDoubleLeft: 'i-ph-caret-double-left',
      chevronDoubleRight: 'i-ph-caret-double-right',
      chevronDown: 'i-ph-caret-down',
      chevronLeft: 'i-ph-caret-left',
      chevronRight: 'i-ph-caret-right',
      chevronUp: 'i-ph-caret-up',

      // 状态与反馈 (Status & Feedback)
      caution: 'i-ph-warning-circle',      // 警告
      check: 'i-ph-check',                 // 勾选/确认
      copyCheck: 'i-ph-check-circle',      // 复制成功
      error: 'i-ph-x-circle',              // 错误/失败
      info: 'i-ph-info',                   // 信息
      loading: 'i-ph-circle-notch',        // 加载中
      success: 'i-ph-check-circle',        // 成功
      warning: 'i-ph-warning',             // 警告

      // 交互与操作 (Interaction & Actions)
      close: 'i-ph-x',                     // 关闭
      copy: 'i-ph-copy',                   // 复制
      drag: 'i-ph-dots-six-vertical',      // 拖拽句柄
      ellipsis: 'i-ph-dots-three',         // 更多/省略
      external: 'i-ph-arrow-up-right',     // 外部链接
      menu: 'i-ph-list',                   // 菜单
      minus: 'i-ph-minus',                 // 减号/折叠
      panelClose: 'i-ph-caret-left',       // 关闭面板
      panelOpen: 'i-ph-caret-right',       // 打开面板
      plus: 'i-ph-plus',                   // 加号/展开
      reload: 'i-ph-arrow-counter-clockwise', // 刷新/重载
      search: 'i-ph-magnifying-glass',     // 搜索
      stop: 'i-ph-square',                 // 停止
      upload: 'i-ph-upload',               // 上传

      // 界面元素 (UI Elements)
      dark: 'i-ph-moon',                   // 深色模式
      light: 'i-ph-sun',                   // 浅色模式
      eye: 'i-ph-eye',                     // 显示内容
      eyeOff: 'i-ph-eye-slash',            // 隐藏内容
      file: 'i-ph-file',                   // 文件
      folder: 'i-ph-folder',               // 文件夹
      folderOpen: 'i-ph-folder-open',      // 打开的文件夹
      hash: 'i-ph-hash',                   // 哈希/标签
      system: 'i-ph-monitor',              // 系统主题
      tip: 'i-ph-lightbulb'                // 提示/灵感
    }
  }
})
