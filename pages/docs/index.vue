<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <p class="text-gray-500">Redirecting to documentation...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData('docs-nav-root', () => {
  return queryCollectionNavigation('docs')
})

onMounted(() => {
  if (navigation.value && navigation.value.length > 0) {
    const firstItem = navigation.value[0]
    // If first item has children, go to first child
    if (firstItem.children && firstItem.children.length > 0) {
      navigateTo(firstItem.children[0].path)
    } else {
      navigateTo(firstItem.path)
    }
  } else {
    // Fallback if no docs
    navigateTo('/')
  }
})
</script>
