<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <AppNavigation />
    <NuxtPage />
    <Toast :toasts="toasts" @remove="removeToast" />
  </div>
</template>

<script setup>
import { useToast } from "~/composables/useToast"

const { toasts, removeToast } = useToast()
</script>
