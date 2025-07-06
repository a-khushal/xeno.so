"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"
import { useUIStore } from "@/store/store"
import { themes } from "@/lib/constants"

export default function ThemeSelect() {
    const theme = useUIStore(s => s.theme)
    const setTheme = useUIStore(s => s.setTheme)
    const hasHydrated = useUIStore(s => s.hasHydrated)
    const themeEntries = Object.entries(themes)
    const currentTheme = themes[theme]

    if (!hasHydrated) return null;

    return (
        <div className="flex flex-col space-y-1.5">
            <span className="text-xs text-muted-foreground">Theme</span>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 px-2 py-0.5 rounded-md border border-zinc-800 bg-zinc-900 transition w-fit">
                        <span
                            className={cn(
                                "w-4 h-4 rounded-full",
                                currentTheme?.background || "bg-purple-400"
                            )}
                        />
                        <ChevronUp className="w-4 h-4 text-zinc-300" />
                    </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-32 bg-zinc-900 text-white border border-zinc-800 shadow-lg p-1">
                    {themeEntries.map(([key, value]) => {
                        const active = theme === key
                        return (
                            <DropdownMenuItem
                                key={key}
                                onClick={() => setTheme(key as any)}
                                className={cn(
                                    "flex items-center px-2 py-1 rounded-md gap-2 text-sm cursor-pointer",
                                    active && "bg-zinc-800"
                                )}
                            >
                                <span className={`w-3 h-3 rounded-full ${value.background}`} />
                                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                            </DropdownMenuItem>
                        )
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
