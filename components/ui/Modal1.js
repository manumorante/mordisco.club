import React, { useEffect, useState } from 'react'
import cx from 'classnames'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import SpinnerWiggle from './SpinnerWiggle'
import Button from '@/ui/Button'

export default function Modal({ isOpen, setIsOpen, photo }) {
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setIsOpen])

  if (!photo) return null

  return (
    <div
      className={cx('Modal', 'fixed z-50 inset-0', 'transition-opacity duration-500 ease-in-out', {
        'opacity-0 pointer-events-none': !isOpen,
      })}>
      {/* Background */}
      <div className='absolute inset-0 bg-black/90'></div>

      {photo && (
        <Image
          alt={`Photo ${photo.id}`}
          className={cx(
            'absolute w-full h-full object-contain',
            'transition-opacity duration-500 ease-in-out'
          )}
          src={photo.big}
          width={photo.width}
          height={photo.height}
          onLoad={() => setLoading(false)}
        />
      )}

      {loading && <SpinnerWiggle fullScreen />}

      {/* Close button */}
      <Button
        onClick={() => setIsOpen(false)}
        label='Cerrar'
        icon={<XMarkIcon />}
        className='absolute z-40 top-6 right-6'
      />
    </div>
  )
}
