import { readonly, ref } from "vue"

// État global des toasts
const toasts = ref([])

// Compteur pour les IDs uniques
let toastId = 0

export const useToast = () => {
  // Ajouter un toast
  const addToast = ({ type = "info", title, message, duration = 5000 }) => {
    const id = ++toastId

    const toast = {
      id,
      type,
      title,
      message,
      duration,
      createdAt: Date.now(),
    }

    toasts.value.push(toast)

    // Auto-suppression après la durée spécifiée
    if (duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }

    return id
  }

  // Supprimer un toast
  const removeToast = (id) => {
    const index = toasts.value.findIndex((toast) => toast.id === id)
    if (index > -1) {
      toasts.value.splice(index, 1)
    }
  }

  // Méthodes utilitaires pour différents types de toasts
  const success = (title, message, duration) => {
    return addToast({ type: "success", title, message, duration })
  }

  const error = (title, message, duration) => {
    return addToast({ type: "error", title, message, duration })
  }

  const warning = (title, message, duration) => {
    return addToast({ type: "warning", title, message, duration })
  }

  const info = (title, message, duration) => {
    return addToast({ type: "info", title, message, duration })
  }

  // Méthode spéciale pour les v-cards
  const vCardSuccess = (personName) => {
    return success(
      "Contact ajouté !",
      `${personName} a été ajouté à vos contacts avec succès.`,
      4000
    )
  }

  const vCardError = (personName) => {
    return error(
      "Erreur de téléchargement",
      `Impossible de télécharger la v-card de ${personName}. Veuillez réessayer.`,
      5000
    )
  }

  return {
    toasts: readonly(toasts),
    addToast,
    removeToast,
    success,
    error,
    warning,
    info,
    vCardSuccess,
    vCardError,
  }
}
