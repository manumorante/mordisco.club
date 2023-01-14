import cx from 'classnames'
import imageLightsLg from 'public/mordisco-lights-lg.jpg'
import { Layout } from 'components/app'

export default function HelloPage() {
  return (
    <Layout>
      <div className={cx('relative z-10', 'px-6')}>
        <div className='Intro max-w-lg mx-auto text-2xl font-light'>
          {/* Title */}
          <div
            className={cx(
              'opacity-0 animate-[fade-in_1.2s_ease-in_0.6s_forwards]',
              'text-3xl sm:text-5xl font-extrabold',
              'mb-8',
              // Gradient text
              'text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-600'
            )}>
            Y las fotos...
            <br />
            ¿dónde están?
          </div>

          {/* Title */}
          <div
            className={cx(
              'opacity-0 animate-[fade-in_1s_ease-in_2.8s_forwards]',
              // Gradient text
              'text-transparent bg-clip-text bg-gradient-to-r from-purple-100 to-purple-300'
            )}>
            <p className='mb-3'>
              <b className='font-bold'>¡Hola!</b> las fotos estarán aquí en el{' '}
              <b className='font-bold'>club</b>, nuestra nueva web{' '}
              <a href='https://mordisco.club' className='font-bold'>
                mordisco.club
              </a>
            </p>

            <p className='mb-3'>
              Esto será un proyecto personal de <b>Manu Morante</b> en colaboración y homenaje a{' '}
              <b>Mordisco</b>.
            </p>

            <p className='mb-3 font-extralight'>Gracias por todos estos años.</p>
          </div>

          {/* <div className='mt-12 opacity-0 animate-[fade-in_1s_ease-in_3.8s_forwards]'>
            <Link
              className='inline-block p-0.5 bg-gradient-to-tr from-purple-300 via-violet-500 to-pink-700 rounded-2xl'
              href='/album/2022MAY'>
              <div className='opacity-70 px-5 py-2 bg-black rounded-2xl text-lg font-medium text-pink-200'>
                VER FOTOS
              </div>
            </Link>

            <p className='foo'>Envia sugerencias</p>

            <a
              className='inline-block p-0.5 bg-gradient-to-tr from-purple-300 via-violet-500 to-pink-700 rounded-2xl'
              href='mailto:manu@mordisco.club'>
              <div className='opacity-70 px-5 py-2 bg-black rounded-2xl text-lg font-medium text-pink-200'>
                SUGERENCIAS (MANU)
              </div>
            </a>
          </div> */}
        </div>
      </div>

      {/* PARTY COLORS */}
      <div
        className={cx(
          'PartyColors',
          'opacity-0 animate-[fade-in_5s_ease-in_1s_forwards]',
          'fixed z-0 top-1/2 right-0 bottom-0 left-0'
        )}>
        <img
          className={cx(
            'animate-[hue-rotate_8s_linear_infinite]',
            'w-full h-full max-w-none object-cover object-top'
          )}
          alt='Bonitas luces de una fiesta de Mordisco Club'
          src={imageLightsLg.src}
          width={2500}
          height={1188}
        />
      </div>
    </Layout>
  )
}
