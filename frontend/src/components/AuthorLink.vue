<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps(['author'])
const firstName = props.author.user.firstName
const lastName = props.author.user.lastName
const displayName = computed(() => {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`
  } else {
    return `${props.author.user.name}`
  }
})
</script>

<template>
  <RouterLink :to="{ name: 'author', params: { name: author.user.name } }">
    {{ displayName }}
  </RouterLink>
</template>
