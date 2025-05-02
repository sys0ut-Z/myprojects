import React from 'react'
import { Link } from 'react-router'

const BlogCard = ({
  image,
  title,
  author,
  blogDate,
  text,
  description
}) => {
  return (
    <Link to={`/blogs/${title.toLowerCase()}`}
      onClick={() => window.scrollTo(0, 0)}
      state={{
        image, title, author, blogDate, text, description
      }}
    >
      <div className='shadow-xl bg-white dark:bg-gray-700 dark:text-white rounded-lg hover:scale-105 transition-all duration-300'>

        {/* Header Image */}
        <div className='max-h-[400px] overflow-hidden'>
          <img src={image} className='min-w-full min-h-full object-cover rounded-t-lg'/>
        </div>

        {/* Blog Info */}
        <div className='px-3 py-4 space-y-3'>
          <h1 className='text-xl font-semibold'>Written by <span className='dark:text-secondary'>{author}</span></h1>
          <h1 className='text-lg tracking-wide'>On {blogDate}</h1>
          <p className='line-clamp-3 text-pretty'>{text}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard