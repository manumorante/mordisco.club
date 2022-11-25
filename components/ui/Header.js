/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState, useEffect } from 'react'
import { routes } from 'data'
import cx from 'classnames'
import Link from 'next/link'
import Logo from './Logo'

function Header() {
  const [isSmall, seIsSmall] = useState(false)
  const jumpToSmallHeader = 100

  useEffect(() => {
    const handleScroll = () => {
      seIsSmall(window.scrollY > jumpToSmallHeader)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div
        className={cx(
          'Header',
          'fixed z-40 top-0 right-0 left-0',
          {
            'h-header-md': !isSmall,
            'h-header-sm': isSmall,
            'backdrop-saturate-150 backdrop-blur-xl': isSmall,
          },
          'transition-all duration-500 ease-in-out'
        )}>
        <div className={cx('mx-auto max-w-6xl h-full px-6', 'flex justify-between items-center')}>
          <a href='/#header' aria-label='Ir al inicio'>
            <Logo
              className={cx('h-auto transition-all duration-500 ease-in-out', {
                'w-44': !isSmall,
                'w-36': isSmall,
              })}
            />
          </a>

          <a href='/hello' aria-label='Información del sitio y el autor'>
            <div
              className={cx(
                'h-auto transition-all duration-500 ease-in-out text-right font-extralight ',
                {
                  'text-white/60 text-lg': !isSmall,
                  'text-white/40 text-base': isSmall,
                }
              )}>
              ¡Hola!
            </div>
          </a>
        </div>
      </div>
      <div id='header' className={'h-header-md'} />
    </>
  )
}

export default Header
