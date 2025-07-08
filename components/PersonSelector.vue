<template>
  <div class="person-selector">
    <h2 class="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">
      Découvrez notre équipe
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink
        v-for="person in people"
        :key="person.id"
        :to="`/team/${person.id}`"
        class="group block p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
      >
        <div class="flex items-center space-x-4">
          <div class="relative">
            <img
              :src="person.avatar"
              :alt="person.name"
              class="w-12 h-12 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-300 transition-colors"
            />
            <div
              class="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"
            ></div>
          </div>

          <div class="flex-1 min-w-0">
            <h3
              class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors truncate"
            >
              {{ person.name }}
            </h3>
            <p class="text-sm text-gray-600 truncate">{{ person.title }}</p>
            <p class="text-xs text-gray-500 truncate">{{ person.company }}</p>
          </div>

          <Icon
            name="heroicons:arrow-right"
            class="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all"
          />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  people: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped>
/* Masquer la scrollbar mais garder la fonctionnalité */
.overflow-x-auto {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.overflow-x-auto::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}
</style>
