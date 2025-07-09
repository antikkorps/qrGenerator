<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Navigation -->
    <div class="mb-8">
      <NuxtLink to="/" class="inline-flex items-center text-blue-600 hover:text-blue-800">
        <Icon name="heroicons:arrow-left" class="w-5 h-5 mr-2" />
        Retour à l'accueil
      </NuxtLink>
    </div>

    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Générateur QR Code</h1>
        <p class="text-gray-600">
          Créez des QR codes personnalisés pour vos v-cards ou liens web
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Formulaire -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-6">Configuration</h2>

          <!-- Type de QR Code -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-3"
              >Type de QR Code</label
            >
            <div class="grid grid-cols-2 gap-3">
              <button
                :class="[
                  'p-3 rounded-lg border-2 transition-all',
                  qrType === 'url'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300',
                ]"
                @click="qrType = 'url'"
              >
                <Icon name="heroicons:link" class="w-5 h-5 mx-auto mb-1" />
                Lien Web
              </button>
              <button
                :class="[
                  'p-3 rounded-lg border-2 transition-all',
                  qrType === 'vcard'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300',
                ]"
                @click="qrType = 'vcard'"
              >
                <Icon name="heroicons:user" class="w-5 h-5 mx-auto mb-1" />
                V-Card
              </button>
            </div>
          </div>

          <!-- Formulaire URL -->
          <div v-if="qrType === 'url'" class="space-y-4 mb-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">URL</label>
              <input
                v-model="qrData.url"
                type="url"
                placeholder="https://example.com"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <!-- Formulaire V-Card -->
          <div v-if="qrType === 'vcard'" class="space-y-4 mb-6">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                <input
                  v-model="qrData.vcard.firstName"
                  type="text"
                  placeholder="Jean"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                <input
                  v-model="qrData.vcard.lastName"
                  type="text"
                  placeholder="Dupont"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  v-model="qrData.vcard.email"
                  type="email"
                  placeholder="jean.dupont@email.com"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Téléphone</label
                >
                <input
                  v-model="qrData.vcard.phone"
                  type="tel"
                  placeholder="+33 1 23 45 67 89"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Entreprise</label
                >
                <input
                  v-model="qrData.vcard.company"
                  type="text"
                  placeholder="Ma Société"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Poste</label>
                <input
                  v-model="qrData.vcard.title"
                  type="text"
                  placeholder="Développeur"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <!-- Accordéon Personnalisation -->
          <div class="border-t pt-6">
            <button
              class="flex items-center justify-between w-full text-left mb-4"
              @click="customizationOpen = !customizationOpen"
            >
              <h3 class="text-lg font-medium">Personnalisation</h3>
              <Icon
                :name="
                  customizationOpen ? 'heroicons:chevron-up' : 'heroicons:chevron-down'
                "
                class="w-5 h-5 text-gray-500"
              />
            </button>

            <div v-show="customizationOpen" class="space-y-4">
              <!-- Couleurs -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Couleur principale</label
                  >
                  <input
                    v-model="customization.foregroundColor"
                    type="color"
                    class="w-full h-12 rounded-lg border border-gray-300"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2"
                    >Couleur de fond</label
                  >
                  <input
                    v-model="customization.backgroundColor"
                    type="color"
                    class="w-full h-12 rounded-lg border border-gray-300"
                  />
                </div>
              </div>

              <!-- Taille -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2"
                  >Taille du QR Code</label
                >
                <input
                  v-model="customization.size"
                  type="range"
                  min="128"
                  max="512"
                  step="32"
                  class="w-full"
                />
                <div class="text-center text-sm text-gray-600">
                  {{ customization.size }}px
                </div>
              </div>
            </div>
          </div>

          <!-- Bouton de génération -->
          <button
            class="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-6"
            @click="generateQR"
          >
            Générer QR Code
          </button>
        </div>

        <!-- Prévisualisation -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h2 class="text-xl font-semibold mb-6">Prévisualisation</h2>

          <div class="flex flex-col items-center justify-center min-h-[400px]">
            <div v-if="qrCodeDataUrl" class="text-center">
              <div class="bg-white p-4 rounded-lg shadow-lg inline-block">
                <img :src="qrCodeDataUrl" :alt="'QR Code'" class="max-w-full h-auto" />
              </div>
              <div class="mt-4 space-y-2">
                <button
                  class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  @click="downloadQR"
                >
                  Télécharger PNG
                </button>
                <button
                  class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors ml-2"
                  @click="downloadSVG"
                >
                  Télécharger SVG
                </button>
              </div>
            </div>
            <div v-else class="text-center text-gray-500">
              <Icon
                name="heroicons:qr-code"
                class="w-24 h-24 mx-auto mb-4 text-gray-300"
              />
              <p>Remplissez le formulaire et cliquez sur "Générer QR Code"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import QRCode from "qrcode"
