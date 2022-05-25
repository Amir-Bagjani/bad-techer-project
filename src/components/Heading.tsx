import React from 'react'

const Heading = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="heading">
        {children}
    </div>
  )
}

export default Heading