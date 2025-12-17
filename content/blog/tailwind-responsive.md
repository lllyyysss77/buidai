---
title: '如何使用 Tailwind CSS 构建响应式布局'
description: '掌握 Tailwind CSS 的核心概念，快速构建美观且响应式的网页界面。'
date: 2025-04-15
category: '前端'
tags: ['CSS', 'Tailwind', 'Design']
image: 'https://nuxt.com/assets/design-kit/icon-green.png'
---

# 如何使用 Tailwind CSS 构建响应式布局

Tailwind CSS 是一个实用优先的 CSS 框架，它改变了我们编写样式的方式。

## 响应式前缀

Tailwind 使用 `sm:`, `md:`, `lg:`, `xl:` 等前缀来控制不同屏幕尺寸下的样式。

```html
<div class="bg-red-500 md:bg-green-500 lg:bg-blue-500">
  响应式背景色
</div>
```

## Flexbox 布局

Flexbox 是现代布局的基础。

- `flex`: 启用 Flexbox
- `flex-col`: 垂直排列
- `items-center`: 垂直居中
- `justify-between`: 两端对齐

## 总结

结合 Nuxt 和 Tailwind，开发体验极佳。
