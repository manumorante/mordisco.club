/* eslint-disable @next/next/no-html-link-for-pages */
import cx from 'classnames'
import { Logo } from 'components/ui'

function Header({ isTop }: { isTop: boolean }) {
  const mainCx = cx(
    'Header',
    'fixed z-40 top-0 right-0 left-0',
    {
      'h-header-md': isTop,
      'h-header-sm': !isTop,
      'bg-black-900/90 backdrop-saturate-150 backdrop-blur-xl': true,
    },
    'transition-all duration-500 ease-in-out'
  )

  return (
    <>
      <div role='heading' className={mainCx}>
        <div className={cx('mx-auto max-w-6xl h-full px-6', 'flex justify-between items-center')}>
          <a href='/#header' aria-label='Ir al inicio'>
            <Logo
              className={cx(
                'h-auto transition-all duration-500 ease-in-out',
                // W
                'w-36',
                { 'sm:w-44': isTop }
              )}
            />
          </a>
        </div>
      </div>
      <div id='header' className={'h-header-md'} />
    </>
  )
}

export default Header
