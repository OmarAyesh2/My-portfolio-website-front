import React from 'react'

function Container({children, className, dangerouslySetInnerHTML=null}) {
  return (
    <div dangerouslySetInnerHTML={dangerouslySetInnerHTML ? dangerouslySetInnerHTML : null} className={`content-container ${className}`}>
        {children}
    </div>
  )
}

export default Container;