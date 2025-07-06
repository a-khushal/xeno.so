"use client"

import Controller from "@/components/controller"
import { ThemeProvider } from "@/components/theme-provider"

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
        >
            {children}
        </ThemeProvider>
    )
}