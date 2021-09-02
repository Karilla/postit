import { writable } from 'svelte/store'

export const numberOfPostid = writable(0)

export const textPostitStore = writable({
  title: 'Null',
  data: 'Null',
})
