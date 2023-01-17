import React from 'react'

const GradiantLine = ({width = 'w-full'}) => {
  return (
    <div className={`h-0.5 ${width} bg-gradient-rainblue`} />
  )
}

export default GradiantLine