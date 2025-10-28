import { defineLive } from "next-sanity/live";
import { client } from './client'

export const { sanityFetch, SanityLive } = defineLive({ 
  client: client.withConfig({ 
    apiVersion: '2025-01-01' 
  }),
  serverToken: false,
  browserToken: false,
});
