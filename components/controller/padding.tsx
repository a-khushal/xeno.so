"use client"

import { useUIStore } from "@/store/store"

const paddingOptions = [16, 32, 64, 128] as const

export default function Padding() {
    const padding = useUIStore(s => s.padding)
    const setPadding = useUIStore(s => s.setPadding)
    const hasHydrated = useUIStore(s => s.hasHydrated)

    if (!hasHydrated) return null

    return (
        <div className="flex flex-col items-center text-xs space-y-1.5">
            <span className="text-muted-foreground">Padding</span>
            <div className="flex flex-row space-x-1">
                {paddingOptions.map((option) => (
                    <button
                        key={option}
                        className={`px-1.5 py-1 rounded-md text-xs transition-colors focus:outline-none
                ${padding === option
                                ? "bg-muted text-foreground"
                                : "text-muted-foreground hover:text-foreground"
                            }
            `}
                        onClick={() => setPadding(option)}
                        type="button"
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    )
}