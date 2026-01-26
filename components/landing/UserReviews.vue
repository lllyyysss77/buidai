<script lang="ts" setup>
import { ref } from 'vue';

/**
 * 用户评价组件 + 常见问题
 * 展示用户对 智言 的反馈和评价，以及常见问题解答
 */

type Review = {
  content: string;
  author: string;
  role: string;
};

const reviews: Review[] = [
  {
    content: '智言 在国内算做得很好很好了，对于数字人生成，无论是从美观还是使用的角度，都非常方便非常优秀，导入功能特别好，比其他工具好用太多了。继续加油！',
    author: 'Alex',
    role: 'AI 创作者',
  },
  {
    content: '智言 真的牛，想要的定制功能提出没多久就加上了，而且测试了下和预期的效果完全一致，我之前还因为其他工具的限制专门写了脚本来处理，现在 智言 直接能满足需求了！',
    author: '何易于',
    role: '全栈开发者',
  },
  {
    content: '每次有问题都能在群里直接找到技术人员，不仅给出了最佳解决方案，还进行了耐心的讲解。再次为你们的专业技能和敬业精神点赞👍🏻你们是国产之光',
    author: '花满楼',
    role: '测试工程师',
  },
  {
    content: '不知不觉发现公司很多运营都被我带动用上 智言 了，平常分享视频素材都是丢个链接出去，大家发现真方便，都跟着我用了哈哈哈哈，现在越来越离不开 智言 啦',
    author: 'vate',
    role: '运营经理',
  },
  {
    content: '其他工具能干的 智言 能干，其他工具不能干的 智言 还是能干，而且 智言 作为国产工具，几乎整合了大部分 AI 相关功能，真就一个代替所有。最主要是对小团队协作友好，有格局。',
    author: '我是光',
    role: '产品经理',
  },
  {
    content: '你们的 UI 真不错，是国内 UI 交互做的最好的。做产品就应该这样精致，这样才会有好的产品体验！我每天用 智言，看着这个 UI 交互心情就很好，效率也会好哈哈。',
    author: '多喝热水',
    role: '前端工程师',
  },
  {
    content: '对于我们这种初创团队来说，智言 的私有化部署方案简直是救星。数据安全有保障，而且成本可控，技术支持响应速度也非常快，必须五星好评！',
    author: 'TechLead',
    role: 'CTO',
  },
  {
    content: 'Sora 视频生成功能太惊艳了！生成的视频质量很高，镜头语言很专业，完全可以直接用到商业项目中。大大缩短了我们的视频制作周期。',
    author: '创意总监',
    role: '视频制作人',
  },
  {
    content: '集成非常丝滑，API 文档清晰易懂。我们在原有系统中接入 智言 的能力只用了半天时间，现在的产品竞争力提升了一个档次。',
    author: 'CodeMaster',
    role: '后端架构师',
  },
  {
    content: '从文案生成到视频制作，一条龙服务太方便了。以前需要几个工具切换，现在一个平台全搞定，效率提升了至少 300%。',
    author: '效率达人',
    role: '自媒体博主',
  },
  {
    content: '界面简洁直观，上手没有任何难度。对于非技术人员也非常友好，我们市场部的同事现在都能自己做一些简单的 AI 素材了。',
    author: 'MarketPro',
    role: '市场总监',
  },
  {
    content: '不仅仅是工具，更是一个生态。社区氛围很好，官方经常分享一些前沿的 AI 玩法和案例，跟着学到了很多新知识。',
    author: 'LearnAI',
    role: '独立开发者',
  }
];

// 将评论分为三列
const columns: Review[][] = [
  reviews.slice(0, 4),
  reviews.slice(4, 8),
  reviews.slice(8, 12)
];

/**
 * 获取指定列的评论列表（用于纵向滚动复制）
 *
 * @param index 列索引（0 开始）
 * @returns 指定列的评论数组，内容复制两遍
 */
const getColumnReviews = (index: number): Review[] => {
  const col = columns[index] ?? [];
  return [...col, ...col];
};

