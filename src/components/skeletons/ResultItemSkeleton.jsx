import React from 'react'
import Skeleton from './Skeleton'

const ResultItemSkeleton = () => {
  return (
    <div>
        {Array(10).fill(0).map((index) => (
            <Skeleton classes="text width-100" key={index} />
        ))}
    </div>
  )
}

export default ResultItemSkeleton