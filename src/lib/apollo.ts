import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pync1z2pa401xl2rz4gf41/master',
  cache: new InMemoryCache()
})