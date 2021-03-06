import React from 'react'
import { useKeys } from '../../../js/useKeys'
import { XIcon } from '@heroicons/react/solid'
import { ArrowRightIcon } from '@heroicons/react/outline'
import { ArrowLeftIcon } from '@heroicons/react/outline'
import Arrow from './Left'

export default function Controls({ onNext, onPrev, onClose }) {
  
  useKeys({
    ArrowLeft: onPrev,
    ArrowRight: onNext,
    Escape: onClose,
  })

  return (
    <div className='Controls fixed inset-0 z-50'>
      <Arrow left onClick={onPrev}>
        <ArrowLeftIcon />
      </Arrow>

      <Arrow right onClick={onNext}>
        <ArrowRightIcon />
      </Arrow>

      <div
        onClick={onClose}
        className='absolute top-2 right-2 p-3 rounded-full sm:hover:bg-white/10 cursor-pointer'>
        <XIcon className='w-8 h-8 text-white' />
      </div>
    </div>
  )
}
