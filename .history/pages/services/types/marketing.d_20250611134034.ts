export interface Tariff {
  id: string
  title: string
  price: string
  color: 'primary' | 'accent'
  features: string[]
  description: string
  algorithm: string[]
  team?: string[]
}

export default defineNuxtConfig({
  elementPlus: {
    theme: 'dark',
    importStyle: 'scss',
    components: ['ElDialog', 'ElButton', 'ElDivider']
  }
})