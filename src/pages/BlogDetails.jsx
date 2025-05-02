import React from 'react'
import { useLocation } from 'react-router'

const BlogDetails = () => {
  const location = useLocation()

  const {image, title, author, blogDate, text, description} = location.state;

  return (
    <div className='pt-16 sm:pt-24 bg-white dark:bg-gray-800'>

      {/* Image Section */}
      <div className=' min-w-screen'>
        <img src={image} className='min-h-full min-w-full object-cover'/>
      </div>

      {/* Text Content Section */}
      <div className='container py-10'>
        <h1 className='pb-5 text-xl sm:text-3xl lg:text-4xl font-semibold dark:text-white lg:tracking-wide'>
          {author}'s {title.toString().replace('-', ' ')}
        </h1>
        <p className='text-lg dark:text-gray-300'>{description}</p>
      </div>
    </div>
  )
}

export default BlogDetails