<script setup>
import PostList from '../components/PostList.vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const route = useRoute()
const name = route.params.name
const { result, loading, error } = useQuery(gql`
  query {
    authorByUsername(
      name: "${name}"
    ) {
        website
        bio
        user {
          name
        }
        postSet {
          title
          slug
        }
      }
  }
`)
</script>

<!-- ... -->

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error.message }}</div>
  <section v-else :set="author = result.authorByUsername">
    <h2>{{ author.user.name }}</h2>
    <template v-if="author.user.firstName && author.user.lastName">
      <h3>{{ author.user.firstName }} {{ author.user.lastName }}</h3>
    </template>
    <p v-if="author.bio">
      {{ author.bio }}
      <template v-if="author.website">
        Learn more about {{ author.user.name }} on their <a :href="author.website">website</a>.
      </template>
    </p>
    <h3>Posts</h3>
    <PostList v-if="author.postSet" :posts="author.postSet" :showAuthor="false" />
    <p v-else>The author hasn't posted yet.</p>
  </section>
</template>

<style scoped>
h2 {
  color: red;
}
</style>
