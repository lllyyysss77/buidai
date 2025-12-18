<template>
  <nav>
    <ul class="space-y-3">
      <li v-for="item in navigation" :key="item.path">
        <!-- Level 0: Section Headers (Groups) -->
        <template v-if="level === 0 && item.children">
          <div class="font-bold text-gray-900 mb-2 px-3 text-sm tracking-tight">
            {{ item.title }}
          </div>
          <!-- Recursive render for children -->
          <DocsSidebar :navigation="item.children" :level="level + 1" />
        </template>

        <!-- Level > 0: Links or Nested Groups -->
        <template v-else>
          <!-- If item has children but it's deeper, treat as collapsible or just nested list -->
          <!-- For simplicity in this iteration, we just render links or recursive lists without collapse -->

          <div v-if="item.children && item.children.length > 0">
             <NuxtLink
              :to="item.path"
              class="group flex items-center justify-between px-3 py-1.5 text-sm font-medium rounded-md transition-colors"
              :class="[
                isActive(item.path)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
              ]"
            >
              {{ item.title }}
            </NuxtLink>
            <div class="mt-1 ml-3 pl-3 border-l border-gray-100">
               <DocsSidebar :navigation="item.children" :level="level + 1" />
            </div>
          </div>

          <NuxtLink
            v-else
            :to="item.path"
            class="block px-3 py-1.5 text-sm rounded-md transition-colors relative"
            :class="[
              isActive(item.path)
                ? 'text-primary-600 font-medium bg-primary-50'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
            ]"
          >
            {{ item.title }}
            <!-- Active Indicator (Nuxt style often uses a border, but here bg is safer for all themes) -->
          </NuxtLink>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps({
  navigation: {
    type: Array as PropType<any[]>,
    required: true
  },
  level: {
    type: Number,
    default: 0
  }
})

const route = useRoute()

// Helper to check if a path is active
/**
 * 检查当前路径是否处于激活状态。
 *
 * @param path - 导航项的路径。
 * @returns 如果当前路由路径与参数路径完全匹配，则返回 true。
 */
const isActive = (path: string) => route.path === path
</script>
