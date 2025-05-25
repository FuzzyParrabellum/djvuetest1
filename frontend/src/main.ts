// import "./assets/main.css";

import { createApp, provide, h } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, createHttpLink, InMemoryCache, from } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    )
  if (networkError) console.error(`[Network error]: ${networkError}`)
})

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql/',
})

const cache = new InMemoryCache()
// Allows to retrieve data without redundant network requests
// if the data hasn’t changed.

const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache,
})

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
    // Passing DefaultApolloClient to provide() makes the Apollo
    // client available in all components.
  },
  render: () => h(App),
  // Vue uses the h() render function to create Virtual DOM elements,
  // here  to create a Virtual DOM representation of the App component
  // and mount it as the root of the application
})

app.use(router)

app.mount('#app')
