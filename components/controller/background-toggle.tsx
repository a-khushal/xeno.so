"use client"

import { useUIStore } from "@/store/store"
import { Label } from "../ui/label"
import { Switch } from "../ui/switch"

export default function BackgroundToggle() {
  const isToggled = useUIStore(s => s.backgroundToggled)
  const toggle = useUIStore(s => s.toggleBackground)
  const hasHydrated = useUIStore(s => s.hasHydrated)

  if (!hasHydrated) return null

  return (
    <div className="flex flex-col items-center space-y-2">
      <Label htmlFor="background-toggle" className="text-muted-foreground text-xs">
        Background
      </Label>
      <Switch
        id="background-toggle"
        checked={isToggled}
        onCheckedChange={toggle}
      />
    </div>
  )
}