const generateVCard = (vcardData) => {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${vcardData.firstName} ${vcardData.lastName}`,
    `N:${vcardData.lastName};${vcardData.firstName};;;`,
    `EMAIL:${vcardData.email}`,
    `TEL:${vcardData.phone}`,
    `ORG:${vcardData.company}`,
    `TITLE:${vcardData.title}`,
    "END:VCARD",
  ]
  return lines.join("\r\n")
}

const qrType = ref("url")
const qrCodeDataUrl = ref("")

const qrData = ref({
  url: "",
  vcard: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    title: "",
  },
})

const customization = ref({
  foregroundColor: "#000000",
  backgroundColor: "#FFFFFF",
  size: 256,
})

const customizationOpen = ref(true)

const generateQR = async () => {
  try {
    let data = ""

    if (qrType.value === "url") {
      data = qrData.value.url
    } else if (qrType.value === "vcard") {
      data = generateVCard(qrData.value.vcard)
    }

    if (!data) {
      alert("Veuillez remplir les champs requis")
      return
    }

    const options = {
      width: customization.value.size,
      margin: 1,
      color: {
        dark: customization.value.foregroundColor,
        light: customization.value.backgroundColor,
      },
      errorCorrectionLevel: "M",
    }

    qrCodeDataUrl.value = await QRCode.toDataURL(data, options)
  } catch (error) {
    console.error("Erreur lors de la génération du QR code:", error)
    alert("Erreur lors de la génération du QR code")
  }
}

const { success, error } = useToast()

const downloadQR = () => {
  if (!qrCodeDataUrl.value) return

  try {
    const link = document.createElement("a")
    link.download = "qr-code.png"
    link.href = qrCodeDataUrl.value
    link.click()

    success(
      "QR Code téléchargé !",
      "Votre QR Code PNG a été téléchargé avec succès.",
      3000
    )
  } catch (err) {
    console.error("Erreur lors du téléchargement PNG:", err)
    error(
      "Erreur de téléchargement",
      "Impossible de télécharger le QR Code PNG. Veuillez réessayer.",
      4000
    )
  }
}

const downloadSVG = async () => {
  try {
    let data = ""

    if (qrType.value === "url") {
      data = qrData.value.url
    } else if (qrType.value === "vcard") {
      data = generateVCard(qrData.value.vcard)
    }

    const options = {
      width: customization.value.size,
      margin: 1,
      color: {
        dark: customization.value.foregroundColor,
        light: customization.value.backgroundColor,
      },
      errorCorrectionLevel: "M",
    }

    const svg = await QRCode.toString(data, options)
    const blob = new Blob([svg], { type: "image/svg+xml" })
    const url = URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.download = "qr-code.svg"
    link.href = url
    link.click()

    URL.revokeObjectURL(url)

    success(
      "QR Code SVG téléchargé !",
      "Votre QR Code SVG a été téléchargé avec succès.",
      3000
    )
  } catch (err) {
    console.error("Erreur lors du téléchargement SVG:", err)
    error(
      "Erreur de téléchargement",
      "Impossible de télécharger le QR Code SVG. Veuillez réessayer.",
      4000
    )
  }
}
</script>
