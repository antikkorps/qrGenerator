<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
    <div class="container mx-auto px-4 py-8">
      <!-- Navigation -->
      <div class="mb-8">
        <NuxtLink
          to="/business-cards"
          class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 group"
        >
          <Icon
            name="heroicons:arrow-left"
            class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
          />
          Voir toute l'équipe
        </NuxtLink>
      </div>

      <div class="max-w-4xl mx-auto">
        <!-- Carte de visite principale -->
        <div v-if="person" class="flex justify-center mb-8">
          <BusinessCard :person="person" @add-to-contacts="handleAddToContacts" />
        </div>

        <!-- Section équipe -->
        <div
          v-if="otherTeamMembers.length > 0"
          class="bg-white rounded-2xl shadow-lg p-6 md:p-8"
        >
          <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">
            Découvrez aussi notre équipe
          </h2>

          <!-- Sélecteur compact pour les autres membres -->
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <NuxtLink
              v-for="member in otherTeamMembers"
              :key="member.id"
              :to="`/team/${member.id}`"
              class="group block p-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              <div class="text-center">
                <div class="relative inline-block mb-3">
                  <img
                    :src="member.avatar"
                    :alt="member.name"
                    class="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-300 transition-colors"
                  />
                  <div
                    class="absolute w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                    style="bottom: 2px; right: 2px"
                  />
                </div>

                <h3
                  class="font-semibold text-gray-900 text-sm md:text-base group-hover:text-blue-600 transition-colors"
                >
                  {{ member.name }}
                </h3>
                <p class="text-xs md:text-sm text-gray-600 truncate">
                  {{ member.title }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTeamStore } from "@/stores/team"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { nextTick, onMounted, ref } from "vue"

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const route = useRoute()
const router = useRouter()

// Refs pour les animations
const nameTitleRef = ref(null)
const jobTitleRef = ref(null)
const subtitleRef = ref(null)

// Utiliser le store
const teamStore = useTeamStore()

// Trouver la personne par ID
const person = computed(() => {
  const id = parseInt(route.params.id)
  return teamStore.getMemberById(id)
})

// Membres visibles selon la personne actuelle
const otherTeamMembers = computed(() => {
  const currentId = parseInt(route.params.id)
  return teamStore.getVisibleMembers(currentId)
})

// Redirection si personne non trouvée
watchEffect(() => {
  if (!person.value && route.params.id) {
    router.push("/business-cards")
  }
})

// Animation du texte au scroll
onMounted(async () => {
  await nextTick()

  if (nameTitleRef.value && jobTitleRef.value && subtitleRef.value) {
    // Animation simple : opacité et scale au scroll
    gsap.to([nameTitleRef.value, jobTitleRef.value, subtitleRef.value], {
      opacity: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=300",
        scrub: 1,
      },
    })
  }
})

// Meta tags dynamiques pour le SEO
useHead(() => ({
  title: person.value
    ? `${person.value.name} - ${person.value.title}`
    : "Membre de l'équipe",
  meta: [
    {
      name: "description",
      content: person.value ? person.value.bio : "Carte de visite virtuelle",
    },
    {
      property: "og:title",
      content: person.value
        ? `${person.value.name} - ${person.value.title}`
        : "Membre de l'équipe",
    },
    {
      property: "og:description",
      content: person.value ? person.value.bio : "Carte de visite virtuelle",
    },
    {
      property: "og:image",
      content: person.value ? person.value.avatar : "",
    },
  ],
}))

const { vCardSuccess, vCardError } = useToast()

const handleAddToContacts = (person) => {
  try {
    // Créer une vCard
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${person.name}`,
      `TITLE:${person.title}`,
      `ORG:${person.company}`,
      `ADR:;;${person.address || ""}`,
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

    // Notification de succès avec le nouveau système de toast
    vCardSuccess(person.name)
  } catch (error) {
    console.error("Erreur lors du téléchargement de la v-card:", error)
    vCardError(person.name)
  }
}
</script>
