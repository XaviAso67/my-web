import React from 'react'

const FancyDiv: React.FC = ({ children }) => {
  return <div style={{ border: '3px solid Blue' }}>{children}</div>
}
export default FancyDiv
