import Image from 'next/image'
import { Inter } from 'next/font/google'
import Video from '@/componets/svg/Video'
import Image1 from '@/componets/svg/Image'
import Image2 from '@/componets/svg/image2'
import Image3 from '@/componets/svg/image3'
import Image4 from '@/componets/svg/image4'
import Copyicon from '@/componets/svg/copyicon'
import Download from '@/componets/svg/download'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [instaUrl, setInstaUrl] = useState('')
  const [error, setError] = useState('')

  const formSubmit = async () => {
      if(instaUrl ==='') setError('Please enter valid value..')

      if(instaUrl && instaUrl.startsWith('https://www.instagram.com/p/')){
        setError('')

        let res = await fetch('/api/insta?url='+instaUrl).then(res => res.json())
        console.log(res)
      }else{
        setError('Please enter insta valid value')
      }
  }
  return (
    <>
        <div className="banner_section">
            <div className="chil-banner-1">
              <ul>
                <li id='border-left' className='links'><Video /> Video</li>
                <li id='border-left' className='links'><Image1 /> Photo</li>
                <li id='border-left' className='links'><Image2/>Story</li>
                <li id='border-left' className='links'> <Image3/> Reel</li>
                <li className='links'><Image4/>IGTV</li>
              </ul>
            </div>
            <div className="chil-banner-2">
              <h2 className='banner-h2-text' >Instagram Video Download</h2>
              <p className='banner-p-text' >Download Video Instagram, Photo, Reels, Stories, IGTV online</p>
            </div>
            <div className="chil-banner-3">
              <div className="inputs">
                <input className='input-paste' onChange={(e)=> {setInstaUrl(e.target.value);setError('')}} value={instaUrl} type="text" placeholder='paste URL instagram' />
                <button className='btn-paste'>
                  <Copyicon/>
                    <p >Paste</p>
                </button>
              </div>
              <button  className='downloade-btn' onClick={formSubmit} >
             <Download/>
                <p>Download</p>
              </button>
            </div>


            <div className='error'>
              {error}
            </div>
        </div>
    </>
  )
}
