import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

import styles from '../styles/Home.module.css'
import UnderConstruction from '../components/UnderConstruction'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from 'tsparticles-engine'
import { loadStarsPreset } from 'tsparticles-preset-stars'

const Construction = false;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Logan Shaw</title>
        <meta name="description" content="Logan Shaw's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Particles 
        options={{ preset: "stars" }} 
        init={async (engine: Engine) => { await loadStarsPreset(engine) }} 
        className={`${styles.particalOpacity} -z-30`}
      />

      <main className={styles.main}>
        <div className='relative z-30'>
          {Construction ? <UnderConstruction/>
          :(
            <div className={`flex flex-row items-center justify-center`}>
              <div className='max-w-[600px]'>
                <div className='flex flex-row items-center my-5'>
                  <Image src={'/LoganShaw_2022.jpg'} alt="Logan Shaw" width={'70px'} height={'70px'} className='rounded-2xl'></Image>
                  <div>
                    <h1 className='ml-5 font-semibold text-2xl'>Logan Shaw</h1>
                    <h2 className='ml-5 font-semibold text-1xl text-gray-500'><span className='text-sm'>aka</span> TheModdedChicken</h2>
                  </div>
                </div>
                <p>
                Hi! My name is Logan Shaw and I&apos;m a full stack developer that specializes in
                <a className='text-[#F0DB4F] font-semibold'> JavaScript</a>, 
                <a className='text-[#3178C6] font-semibold'> TypeScript</a>, 
                <a className='text-[#304CDC] font-semibold'> CSS</a>, 
                <a className='text-[#D35836] font-semibold'> HTML</a>, and 
                <a className='text-transparent bg-clip-text bg-gradient-to-r from-[#659AD2] via-[#00599C] to-[#004482] font-semibold'> C++</a>.
                </p>
                <div className='flex flex-row mt-5'>
                  <a href='https://github.com/TheModdedChicken'><FontAwesomeIcon icon={faGithub} width={30} height={30} className='mr-5'/></a>
                  <a href='https://twitter.com/TheModdedChickn'><FontAwesomeIcon icon={faTwitter} width={30} height={30} className='mr-5'/></a>
                  <a href='https://www.youtube.com/@themoddedchicken'><FontAwesomeIcon icon={faYoutube} width={30} height={30} className='mr-5'/></a>
                  <a href='mailto://themoddedchickn@gmail.com'><FontAwesomeIcon icon={faEnvelope} width={30} height={30} className='mr-5'/></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Home
