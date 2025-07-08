<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">QR Generator & Business Cards</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Générez des QR codes personnalisés et découvrez nos cartes de visite virtuelles
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <!-- Générateur QR Code -->
      <NuxtLink to="/qr-generator" class="group">
        <div
          class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="heroicons:qr-code" class="w-8 h-8 text-blue-600" />
            </div>
            <h2 class="text-2xl font-semibold text-gray-900 mb-3">Générateur QR Code</h2>
            <p class="text-gray-600 mb-4">
              Créez des QR codes personnalisés pour vos v-cards ou liens web
            </p>
            <ul class="text-sm text-gray-500 space-y-1 text-left">
              <li>• V-cards et liens web</li>
              <li>• Personnalisation complète</li>
              <li>• Intégration d'images</li>
              <li>• Export en haute qualité</li>
            </ul>
          </div>
        </div>
      </NuxtLink>

      <!-- Cartes de visite -->
      <NuxtLink to="/business-cards" class="group">
        <div
          class="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105"
        >
          <div class="text-center">
            <div
              class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <Icon name="heroicons:user-group" class="w-8 h-8 text-green-600" />
            </div>
            <h2 class="text-2xl font-semibold text-gray-900 mb-3">Cartes de Visite</h2>
            <p class="text-gray-600 mb-4">
              Découvrez nos cartes de visite virtuelles d'équipe
            </p>
            <ul class="text-sm text-gray-500 space-y-1 text-left">
              <li>• Design moderne Linktree</li>
              <li>• Ajout rapide aux contacts</li>
              <li>• Responsive mobile-first</li>
              <li>• Liens sociaux intégrés</li>
            </ul>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
