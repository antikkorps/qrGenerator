<template>
  <Teleport to="body">
    <TransitionGroup
      name="toast"
      tag="div"
      class="fixed top-4 right-4 z-50 space-y-3 pointer-events-none"
    >
      <div
        v-for="toast in toasts"
        :key="toast.id"
        ref="toastRefs"
        class="pointer-events-auto"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 md:p-6 max-w-sm md:max-w-md transform transition-all duration-300"
          :class="getToastClasses(toast.type)"
        >
          <!-- En-tête du toast -->
          <div class="flex items-start space-x-3 md:space-x-4">
            <!-- Icône avec animation -->
            <div
              class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
              :class="getIconClasses(toast.type)"
            >
              <Icon
                :name="getIconName(toast.type)"
                class="w-5 h-5 md:w-6 md:h-6 text-white"
              />
            </div>

            <!-- Contenu -->
            <div class="flex-1 min-w-0">
              <h4
                class="font-semibold text-gray-900 text-sm md:text-base mb-1"
                :class="getTitleClasses(toast.type)"
              >
                {{ toast.title }}
              </h4>
              <p class="text-gray-600 text-xs md:text-sm leading-relaxed">
                {{ toast.message }}
              </p>
            </div>

            <!-- Bouton fermer -->
            <button
              class="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 group"
              @click="removeToast(toast.id)"
            >
              <Icon
                name="heroicons:x-mark"
                class="w-3 h-3 md:w-4 md:h-4 text-gray-500 group-hover:text-gray-700"
              />
            </button>
          </div>

          <!-- Barre de progression -->
          <div class="mt-3 md:mt-4">
            <div
              class="h-1 rounded-full bg-gray-200 overflow-hidden"
              :class="getProgressClasses(toast.type)"
            >
              <div
                ref="progressRefs"
                class="h-full rounded-full transition-all duration-100 ease-linear"
                :class="getProgressBarClasses(toast.type)"
              />
            </div>
          </div>
        </div>
      </div>
    </TransitionGroup>
  </Teleport>
</template>

<script setup>
import { gsap } from "gsap"
import { nextTick, onMounted, ref, watch } from "vue"

// Props
const props = defineProps({
  toasts: {
    type: Array,
    default: () => [],
  },
})

// Emits
const emit = defineEmits(["remove"])

// Refs
const toastRefs = ref([])
const progressRefs = ref([])

// Méthodes
const removeToast = (id) => {
  emit("remove", id)
}

const getToastClasses = (type) => {
  const baseClasses = "backdrop-blur-sm"

  switch (type) {
    case "success":
      return `${baseClasses} border-green-100`
    case "error":
      return `${baseClasses} border-red-100`
    case "warning":
      return `${baseClasses} border-yellow-100`
    case "info":
      return `${baseClasses} border-blue-100`
    default:
      return `${baseClasses} border-gray-100`
  }
}

const getIconClasses = (type) => {
  switch (type) {
    case "success":
      return "bg-gradient-to-r from-green-500 to-emerald-600 shadow-green-200"
    case "error":
      return "bg-gradient-to-r from-red-500 to-pink-600 shadow-red-200"
    case "warning":
      return "bg-gradient-to-r from-yellow-500 to-orange-600 shadow-yellow-200"
    case "info":
      return "bg-gradient-to-r from-blue-500 to-indigo-600 shadow-blue-200"
    default:
      return "bg-gradient-to-r from-gray-500 to-gray-600 shadow-gray-200"
  }
}

const getTitleClasses = (type) => {
  switch (type) {
    case "success":
      return "text-green-900"
    case "error":
      return "text-red-900"
    case "warning":
      return "text-yellow-900"
    case "info":
      return "text-blue-900"
    default:
      return "text-gray-900"
  }
}

const getProgressClasses = (type) => {
  switch (type) {
    case "success":
      return "bg-green-100"
    case "error":
      return "bg-red-100"
    case "warning":
      return "bg-yellow-100"
    case "info":
      return "bg-blue-100"
    default:
      return "bg-gray-100"
  }
}

const getProgressBarClasses = (type) => {
  switch (type) {
    case "success":
      return "bg-gradient-to-r from-green-500 to-emerald-600"
    case "error":
      return "bg-gradient-to-r from-red-500 to-pink-600"
    case "warning":
      return "bg-gradient-to-r from-yellow-500 to-orange-600"
    case "info":
      return "bg-gradient-to-r from-blue-500 to-indigo-600"
    default:
      return "bg-gradient-to-r from-gray-500 to-gray-600"
  }
}

const getIconName = (type) => {
  switch (type) {
    case "success":
      return "heroicons:check-circle"
    case "error":
      return "heroicons:x-circle"
    case "warning":
      return "heroicons:exclamation-triangle"
    case "info":
      return "heroicons:information-circle"
    default:
      return "heroicons:bell"
  }
}

// Animations GSAP
onMounted(async () => {
  await nextTick()

  // Animation d'entrée pour les nouveaux toasts
  watch(
    () => props.toasts.length,
    (newLength, oldLength) => {
      if (newLength > oldLength) {
        // Nouveau toast ajouté
        const newToastIndex = newLength - 1
        const newToastRef = toastRefs.value[newToastIndex]

        if (newToastRef) {
          // Animation d'entrée
          gsap.fromTo(
            newToastRef,
            {
              x: 400,
              opacity: 0,
              scale: 0.8,
              rotationY: 15,
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              rotationY: 0,
              duration: 0.6,
              ease: "back.out(1.7)",
            }
          )

          // Animation de la barre de progression
          const progressRef = progressRefs.value[newToastIndex]
          if (progressRef) {
            gsap.fromTo(
              progressRef,
              { width: "100%" },
              {
                width: "0%",
                duration: 5, // 5 secondes
                ease: "none",
                onComplete: () => {
                  // Auto-suppression après 5 secondes
                  const toast = props.toasts[newToastIndex]
                  if (toast) {
                    removeToast(toast.id)
                  }
                },
              }
            )
          }
        }
      }
    },
    { immediate: true }
  )
})

// Animation de sortie (préparée pour utilisation future)
const _animateExit = (toastRef) => {
  return gsap.to(toastRef, {
    x: 400,
    opacity: 0,
    scale: 0.8,
    rotationY: -15,
    duration: 0.4,
    ease: "back.in(1.7)",
  })
}
</script>

<style scoped>
/* Transitions Vue */
.toast-enter-active {
  transition: all 0.6s ease;
}

.toast-leave-active {
  transition: all 0.4s ease;
}

.toast-enter-from {
  transform: translateX(400px) scale(0.8);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(400px) scale(0.8);
  opacity: 0;
}

/* Animation de flottement subtile */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
}

.toast-enter-active {
  animation: float 3s ease-in-out infinite;
}

/* Effet de glassmorphism */
.backdrop-blur-sm {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
</style>
