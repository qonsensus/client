<template>
  <div class="w-full h-screen flex items-center justify-center">
    <Button variant="default"> Hello from shadcn/vue <ArrowUpIcon /> </Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "@lucide/vue";

console.log('👋 This message is being logged by "App.vue", included via Vite');
</script>
