import React from 'react'
import cx from 'classnames'

// If you pass it nothing, it shows itself with the idea that you control it from the outside.
export default function SpinnerWiggle({ showif = true, fullScreen }) {
  if (!showif) return null

  return (
    <div
      className={cx({
        'absolute inset-0 grid place-content-center': fullScreen,
      })}>
      <div className='spinner-wiggle'></div>
    </div>
  )
}
