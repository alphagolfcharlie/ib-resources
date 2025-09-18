"use client"

import { useState } from "react"
import type { Element } from "@/lib/periodic-data"
import { Card } from "@/components/ui/card"

interface ElementCardProps {
    element: Element
}

export function ElementCard({ element }: ElementCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    const getCategoryColor = (category: string): string => {
        const colors: Record<string, string> = {
            "alkali-metal": "bg-red-50 border-red-200 hover:bg-red-100 text-red-800 dark:bg-red-800 dark:border-red-600 dark:hover:bg-red-700 dark:text-red-50",
            "alkaline-earth-metal": "bg-orange-50 border-orange-200 hover:bg-orange-100 text-orange-800 dark:bg-orange-800 dark:border-orange-600 dark:hover:bg-orange-700 dark:text-orange-50",
            "transition-metal": "bg-blue-50 border-blue-200 hover:bg-blue-100 text-blue-800 dark:bg-blue-800 dark:border-blue-600 dark:hover:bg-blue-700 dark:text-blue-50",
            "post-transition-metal": "bg-rose-50 border-rose-200 hover:bg-rose-100 text-rose-800 dark:bg-rose-800 dark:border-rose-600 dark:hover:bg-rose-700 dark:text-rose-50",
            "metalloid": "bg-lime-50 border-lime-200 hover:bg-lime-100 text-lime-800 dark:bg-lime-800 dark:border-lime-600 dark:hover:bg-lime-700 dark:text-lime-50",
            "nonmetal": "bg-purple-50 border-purple-200 hover:bg-purple-100 text-purple-800 dark:bg-purple-800 dark:border-purple-600 dark:hover:bg-purple-700 dark:text-purple-50",
            "halogen": "bg-pink-50 border-pink-200 hover:bg-pink-100 text-pink-800 dark:bg-pink-800 dark:border-pink-600 dark:hover:bg-pink-700 dark:text-pink-50",
            "noble-gas": "bg-indigo-50 border-indigo-200 hover:bg-indigo-100 text-indigo-800 dark:bg-indigo-800 dark:border-indigo-600 dark:hover:bg-indigo-700 dark:text-indigo-50",
            "lanthanide": "bg-amber-50 border-amber-200 hover:bg-amber-100 text-amber-800 dark:bg-amber-800 dark:border-amber-600 dark:hover:bg-amber-700 dark:text-amber-50",
            "actinide": "bg-emerald-50 border-emerald-200 hover:bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:border-emerald-600 dark:hover:bg-emerald-700 dark:text-emerald-50"
        };
        return colors[category] || "bg-card border-border hover:bg-muted";
    };

    return (
        <div className="relative">
            <Card
                className={`
          w-16 h-16 p-1 cursor-pointer transition-all duration-200 border-2
          ${getCategoryColor(element.category)}
          ${isHovered ? "scale-120 shadow-lg relative z-20" : "shadow-sm"}
        `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex flex-col items-center justify-center h-full text-xs">
                    <div className="text-[9px] font-mono leading-none">{element.atomicNumber}</div>
                    <div className="text-lg font-bold leading-none">{element.symbol}</div>
                    <div className="text-[9px] leading-none truncate w-full text-center">{element.name}</div>
                </div>
            </Card>

            {/* Hover tooltip */}
            {isHovered && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-30">
                    <Card className="p-4 w-80 bg-popover border-border shadow-xl">
                        <div className="space-y-3">
                            <div className="text-center border-b pb-2">
                                <h3 className="text-xl font-bold text-popover-foreground">{element.name}</h3>
                                <p className="text-sm text-muted-foreground capitalize">{element.category.replace("-", " ")}</p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-sm">
                                <div>
                                    <span className="font-semibold">Symbol:</span> {element.symbol}
                                </div>
                                <div>
                                    <span className="font-semibold">Atomic Number:</span> {element.atomicNumber}
                                </div>
                                <div>
                                    <span className="font-semibold">Mass:</span> {element.atomicMass} u
                                </div>
                                <div>
                                    <span className="font-semibold">State:</span> {element.state}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div>
                                    <span className="font-semibold text-sm">Electronic Configuration:</span>
                                    <p className="font-mono text-sm bg-muted p-2 rounded mt-1">{element.electronConfiguration}</p>
                                </div>

                                {element.meltingPoint && (
                                    <div className="text-sm">
                                        <span className="font-semibold">Melting Point:</span> {element.meltingPoint}°C
                                    </div>
                                )}

                                {element.boilingPoint && (
                                    <div className="text-sm">
                                        <span className="font-semibold">Boiling Point:</span> {element.boilingPoint}°C
                                    </div>
                                )}

                                {element.density && (
                                    <div className="text-sm">
                                        <span className="font-semibold">Density:</span> {element.density} g/cm³
                                    </div>
                                )}

                                {element.discoveryYear && (
                                    <div className="text-sm">
                                        <span className="font-semibold">Discovered:</span> {element.discoveryYear}
                                        {element.discoveredBy && ` by ${element.discoveredBy}`}
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    )
}
