import { defineStore } from "pinia"

export const useTeamStore = defineStore("team", {
  state: () => ({
    team: [
      {
        id: 1,
        name: "Ludovic De Poix",
        title: "Président",
        company: "MVO",
        avatar: "https://i.pravatar.cc/150?u=jean",
        bio: "Fondateur de MVO. Nous développons des solutions innovantes pour les blocs opératoires. Nos principes Agilité, Proximité, Exigence",
        skills: ["Agilité", "Proximité", "Exigence", "Innovation"],
        visibleTo: [2, 3], // Jean peut voir Marie et Pierre
        links: [
          {
            type: "email",
            label: "Email",
            value: "lu.de.poix@mvo-h.fr",
            url: "mailto:lu.de.poix@mvo-h.fr",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 9 70 71 18 65",
            url: "tel:+33970711865",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "Mobile",
            label: "Mobile",
            value: "+33 6 76 12 90 78",
            url: "tel:+33676129078",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "mvosterilisation",
            url: "https://www.linkedin.com/company/mvosterilisation/",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "address",
            label: "Adresse",
            value: "14 boulevard Marie et Alexandre Oyon - 72100 LE MANS",
            url: "https://www.google.fr/maps/place/14+Bd+Marie+et+Alexandre+Oyon,+72100+Le+Mans/@47.9944479,0.1887279,17z/data=!3m1!4b1!4m6!3m5!1s0x47e28f36c898ea7d:0x9fafd7b428f79f38!8m2!3d47.9944443!4d0.1913082!16s%2Fg%2F11ltcbw8kf?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D",
            icon: "heroicons:map-pin",
            bgColor: "bg-blue-500",
          },
          {
            type: "website",
            label: "Site web",
            value: "https://mvo-sterilisation.fr/",
            url: "https://mvo-sterilisation.fr/",
            icon: "heroicons:globe-alt",
            bgColor: "bg-purple-500",
          },
        ],
      },
      {
        id: 2,
        name: "Jean-Baptiste De Gouttepagnon",
        title: "Directeur du développement",
        company: "MVO",
        avatar: "https://i.pravatar.cc/150?u=marie",
        bio: "Directeur du développement de MVO. Je suis chargé de la relation commerciale et de la relation client.",
        skills: ["Agilité", "Proximité", "Exigence", "Innovation"],
        visibleTo: [1, 3, 4], // Marie peut voir Jean, Pierre et Sophie
        links: [
          {
            type: "email",
            label: "Email",
            value: "directeurdev@mvo-h.fr",
            url: "mailto:directeurdev@mvo-h.fr",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 6 45 57 35 40",
            url: "tel:+33645573540",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "mvosterilisation",
            url: "https://www.linkedin.com/company/mvosterilisation/",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "address",
            label: "Adresse",
            value: "14 boulevard Marie et Alexandre Oyon - 72100 LE MANS",
            url: "https://www.google.fr/maps/place/14+Bd+Marie+et+Alexandre+Oyon,+72100+Le+Mans/@47.9944479,0.1887279,17z/data=!3m1!4b1!4m6!3m5!1s0x47e28f36c898ea7d:0x9fafd7b428f79f38!8m2!3d47.9944443!4d0.1913082!16s%2Fg%2F11ltcbw8kf?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D",
            icon: "heroicons:map-pin",
            bgColor: "bg-blue-500",
          },
          {
            type: "website",
            label: "Site web",
            value: "https://mvo-sterilisation.fr/",
            url: "https://mvo-sterilisation.fr/",
            icon: "heroicons:globe-alt",
            bgColor: "bg-purple-500",
          },
        ],
      },
      {
        id: 3,
        name: "Victor Saroul",
        title: "Chargé d'affaires Sud-Est",
        company: "MVO",
        avatar: "https://i.pravatar.cc/150?u=pierre",
        bio: "Je vous accompagne dans la mise en place de nos solutions. Ma passion : vous aider à trouver la solution qui vous convient le mieux.",
        skills: ["Agilité", "Proximité", "Exigence", "Innovation"],
        visibleTo: [1, 2, 5], // Pierre peut voir Jean, Marie et Lucas
        links: [
          {
            type: "email",
            label: "Email",
            value: "chargedaffairesSE@mvo-h.fr",
            url: "mailto:chargedaffairesSE@mvo-h.fr",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 6 86 42 53 31",
            url: "tel:+33686425331",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "mvosterilisation",
            url: "https://www.linkedin.com/company/mvosterilisation/",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "address",
            label: "Adresse",
            value: "14 boulevard Marie et Alexandre Oyon - 72100 LE MANS",
            url: "https://www.google.fr/maps/place/14+Bd+Marie+et+Alexandre+Oyon,+72100+Le+Mans/@47.9944479,0.1887279,17z/data=!3m1!4b1!4m6!3m5!1s0x47e28f36c898ea7d:0x9fafd7b428f79f38!8m2!3d47.9944443!4d0.1913082!16s%2Fg%2F11ltcbw8kf?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D",
            icon: "heroicons:map-pin",
            bgColor: "bg-blue-500",
          },
          {
            type: "website",
            label: "Site web",
            value: "https://mvo-sterilisation.fr/",
            url: "https://mvo-sterilisation.fr/",
            icon: "heroicons:globe-alt",
            bgColor: "bg-purple-500",
          },
        ],
      },
      {
        id: 4,
        name: "Jérôme Renard",
        title: "Directeur Projet et Technique",
        company: "MVO",
        avatar: "https://i.pravatar.cc/150?u=sophie",
        bio: "J'accompagne la mise en place de vos projets sur le plan technique et organisationnel.",
        skills: ["Agilité", "Proximité", "Exigence", "Innovation"],
        visibleTo: [2, 5, 6], // Sophie peut voir Marie, Lucas et Emma
        links: [
          {
            type: "email",
            label: "Email",
            value: "j.renard@mvo-h.fr",
            url: "mailto:j.renard@mvo-h.fr",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 6 08 94 60 75",
            url: "tel:+33608946075",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "mvosterilisation",
            url: "https://www.linkedin.com/company/mvosterilisation/",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "address",
            label: "Adresse",
            value: "14 boulevard Marie et Alexandre Oyon - 72100 LE MANS",
            url: "https://www.google.fr/maps/place/14+Bd+Marie+et+Alexandre+Oyon,+72100+Le+Mans/@47.9944479,0.1887279,17z/data=!3m1!4b1!4m6!3m5!1s0x47e28f36c898ea7d:0x9fafd7b428f79f38!8m2!3d47.9944443!4d0.1913082!16s%2Fg%2F11ltcbw8kf?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D",
            icon: "heroicons:map-pin",
            bgColor: "bg-blue-500",
          },
          {
            type: "website",
            label: "Site web",
            value: "https://mvo-sterilisation.fr/",
            url: "https://mvo-sterilisation.fr/",
            icon: "heroicons:globe-alt",
            bgColor: "bg-purple-500",
          },
        ],
      },
      {
        id: 5,
        name: "Cédric Bonneau",
        title: "Directeur Exploitation",
        company: "MVO",
        avatar: "https://i.pravatar.cc/150?u=lucas",
        bio: "Je suis chargé de la gestion de l'exploitation de MVO. Je suis passionné par la qualité et la performance.",
        skills: ["Agilité", "Proximité", "Exigence", "Innovation"],
        visibleTo: [1, 2, 3],
        links: [
          {
            type: "email",
            label: "Email",
            value: "cedric.bonneau@mvo-h.fr",
            url: "mailto:cedric.bonneau@mvo-h.fr",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 6 16 94 17 31",
            url: "tel:+33616941731",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "mvosterilisation",
            url: "https://www.linkedin.com/company/mvosterilisation/",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "address",
            label: "Adresse",
            value: "14 boulevard Marie et Alexandre Oyon - 72100 LE MANS",
            url: "https://www.google.fr/maps/place/14+Bd+Marie+et+Alexandre+Oyon,+72100+Le+Mans/@47.9944479,0.1887279,17z/data=!3m1!4b1!4m6!3m5!1s0x47e28f36c898ea7d:0x9fafd7b428f79f38!8m2!3d47.9944443!4d0.1913082!16s%2Fg%2F11ltcbw8kf?entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D",
            icon: "heroicons:map-pin",
            bgColor: "bg-blue-500",
          },
          {
            type: "website",
            label: "Site web",
            value: "https://mvo-sterilisation.fr/",
            url: "https://mvo-sterilisation.fr/",
            icon: "heroicons:globe-alt",
            bgColor: "bg-purple-500",
          },
        ],
      },
    ],
  }),

  getters: {
    // Obtenir tous les membres de l'équipe
    getAllTeam: (state) => state.team,

    // Obtenir un membre par ID
    getMemberById: (state) => (id) => {
      return state.team.find((member) => member.id === id)
    },

    // Obtenir les autres membres (excluant un ID donné)
    getOtherMembers: (state) => (excludeId) => {
      return state.team.filter((member) => member.id !== excludeId)
    },

    // Obtenir les membres visibles selon la personne actuelle
    getVisibleMembers: (state) => (currentMemberId) => {
      const currentMember = state.team.find((member) => member.id === currentMemberId)
      if (!currentMember || !currentMember.visibleTo) {
        return []
      }
      return state.team.filter(
        (member) =>
          member.id !== currentMemberId && currentMember.visibleTo.includes(member.id)
      )
    },

    // Nombre total de membres
    getTeamCount: (state) => state.team.length,
  },

  actions: {
    // Ajouter un nouveau membre
    addMember(member) {
      const newId = Math.max(...this.team.map((m) => m.id)) + 1
      this.team.push({
        id: newId,
        ...member,
      })
    },

    // Mettre à jour un membre
    updateMember(id, updates) {
      const index = this.team.findIndex((member) => member.id === id)
      if (index !== -1) {
        this.team[index] = { ...this.team[index], ...updates }
      }
    },

    // Supprimer un membre
    removeMember(id) {
      const index = this.team.findIndex((member) => member.id === id)
      if (index !== -1) {
        this.team.splice(index, 1)
      }
    },

    // Charger les données depuis une API (pour le futur)
    async fetchTeam() {
      try {
        // Simulation d'un appel API
        // const response = await $fetch('/api/team')
        // this.team = response
        console.log("Données de l'équipe chargées")
      } catch (error) {
        console.error("Erreur lors du chargement de l'équipe:", error)
      }
    },
  },
})
