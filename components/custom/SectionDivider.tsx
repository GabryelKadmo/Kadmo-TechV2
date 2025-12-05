'use client'

import React from 'react'

export default function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-12 md:py-16">
      {/* Animated horizontal line */}
      <div className="relative mx-auto h-px w-full max-w-7xl">
        {/* Static base line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent opacity-30" />

        {/* Animated glow effect */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground to-transparent opacity-20 blur-sm animate-slide-right"
        />

        {/* Slower secondary glow */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/50 to-transparent opacity-10 blur-md animate-slide-right-slow"
        />
      </div>
    </div>
  )
}
