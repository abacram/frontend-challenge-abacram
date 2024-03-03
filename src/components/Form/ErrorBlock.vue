<script setup>
const props = defineProps({
  error: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <p
    v-if="props.error"
    class="text-red-500 text-xs italic"
  >
    {{ props.error }}
  </p>
</template>
