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
import { languages as languagesMap } from "@/lib/constants"

const languages = Object.entries(languagesMap).map(([id, name]) => ({ id, name }))

export default function LanguageSelect() {
    const lang = useUIStore(s => s.language)
    const setLang = useUIStore(s => s.setLanguage)
    const hasHydrated = useUIStore(s => s.hasHydrated)
    const current = languages.find(l => l.id === lang) || languages[0]

    if (!hasHydrated) return null;

    return (
        <div className="flex flex-col space-y-1">
            <span className="text-xs text-muted-foreground">Language</span>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="flex justify-between items-center px-2 py-0.5 rounded-md border border-zinc-800 bg-zinc-900 transition w-[7.5rem] text-white text-sm">
                        <span className="truncate">{current?.name}</span>
                        <ChevronUp className="w-4 h-4 text-zinc-300" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-44 max-h-[90vh] overflow-y-auto scrollbar-none bg-zinc-900 text-white border border-zinc-800 shadow-lg p-1">
                    {languages.map((l) => {
                        const active = lang === l.id
                        return (
                            <DropdownMenuItem
                                key={l.id}
                                onClick={() => setLang(l.id as any)}
                                className={cn(
                                    "px-2 py-1.5 rounded-md text-sm cursor-pointer",
                                    active && "bg-zinc-800"
                                )}
                            >
                                {l.name}
                            </DropdownMenuItem>
                        )
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
