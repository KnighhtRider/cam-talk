import React from 'react'
import Stories from './Stories'
import Posts from './Posts'
import MiniProfile from './MiniProfile'
import Suggestions from './Suggestions'

function Feed() {

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-7 xl:max-w-6xl mx-auto '>

      <section className='col-span-1'></section>

      <section className='col-span-4 h-100 w-100 px-5 pb-7'>
        <Stories />
        <Posts />
      </section>

      <section className='hidden xl:inline-grid md:col-span-2'>
        <div className='fixed top-25'>
          <MiniProfile />
          <Suggestions />
        </div>
      </section>

    </main>
  )
}

export default Feed