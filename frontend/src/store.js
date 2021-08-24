import { writable } from 'svelte/store'

export const textPostitStore = writable({
  title: 'Null',
  data: 'Null',
})
