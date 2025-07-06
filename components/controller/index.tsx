"use client"

import BackgroundToggle from "./background-toggle"
import DarkmodeToggle from "./darkmode-toggle"
import LanguageSelect from "./language-select"
import LineNumberToggle from "./line-numbers-toggle"
import Padding from "./padding"
import ThemeSelect from "./theme-select"

export default function Controller() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 bg-transparent">
            <div className="flex justify-center w-full">
                <div className="w-full max-w-3xl px-12 py-6 rounded-t-xl bg-zinc-900/90 border border-zinc-800 shadow-lg flex flex-row justify-center items-center space-x-6 backdrop-blur-md">
                    <ThemeSelect />
                    <BackgroundToggle />
                    <DarkmodeToggle />
                    <LineNumberToggle />
                    <Padding />
                    <LanguageSelect />
                </div>
            </div>
        </div>
    )
}
