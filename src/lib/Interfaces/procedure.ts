// Tipos base reutilizáveis
export interface PageInfo {
  slug: string
  title: string
  subtitle: string
  description: string
}

export interface CTA {
  text: string
  description: string
}

export interface BaseItem {
  id: string
  name: string
  description: string
}

// Procedimentos individuais
export interface Procedure extends BaseItem {
  benefits?: string[]
  indications?: string[]
}

// Categorias de procedimentos
export interface ProcedureCategory {
  id: string
  name: string
  description?: string
  procedures?: Procedure[]
  benefits?: string[]
  indications?: string[]
}

// Estrutura completa da página
export interface ProceduresPage {
  page: PageInfo
  categories: ProcedureCategory[]
  cta: CTA
}
