<template>
  <div v-if="error" class="text-red-500 text-sm p-2">
    导航加载失败: {{ error }}
  </div>
  <div v-else-if="pending && level === 0 && !navigation" class="animate-pulse space-y-3 p-2">
    <div class="h-4 bg-gray-200 rounded w-1/3"></div>
    <div class="space-y-2 pl-4">
      <div class="h-3 bg-gray-100 rounded w-3/4"></div>
      <div class="h-3 bg-gray-100 rounded w-2/3"></div>
    </div>
  </div>
  <component v-else :is="level === 0 ? 'nav' : 'div'" aria-label="文档导航">
    <ul :class="level === 0 ? 'space-y-3' : 'space-y-1'">
      <li v-for="item in items" :key="item.path || item.title">
        <!-- Level 0: Section Headers (Groups) -->
        <template v-if="level === 0 && item.children">
          <div
            class="flex items-center gap-2 font-bold text-gray-900 dark:text-gray-100 mb-2 px-3 text-sm tracking-tight select-none"
            role="heading"
            :aria-level="2"
          >
            <UIcon
              v-if="item.icon"
              :name="item.icon"
              class="w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
            />
            <span>{{ item.title }}</span>
          </div>
          <!-- Recursive render for children -->
          <DocsSidebar :navigation="item.children" :level="level + 1" />
        </template>

        <!-- Level > 0: Links or Nested Groups -->
        <template v-else>
          <!-- Nested Group with Children (Collapsible in future, currently static tree) -->
          <div v-if="item.children?.length">
             <NuxtLink
              :to="item.path"
              class="group flex items-center justify-between px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-200"
              :class="[
                isActive(item.path)
                  ? 'text-ui-primary bg-primary-50 dark:bg-primary-900/10'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
              ]"
              :aria-current="isActive(item.path) ? 'page' : undefined"
            >
              <span class="flex items-center gap-2">
                <UIcon
                  v-if="item.icon"
                  :name="item.icon"
                  class="w-4 h-4 shrink-0 transition-colors"
                  :class="isActive(item.path) ? 'text-ui-primary' : 'text-gray-400 group-hover:text-gray-500'"
                  aria-hidden="true"
                />
                {{ item.title }}
              </span>
            </NuxtLink>

            <!-- Recursive children -->
            <div class="mt-1 ml-3 pl-3 border-l border-gray-100 dark:border-gray-800">
               <DocsSidebar :navigation="item.children" :level="level + 1" />
            </div>
          </div>

          <!-- Leaf Link -->
          <NuxtLink
            v-else
            :to="item.path"
            class="group flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors duration-200 relative"
            :class="[
              isActive(item.path)
                ? 'text-ui-primary font-medium bg-primary-50 dark:bg-primary-900/10'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
            ]"
            :aria-current="isActive(item.path) ? 'page' : undefined"
          >
            <UIcon
              v-if="item.icon"
              :name="item.icon"
              class="w-4 h-4 shrink-0 transition-colors"
              :class="isActive(item.path) ? 'text-ui-primary' : 'text-gray-400 group-hover:text-gray-500'"
              aria-hidden="true"
            />
            {{ item.title }}
          </NuxtLink>
        </template>
      </li>
    </ul>
  </component>
</template>

<script setup lang="ts">
/**
 * DocsSidebar Component
 *
 * Renders the documentation sidebar navigation tree.
 * Features:
 * - Recursive rendering for multi-level navigation
 * - Responsive design with Nuxt UI integration
 * - A11y support (aria attributes)
 * - Auto-highlighting active route
 * - Automatically fetches and groups docs by category if navigation is not provided
 *
 * @component
 */

import type { PropType } from 'vue'

/**
 * Interface for navigation item structure
 */
interface NavigationItem {
  title: string
  path: string
  icon?: string
  children?: NavigationItem[]
  [key: string]: any
}

const props = defineProps({
  /**
   * The navigation tree data
   * Optional: if not provided, will fetch from content
   */
  navigation: {
    type: Array as PropType<NavigationItem[]>,
    default: undefined
  },
  /**
   * Current nesting level (used for recursion and styling)
   */
  level: {
    type: Number,
    default: 0
  }
})

const route = useRoute()

// Fetch logic for root level when navigation is missing
// Note: Removed top-level await to prevent component suspension issues if not handled by parent
const { data: fetchedDocs, pending, error } = useAsyncData('sidebar-docs', async () => {
  // Only fetch at root level and if navigation is not provided
  if (props.level !== 0 || props.navigation) return []

  try {
    const docs = await queryCollection('docs')
      .select('title', 'path', 'category', 'order', 'navigation')
      .order('order', 'ASC')
      .all()

    // console.log('Fetched Docs for Sidebar:', docs)
    return docs
  } catch (e) {
    console.error('Error fetching sidebar docs:', e)
    throw e
  }
})

const items = computed<NavigationItem[]>(() => {
  if (props.navigation) return props.navigation

  if (props.level === 0 && fetchedDocs.value) {
    const groups: Record<string, NavigationItem[]> = {}

    // Process docs
    fetchedDocs.value.forEach(doc => {
      const cat = doc.category || '未分类'
      if (!groups[cat]) groups[cat] = []

      // Handle doc.navigation type safely
      // In Nuxt Content, navigation can be boolean or object
      let icon = undefined
      if (typeof doc.navigation === 'object' && doc.navigation !== null) {
        // @ts-ignore: Dynamic access to navigation properties
        icon = doc.navigation.icon
      }

      groups[cat].push({
        title: doc.title,
        path: doc.path,
        icon: icon,
        children: [] // Leaf nodes don't have children in this flat->group mapping usually
      })
    })

    // Convert to array
    // Sort logic: You can add custom order for categories here if needed
    // Currently sorting by category name alphabetically or you can hardcode order
    const categoryOrder = ['指南', '框架', '未分类']

    return Object.entries(groups)
      .sort(([a], [b]) => {
        const idxA = categoryOrder.indexOf(a)
        const idxB = categoryOrder.indexOf(b)
        // If both in list, sort by index
        if (idxA !== -1 && idxB !== -1) return idxA - idxB
        // If a in list, it comes first
        if (idxA !== -1) return -1
        // If b in list, it comes first
        if (idxB !== -1) return 1
        // Otherwise alphabetical
        return a.localeCompare(b)
      })
      .map(([title, children]) => ({
        title,
        path: '', // Group headers don't have a path
        children,
        icon: undefined // Groups don't typically have icons in this schema, but TS needs it
      }))
  }

  return []
})

/**
 * Checks if the given path matches the current route.
 *
 * @param {string} path - The path to check
 * @returns {boolean} True if the path is active
 */
const isActive = (path: string): boolean => {
  if (!path) return false
  return route.path === path
}
</script>

<style scoped>
/* Optional: Add custom transitions if needed, though Tailwind classes are preferred */
</style>
