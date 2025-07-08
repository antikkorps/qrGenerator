<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-8">
      <!-- Navigation -->
      <div class="mb-8">
        <NuxtLink
          to="/"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 group"
        >
          <Icon
            name="heroicons:arrow-left"
            class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Retour à l'accueil
        </NuxtLink>
      </div>

      <div class="max-w-6xl mx-auto">
        <!-- Sélecteur de personnes avec texte adapté -->
        <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12">
          <div class="text-center mb-6 md:mb-8">
            <h1
              class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4"
            >
              Cartes de Visite Virtuelles
            </h1>
            <p class="text-lg md:text-xl text-gray-600 mb-4 md:mb-8 max-w-2xl mx-auto">
              Découvrez notre équipe passionnée et ajoutez-nous à vos contacts
              professionnels
            </p>
          </div>

          <PersonSelector :people="team" />
        </div>

        <!-- Statistiques -->
        <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center p-6 bg-white rounded-xl shadow-lg">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="heroicons:users" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ team.length }}</h3>
            <p class="text-gray-600">Membres de l'équipe</p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-lg">
            <div
              class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="heroicons:hand-thumb-up" class="w-8 h-8 text-green-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">100%</h3>
            <p class="text-gray-600">Satisfaction client</p>
          </div>

          <div class="text-center p-6 bg-white rounded-xl shadow-lg">
            <div
              class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="heroicons:clock" class="w-8 h-8 text-purple-600" />
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
            <p class="text-gray-600">Support disponible</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTeamStore } from "@/stores/team"

const teamStore = useTeamStore()

// Accéder aux données via le store
const team = computed(() => teamStore.getAllTeam)
</script>
