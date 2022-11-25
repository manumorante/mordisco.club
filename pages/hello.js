import cx from 'classnames'
import Image from 'next/image'
import imageLightsLg from 'public/mordisco-lights-lg.jpg'
import Link from 'next/link'
import Layout from '@/app/Layout'

export default function HelloPage() {
  return (
    <Layout>
      <div className={cx('relative z-10 h-3/4', 'flex justify-center items-center', 'p-6')}>
        <div className='Intro flex flex-col gap-10 items-center'>
          {/* Title */}
          <div
            className={cx(
              'opacity-0 animate-[fade-in_1.2s_ease-in_0.6s_forwards]',
              'text-left text-4xl font-extrabold',
              // Gradient text
              'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600'
            )}>
            ¿Dónde están las fotos, Manu?
          </div>

          {/* Title */}
          <div
            className={cx(
              'opacity-0 animate-[fade-in_1s_ease-in_2.8s_forwards]',
              'text-left text-2xl font-extralight ',
              // Gradient text
              'text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-300'
            )}>
            <p className='mb-3'>
              <b>¡Las fotos estarán aquí!</b> Y algunas en Instagram.
            </p>

            <p className='mb-3'>
              ¡Hola! esto será un proyecto personal de <b>Manu Morante</b> en colaboración y
              homenaje a <b>Mordisco Club</b>.
            </p>

            <p className='mb-3'>Gracias por todos estos años.</p>
          </div>

          {/* CTA */}
          <a
            className='opacity-0 animate-[fade-in_1s_ease-in_3.8s_forwards]'
            href='mailto:manu@mordisco.club'>
            <div className='p-0.5 bg-gradient-to-tr from-purple-300 via-violet-500 to-pink-700 rounded-2xl'>
              <div className='opacity-70 px-5 py-2 bg-black rounded-2xl text-lg font-medium text-pink-200'>
                SUGERENCIAS (MANU)
              </div>
            </div>
          </a>

          {/* CTA */}
          <Link
            className='opacity-0 animate-[fade-in_1s_ease-in_3.8s_forwards]'
            href='/album/2022MAY'>
            <div className='p-0.5 bg-gradient-to-tr from-purple-300 via-violet-500 to-pink-700 rounded-2xl'>
              <div className='opacity-70 px-5 py-2 bg-black rounded-2xl text-lg font-medium text-pink-200'>
                VER FOTOS
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* PARTY COLORS */}
      <div
        className={cx(
          'PartyColors',
          'opacity-0 animate-[fade-in_5s_ease-in_1s_forwards]',
          'fixed z-0 top-1/2 right-0 bottom-0 left-0'
        )}>
        <Image
          className={cx(
            'animate-[hue-rotate_8s_linear_infinite]',
            'w-full h-full max-w-none object-cover object-top'
          )}
          alt='Bonitas luces de una fiesta de Mordisco Club'
          src={imageLightsLg}
          width={2500}
          height={1188}
        />
      </div>
    </Layout>
  )
}
