"use client"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useUIStore } from "@/store/store"

export default function DarkmodeToggle() {
  const isToggled = useUIStore(s => s.darkMode)
  const toggle = useUIStore(s => s.toggleDarkMode)
  const hasHydrated = useUIStore(s => s.hasHydrated)

  if (!hasHydrated) return null;

  return (
    <div className="flex flex-col items-center space-y-2">
      <Label htmlFor="dark-mode-switch" className="text-muted-foreground text-xs">
        Dark mode
      </Label>
      <Switch
        id="dark-mode-switch"
        checked={isToggled}
        onCheckedChange={toggle}
      />
    </div>
  )
}
