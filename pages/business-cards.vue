<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Navigation -->
    <div class="mb-8">
      <NuxtLink to="/" class="inline-flex items-center text-blue-600 hover:text-blue-800">
        <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
        Retour à l'accueil
      </NuxtLink>
    </div>

    <div class="max-w-4xl mx-auto">
      <!-- Sélection de la personne -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Cartes de Visite Virtuelles</h1>
        <p class="text-gray-600 mb-6">
          Découvrez notre équipe et ajoutez-nous à vos contacts
        </p>

        <div class="flex justify-center space-x-4">
          <button
            v-for="person in team"
            :key="person.id"
            :class="[
              'flex items-center space-x-3 px-4 py-2 rounded-lg border-2 transition-all',
              selectedPerson.id === person.id
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-gray-300',
            ]"
            @click="selectedPerson = person"
          >
            <img :src="person.avatar" :alt="person.name" class="w-8 h-8 rounded-full" />
            <span class="font-medium">{{ person.name }}</span>
          </button>
        </div>
      </div>

      <!-- Carte de visite -->
      <div v-if="selectedPerson" class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <!-- En-tête avec photo -->
        <div class="relative h-48 bg-gradient-to-r from-blue-500 to-purple-600">
          <div class="absolute inset-0 bg-black bg-opacity-20" />
          <div class="absolute bottom-4 left-4 right-4">
            <div class="flex items-end space-x-4">
              <img
                :src="selectedPerson.avatar"
                :alt="selectedPerson.name"
                class="w-20 h-20 rounded-full border-4 border-white shadow-lg"
              />
              <div class="text-white">
                <h2 class="text-2xl font-bold">{{ selectedPerson.name }}</h2>
                <p class="text-lg opacity-90">{{ selectedPerson.title }}</p>
                <p class="text-sm opacity-75">{{ selectedPerson.company }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contenu -->
        <div class="p-6">
          <!-- Bio -->
          <div class="mb-6">
            <p class="text-gray-600 leading-relaxed">{{ selectedPerson.bio }}</p>
          </div>

          <!-- Bouton ajouter aux contacts -->
          <div class="mb-6">
            <button
              class="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center justify-center space-x-2"
              @click="addToContacts"
            >
              <Icon name="heroicons:plus" class="w-5 h-5" />
              <span>Ajouter aux contacts</span>
            </button>
          </div>

          <!-- Liens sociaux -->
          <div class="space-y-3">
            <h3 class="text-lg font-semibold text-gray-900 mb-4">Liens & Contact</h3>

            <a
              v-for="link in selectedPerson.links"
              :key="link.type"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all group"
            >
              <div
                class="w-10 h-10 rounded-lg flex items-center justify-center"
                :class="link.bgColor"
              >
                <Icon :name="link.icon" class="w-5 h-5 text-white" />
              </div>
              <div class="flex-1">
                <div class="font-medium text-gray-900">{{ link.label }}</div>
                <div class="text-sm text-gray-500">{{ link.value }}</div>
              </div>
              <Icon
                name="heroicons:arrow-top-right-on-square"
                class="w-5 h-5 text-gray-400 group-hover:text-gray-600"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedPerson = ref(null)

const team = ref([
  {
    id: 1,
    name: "Jean Dupont",
    title: "Développeur Full-Stack",
    company: "TechCorp",
    avatar: "/images/avatar1.jpg",
    bio: "Passionné de développement web et mobile, j'aime créer des solutions innovantes qui améliorent l'expérience utilisateur. Spécialisé en React, Vue.js et Node.js.",
    links: [
      {
        type: "email",
        label: "Email",
        value: "jean.dupont@techcorp.com",
        url: "mailto:jean.dupont@techcorp.com",
        icon: "heroicons:envelope",
        bgColor: "bg-blue-500",
      },
      {
        type: "phone",
        label: "Téléphone",
        value: "+33 1 23 45 67 89",
        url: "tel:+33123456789",
        icon: "heroicons:phone",
        bgColor: "bg-green-500",
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "jean-dupont-dev",
        url: "https://linkedin.com/in/jean-dupont-dev",
        icon: "simple-icons:linkedin",
        bgColor: "bg-blue-600",
      },
      {
        type: "github",
        label: "GitHub",
        value: "jeandupont",
        url: "https://github.com/jeandupont",
        icon: "simple-icons:github",
        bgColor: "bg-gray-800",
      },
      {
        type: "twitter",
        label: "Twitter",
        value: "@jeandupont_dev",
        url: "https://twitter.com/jeandupont_dev",
        icon: "simple-icons:twitter",
        bgColor: "bg-blue-400",
      },
      {
        type: "website",
        label: "Portfolio",
        value: "jeandupont.dev",
        url: "https://jeandupont.dev",
        icon: "heroicons:globe-alt",
        bgColor: "bg-purple-500",
      },
    ],
  },
])

// Sélectionner la première personne par défaut
selectedPerson.value = team.value[0]

const addToContacts = () => {
  if (!selectedPerson.value) return

  const person = selectedPerson.value

  // Créer une vCard
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${person.name}`,
    `TITLE:${person.title}`,
    `ORG:${person.company}`,
    `EMAIL:${person.links.find((l) => l.type === "email")?.value || ""}`,
    `TEL:${person.links.find((l) => l.type === "phone")?.value || ""}`,
    `URL:${person.links.find((l) => l.type === "website")?.url || ""}`,
    "END:VCARD",
  ].join("\r\n")

  // Créer un blob et télécharger
  const blob = new Blob([vcard], { type: "text/vcard" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = `${person.name.replace(/\s+/g, "_")}.vcf`
  link.click()

  URL.revokeObjectURL(url)

  // Notification
  alert(`${person.name} a été ajouté à vos contacts !`)
}
</script>
