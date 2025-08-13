"use client"

import type React from "react"

interface LoaderProps {
  size?: number
  className?: string
  color?: string
}

const Loader = ({ size = 20, className = "", color }: LoaderProps) => {
  const loaderStyle = {
    "--loader-size": `${size}px`,
    "--loader-color": color || "currentColor",
    display: "inline-flex",
    gap: "10px",
  } as React.CSSProperties & {
    "--loader-size": string
    "--loader-color": string
  }

  return (
    <>
      <div className={`custom-loader ${className}`} style={loaderStyle} />
      <style jsx>{`
        .custom-loader:before,
        .custom-loader:after {
          content: "";
          height: var(--loader-size);
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(farthest-side, var(--loader-color) 95%, transparent) 35% 35%/6px 6px no-repeat
            rgb(255 255 255);
          transform: scaleX(var(--s, 1)) rotate(0deg);
          animation: loader-spin 1s infinite linear;
        }
        
        :global(.dark) .custom-loader:before,
        :global(.dark) .custom-loader:after {
          background: radial-gradient(farthest-side, var(--loader-color) 95%, transparent) 35% 35%/6px 6px no-repeat
            rgb(31 41 55);
        }
        
        .custom-loader:after {
          --s: -1;
          animation-delay: -0.1s;
        }
        
        @keyframes loader-spin {
          100% {
            transform: scaleX(var(--s, 1)) rotate(360deg);
          }
        }
      `}</style>
    </>
  )
}

export default Loader
