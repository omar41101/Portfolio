"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-gray-900/80 dark:bg-white/10 backdrop-blur-sm border-gray-700 dark:border-gray-600 hover:bg-gray-800 dark:hover:bg-white/20 text-gray-200 dark:text-gray-300 hover:text-white dark:hover:text-white"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-gray-900/95 dark:bg-white/95 backdrop-blur-sm border-gray-700 dark:border-gray-300"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="text-gray-200 dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-200 focus:bg-gray-800 dark:focus:bg-gray-200"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="text-gray-200 dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-200 focus:bg-gray-800 dark:focus:bg-gray-200"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="text-gray-200 dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-200 focus:bg-gray-800 dark:focus:bg-gray-200"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
