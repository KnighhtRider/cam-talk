import React from 'react'
import Image from 'next/image'
import default_profile from '../assets/default_profile.webp'
import { useRouter } from 'next/navigation'
// const router = useRouter();

function MiniProfile() {

  const router = useRouter();
 


  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <Image src={default_profile}
        alt='profile pic'
        className=' w-16 h-16 rounded-full border p-[2px] cursor-pointer'
      />

      <div className='flex-1 mx-4'>
        <h2 className='font-bold'>vivek_thakur012</h2>
        <h3 className='text-sm text-gray-400'>VIVEK THAKUR</h3>
      </div>

      <button 
        className='text-blue-400 text-sm font-semibold ml-10'
        onClick={() => {
          localStorage.clear()
          router.push('/login')
        }}
        >
          Sign Out
        </button>

    </div>
  )
}

export default MiniProfile