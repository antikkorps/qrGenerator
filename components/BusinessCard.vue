<template>
  <div
    class="business-card bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
  >
    <!-- En-tête avec design dynamique -->
    <div
      ref="headerRef"
      class="relative h-48 md:h-56 overflow-hidden"
      :style="{ background: getDynamicBackground() }"
    >
      <!-- Motif de fond animé avec particules -->
      <div class="absolute inset-0 opacity-30">
        <div
          v-for="i in 8"
          :key="i"
          :ref="(el) => (particleRefs[i] = el)"
          class="absolute w-3 h-3 bg-white/40 rounded-full"
          :style="{
            left: `${10 + i * 12}%`,
            top: `${15 + i * 8}%`,
          }"
        />
      </div>

      <!-- Formes géométriques animées -->
      <div class="absolute inset-0">
        <div
          ref="circleRef"
          class="absolute top-10 right-10 w-24 h-24 border-2 border-white/40 rounded-full"
        />
        <div
          ref="squareRef"
          class="w-16 h-16 border-2 border-white/30 rotate-45"
          style="bottom: 12px; left: 12px"
        />
        <div
          ref="bounceRef"
          class="absolute w-8 h-8 bg-white/20 rounded-full"
          style="top: 50%; left: 25%; transform: translate(-50%, -50%)"
        />
      </div>

      <!-- Overlay avec effet de profondeur -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
      />

      <!-- Contenu de l'en-tête -->
      <div class="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
        <div class="flex items-end space-x-3 md:space-x-4">
          <!-- Avatar avec bordure animée -->
          <div ref="avatarRef" class="relative">
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-1 animate-pulse"
            />
            <img
              :src="person.avatar"
              :alt="person.name"
              class="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-2xl object-cover"
            />
            <!-- Badge de statut -->
            <div
              class="absolute w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
              style="bottom: 2px; right: 2px"
            >
              <div class="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full" />
            </div>
          </div>

          <!-- Informations de la personne -->
          <div class="text-white flex-1">
            <h2 class="text-2xl md:text-3xl font-bold mb-1">{{ person.name }}</h2>
            <p class="text-lg md:text-xl opacity-95 mb-1">{{ person.title }}</p>
            <p class="text-base md:text-lg opacity-80 font-medium">
              {{ person.company }}
            </p>
            <!-- Tags de compétences -->
            <div class="flex flex-wrap gap-1 md:gap-2 mt-2 md:mt-3">
              <span
                v-for="skill in person.skills?.slice(0, 3)"
                :key="skill"
                class="px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium"
              >
                {{ skill }}
              </span>
              <span
                v-if="person.skills?.length > 3"
                class="px-2 md:px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium"
              >
                +{{ person.skills.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="p-4 md:p-8">
      <!-- Bio avec icône -->
      <div class="mb-6 md:mb-8">
        <div class="flex items-start space-x-3">
          <div
            class="w-6 h-6 md:w-8 md:h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
          >
            <Icon
              name="heroicons:chat-bubble-left-right"
              class="w-3 h-3 md:w-4 md:h-4 text-blue-600"
            />
          </div>
          <p class="text-gray-600 leading-relaxed text-base md:text-lg">
            {{ person.bio }}
          </p>
        </div>
      </div>

      <!-- Bouton ajouter aux contacts avec animation -->
      <div class="mb-6 md:mb-8">
        <button
          class="w-full bg-gradient-to-r from-[#263443] to-[#3a899d] text-white py-3 md:py-4 px-4 md:px-6 rounded-xl hover:from-[#1e2a36] hover:to-[#2f7a8a] transition-all duration-300 font-semibold text-base md:text-lg flex items-center justify-center space-x-2 md:space-x-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          @click="addToContacts"
        >
          <Icon name="heroicons:plus-circle" class="w-5 h-5 md:w-6 md:h-6" />
          <span>Ajouter aux contacts</span>
        </button>
      </div>

      <!-- Liens sociaux avec design amélioré -->
      <div class="space-y-3 md:space-y-4">
        <h3
          class="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center"
        >
          <Icon
            name="heroicons:link"
            class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 text-blue-600"
          />
          Contact
        </h3>

        <!-- Vérifier s'il y a des liens disponibles -->
        <div v-if="person.links && person.links.length > 0" class="grid gap-3 md:gap-4">
          <a
            v-for="link in person.links"
            :key="link.type"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
          >
            <!-- Icône avec gradient -->
            <div
              class="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
              :style="{ backgroundColor: getBgColor(link.bgColor) }"
            >
              <Icon :name="link.icon" class="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>

            <!-- Contenu du lien -->
            <div class="flex-1 min-w-0">
              <div
                class="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm md:text-base"
              >
                {{ link.label }}
              </div>
              <div class="text-xs md:text-sm text-gray-500 truncate">
                {{ link.value }}
              </div>
            </div>

            <!-- Icône de flèche -->
            <Icon
              name="heroicons:arrow-top-right-on-square"
              class="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300"
            />
          </a>
        </div>

        <!-- Message si aucun lien disponible -->
        <div v-else class="text-center py-6">
          <div
            class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Icon name="heroicons:information-circle" class="w-8 h-8 text-gray-400" />
          </div>
          <p class="text-gray-500 text-sm md:text-base">
            Aucun lien de contact disponible pour le moment
          </p>
        </div>
      </div>

      <!-- Catalogue de formation avec animation moderne -->
      <div class="mt-6 md:mt-8 pt-6">
        <a href="#" target="_blank" rel="noopener noreferrer" class="block">
          <div
            ref="catalogueRef"
            class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
          >
            <!-- Image du catalogue en arrière-plan -->
            <div ref="imageContainerRef" class="w-full h-48 md:h-64 relative">
              <NuxtImg
                src="/images/MVO_catalogue.jpeg"
                alt="Catalogue de formation MVO"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              <!-- Overlay avec effet de profondeur -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <!-- Overlay permanent sur mobile pour la lisibilité -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:hidden"
              />
            </div>

            <!-- Contenu superposé sur l'image -->
            <div class="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <div class="flex items-end justify-between">
                <!-- Informations du catalogue -->
                <div class="flex-1 min-w-0">
                  <h4
                    class="text-white font-bold text-lg md:text-xl mb-2 group-hover:text-blue-200 transition-colors duration-300 drop-shadow-lg text-shadow-lg"
                  >
                    Catalogue de formation
                  </h4>
                  <p class="text-white/90 text-sm md:text-base mb-3 drop-shadow-lg">
                    Découvrez nos programmes de formation professionnelle
                  </p>
                  <div class="flex items-center space-x-2">
                    <span
                      class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30"
                    >
                      Formation initiale
                    </span>
                    <span
                      class="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium border border-white/30"
                    >
                      Formation continue
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Icône de flèche flottante -->
            <div
              ref="arrowRef"
              class="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 shadow-lg"
            >
              <Icon
                name="heroicons:arrow-right"
                class="w-5 h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <!-- Effet de brillance au hover -->
            <div
              ref="shineRef"
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { nextTick, onMounted, ref } from "vue"

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  person: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(["addToContacts"])

// Refs pour les animations
const headerRef = ref(null)
const circleRef = ref(null)
const squareRef = ref(null)
const bounceRef = ref(null)
const particleRefs = ref({})
const avatarRef = ref(null)
const catalogueRef = ref(null)
const imageContainerRef = ref(null)
const arrowRef = ref(null)
const shineRef = ref(null)

const addToContacts = () => {
  emit("addToContacts", props.person)
}

const getBgColor = (_bgColorClass) => {
  return "#3a899d"
}

const getDynamicBackground = () => {
  // Gradient uniforme pour toutes les cartes de la team
  return `linear-gradient(135deg, #263443 0%, #3a899d 50%, #263443 100%)`
}

// Animations GSAP
onMounted(async () => {
  await nextTick()

  // Animation de l'avatar avec effet de flottement
  if (avatarRef.value) {
    gsap.to(avatarRef.value, {
      y: -8,
      duration: 3,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    })
  }

  // Animation du cercle qui bouge de haut en bas
  if (circleRef.value) {
    gsap.to(circleRef.value, {
      y: 40,
      duration: 5,
      ease: "power2.inOut",
      opacity: 0.1,
      repeat: -1,
      yoyo: true,
    })
  }

  // Animation du carré qui pulse avec mouvement plus ample
  if (squareRef.value) {
    gsap.to(squareRef.value, {
      scale: 1.5,
      opacity: 0.8,
      rotation: 90,
      x: 20,
      y: 30,
      duration: 4,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    })
  }

  // Animation de la boule qui rebondit avec mouvement plus ample
  if (bounceRef.value) {
    gsap.to(bounceRef.value, {
      y: -60,
      x: 40,
      scale: 1.4,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    })
  }

  // Animations des particules avec mouvements plus amples
  Object.values(particleRefs.value).forEach((particle, index) => {
    if (particle) {
      gsap.to(particle, {
        x: (Math.random() - 0.5) * 150,
        y: (Math.random() - 0.5) * 150,
        opacity: 0.9,
        scale: 1.5,
        duration: 5 + Math.random() * 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.4,
      })
    }
  })

  // Animation au scroll
  if (headerRef.value) {
    gsap.to(headerRef.value, {
      scrollTrigger: {
        trigger: headerRef.value,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onUpdate: (self) => {
          // Animation des éléments basée sur le scroll
          if (circleRef.value) {
            gsap.to(circleRef.value, {
              rotation: self.progress * 720,
              scale: 1 + self.progress * 0.3,
              duration: 0.1,
            })
          }
          if (squareRef.value) {
            gsap.to(squareRef.value, {
              rotation: self.progress * 360,
              scale: 1 + self.progress * 0.5,
              duration: 0.1,
            })
          }
        },
      },
    })
  }

  // Animation au hover de la carte
  if (headerRef.value) {
    headerRef.value.addEventListener("mouseenter", () => {
      gsap.to([avatarRef.value, circleRef.value, squareRef.value, bounceRef.value], {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      })

      Object.values(particleRefs.value).forEach((particle) => {
        if (particle) {
          gsap.to(particle, {
            scale: 2,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        }
      })
    })

    headerRef.value.addEventListener("mouseleave", () => {
      gsap.to([avatarRef.value, circleRef.value, squareRef.value, bounceRef.value], {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })

      Object.values(particleRefs.value).forEach((particle) => {
        if (particle) {
          gsap.to(particle, {
            scale: 1,
            opacity: 0.9,
            duration: 0.3,
            ease: "power2.out",
          })
        }
      })
    })
  }

  // Animations pour le catalogue de formation
  if (catalogueRef.value) {
    // Animation de l'image au hover
    if (imageContainerRef.value) {
      catalogueRef.value.addEventListener("mouseenter", () => {
        gsap.to(imageContainerRef.value, {
          scale: 1.05,
          duration: 0.6,
          ease: "power2.out",
        })

        gsap.to(arrowRef.value, {
          x: 5,
          y: -5,
          scale: 1.1,
          duration: 0.4,
          ease: "power2.out",
        })
      })

      catalogueRef.value.addEventListener("mouseleave", () => {
        gsap.to(imageContainerRef.value, {
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
        })

        gsap.to(arrowRef.value, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        })
      })
    }

    // Animation de l'effet de brillance
    if (shineRef.value) {
      catalogueRef.value.addEventListener("mouseenter", () => {
        gsap.to(shineRef.value, {
          x: "100%",
          duration: 0.8,
          ease: "power2.inOut",
        })
      })

      catalogueRef.value.addEventListener("mouseleave", () => {
        gsap.to(shineRef.value, {
          x: "-100%",
          duration: 0.8,
          ease: "power2.inOut",
        })
      })
    }

    // Animation au scroll pour le catalogue
    gsap.to(catalogueRef.value, {
      scrollTrigger: {
        trigger: catalogueRef.value,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        onEnter: () => {
          gsap.to(catalogueRef.value, {
            y: -20,
            scale: 1.02,
            duration: 0.6,
            ease: "power2.out",
          })
        },
        onLeave: () => {
          gsap.to(catalogueRef.value, {
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
          })
        },
      },
    })
  }
})
</script>

<style scoped>
.business-card {
  backdrop-filter: blur(10px);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>
