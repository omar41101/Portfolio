"use client"
import { useEffect, useState } from "react"
import Loader from "./loader"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 3000 // 3 seconds
    const interval = 50 // Update every 50ms
    const increment = (interval / duration) * 100

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment
        if (newProgress >= 100) {
          clearInterval(progressTimer)
          setTimeout(onLoadingComplete, 200) // Small delay for smooth transition
          return 100
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(progressTimer)
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Background with same gradient as main page */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo/Brand */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">OA</span>
          </div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">Omar Ajimi</div>
        </div>

        {/* Loading Animation */}
        <div className="flex flex-col items-center gap-4">
          <Loader size={32} className="text-blue-600 dark:text-blue-400" />
          <div className="text-gray-600 dark:text-gray-300 text-lg font-medium animate-pulse">Loading Portfolio...</div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="text-sm text-gray-500 dark:text-gray-400 font-mono">{Math.round(progress)}%</div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-600 rounded-full opacity-10 filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-600 rounded-full opacity-10 filter blur-3xl animate-pulse" />
    </div>
  )
}

export default LoadingScreen
