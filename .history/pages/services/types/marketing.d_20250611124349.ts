// ~/types/marketing.d.ts
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