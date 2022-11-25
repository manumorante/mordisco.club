import React from 'react'
import cx from 'classnames'

export default function Button({ onClick, className, submit, secondary, icon, label }) {
  const Icon = icon && React.cloneElement(icon, { className: 'w-8 h-8 sm:w-5 sm:h-5 opacity-90' })
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={() => {
        if (onClick && !submit) onClick()
      }}
      className={cx(
        'Button',
        'inline-flex items-center gap-2 rounded-full',
        {
          'py-2 pl-3 pr-4': icon && label,
        },
        {
          'py-2 px-3': icon && !label,
        },
        {
          'py-2 px-4': !icon && label,
        },
        'text-lg leading-5',
        'cursor-pointer',
        {
          'bg-white/20 hover:bg-white/30 text-white/80': !secondary,
          'bg-neutral-500/20 hover:bg-neutral-500/30 text-white/50': secondary,
        },
        'transition-all duration-500 ease-in-out',
        className
      )}>
      {Icon}
      {label && <div>{label}</div>}
    </button>
  )
}
