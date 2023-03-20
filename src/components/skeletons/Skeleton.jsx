import React from 'react'
import './Skeleton.css'

const Skeleton = ({classes}) => {
    const classNames = `skeleton ${classes} animation-skeleton-loading`
    return (
      <div className={classNames}></div>
    )
}

export default Skeleton