<template>
  <div class="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-100 relative">
    <!-- 背景装饰：左上角网格 -->
    <div
      class="absolute top-0 left-0 z-0 h-100 w-full bg-[url('/agent.svg')] pointer-events-none mask-[linear-gradient(to_bottom,white,transparent)] md:h-150"
    />

    <!-- 英雄区域 -->
    <section class="pt-32 pb-12 md:pt-48 md:pb-20 relative overflow-hidden z-10">
      <div class="container mx-auto px-4 text-center relative z-10">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 mb-8"
        >
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>智言万象 V4.6.8 strong release</span>
        </div>

        <h1
          class="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-neutral-900 leading-tight"
        >
          智言AI
          <span
            class="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-indigo-400 block sm:inline"
          >
          领先的
          </span>
         AI创作平台
        </h1>

        <p class="text-base sm:text-xl text-neutral-500 mb-8 md:mb-10 max-w-3xl mx-auto px-2">
          可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="https://www.gmlart.cn"
            target="_blank"
            class="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-900 text-white font-semibold hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation"
          >
            <!-- Rocket Icon -->
            <RocketLaunchIcon class="w-5 h-5" />
            立即开始
            <!-- Arrow Right Icon -->
            <ArrowRightIcon class="w-4 h-4" />
          </a>
          <a
            href="https://www.gmlart.cn"
            target="_blank"
            class="w-full sm:w-auto px-8 py-3 rounded-full bg-white border border-neutral-200 text-neutral-900 font-semibold hover:bg-neutral-50 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 touch-manipulation"
          >
            <!-- Document Icon -->
            <DocumentTextIcon class="w-5 h-5" />
            查看文档
          </a>
        </div>
      </div>
    </section>

    <!-- 核心功能 步骤展示 -->
    <section class="bg-white">
      <!-- 标题区域 -->
      <div class="flex p-px">
        <div class="flex-1 rounded-sm border border-neutral-200/70 bg-white" />
        <div
          class="mx-px w-full max-w-400 rounded-sm border border-neutral-200/75 bg-white shadow-[0_1px_0_rgba(255,255,255,0.8)]"
        >
          <div
            class="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5 lg:px-8 lg:py-6"
          >
            <div class="space-y-2">
              <!-- 区块标签 -->
              <div class="flex items-center gap-2">
                <span class="inline-block h-1.5 w-4 rounded-full bg-indigo-600" />
                <span
                  class="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-900 sm:text-[11px]"
                >
                  Quick Start
                </span>
              </div>
              <!-- 主标题 -->
              <h2
                class="text-lg font-bold leading-tight tracking-tight text-neutral-900 sm:text-xl lg:text-[24px]"
              >
                五步上手，
                <span class="border-b-[3px] border-dotted border-indigo-200 text-neutral-900">
                  轻松开启
                </span>
                AI 业务
              </h2>
            </div>

            <!-- 副标题 -->
            <p
              class="max-w-xs text-xs leading-relaxed text-neutral-600 sm:text-right sm:text-sm lg:max-w-sm"
            >
              从下载到上线，全程可视化引导，当天即可运营
            </p>
          </div>
        </div>
        <div class="flex-1 rounded-sm border border-neutral-200/70 bg-white" />
      </div>

      <!-- 主内容区 -->
      <div class="flex p-px pt-0.5">
        <div class="flex-1 rounded-sm border border-neutral-200/70 bg-white" />
        <div
          class="mx-px w-full max-w-400 rounded-sm border border-neutral-200/75 bg-white p-px shadow-[0_1px_0_rgba(255,255,255,0.8)]"
        >
          <!-- 步骤 + 图片双列网格 -->
          <div
            class="grid grid-cols-1 gap-px overflow-hidden rounded-md bg-neutral-200/70 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
          >
            <!-- 右侧：图片展示区 -->
            <div
              class="relative order-1 flex min-h-64 w-full items-center justify-center overflow-hidden rounded-md bg-[url('images/Modelbackground.png')] bg-cover bg-center bg-no-repeat px-4 py-4 shadow-[0_4px_16px_rgba(15,23,42,0.05)] sm:min-h-72 sm:px-6 sm:py-6 lg:order-2 lg:min-h-[420px]"
              @mouseenter="pauseFeatureAutoplay"
              @mouseleave="resumeFeatureAutoplay"
            >
              <!-- 渐变遮罩 -->
              <div
                class="absolute inset-0 bg-linear-to-br from-black/25 via-black/10 to-transparent"
              />
              <div
                class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/35 to-transparent sm:h-28"
              />

              <!-- 当前功能分类标签 -->
              <div class="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
                <span
                  class="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/92 px-2.5 py-1 text-[10px] font-semibold text-neutral-800 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out sm:px-3 sm:py-1.5 sm:text-[11px]"
                >
                  <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  {{ featureCards[activeCard]?.category }}
                </span>
              </div>

              <!-- 当前序号 -->
              <div
                class="absolute right-4 top-4 z-20 rounded-full border border-white/25 bg-neutral-900/30 px-2.5 py-0.5 text-[10px] font-medium text-white/90 backdrop-blur-sm transition-all duration-300 ease-out sm:right-6 sm:top-6 sm:px-3 sm:py-1 sm:text-[11px]"
              >
                {{ String(activeCard + 1).padStart(2, '0') }} / {{ featureCards.length }}
              </div>

              <!-- 功能图片（带切换动画） -->
              <Transition name="slide-in" mode="out-in">
                <img
                  :key="activeCard"
                  :src="featureCards[activeCard]?.image"
                  :alt="featureCards[activeCard]?.title"
                  loading="lazy"
                  class="relative z-10 mx-auto w-[85%] max-w-100 rounded-lg border border-white/55 shadow-xl object-cover sm:w-[75%] lg:absolute lg:right-0 lg:top-1/2 lg:h-[80%] lg:w-auto lg:max-w-none lg:-translate-y-1/2 lg:rounded-r-none lg:rounded-l-lg"
                />
              </Transition>

              <!-- 图片信息浮层 -->
              <div
                class="absolute inset-x-4 bottom-4 z-20 rounded-lg border border-white/15 bg-neutral-900/38 p-3 text-white shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-4"
              >
                <div class="flex flex-wrap items-center gap-2">
                  <span
                    class="inline-flex h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]"
                  />
                  <span class="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-[11px]">
                    {{ featureCards[activeCard]?.tag }}
                  </span>
                  <span class="ml-auto hidden text-[10px] font-medium text-white/70 sm:inline-flex">
                    自动轮播中
                  </span>
                </div>
                <div class="mt-2 flex items-start justify-between gap-2">
                  <div class="min-w-0">
                    <h3 class="text-sm font-semibold leading-snug text-white sm:text-base">
                      {{ featureCards[activeCard]?.title }}
                    </h3>
                    <p
                      class="mt-1 line-clamp-2 text-[11px] leading-relaxed text-neutral-100/90 sm:text-xs"
                    >
                      {{ featureCards[activeCard]?.desc }}
                    </p>
                  </div>
                </div>
                <div class="mt-3 flex items-center gap-2">
                  <button
                    v-for="(_, index) in featureCards"
                    :key="`indicator-${index}-${activeCard}`"
                    type="button"
                    class="h-1 rounded-full transition-all duration-300 ease-out"
                    :class="
                      activeCard === index
                        ? 'w-6 bg-indigo-100'
                        : 'w-2 bg-white/35 hover:bg-indigo-100/70'
                    "
                    :aria-label="`切换到第 ${index + 1} 个功能`"
                    @click="setActiveCard(index)"
                  />
                </div>
              </div>
            </div>

            <!-- 左侧：功能列表 -->
            <div
              class="order-2 flex flex-col rounded-md bg-white shadow-[0_1px_0_rgba(255,255,255,0.85)] lg:order-1"
            >
              <button
                v-for="(item, index) in featureCards"
                :key="index"
                type="button"
                class="group relative flex flex-1 w-full cursor-pointer flex-col justify-center gap-2 border-b border-neutral-200/80 px-4 py-3 text-left transition-all duration-300 ease-out last:border-b-0 sm:px-6 sm:py-3.5 lg:px-6 lg:py-2"
                :class="
                  activeCard === index
                    ? 'bg-indigo-50/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]'
                    : 'hover:bg-neutral-50/70'
                "
                :aria-pressed="activeCard === index"
                @click="setActiveCard(index)"
              >
                <!-- 激活光晕 -->
                <div
                  class="pointer-events-none absolute inset-x-3 top-2 h-8 rounded-lg blur-xl transition-opacity duration-300 ease-out sm:inset-x-4 sm:top-2"
                  :class="activeCard === index ? 'bg-indigo-100/60 opacity-100' : 'opacity-0'"
                />

                <!-- 标题行 -->
                <div class="relative z-10 flex items-center gap-2.5 sm:gap-3">
                  <!-- 序号徽章 -->
                  <div
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white transition-all duration-300 ease-out sm:h-7 sm:w-7 sm:text-[11px]"
                    :class="
                      activeCard === index
                        ? 'bg-indigo-500 shadow-sm'
                        : 'bg-neutral-300 text-white group-hover:bg-neutral-500'
                    "
                  >
                    {{ String(index + 1).padStart(2, '0') }}
                  </div>

                  <div class="min-w-0 flex-1">
                    <div class="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                      <!-- 标题文字 -->
                      <h3
                        class="text-xs font-semibold leading-snug transition-colors duration-300 ease-out sm:text-sm"
                        :class="
                          activeCard === index
                            ? 'text-neutral-900'
                            : 'text-neutral-800 group-hover:text-neutral-900'
                        "
                      >
                        {{ item.title }}
                      </h3>

                      <!-- 功能标签 -->
                      <span
                        class="inline-flex w-fit shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ease-out sm:text-[11px]"
                        :class="
                          activeCard === index
                            ? 'border-indigo-200/70 bg-indigo-50 text-indigo-700'
                            : 'border-neutral-200/80 bg-neutral-100/80 text-neutral-600'
                        "
                      >
                        {{ item.tag }}
                      </span>
                    </div>

                    <!-- 描述文字 -->
                    <p
                      v-if="activeCard === index"
                      class="mt-1.5 pr-0 text-[11px] leading-relaxed text-neutral-700 transition-colors duration-300 ease-out sm:pr-2 sm:text-xs"
                    >
                      {{ item.desc }}
                    </p>
                  </div>
                </div>

                <!-- 底部状态条 -->
                <div class="absolute bottom-0 left-0 right-0">
                  <div
                    class="h-0.5 w-full overflow-hidden transition-colors duration-300 ease-out"
                    :class="activeCard === index ? 'bg-indigo-100' : 'bg-transparent'"
                  >
                    <div
                      v-if="activeCard === index"
                      :key="activeCard"
                      class="feature-progress h-full w-full bg-indigo-500"
                    />
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div class="flex-1 rounded-sm border border-neutral-200/70 bg-white" />
      </div>

      <!-- 底部摘要文字 -->
      <div class="flex p-px pt-0.5">
        <div class="flex-1 rounded-sm border border-neutral-200/70 bg-white" />
        <div
          class="mx-px w-full max-w-400 rounded-sm border border-neutral-200/75 bg-white"
        >
          <div class="flex items-center justify-center gap-6 px-6 py-6 sm:px-10 sm:py-8">
            <span class="text-lg sm:text-xl font-bold text-neutral-900 tracking-tight">
              智言AI
            </span>
            <span class="w-px h-6 bg-neutral-200" />
            <span class="text-base sm:text-lg text-neutral-600 font-medium">
              一站式 AI 解决方案，助力企业智能化转型
            </span>
          </div>
        </div>
        <div class="flex-1 rounded-sm border border-neutral-200/70 bg-white" />
      </div>
    </section>
    <!-- 核心功能 步骤展示 -->

    <!-- 全行业解决方案 -->
    <AIIndustry />

    <!-- 开源路线图 -->
    <LandingOpenSourceRoadmap />


    <!-- 产品优势 -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 md:mb-20">
          <span
            class="inline-block py-1 px-3 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-900 text-sm font-semibold mb-4"
          >
            Core Strengths
          </span>
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 tracking-tight"
          >
            产品核心优势
          </h2>
          <p class="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            为您提供一站式的 AI 解决方案，助力企业实现业务效率的质变与创新
          </p>
        </div>

        <div class="flex flex-col gap-16 md:gap-24">
          <div
            v-for="(feature, idx) in features"
            :key="idx"
            class="group relative flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24"
            :class="{ 'lg:flex-row-reverse': idx % 2 === 1 }"
          >
            <!-- 文本内容 -->
            <div
              class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div
                class="w-16 h-16 rounded-2xl bg-white border border-neutral-100 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                <component :is="feature.icon" class="w-8 h-8 text-neutral-900" />
              </div>

              <h3 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                {{ feature.title }}
              </h3>
              <p class="text-lg text-neutral-500 leading-relaxed mb-8 max-w-lg">
                {{ feature.desc }}
              </p>

              <!-- 装饰线条 -->
              <div
                class="w-20 h-1 bg-neutral-100 rounded-full group-hover:w-32 group-hover:bg-neutral-900 transition-all duration-300"
              />
            </div>

            <!-- 视频演示 -->
            <div class="w-full lg:w-1/2">
              <div
                class="relative rounded-2xl overflow-hidden shadow-xl shadow-neutral-200 border border-neutral-100 bg-white aspect-video group-hover:-translate-y-2 transition-transform duration-300"
              >
                <video
                  :src="feature.video"
                  autoplay
                  loop
                  muted
                  playsinline
                  class="w-full h-full object-cover"
                />
                <!-- 视频遮罩 -->
                <div
                  class="absolute inset-0 bg-linear-to-tr from-neutral-500/5 to-transparent pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心优势 -->
    <section class="py-16 md:py-24 bg-neutral-50/50 dark:bg-neutral-900 relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16 md:mb-20">
          <UBadge label="Why 智言AI" variant="subtle" color="neutral" class="mb-4 px-3 py-1" />
          <h2
            class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-neutral-900 dark:text-white tracking-tight"
          >
            为什么选择 智言AI ?
          </h2>
          <p
            class="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
          >
            从底层架构到上层应用，我们提供全栈式的 AI 解决方案，助您在智能时代保持领先
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(adv, idx) in advantages"
            :key="idx"
            class="group p-8 rounded-3xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200"
          >
            <div class="relative z-10">
              <div
                class="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center mb-6 group-hover:bg-neutral-900 dark:group-hover:bg-white transition-colors duration-200"
              >
                <component
                  :is="adv.icon"
                  class="w-7 h-7 text-neutral-600 dark:text-neutral-300 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors duration-200"
                />
              </div>

              <h3
                class="text-xl font-bold mb-3 text-neutral-900 dark:text-white group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors duration-200"
              >
                {{ adv.title }}
              </h3>
              <p class="text-neutral-500 dark:text-neutral-400 leading-relaxed">{{ adv.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--常见问题部分 -->
    <section class="overflow-hidden bg-white">
      <!-- 顶部边框行 - 带斜线网格效果 -->
      <div class="p-1">
        <div
          class="w-full min-h-16 rounded-lg border border-neutral-200/70 bg-white"
          style="
            --grid-line-color: color-mix(in oklab, #0a0a0a 5%, transparent);
            background-image: repeating-linear-gradient(315deg, var(--grid-line-color) 0, var(--grid-line-color) 1px, transparent 0, transparent 50%);
            background-size: 10px 10px;
            background-attachment: fixed;
          "
        />
      </div>

      <!-- FAQ 内容行 -->
      <div class="flex p-1 pt-1">
        <!-- 左侧留白边框 -->
        <div class="flex-1 rounded-lg border border-neutral-200/70 bg-white" />

        <!-- 主内容卡片 -->
        <div class="mx-1 w-full max-w-400 overflow-hidden rounded-lg border border-neutral-200/75 bg-white">
          <div class="flex flex-col gap-0 p-5 sm:flex-row sm:items-start sm:px-16 sm:py-10 lg:px-20">
            <!-- 左侧：标题区 + 二维码按钮 -->
            <div class="flex w-full flex-1 pb-5 sm:w-auto sm:justify-end sm:pb-0 lg:pr-8">
              <div class="space-y-4 w-full">
                <!-- 标题区 -->
                <div class="space-y-2">
                  <div class="flex items-center gap-2">
                    <span class="inline-block h-1.5 w-4 rounded-full bg-neutral-900" />
                    <span
                      class="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500"
                    >
                      FAQ
                    </span>
                  </div>
                  <div class="text-xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                    常见问题
                  </div>
                  <div class="text-sm leading-relaxed text-neutral-500 sm:text-base">
                    关于智言AI的常见疑问解答
                  </div>
                </div>

                <!-- 二维码按钮区 -->
                <div class="flex flex-row gap-3 pt-2">
                  <button
                    class="flex-1 px-4 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation"
                    @click="openQrModal('coupon')"
                  >
                    <TicketIcon class="w-4 h-4" />
                    获取优惠码
                  </button>
                  <button
                    class="flex-1 px-4 py-2.5 rounded-full bg-white border border-neutral-200 text-neutral-900 text-sm font-medium hover:bg-neutral-50 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 touch-manipulation"
                    @click="openQrModal('wechat')"
                  >
                    <ChatBubbleLeftRightIcon class="w-4 h-4" />
                    联系客服
                  </button>
                </div>
              </div>
            </div>

            <!-- 垂直分割线（仅桌面端） -->
            <div
              class="mx-8 hidden w-px shrink-0 self-stretch bg-linear-to-b from-transparent via-neutral-200 to-transparent sm:block"
            />

            <!-- 右侧：FAQ 手风琴列表 -->
            <div class="flex-[2] w-full">
              <div
                v-for="(faq, idx) in faqs"
                :key="idx"
                class="rounded-sm border-b border-neutral-200/90 transition-colors duration-200 last:border-b-0"
                :class="activeFaq === idx ? 'bg-neutral-50/70' : ''"
              >
                <!-- 问题行 -->
                <button
                  class="group flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left transition-colors duration-200 focus:outline-none sm:py-5"
                  @click="toggleFaq(idx)"
                >
                  <span
                    class="pr-3 text-sm leading-snug text-neutral-800 transition-colors duration-200 sm:text-base"
                    :class="
                      activeFaq === idx
                        ? 'font-medium text-neutral-900'
                        : 'group-hover:text-neutral-900'
                    "
                  >
                    {{ faq.question }}
                  </span>

                  <!-- 像素风格 chevron SVG -->
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-3 shrink-0 fill-neutral-400 transition-all duration-300 group-hover:fill-neutral-600 sm:size-4"
                    :class="activeFaq === idx ? 'rotate-180 fill-neutral-700' : ''"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 5.30469L4.5 5.30469V8.30469H1.5L1.5 5.30469ZM7.5 11.3047V8.30469H4.5L4.5 11.3047H7.5ZM10.5 11.3047V14.3047H7.5L7.5 11.3047L10.5 11.3047ZM13.5 8.30469L13.5 11.3047H10.5L10.5 8.30469H13.5ZM13.5 8.30469V5.30469L16.5 5.30469V8.30469H13.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>

                <!-- 答案区（grid 展开动画） -->
                <div
                  class="grid transition-all duration-300 ease-in-out"
                  :class="
                    activeFaq === idx
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  "
                >
                  <div class="overflow-hidden">
                    <div
                      class="pt-1 pb-4 pr-7 text-xs leading-relaxed text-neutral-500 sm:pt-1.5 sm:pb-5 sm:pr-8 sm:text-sm"
                    >
                      {{ faq.answer }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧留白边框 -->
        <div class="flex-1 rounded-lg border border-neutral-200/70 bg-white" />
      </div>

      <!-- 底部边框行 - 带斜线网格效果 -->
      <div class="p-1 pt-1">
        <div
          class="w-full min-h-16 rounded-lg border border-neutral-200/70 bg-white"
          style="
            --grid-line-color: color-mix(in oklab, #0a0a0a 5%, transparent);
            background-image: repeating-linear-gradient(315deg, var(--grid-line-color) 0, var(--grid-line-color) 1px, transparent 0, transparent 50%);
            background-size: 10px 10px;
            background-attachment: fixed;
          "
        />
      </div>
    </section>
    
    <!-- CTA 底部行动召唤区域 -->
    <LandingCtaSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type Component } from 'vue'
import {
  DocumentTextIcon,
  ArrowsRightLeftIcon,
  CubeIcon,
  PuzzlePieceIcon,
  WrenchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  TicketIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/vue/24/outline'


// 二维码弹窗 - 触发 BackToTop 组件
const openQrModal = (type: 'coupon' | 'wechat') => {
  const config =
    type === 'coupon'
      ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
      : { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
  window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
}

// 类型定义：功能卡片
interface FeatureCard {
  category: string
  tag: string
  title: string
  desc: string
  image: string
}

// 类型定义：核心特性
interface Feature {
  title: string
  desc: string
  icon: Component
  video: string
}

// 类型定义：优势
interface Advantage {
  title: string
  desc: string
  icon: Component
}

// 类型定义：常见问题
interface Faq {
  question: string
  answer: string
}

// SEO 元数据配置
useSeoMeta({
  title: '智言AI - 企业级 AI Agent 智能体构建平台',
  description:
    '智言AI 企业级 AI 应用构建平台。可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用。全方位赋能企业 AI 转型，打造智能高效的业务闭环。',
  keywords: 'AI Agent, 智能体, 企业级AI, AI应用平台, 智言AI, Workflow, RAG',
  ogTitle: '智言AI - 企业级 AI Agent 智能体构建平台',
  ogDescription:
    '智言AI 企业级 AI 应用构建平台。可视化 Workflow 编排 + 超易用 AI 知识库 + 创新 RAG 检索 + 模板生态 = 轻松构建强大 AI 应用。',
  ogType: 'website'
})

/**
 * 功能卡片数据列表
 * 展示5步快速上手指南
 */
const featureCards: FeatureCard[] = [
  {
    category: '快速开始',
    tag: '源码获取',
    title: '从 GitHub 克隆智言AI',
    desc: '访问我们的开源仓库，一键 Fork 或 Clone，完整源代码即刻到手，开启你的 AI 平台搭建之旅。',
    image: '/images/buidai-1.webp'
  },
  {
    category: '部署安装',
    tag: '极速启动',
    title: '图形化向导安装',
    desc: '支持 Docker 快速部署与原生手动安装，全程可视化界面引导，让技术小白也能轻松完成环境搭建。',
    image: '/images/buidai-2.webp'
  },
  {
    category: '应用搭建',
    tag: '按需组合',
    title: '模块化搭建智能应用',
    desc: '浏览丰富的应用市场，根据业务场景挑选功能模块，像拼乐高一样灵活组合，打造专属 AI 解决方案。',
    image: '/images/buidai-3.webp'
  },
  {
    category: '业务配置',
    tag: '自主定制',
    title: '灵活设置会员 · 支付 · 登录',
    desc: '自定义多层级会员体系，接入主流支付渠道，支持手机号、邮箱、第三方账号等多种登录认证方式。',
    image: '/images/buidai-4.webp'
  },
  {
    category: '上线运营',
    tag: '创收增效',
    title: '发布即变现 · 赋能企业提效',
    desc: '配置完成后立即发布运营，快速实现商业变现；同时可作为企业内部 AI 中台，显著释放团队生产力。',
    image: '/images/buidai-5.webp'
  }
]

/**
 * 核心特性数据列表
 * 介绍平台的核心功能模块
 */
const features: Feature[] = [
  {
    title: '全栈赋能',
    desc: '最新的大模型，丰富的资源库，提供 AI Agent 开发所需的全部核心技术。',
    icon: CubeIcon,
    video:
      'https://portal.volccdn.com/obj/volcfe/bee_prod/biz_950/tos_5947ecf038587e21912f7a7f0c29723a.mp4'
  },
  {
    title: '开箱即用',
    desc: '健全的应用模板和编排框架，用最低的成本开发最专业的 AI Agent。',
    icon: WrenchScrewdriverIcon,
    video:
      'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/7a2291113013f873_1749556611819.mp4'
  },
  {
    title: '安全可信',
    desc: '覆盖 Agent 开发全生命周期安全保障，满足企业级安全需求。',
    icon: PuzzlePieceIcon,
    video:
      'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/d2dabbdbb1d7fbae_1765444399839.mp4'
  },
  {
    title: '全网发布',
    desc: '点击一下，全平台上线！APP、网页、小程序统统搞定。',
    icon: RocketLaunchIcon,
    video:
      'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/58508b9898be7111_1749556627094.mp4'
  }
]

/**
 * 平台优势数据列表
 * 突出产品核心竞争力
 */
const advantages: Advantage[] = [
  {
    title: '开源优势',
    desc: '坚持开源，代码透明，社区活跃。支持私有化部署，数据更安全。',
    icon: CubeIcon
  },
  {
    title: '独特的 QA 结构',
    desc: '专为 QA 问答优化的数据结构，提高搜索准确率和回复质量。',
    icon: SparklesIcon
  },
  {
    title: '可视化工作流',
    desc: '通过拖拽即可完成 AI 工作流的编排，降低使用门槛，提高效率。',
    icon: ArrowsRightLeftIcon
  },
  {
    title: '无限扩展',
    desc: '基于插件机制，可以轻松接入各类第三方服务，扩展系统能力。',
    icon: PuzzlePieceIcon
  },
  {
    title: '便于调试',
    desc: '提供完整的调试工具，方便开发者快速定位问题，优化 Prompt。',
    icon: WrenchScrewdriverIcon
  },
  {
    title: '支持多种模型',
    desc: '兼容 OpenAI、Azure、Anthropic 等主流大模型，支持本地模型接入。',
    icon: WrenchIcon
  }
]

/**
 * 常见问题数据列表
 */
const faqs: Faq[] = [
  {
    question: '什么是 AI Agent，它与普通聊天机器人有什么区别？',
    answer:
      'AI Agent（智能体）不仅能进行对话，还能自主规划任务、使用工具并执行复杂操作。相比仅能被动回复的聊天机器人，Agent 具备更强的自主性与执行力，能真正协助您完成业务工作。'
  },
  {
    question: '我可以使用自己的企业数据训练 AI 吗？',
    answer:
      '可以。智言万象 提供强大的 RAG（检索增强生成）知识库功能，支持上传 PDF、Word、Excel 等多种格式文档。AI 会基于您的私有数据进行精准回答，无需重新训练模型。'
  },
  {
    question: '构建一个 AI 应用需要编程基础吗？',
    answer:
      '完全不需要。智言万象 提供可视化的 Workflow 编排界面，您只需像搭积木一样拖拽组件，即可构建功能强大的 AI 应用，极大降低了开发门槛。'
  },
  {
    question: '我的数据安全吗？会不会被用于模型训练？',
    answer:
      '您的数据绝对安全。智言万象 支持私有化部署，数据完全存储在您自己的服务器中。我们严格遵守企业级安全标准，确保您的敏感信息不会被泄露或用于公有模型训练。'
  },
  {
    question: '平台支持哪些大语言模型？',
    answer:
      '我们支持主流的商业模型（如 GPT-4、Claude 3.5、Gemini）以及开源模型（如 Llama 3、Qwen、ChatGLM）。您可以根据业务需求灵活切换不同的底层模型。'
  }
]

// FAQ 展开/收起状态管理
// 核心功能步骤展示 - 当前激活的功能卡片索引
const activeCard = ref(0)
const activeFaq = ref<number | null>(null)
let featureAutoplayTimer: ReturnType<typeof setInterval> | null = null
let featureAutoplayResumeTimer: ReturnType<typeof setTimeout> | null = null

/**
 * 切换 FAQ 展开状态
 * 使用索引控制当前展开的项，再次点击则收起
 * @param idx - 点击的 FAQ 索引
 */
const toggleFaq = (idx: number) => {
  activeFaq.value = activeFaq.value === idx ? null : idx
}

const stopFeatureAutoplay = () => {
  if (featureAutoplayTimer) {
    clearInterval(featureAutoplayTimer)
    featureAutoplayTimer = null
  }
}

const startFeatureAutoplay = () => {
  stopFeatureAutoplay()
  featureAutoplayTimer = setInterval(() => {
    activeCard.value = (activeCard.value + 1) % featureCards.length
  }, 4500)
}

const pauseFeatureAutoplay = () => {
  stopFeatureAutoplay()
  if (featureAutoplayResumeTimer) {
    clearTimeout(featureAutoplayResumeTimer)
    featureAutoplayResumeTimer = null
  }
}

const resumeFeatureAutoplay = () => {
  if (featureAutoplayResumeTimer) {
    clearTimeout(featureAutoplayResumeTimer)
  }
  featureAutoplayResumeTimer = setTimeout(() => {
    startFeatureAutoplay()
  }, 5000)
}

const setActiveCard = (index: number) => {
  activeCard.value = index
  resumeFeatureAutoplay()
}

onMounted(() => {
  startFeatureAutoplay()
})

onBeforeUnmount(() => {
  stopFeatureAutoplay()
  if (featureAutoplayResumeTimer) {
    clearTimeout(featureAutoplayResumeTimer)
    featureAutoplayResumeTimer = null
  }
})
</script>

<style scoped>
/* 核心功能图片切换动画 */
.slide-in-enter-active,
.slide-in-leave-active {
  transition:
    opacity 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.36s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.36s cubic-bezier(0.22, 1, 0.36, 1);
}
.slide-in-enter-from {
  opacity: 0;
  transform: translate3d(18px, 0, 0) scale(0.985);
  filter: blur(6px);
}
.slide-in-leave-to {
  opacity: 0;
  transform: translate3d(-18px, 0, 0) scale(0.985);
  filter: blur(6px);
}
.slide-in-enter-to,
.slide-in-leave-from {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale(1);
  filter: blur(0);
}

.feature-progress {
  transform-origin: left center;
  animation: featureProgress 4.5s linear infinite;
}

@keyframes featureProgress {
  0% {
    transform: scaleX(0.18);
    opacity: 0.65;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}
</style>
