// src/components/ui/button.jsx
import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "bg-purple-700 text-white hover:bg-purple-800",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
  ghost: "text-gray-700 hover:bg-gray-100",
}

export const Button = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
          buttonVariants[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"
