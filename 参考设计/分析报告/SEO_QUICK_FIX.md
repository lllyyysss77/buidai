# SEO 快速修复指南

> 创建日期：2026-03-28  
> 优先级：P0 - 本周内完成

---

## 📋 待修复清单

### P0 - 立即修复（7 个页面）

- [ ] `/about` - 添加 useSeoMeta
- [ ] `/contact` - 添加 useSeoMeta
- [ ] `/solutions` - 添加 useSeoMeta
- [ ] `/resources` - 添加 useSeoMeta
- [ ] `/changelog` - 添加 useSeoMeta
- [ ] `/buidai` - 添加 useSeoMeta
- [ ] `/plugin` - 添加 useSeoMeta

### P1 - 近期修复

- [ ] 添加全局 Canonical URL
- [ ] 创建 og-image.jpg (1200x630)
- [ ] 添加 JSON-LD 结构化数据

---

## 🔧 修复代码

### 1. 全局 Canonical URL

**文件**: `nuxt.config.ts`

在 `app.head.link` 数组中添加：

```typescript
{ rel: 'canonical', href: 'https://www.智言万象.com' }
```

**位置**: 在 favicon 配置之后

---

### 2. 页面 SEO 修复

#### pages/about.vue

在 `<script setup>` 中添加：

```typescript
useSeoMeta({
  title: '关于我们 - 智言 AI | 企业级 AI 应用构建平台',
  description: '了解 智言 AI 的使命、愿景和核心价值观。致力于降低 AI 应用门槛，让每一个组织都能安全、高效地驾驭人工智能的力量。',
  keywords: '智言 AI 团队，AI 公司介绍，企业级 AI 平台，AI 解决方案，智能体构建',
  ogTitle: '关于我们 - 智言 AI',
  ogDescription: '了解 智言 AI 的使命、愿景和核心价值观',
  ogType: 'website'
})
```

---

#### pages/contact.vue

```typescript
useSeoMeta({
  title: '联系我们 - 智言 AI | 产品咨询与技术支持',
  description: '有任何问题或需求？通过邮件、微信或电话联系我们。智言 AI 团队将竭诚为您服务，提供产品咨询与技术支持。',
  keywords: '联系智言 AI, 技术支持，产品咨询，商务合作，客服热线',
  ogTitle: '联系我们 - 智言 AI',
  ogDescription: '通过多种方式联系智言 AI 团队，获取产品咨询与技术支持',
  ogType: 'website'
})
```

---

#### pages/solutions.vue

```typescript
useSeoMeta({
  title: '解决方案 - 智言 AI | 全行业 AI 应用落地方案',
  description: '探索 智言 AI 在各行业的应用解决方案。从教育、电商到金融、医疗，我们提供专业、可落地的 AI 应用构建服务，助力企业数字化转型。',
  keywords: 'AI 解决方案，企业 AI 应用，行业解决方案，数字化转型，智能体落地',
  ogTitle: '解决方案 - 智言 AI',
  ogDescription: '全行业 AI 应用落地方案，从教育、电商到金融、医疗',
  ogType: 'website'
})
```

---

#### pages/resources.vue

```typescript
useSeoMeta({
  title: '资源下载 - 智言 AI | 客户端、SDK 与开发工具',
  description: '下载 智言万象 客户端、SDK 及开发工具。支持 Windows、macOS、Linux 及微信小程序，提供完整的开发文档与示例代码。',
  keywords: '智言万象下载，客户端下载，SDK 下载，开发工具，API 文档',
  ogTitle: '资源下载 - 智言 AI',
  ogDescription: '下载客户端、SDK 及开发工具，支持多平台',
  ogType: 'website'
})
```

---

#### pages/changelog.vue

```typescript
useSeoMeta({
  title: '更新日志 - 智言万象 | 产品迭代历史与新功能发布',
  description: '查看 智言万象 的最新版本更新记录，包括新功能上线、性能优化、Bug 修复及未来规划。保持关注，获取第一手产品动态。',
  keywords: '智言万象更新，版本发布，新功能，产品迭代，更新历史',
  ogTitle: '更新日志 - 智言万象',
  ogDescription: '查看最新版本更新记录，获取第一手产品动态',
  ogType: 'website'
})
```

---

#### pages/buidai.vue

```typescript
useSeoMeta({
  title: '私有部署 - 智言 AI | 企业级 AI 系统源码与私有化部署',
  description: '智言 AI 提供企业级 AI 系统源码与私有化部署服务。支持本地部署、私有云部署，保障数据安全，满足企业合规需求。',
  keywords: 'AI 私有部署，企业级 AI 系统，AI 源码，本地部署，私有云，数据安全',
  ogTitle: '私有部署 - 智言 AI',
  ogDescription: '企业级 AI 系统源码与私有化部署，保障数据安全',
  ogType: 'website'
})
```