const gradients = [
  'bg-linear-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10',
  'bg-linear-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10',
  'bg-linear-to-br from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10',
  'bg-linear-to-br from-orange-50/50 to-amber-50/50 dark:from-orange-900/10 dark:to-amber-900/10',
  'bg-linear-to-br from-cyan-50/50 to-sky-50/50 dark:from-cyan-900/10 dark:to-sky-900/10',
  'bg-linear-to-br from-rose-50/50 to-red-50/50 dark:from-rose-900/10 dark:to-red-900/10',
];

// --- FAQ Logic ---

// 二维码弹窗 - 触发全局事件
const openQrModal = (type: 'coupon' | 'wechat') => {
  if (typeof window === 'undefined') return;
  const config = type === 'coupon'
    ? { title: '获取优惠码', desc: '扫码获取专属优惠', image: '/qrcode.png' }
    : { title: '联系客服', desc: '扫码添加微信客服', image: '/wechat.png' }
  window.dispatchEvent(new CustomEvent('showQRCodeModal', { detail: config }))
}

const faqs = [
  {
    question: '零代码基础的用户能否轻松上手？',
    answer: '完全没问题。为了降低 AI 的使用门槛，让更多人拥抱智能时代，我们简化了智能体构建、知识库管理及应用部署的流程。通过直观的可视化界面，您可以像"搭积木"一样轻松拼装出专属的 AI 系统，无需任何编程经验。'
  },
  {
    question: '是否支持本地/云端部署及私有模型接入？',
    answer: '当然支持。无论是平台本身还是应用市场中的产品，均提供源码交付，您可以灵活选择私有化部署至本地环境或云服务器。此外，系统也完美兼容并支持接入本地运行的大语言模型。'
  },
 {
    question: '目前包含哪些核心功能？是否支持二次开发？',
    answer: '关于现有及规划中的功能详情，请参阅文档中的「产品路线图」。我们完全支持二次开发，并提供了丰富的 AI 编程接口，助您快速扩展和定制个性化的功能模块。'
  },
  {
    question: '该系统能对接哪些第三方平台？',
    answer: '我们提供全渠道集成方案，无缝对接微信公众号、小程序、企业微信、钉钉、飞书等主流生态。此外，还提供标准的 RESTful API 和 SDK，方便您将其快速集成至现有的网站或移动应用中。'
  },
  {
    question: '平台兼容哪些主流大语言模型？',
    answer: '我们广泛支持各类主流模型，包括商业闭源模型（如 GPT-4、Claude 3.5、Gemini）及前沿开源模型（如 Llama 3、Qwen、ChatGLM）。您可以根据实际业务场景，灵活切换和选择最适合的底层模型。'
  }
]

// FAQ 展开/收起状态管理
const activeFaq = ref<number | null>(null)

/**
 * 切换 FAQ 展开状态
 */
const toggleFaq = (idx: number) => {
  activeFaq.value = activeFaq.value === idx ? null : idx
}
</script>

