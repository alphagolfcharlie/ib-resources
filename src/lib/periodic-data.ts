// periodic-data.ts

export interface Element {
    atomicNumber: number
    symbol: string
    name: string
    summary: string
    atomicMass: number
    electronConfiguration: string
    category: string
    state: string
    meltingPoint?: number | null
    boilingPoint?: number | null
    density?: number | null
    discoveryYear?: number | string | null
    discoveredBy?: string | null
    row: number
    col: number
}

// Import JSON data
// Make sure your tsconfig.json has "resolveJsonModule": true and "esModuleInterop": true
import elementsData from './elements.json' with { type: 'json' }

export const elements: Element[] = elementsData as Element[]

export const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
        "alkali-metal": "bg-red-100 border-red-300 text-red-800",
        "alkaline-earth-metal": "bg-orange-100 border-orange-300 text-orange-800",
        "transition-metal": "bg-blue-100 border-blue-300 text-blue-800",
        "metalloid": "bg-yellow-100 border-yellow-300 text-yellow-800",
        "nonmetal": "bg-purple-100 border-purple-300 text-purple-800",
        "halogen": "bg-pink-100 border-pink-300 text-pink-800",
        "noble-gas": "bg-indigo-100 border-indigo-300 text-indigo-800",
        "lanthanide": "bg-sky-800 border-sky-300 text-sky-800",
        "actinide": "bg-indigo-100 border-indigo-300 text-indigo-800",

    }

    // Normalize category text (remove spaces, lowercase, handle commas)
    const normalized = category.toLowerCase().replace(/[,\\s]+/g, "-")
    return colors[normalized] || "bg-gray-100 border-gray-300 text-gray-800"
}
