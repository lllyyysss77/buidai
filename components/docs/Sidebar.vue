<template>
  <component :is="level === 0 ? 'nav' : 'div'" aria-label="文档导航">
    <ul :class="level === 0 ? 'space-y-3' : 'space-y-1'">
      <li v-for="item in navigation" :key="item.path">
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
   */
  navigation: {
    type: Array as PropType<NavigationItem[]>,
    required: true
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

/**
 * Checks if the given path matches the current route.
 *
 * @param {string} path - The path to check
 * @returns {boolean} True if the path is active
 */
const isActive = (path: string): boolean => {
  return route.path === path
}
</script>

<style scoped>
/* Optional: Add custom transitions if needed, though Tailwind classes are preferred */
</style>
