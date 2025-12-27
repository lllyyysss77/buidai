# AI视频生成

<cite>
**本文档引用文件**   
- [ProductFeatures.vue](file://components/landing/ProductFeatures.vue)
- [solutions.vue](file://pages/solutions.vue)
- [pluginData.ts](file://utils/pluginData.ts)
- [scene.ts](file://utils/scene.ts)
- [HeroSection.vue](file://components/landing/HeroSection.vue)
- [pricing.vue](file://pages/pricing.vue)
- [AppBanner.vue](file://components/AppBanner.vue)
</cite>

## 目录
1. [功能定位与用户触达](#功能定位与用户触达)
2. [工作机制与技术参数](#工作机制与技术参数)
3. [资源调度与算力依赖](#资源调度与算力依赖)
4. [应用场景与成本优化](#应用场景与成本优化)
5. [故障诊断与修复方案](#故障诊断与修复方案)

## 功能定位与用户触达

AI视频生成功能是buidai平台“AI视觉创作”产品矩阵中的核心模块，通过在产品功能展示页（ProductFeatures.vue）中以醒目的红色图标“AI视频”进行呈现，与“Sora2视频”、“AI绘画”等功能并列，凸显其在平台创意生成体系中的重要地位。该功能的用户触达路径清晰：首先通过首页HeroSection的“Nanobanana视频生成全新升级”公告吸引用户注意，随后在产品功能区通过“AI视频”和“Sora2视频”等卡片引导用户点击进入。解决方案页（solutions.vue）进一步将“AI视频”和“Sora2视频”作为独立功能项列出，为用户提供明确的入口。此外，平台通过AppBanner组件持续推送“Sora2短剧创作”的专项活动，形成多维度、高频率的用户触达。

**Section sources**
- [ProductFeatures.vue](file://components/landing/ProductFeatures.vue#L128)
- [solutions.vue](file://pages/solutions.vue#L626-L632)
- [HeroSection.vue](file://components/landing/HeroSection.vue#L21-L23)
- [AppBanner.vue](file://components/AppBanner.vue#L6)

## 工作机制与技术参数

AI视频生成功能的核心机制是将用户的文字提示词（Prompt）转化为动态视频内容。用户提交任务后，系统会调用底层AI模型（如Sora2、豆包大模型等）进行视频生成。整个流程包括任务提交、排队、执行和输出四个阶段。根据平台提供的应用信息（pluginData.ts），Sora2短剧视频创作等应用支持生成25秒左右的高质量视频，这表明平台对视频时长有明确的限制策略，以平衡生成质量和资源消耗。

在技术参数方面，虽然具体配置未在前端代码中直接暴露，但可通过相关应用推断：
- **分辨率**：平台提供的“AI商图秀”、“即梦AI视频”等应用均以图像生成为核心，其输出图像的分辨率标准可作为视频生成的参考，通常支持高清（HD）及以上标准。
- **帧率**：作为高质量视频生成工具，平台很可能支持24fps或30fps的标准帧率，以确保视频播放的流畅性。
- **时长限制**：从“Sora2短剧视频创作”应用的描述来看，单次生成的视频时长被限制在较短的范围内（如25秒），这符合当前AI视频生成技术的普遍实践，旨在控制算力消耗和生成时间。

**Section sources**
- [pluginData.ts](file://utils/pluginData.ts#L71-L79)
- [scene.ts](file://utils/scene.ts#L102-L104)

## 资源调度与算力依赖

AI视频生成是一项高度依赖计算资源的任务，其运行效率和成本与平台的资源调度策略及用户的算力套餐紧密相关。平台通过“算力套餐”功能（在ProductFeatures.vue中以闪电图标展示）为用户提供不同等级的计算资源。根据定价页（pricing.vue）的信息，平台采用“AI积分”作为消耗单位，用户调用AI模型（包括视频生成）时会消耗相应的AI积分。

资源调度策略体现在以下几个方面：
1.  **任务排队**：当系统算力紧张时，用户的视频生成请求会进入队列等待处理，确保高优先级或付费用户的任务能被优先执行。
2.  **模型依赖**：视频生成依赖于强大的本地模型和外部大模型（如Gemini）。例如，“Nanobanana”应用明确提到了结合“gemini-3-pro-image-preview”的生图能力，这表明平台会根据任务需求智能调度不同的模型资源。
3.  **套餐绑定**：用户的算力套餐直接决定了其AI积分的额度和生成任务的优先级。例如，专业版和私有部署版用户拥有更高的AI积分和更优先的性能保障，从而能够生成更长或更高质量的视频。

**Section sources**
- [ProductFeatures.vue](file://components/landing/ProductFeatures.vue#L154)
- [pricing.vue](file://pages/pricing.vue#L46)
- [pluginData.ts](file://utils/pluginData.ts#L82-L84)

## 应用场景与成本优化

AI视频生成功能适用于多种实际场景，为不同用户提供价值：
- **营销视频生成**：用户可以利用“营销素材生成”、“热门视频混剪”等应用，快速制作广告短片、社交媒体内容，紧跟热点趋势，高效产出爆款短视频。
- **教学内容制作**：教师或内容创作者可以将复杂的知识点通过文字描述转化为直观的动画视频，提升教学的趣味性和理解度。
- **影视作品创作**：专业用户可使用“Sora2短剧视频创作”、“影视作品生成”等工具，将剧本创意快速可视化，用于前期预演或宣发物料制作。

**成本优化建议**：
1.  **选择合适的套餐**：对于高频使用的用户，选择“标准版”或“专业版”套餐，按年付费可享受高达25%的折扣，显著降低单次生成成本。
2.  **精准使用提示词**：清晰、具体的提示词能减少模型的试错次数，提高一次生成的成功率，从而节省AI积分。
3.  **利用免费额度**：基础版用户可通过每日签到获取AI积分，用于尝试和体验视频生成功能。

**Section sources**
- [scene.ts](file://utils/scene.ts#L97-L114)
- [pricing.vue](file://pages/pricing.vue#L98-L126)

## 故障诊断与修复方案

尽管平台努力保障服务稳定，但用户在使用AI视频生成功能时仍可能遇到问题。以下是常见故障的诊断与修复方案：

- **生成超时**：
  - **原因分析**：可能是由于系统负载过高导致任务排队时间过长，或用户网络连接不稳定。
  - **解决方案**：检查当前网络状态，尝试刷新页面或稍后重试。若问题持续，可联系客服确认服务状态。

- **编码错误或生成失败**：
  - **原因分析**：通常由提示词（Prompt）过于复杂、包含不支持的指令或模型内部错误引起。
  - **解决方案**：简化提示词，避免使用模糊或矛盾的描述。检查输入内容是否符合规范，然后重新提交任务。

- **输出质量不佳**：
  - **原因分析**：提示词描述不准确，或所选模型/应用不适合当前任务。
  - **解决方案**：参考成功案例优化提示词。尝试更换不同的视频生成应用（如从“AI视频”切换到“Sora2视频”）。

**Section sources**
- [pricing.vue](file://pages/pricing.vue#L183-L197)
- [pluginData.ts](file://utils/pluginData.ts#L71-L79)