---

#### pages/plugin.vue

```typescript
useSeoMeta({
  title: '应用中心 - 智言万象 | 丰富的 AI 应用插件市场',
  description: '探索 智言万象 应用中心，发现丰富的 AI 应用插件。从 AI 绘画、AI 视频到智能写作、AI PPT，一站式满足您的 AI 应用需求。',
  keywords: 'AI 应用市场，AI 插件，AI 绘画，AI 视频，智能写作，AI PPT',
  ogTitle: '应用中心 - 智言万象',
  ogDescription: '发现丰富的 AI 应用插件，一站式满足 AI 应用需求',
  ogType: 'website'
})
```

---

### 3. 添加 JSON-LD 结构化数据

**文件**: `app.vue` 或 `layouts/default.vue`

在 `<script setup>` 中添加：

```typescript
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: '智言 AI',
        url: 'https://www.智言万象.com',
        logo: 'https://www.智言万象.com/logo.svg',
        description: '企业级 AI 应用构建平台，提供可视化 Workflow 编排、AI 知识库、RAG 检索等核心能力',
        sameAs: [
          'https://github.com/your-org',
          'https://twitter.com/your-org'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: 'support@智言 AI.com'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: '智言万象',
        url: 'https://www.智言万象.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.智言万象.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: '智言万象',
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Web, Windows, macOS, Linux',
        description: '企业级 AI 应用构建平台，提供可视化 Workflow 编排、AI 知识库、RAG 检索等核心能力',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CNY'
        }
      })
    }
  ]
})
```

---

### 4. 博客文章结构化数据

**文件**: `pages/blog/[...slug].vue`

在 `<script setup>` 中添加：

```typescript
// 在获取 post 数据后
const structuredData = computed(() => {
  if (!post.value) return null
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.value.title,
    image: post.value.image ? `https://www.智言万象.com${post.value.image}` : '',
    datePublished: post.value.date,
    dateModified: post.value.updated || post.value.date,
    author: {
      '@type': 'Person',
      name: post.value.authors?.[0]?.name || '智言 AI 团队'
    },
    publisher: {
      '@type': 'Organization',
      name: '智言 AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.智言万象.com/logo.svg'
      }
    },
    description: post.value.description
  }
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: structuredData
    }
  ]
})
```

---

## ✅ 修复检查清单

### 技术 SEO

- [x] Sitemap.xml 已生成
- [x] Robots.txt 已配置
- [x] SSG 静态生成已启用
- [ ] Canonical URL 待添加
- [ ] Hreflang 标签（预留）

### 页面 SEO

- [x] 首页 useSeoMeta
- [x] Agent 页 useSeoMeta
- [x] Pricing 页 useSeoMeta
- [x] Download 页 useSeoMeta
- [ ] About 页 useSeoMeta
- [ ] Contact 页 useSeoMeta
- [ ] Solutions 页 useSeoMeta
- [ ] Resources 页 useSeoMeta
- [ ] Changelog 页 useSeoMeta
- [ ] Buidai 页 useSeoMeta
- [ ] Plugin 页 useSeoMeta

### 结构化数据

- [x] Open Graph 基础标签
- [ ] Organization 结构化数据
- [ ] WebSite 结构化数据
- [ ] SoftwareApplication 结构化数据
- [ ] Article 结构化数据（博客）
- [ ] BreadcrumbList 结构化数据

### 社交分享

- [ ] og:image (1200x630)
- [ ] twitter:card
- [ ] twitter:image

---

## 📈 验证步骤

### 1. Google Rich Results Test

访问：https://search.google.com/test/rich-results

测试页面：
- 首页
- 博客文章页
- 产品页

### 2. Google Search Console

1. 提交 sitemap.xml
2. 检查索引覆盖率
3. 查看增强功能报告

### 3. Facebook Debugger

访问：https://developers.facebook.com/tools/debug/

测试社交分享预览

### 4. Twitter Card Validator

访问：https://cards-dev.twitter.com/validator

测试 Twitter 卡片预览

---

## 🎯 预期效果

修复后 SEO 评分提升：

| 指标 | 修复前 | 修复后 | 提升 |
|------|--------|--------|------|
| 整体评分 | 88/100 | 95/100 | +8% |
| 页面 SEO 覆盖 | 60% | 100% | +67% |
| 结构化数据 | 75/100 | 95/100 | +27% |

---

**修复完成时间**: _______  
**验证完成时间**: _______
