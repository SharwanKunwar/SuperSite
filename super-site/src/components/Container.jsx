import React from 'react'

function Container({children,className}) {
  return (
    <div className={`max-w-7xl bg-red-400 w-full ${className}`}>
      {children}
    </div>
  )
}

export default Container
