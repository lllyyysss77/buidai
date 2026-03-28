# ESLint + Prettier 配置说明

> 配置版本：2026-03-28  
> ESLint 版本：10.1.0  
> Prettier 版本：最新版

---

## ✅ 已安装依赖

```json
{
  "devDependencies": {
    "eslint": "^10.1.0",
    "eslint-plugin-vue": "^9.x",
    "@typescript-eslint/eslint-plugin": "^8.x",
    "@typescript-eslint/parser": "^8.x",
    "eslint-config-prettier": "^9.x",
    "prettier": "^3.x",
    "typescript-eslint": "^8.x",
    "vue-eslint-parser": "^9.x",
    "@eslint/js": "^9.x",
    "globals": "^15.x"
  }
}
```

---

## 📁 配置文件

| 文件 | 作用 |
|------|------|
| `eslint.config.js` | ESLint v10 平面化配置文件 |
| `.prettierrc.json` | Prettier 格式化配置 |

---

## 🚀 使用命令

### 检查代码问题

```bash
# 运行 ESLint 检查
npm run lint

# 运行 Prettier 检查
npm run format:check
```

### 自动修复问题

```bash
# ESLint 自动修复（能修复的会自动修复）
npm run lint:fix

# Prettier 格式化所有文件
npm run format
```

---

## 📋 代码规范规则

### ESLint 规则

#### ✅ 启用的主要规则

| 规则 | 说明 | 级别 |
|------|------|------|
| `no-console` | 禁止使用 console.log | ⚠️ 警告 |
| `no-debugger` | 禁止使用 debugger | ⚠️ 警告 |
| `prefer-const` | 优先使用 const | ⚠️ 警告 |
| `no-var` | 禁止使用 var | ❌ 错误 |
| `eqeqeq` | 强制使用 === 和 !== | ⚠️ 警告 |
| `curly` | 强制使用花括号 | ⚠️ 警告 |
| `@typescript-eslint/no-unused-vars` | 禁止未使用的变量 | ⚠️ 警告 |
| `@typescript-eslint/no-explicit-any` | 禁止使用 any | ⚠️ 警告 |
| `vue/html-self-closing` | 强制自闭合标签 | ❌ 错误 |
| `vue/multi-word-component-names` | 组件名多词 | ✅ 关闭 |

#### 🎯 Nuxt 全局变量

已配置以下 Nuxt 全局变量，不会被报告为未定义：

```javascript
definePageMeta, useSeoMeta, useHead, useRouter, useRoute,
navigateTo, useState, useFetch, useAsyncData,
ref, computed, watch, onMounted, onUnmounted, reactive
```

### Prettier 规则

```json
{
  "semi": false,           // 不加分号
  "singleQuote": true,     // 使用单引号
  "tabWidth": 2,           // 2 空格缩进
  "printWidth": 100,       // 行宽 100 字符
  "trailingComma": "none", // 无尾随逗号
  "arrowParens": "avoid"   // 避免不必要的括号
}
```

---

## 💡 最佳实践

### ✅ 推荐写法

```typescript
// 使用 const 而非 var
const name = '张三'

// 使用 === 而非 ==
if (age === 18) {
  // ...
}

// 组件名使用 PascalCase
// components/MyComponent.vue

// 属性使用 kebab-case
<my-component my-prop="value" />

// 使用具体类型而非 any
interface Props {
  icon: Component
  count: number
}

// 未使用的参数用 _ 前缀
function callback(_event: Event) {
  // ...
}
```

### ❌ 避免写法

```typescript
// 避免使用 var
var name = '张三'

// 避免使用 ==
if (age == 18) {
  // ...
}

// 避免使用 any
interface Props {
  data: any // ❌
  data: unknown // ✅
}

// 避免 console.log（生产代码）
console.log('debug') // 使用调试工具替代
```

---

## 🔧 VS Code 配置

在 `.vscode/settings.json` 中添加：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

推荐安装扩展：
- **ESLint** (dbaeumer.vscode-eslint)
- **Prettier - Code formatter** (esbenp.prettier-vscode)

---

## 📊 当前项目状态

### 检查结果统计

```
✖ 3907 problems (2804 errors, 1103 warnings)
```

### 主要问题类型

| 问题类型 | 数量 | 修复优先级 |
|----------|------|------------|
| `vue/html-self-closing` | ~1500 | P2 - 可自动修复 |
| `no-undef` (queryCollection 等) | ~20 | P1 - 需要添加类型 |
| `@typescript-eslint/no-explicit-any` | ~15 | P1 - 需要指定类型 |
| `@typescript-eslint/no-unused-vars` | ~50 | P2 - 可自动修复 |
| `no-console` | ~10 | P2 - 可删除 |

### 建议修复步骤

1. **P0 - 立即修复**
   ```bash
   npm run lint:fix  # 自动修复能修复的问题
   ```

2. **P1 - 本周修复**
   - 修复 `queryCollection` 未定义问题（Nuxt Content v3 API）
   - 替换 `any` 类型为具体类型或 `unknown`
   - 删除未使用的导入

3. **P2 - 本月修复**
   - 删除生产代码中的 `console.log`
   - 统一组件命名规范
   - 添加缺失的全局变量声明

---

## 🔗 相关资源

- [ESLint 官方文档](https://eslint.org/)
- [Prettier 官方文档](https://prettier.io/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [Nuxt 3 ESLint 配置](https://nuxt.com/docs/guide/concepts/code-style)

---

**配置完成时间**: 2026-03-28  
**下次审查**: 2026-04-28
