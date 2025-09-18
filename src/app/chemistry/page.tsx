"use client"

import { elements } from "@/lib/periodic-data"
import { ElementCard } from "@/components/chemistry/element-card"

export default function PeriodicTable() {
    // Create a main grid (7 rows x 18 cols, excluding lanthanides & actinides)
    const createMainGrid = () => {
        const grid: ((typeof elements)[0] | null)[][] = []

        for (let i = 0; i < 7; i++) {
            grid[i] = new Array(18).fill(null)
        }

        elements.forEach((element) => {
            // Skip lanthanides and actinides (Z=57–71, 89–103)
            if (
                (element.atomicNumber >= 57 && element.atomicNumber <= 71) ||
                (element.atomicNumber >= 89 && element.atomicNumber <= 103)
            ) {
                return
            }

            if (element.row <= 7 && element.col <= 18) {
                grid[element.row - 1][element.col - 1] = element
            }
        })

        return grid
    }

    // Extract lanthanides and actinides
    const lanthanides = elements.filter(
        (el) => el.atomicNumber >= 57 && el.atomicNumber <= 71,
    )
    const actinides = elements.filter(
        (el) => el.atomicNumber >= 89 && el.atomicNumber <= 103,
    )

    const grid = createMainGrid()

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            {/* Header */}
            <div className="mb-8 text-center p-6">
                <h1 className="text-4xl font-bold text-foreground mb-2">
                    Interactive Periodic Table
                </h1>
                <p className="text-muted-foreground">
                    Hover over elements to explore their properties and electronic configurations
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-18 gap-1 mb-8">
                {grid.map((row, rowIndex) =>
                    row.map((element, colIndex) => (
                        <div key={`${rowIndex}-${colIndex}`} className="flex justify-center">
                            {element ? (
                                <ElementCard element={element} />
                            ) : (
                                <div className="w-16 h-16" /> // empty space
                            )}
                        </div>
                    )),
                )}
            </div>

            {/* Lanthanides */}
            <div className="mb-1 flex justify-center">
                <div className="grid grid-cols-15 gap-1"> {/* adjust cols to actual elements */}
                    {lanthanides.map((element) => (
                        <div key={element.atomicNumber} className="flex justify-center">
                            <ElementCard element={element} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Actinides */}
            <div className="mb-1 flex justify-center">
                <div className="grid grid-cols-15 gap-1"> {/* adjust cols to actual elements */}
                    {actinides.map((element) => (
                        <div key={element.atomicNumber} className="flex justify-center">
                            <ElementCard element={element} />
                        </div>
                    ))}
                </div>
            </div>


            {/* Legend */}
            <div className="mt-8 p-6 bg-card rounded-lg border">
                <h2 className="text-xl font-semibold mb-4 text-card-foreground">
                    Element Categories
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-50 border-2 border-red-200 rounded"></div>
                        <span>Alkali Metals</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-50 border-2 border-orange-200 rounded"></div>
                        <span>Alkaline Earth</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-50 border-2 border-blue-200 rounded"></div>
                        <span>Transition Metals</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-rose-50 border-2 border-rose-200 rounded"></div>
                        <span>Post-transition</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-lime-50 border-2 border-lime-200 rounded"></div>
                        <span>Metalloids</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-purple-50 border-2 border-purple-200 rounded"></div>
                        <span>Nonmetals</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-pink-50 border-2 border-pink-200 rounded"></div>
                        <span>Halogens</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-indigo-50 border-2 border-indigo-200 rounded"></div>
                        <span>Noble Gases</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-amber-50 border-2 border-amber-200 rounded"></div>
                        <span>Lanthanides</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-50 border-2 border-emerald-200 rounded"></div>
                        <span>Actinides</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 rounded"></div>
                        <span>Not classified</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
