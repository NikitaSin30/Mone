import React from 'react'

type HType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type FontSize = '16' | '20' | '22' | '42'
type FontWeight = '400' | '600'

const HList: Record<HType, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

export const H = ({
  HSize,
  content,
  fontSize,
  fontWeight,
  color = '#000000',
}: {
  HSize: HType
  content: string
  fontSize: FontSize
  fontWeight: FontWeight
  color?: string
}) => {
  const HTag = HList[HSize]
  return <HTag style={{ fontWeight, color, fontSize: `${fontSize}px` }}>{content}</HTag>
}
