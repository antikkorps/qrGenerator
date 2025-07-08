<template>
  <nav class="bg-white shadow-sm border-b">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <div
            class="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
          >
            <Icon name="heroicons:qr-code" class="w-5 h-5 text-white" />
          </div>
          <span class="font-bold text-xl text-gray-900">QR Generator</span>
        </NuxtLink>

        <!-- Navigation -->
        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink
            to="/"
            class="text-gray-600 hover:text-gray-900 transition-colors"
            active-class="text-blue-600 font-medium"
          >
            Accueil
          </NuxtLink>
          <NuxtLink
            to="/qr-generator"
            class="text-gray-600 hover:text-gray-900 transition-colors"
            active-class="text-blue-600 font-medium"
          >
            QR Code
          </NuxtLink>
          <NuxtLink
            to="/business-cards"
            class="text-gray-600 hover:text-gray-900 transition-colors"
            active-class="text-blue-600 font-medium"
          >
            Cartes de Visite
          </NuxtLink>
        </div>

        <!-- Menu mobile -->
        <div class="md:hidden">
          <button
            class="text-gray-600 hover:text-gray-900"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <Icon
              :name="mobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
              class="w-6 h-6"
            />
          </button>
        </div>
      </div>

      <!-- Menu mobile -->
      <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t">
        <div class="flex flex-col space-y-3">
          <NuxtLink
            to="/"
            class="text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            active-class="text-blue-600 font-medium bg-blue-50"
            @click="mobileMenuOpen = false"
          >
            Accueil
          </NuxtLink>
          <NuxtLink
            to="/qr-generator"
            class="text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            active-class="text-blue-600 font-medium bg-blue-50"
            @click="mobileMenuOpen = false"
          >
            QR Code
          </NuxtLink>
          <NuxtLink
            to="/business-cards"
            class="text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            active-class="text-blue-600 font-medium bg-blue-50"
            @click="mobileMenuOpen = false"
          >
            Cartes de Visite
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>
