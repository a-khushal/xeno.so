"use client"

import { Label } from "../ui/label"
import { Switch } from "../ui/switch"
import { useUIStore } from "@/store/store"

export default function LineNumberToggle() {
  const isToggled = useUIStore(s => s.lineNumbers)
  const toggle = useUIStore(s => s.toggleLineNumbers)
  const hasHydrated = useUIStore(s => s.hasHydrated)

  if (!hasHydrated) return null

  return (
    <div className="flex flex-col items-center space-y-2">
      <Label htmlFor="line-number-toggle" className="text-muted-foreground text-xs">
        Line numbers
      </Label>
      <Switch
        id="line-number-toggle"
        checked={isToggled}
        onCheckedChange={toggle}
      />
    </div>
  )
}
