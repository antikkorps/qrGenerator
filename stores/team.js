import { defineStore } from "pinia"

export const useTeamStore = defineStore("team", {
  state: () => ({
    team: [
      {
        id: 1,
        name: "Jean Dupont",
        title: "Développeur Full-Stack Senior",
        company: "TechCorp Solutions",
        avatar: "https://i.pravatar.cc/150?u=jean",
        bio: "Passionné de développement web et mobile avec 8 ans d'expérience. Spécialisé dans la création d'applications performantes et scalables. J'aime partager mes connaissances et contribuer à des projets innovants.",
        skills: ["React", "Vue.js", "Node.js", "TypeScript", "AWS"],
        visibleTo: [2, 3], // Jean peut voir Marie et Pierre
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
            type: "website",
            label: "Portfolio",
            value: "jeandupont.dev",
            url: "https://jeandupont.dev",
            icon: "heroicons:globe-alt",
            bgColor: "bg-purple-500",
          },
        ],
      },
      {
        id: 2,
        name: "Marie Martin",
        title: "Designer UX/UI",
        company: "Creative Studio",
        avatar: "https://i.pravatar.cc/150?u=marie",
        bio: "Designer créative avec une approche centrée sur l'utilisateur. Je transforme les idées en expériences visuelles exceptionnelles. Passionnée par l'accessibilité et l'innovation dans le design.",
        skills: [
          "Figma",
          "Adobe Creative Suite",
          "Prototyping",
          "User Research",
          "Design Systems",
        ],
        visibleTo: [1, 3, 4], // Marie peut voir Jean, Pierre et Sophie
        links: [
          {
            type: "email",
            label: "Email",
            value: "marie.martin@creativestudio.com",
            url: "mailto:marie.martin@creativestudio.com",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 1 98 76 54 32",
            url: "tel:+33198765432",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "marie-martin-design",
            url: "https://linkedin.com/in/marie-martin-design",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "behance",
            label: "Behance",
            value: "mariemartin",
            url: "https://behance.net/mariemartin",
            icon: "simple-icons:behance",
            bgColor: "bg-blue-700",
          },
          {
            type: "dribbble",
            label: "Dribbble",
            value: "mariemartin",
            url: "https://dribbble.com/mariemartin",
            icon: "simple-icons:dribbble",
            bgColor: "bg-pink-500",
          },
        ],
      },
      {
        id: 3,
        name: "Pierre Dubois",
        title: "DevOps Engineer",
        company: "CloudTech",
        avatar: "https://i.pravatar.cc/150?u=pierre",
        bio: "Expert en infrastructure cloud et automatisation. Je m'assure que nos applications sont déployées de manière fiable et sécurisée. Passionné par les nouvelles technologies et l'optimisation des performances.",
        skills: ["Docker", "Kubernetes", "AWS", "Terraform", "CI/CD"],
        visibleTo: [1, 2, 5], // Pierre peut voir Jean, Marie et Lucas
        links: [
          {
            type: "email",
            label: "Email",
            value: "pierre.dubois@cloudtech.com",
            url: "mailto:pierre.dubois@cloudtech.com",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 1 45 67 89 12",
            url: "tel:+33145678912",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "pierre-dubois-devops",
            url: "https://linkedin.com/in/pierre-dubois-devops",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "github",
            label: "GitHub",
            value: "pierredubois",
            url: "https://github.com/pierredubois",
            icon: "simple-icons:github",
            bgColor: "bg-gray-800",
          },
          {
            type: "website",
            label: "Blog Tech",
            value: "pierredubois.dev",
            url: "https://pierredubois.dev",
            icon: "heroicons:globe-alt",
            bgColor: "bg-purple-500",
          },
        ],
      },
      {
        id: 4,
        name: "Sophie Bernard",
        title: "Product Manager",
        company: "Innovation Labs",
        avatar: "https://i.pravatar.cc/150?u=sophie",
        bio: "Product Manager expérimentée avec une vision stratégique forte. Je transforme les besoins utilisateurs en produits innovants et rentables. Passionnée par l'analyse de données et l'amélioration continue.",
        skills: [
          "Product Strategy",
          "Agile",
          "Data Analysis",
          "User Research",
          "Roadmapping",
        ],
        visibleTo: [2, 5, 6], // Sophie peut voir Marie, Lucas et Emma
        links: [
          {
            type: "email",
            label: "Email",
            value: "sophie.bernard@innovationlabs.com",
            url: "mailto:sophie.bernard@innovationlabs.com",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 1 67 89 12 34",
            url: "tel:+33167891234",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "sophie-bernard-pm",
            url: "https://linkedin.com/in/sophie-bernard-pm",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "twitter",
            label: "Twitter",
            value: "@sophiepm",
            url: "https://twitter.com/sophiepm",
            icon: "simple-icons:twitter",
            bgColor: "bg-blue-400",
          },
          {
            type: "medium",
            label: "Medium",
            value: "sophiebernard",
            url: "https://medium.com/@sophiebernard",
            icon: "simple-icons:medium",
            bgColor: "bg-gray-700",
          },
        ],
      },
      {
        id: 5,
        name: "Lucas Moreau",
        title: "Data Scientist",
        company: "AI Solutions",
        avatar: "https://i.pravatar.cc/150?u=lucas",
        bio: "Data Scientist spécialisé en machine learning et intelligence artificielle. Je développe des modèles prédictifs et des solutions d'IA pour résoudre des problèmes complexes. Passionné par l'innovation technologique.",
        skills: ["Python", "TensorFlow", "PyTorch", "SQL", "Machine Learning"],
        visibleTo: [3, 4, 6], // Lucas peut voir Pierre, Sophie et Emma
        links: [
          {
            type: "email",
            label: "Email",
            value: "lucas.moreau@aisolutions.com",
            url: "mailto:lucas.moreau@aisolutions.com",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 1 89 12 34 56",
            url: "tel:+33189123456",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "lucas-moreau-ds",
            url: "https://linkedin.com/in/lucas-moreau-ds",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "github",
            label: "GitHub",
            value: "lucasmoreau",
            url: "https://github.com/lucasmoreau",
            icon: "simple-icons:github",
            bgColor: "bg-gray-800",
          },
          {
            type: "kaggle",
            label: "Kaggle",
            value: "lucasmoreau",
            url: "https://kaggle.com/lucasmoreau",
            icon: "simple-icons:kaggle",
            bgColor: "bg-blue-500",
          },
        ],
      },
      {
        id: 6,
        name: "Emma Rousseau",
        title: "Marketing Digital",
        company: "Growth Agency",
        avatar: "https://i.pravatar.cc/150?u=emma",
        bio: "Experte en marketing digital et croissance d'entreprise. Je développe des stratégies marketing innovantes qui génèrent des résultats mesurables. Passionnée par l'optimisation des conversions et l'expérience client.",
        skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Content Marketing"],
        visibleTo: [4, 5], // Emma peut voir Sophie et Lucas
        links: [
          {
            type: "email",
            label: "Email",
            value: "emma.rousseau@growthagency.com",
            url: "mailto:emma.rousseau@growthagency.com",
            icon: "heroicons:envelope",
            bgColor: "bg-blue-500",
          },
          {
            type: "phone",
            label: "Téléphone",
            value: "+33 1 12 34 56 78",
            url: "tel:+33112345678",
            icon: "heroicons:phone",
            bgColor: "bg-green-500",
          },
          {
            type: "linkedin",
            label: "LinkedIn",
            value: "emma-rousseau-marketing",
            url: "https://linkedin.com/in/emma-rousseau-marketing",
            icon: "simple-icons:linkedin",
            bgColor: "bg-blue-600",
          },
          {
            type: "twitter",
            label: "Twitter",
            value: "@emmarousseau",
            url: "https://twitter.com/emmarousseau",
            icon: "simple-icons:twitter",
            bgColor: "bg-blue-400",
          },
          {
            type: "instagram",
            label: "Instagram",
            value: "@emma.marketing",
            url: "https://instagram.com/emma.marketing",
            icon: "simple-icons:instagram",
            bgColor: "bg-pink-600",
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