<template>
  <div class="bg-white dark:bg-gray-950">
    <!-- 用户评价部分 -->
    <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            深受开发者与创作者喜爱
          </h2>
          <p class="text-gray-500 dark:text-gray-400 text-lg">
            听听来自社区的真实反馈，见证 智言 如何提升工作效率
          </p>
        </div>

        <div class="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-[800px] overflow-hidden mask-gradient">
          <!-- Column 1 -->
          <div class="marquee-column space-y-6" style="--duration: 40s">
            <div
              v-for="(review, index) in getColumnReviews(0)"
              :key="`col1-${index}`"
              class="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 break-inside-avoid hover:scale-[1.02] transition-transform duration-300"
              :class="gradients[index % gradients.length]"
            >
              <!-- 评价内容 -->
              <p class="mb-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                "{{ review.content }}"
              </p>

              <!-- 用户信息 -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 shadow-sm border border-gray-100 dark:border-gray-700">
                    <UIcon name="i-heroicons-user" class="w-6 h-6" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white text-sm">
                      {{ review.author }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {{ review.role }}
                    </div>
                  </div>
                </div>

                <!-- 装饰性图标 -->
                <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 text-gray-200 dark:text-gray-800" />
              </div>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="marquee-column space-y-6 hidden md:block" style="--duration: 50s; --direction: reverse">
            <div
              v-for="(review, index) in getColumnReviews(1)"
              :key="`col2-${index}`"
              class="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 break-inside-avoid hover:scale-[1.02] transition-transform duration-300"
              :class="gradients[(index + 2) % gradients.length]"
            >
              <!-- 评价内容 -->
              <p class="mb-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                "{{ review.content }}"
              </p>

              <!-- 用户信息 -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 shadow-sm border border-gray-100 dark:border-gray-700">
                    <UIcon name="i-heroicons-user" class="w-6 h-6" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white text-sm">
                      {{ review.author }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {{ review.role }}
                    </div>
                  </div>
                </div>

                <!-- 装饰性图标 -->
                <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 text-gray-200 dark:text-gray-800" />
              </div>
            </div>
          </div>

          <!-- Column 3 -->
          <div class="marquee-column space-y-6 hidden lg:block" style="--duration: 45s">
            <div
              v-for="(review, index) in getColumnReviews(2)"
              :key="`col3-${index}`"
              class="p-8 rounded-2xl border border-gray-100 dark:border-gray-800 break-inside-avoid hover:scale-[1.02] transition-transform duration-300"
              :class="gradients[(index + 4) % gradients.length]"
            >
              <!-- 评价内容 -->
              <p class="mb-8 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                "{{ review.content }}"
              </p>

              <!-- 用户信息 -->
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-400 dark:text-gray-500 shadow-sm border border-gray-100 dark:border-gray-700">
                    <UIcon name="i-heroicons-user" class="w-6 h-6" />
                  </div>
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white text-sm">
                      {{ review.author }}
                    </div>
                    <div class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {{ review.role }}
                    </div>
                  </div>
                </div>

                <!-- 装饰性图标 -->
                <UIcon name="i-heroicons-chat-bubble-left-right" class="w-5 h-5 text-gray-200 dark:text-gray-800" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 常见问题部分 -->
    <section class="py-12 md:py-24 border-t border-gray-100 dark:border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row gap-8 lg:gap-24 items-start">
          <!-- 左侧：标题 -->
          <div class="lg:w-1/3 w-full text-center lg:text-left">
            <h2 class="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">常见问题</h2>
            <p class="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-6">关于智言AI的常见疑问解答</p>
            <div class="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 justify-center lg:justify-start">
              <button @click="openQrModal('coupon')" class="px-6 py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center gap-2 touch-manipulation">
                <UIcon name="i-heroicons-ticket" class="w-4 h-4" />
                获取优惠码
              </button>
              <button @click="openQrModal('wechat')" class="px-6 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-2 touch-manipulation">
                <UIcon name="i-heroicons-chat-bubble-left-right" class="w-4 h-4" />
                联系客服
              </button>
            </div>
          </div>

          <!-- 右侧：FAQ 列表 -->
          <div class="lg:w-2/3 w-full space-y-4">
            <div
              v-for="(faq, idx) in faqs"
              :key="idx"
              class="bg-white dark:bg-gray-900 rounded-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              <button
                @click="toggleFaq(idx)"
                class="w-full flex items-start justify-between p-6 text-left focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 transition-colors touch-manipulation min-h-[44px]"
              >
                <span class="text-base md:text-lg font-medium text-gray-900 dark:text-white pr-4 md:pr-8">{{ faq.question }}</span>
                <span class="text-gray-400 dark:text-gray-500 shrink-0 mt-1 transition-transform duration-300" :class="{ 'rotate-45': activeFaq === idx }">
                  <UIcon name="i-heroicons-plus" class="w-5 h-5" />
                </span>
              </button>
              <div
                class="grid transition-all duration-300 ease-in-out"
                :class="activeFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              >
                <div class="overflow-hidden">
                  <div class="px-6 pb-6 text-sm md:text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.mask-gradient {
  mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
}

.marquee-column {
  animation: marquee-vertical var(--duration) linear infinite;
  animation-direction: var(--direction, normal);
}

.marquee-column:hover {
  animation-play-state: paused;
}

@keyframes marquee-vertical {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}
</style>
