import React from 'react'

interface DecoratedTitleProps {
  children: React.ReactNode
  leftLineEnd?: string
  rightLineStart?: string
  topGap?: string
  bottomGap?: string
  lineColor?: string
  lineHeight?: string
  className?: string
}

const DecoratedTitle = ({
  children,
  leftLineEnd = 'right-[80%]',
  rightLineStart = 'left-[30%]',
  topGap = '-top-10',
  bottomGap = '-bottom-10',
  lineColor = 'bg-gray-100',
  lineHeight = 'h-10',
  className = '',
}: DecoratedTitleProps) => {
  return (
    <div className='relative inline-block'>

      <div className={`absolute ${topGap} left-[-100vw] ${leftLineEnd} ${lineColor} ${lineHeight} z-0 pointer-events-none`} />

      <h2 className={`text-5xl md:text-7xl lg:text-9xl text-gray-300 font-bold Exo uppercase relative z-10 ${className}`}>
        {children}
      </h2>

      <div className={`absolute ${bottomGap} right-[-100vw] ${rightLineStart} ${lineColor} ${lineHeight} z-0 pointer-events-none`} />

    </div>
  )
}

export default DecoratedTitle