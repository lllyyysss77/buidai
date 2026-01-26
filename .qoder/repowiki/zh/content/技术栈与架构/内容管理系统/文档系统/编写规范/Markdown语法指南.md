# Markdown语法指南

<cite>
**本文档引用文件**  
- [pages/docs/[...slug].vue](file://pages/docs/[...slug].vue)
- [content.config.ts](file://content.config.ts)
- [nuxt.config.ts](file://nuxt.config.ts)
- [define.md](file://content/docs/framework/define.md)
- [demo.md](file://content/docs/introduction/demo.md)
</cite>

## 目录
1. [简介](#简介)
2. [代码块语法高亮](#代码块语法高亮)
3. [自定义容器语法](#自定义容器语法)
4. [表格排版最佳实践](#表格排版最佳实践)
5. [嵌入Vue组件与HTML标签](#嵌入vue组件与html标签)
6. [内容解析与渲染机制](#内容解析与渲染机制)
7. [可复用内容模板](#可复用内容模板)

## 简介
本文档系统介绍智言万象项目中支持的Markdown扩展语法及其渲染机制。基于Nuxt Content模块构建的内容系统，项目通过`ContentRenderer`组件将Markdown内容解析为DOM结构，并应用Tailwind CSS样式。文档涵盖代码高亮、自定义容器、表格排版等核心语法，以及Vue组件嵌入和内容渲染流程。

**Section sources**
- [nuxt.config.ts](file://nuxt.config.ts#L1-L91)
- [content.config.ts](file://content.config.ts#L1-L57)

## 代码块语法高亮
项目使用Shiki.js实现代码块语法高亮，支持多种编程语言的精确着色。代码块通过fenced code blocks语法定义，使用三个反引号包围，并指定语言标识。

语言标识遵循标准命名规范，如`ts`表示TypeScript，`vue`表示Vue单文件组件，`json`表示JSON数据等。系统内置了对主流编程语言的支持，包括JavaScript、Python、Go、Rust等。

代码块在渲染后具有统一的视觉样式：浅色背景、圆角边框、内边距和水平滚动条，确保长代码行的可读性。行内代码使用`<code>`标签包裹，呈现为等宽字体并带有轻微背景色区分。

```ts [content.config.ts]
import { defineCollection, defineContentConfig } from '@nuxt/content'
```

**Section sources**
- [package-lock.json](file://package-lock.json#L3431-L3459)
- [pages/docs/[...slug].vue](file://pages/docs/[...slug].vue#L316-L326)

## 自定义容器语法
项目支持使用自定义容器语法创建语义化的内容区块，如警告、提示和注释。容器语法以`::`开头，后跟容器类型，内容位于容器标记之间。

### 语义化容器类型
- `::warning`：用于显示重要警告信息，视觉上突出显示
- `::tip`：用于提供实用建议或技巧，带有灯泡图标
- `::note`：用于补充说明或额外信息，视觉上较为温和
- `::prose-note`：用于文档中的专业注释

容器支持嵌套使用，但建议避免多层嵌套以保持内容清晰。每个容器类型都有预定义的样式，包括边框、背景色、图标和内边距，确保视觉一致性。

::warning
每日自动还原数据，仅做前后台界面功能演示，所有用户均可登录查看，请勿在演示平台保存或输入密码、秘钥等任何包含个人隐私的信息
::

::tip{icon="i-ph-lightbulb"}
**Cloudflare D1 成本优化**：使用索引时，对索引列的 `WHERE` 子句在只有一个匹配项时仅计为 1 次行读取。
::

**Section sources**
- [demo.md](file://content/docs/introduction/demo.md#L22-L24)
- [define.md](file://content/docs/framework/define.md#L14-L55)

## 表格排版最佳实践
表格是展示结构化数据的重要方式。项目中的表格采用响应式设计，确保在不同屏幕尺寸下都能良好显示。

### 对齐方式
表格内容默认左对齐，表头使用加粗字体以区分。通过CSS控制，表头和单元格具有适当的内边距和边框，提升可读性。

### 列宽控制
系统自动根据内容长度调整列宽，避免过窄或过宽的列。对于包含长文本的列，启用文本截断和悬停提示功能。

### 响应式处理
在移动设备上，表格支持水平滚动，确保所有列都能查看。对于复杂表格，建议使用分步展示或数据可视化替代。

| 参数 | 类型 | 描述 | 必填 |
|------|------|------|------|
| title | string | 文档标题 | 是 |
| description | string | 文档描述 | 否 |
| category | string | 分类名称 | 否 |

**Section sources**
- [pages/docs/[...slug].vue](file://pages/docs/[...slug].vue#L336-L346)
- [define.md](file://content/docs/framework/define.md#L73-L77)

## 嵌入Vue组件与HTML标签
Markdown内容支持嵌入Vue组件和HTML标签，实现高级交互功能。通过这种方式，可以创建动态、交互式的内容。

### Vue组件嵌入
在Markdown文件中可以直接使用Vue组件，如`<UIcon>`、`<UMarquee>`等。这些组件由Nuxt UI提供，支持丰富的交互效果和动画。

### HTML标签使用
允许使用标准HTML标签进行精细布局控制，如`<div>`、`<span>`、`<button>`等。结合Tailwind CSS类名，可以实现复杂的样式设计。

### 交互功能实现
通过嵌入组件，可以实现轮播图、弹出框、折叠面板等交互功能。这些功能增强了文档的用户体验，使内容更加生动。

<UIcon name="i-simple-icons-github" class="size-10 mx-16" />

**Section sources**
- [pricing.vue](file://pages/pricing.vue#L378-L388)
- [HeroSection.vue](file://components/landing/HeroSection.vue#L319-L328)

## 内容解析与渲染机制
项目使用Nuxt Content模块处理Markdown内容，通过`ContentRenderer`组件将内容解析为DOM结构。

### 解析流程
1. 读取Markdown文件并解析Frontmatter元数据
2. 将Markdown语法转换为AST（抽象语法树）
3. 应用自定义转换器处理特殊语法
4. 生成最终的HTML结构

### 渲染过程
`ContentRenderer`组件接收解析后的内容对象，将其渲染为DOM元素。过程中应用预定义的CSS类名，确保样式一致性。

### Tailwind CSS应用
所有内容样式通过Tailwind CSS类名控制，包括字体、颜色、间距和布局。通过`prose`类实现响应式排版，确保在不同设备上的良好显示。

```vue [pages/docs/[...slug].vue]
<ContentRenderer :value="page" />
```

**Diagram sources**
- [pages/docs/[...slug].vue](file://pages/docs/[...slug].vue#L73)

**Section sources**
- [pages/docs/[...slug].vue](file://pages/docs/[...slug].vue#L1-L348)
- [nuxt.config.ts](file://nuxt.config.ts#L18-L21)

## 可复用内容模板
为保持文档一致性，建议使用标准化的内容模板。以下是一些常用模板示例。

### 文档头部模板
```yaml
---
category: 入门指南
title: 文档标题
navigation:
  title: 导航标题
  icon: i-lucide-info
description: 文档简介
---
```

### 警告容器模板
```
::warning
此处填写警告内容，提醒用户注意重要事项。
::
```

### 提示容器模板
```
::tip{icon="i-ph-lightbulb"}
此处填写实用建议或技巧，帮助用户更好地使用功能。
::
```

### 代码示例模板
```language [filename]
// 此处填写代码示例
const example = 'code';
```

**Section sources**
- [define.md](file://content/docs/framework/define.md#L1-L229)
- [1.start.md](file://content/docs/introduction/1.start.md#L1-L117)