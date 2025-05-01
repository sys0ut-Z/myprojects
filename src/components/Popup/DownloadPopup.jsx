import React from 'react'
import { useForm } from 'react-hook-form';
import { IoCloseOutline } from "react-icons/io5";

const inputFields = [
  {
    id: 1,
    text : 'Name',
    type : 'text'
  },
  {
    id: 2,
    text : 'Email',
    type : 'email'
  },
  {
    id: 3,
    text: 'Password',
    type : 'password'
  }
]

const DownloadPopup = ({showPopup, setShowPopup}) => {
  const {
    register, 
    handleSubmit,
    formState: {errors}
  } = useForm();

  const submitHandler = (data) => {
    console.log("data", data);
  }

  return (
    <div className={`fixed top-0 left-0 h-screen w-screen z-40 bg-black/60 backdrop-blur-sm ${showPopup ? "block" : "hidden"}`}>
      <div className='bg-white absolute w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-md'>
        <h1 className='flex justify-between items-center pb-5'>
          <span className='text-xl lg:text-2xl font-semibold'>Download Now</span>
          <span>
            <IoCloseOutline size={23} onClick={() => setShowPopup(prev => !prev)} className='cursor-pointer'/>
          </span>
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className='flex flex-col gap-6 '>
            {
              inputFields.map(({id, text, type}) => (
                <div className='flex flex-col'>
                  <input type={type} placeholder={text} key={id}
                    className='py-[5px] px-4 rounded-full border border-gray-400 focus:border focus:border-primary caret-primary
                    focus:outline-none'
                    {...register(`${text.toLowerCase()}`, {
                      required: {
                        value: true,
                        message: `Pls enter the ${text}`
                      }
                    })}
                  />
                  <span className='text-red-500'>
                    {errors[`${text.toLowerCase()}`]?.message}
                  </span>      
                </div>
              ))
            }
          </div>
          <div className='pt-4 text-center'>
            <button className='px-7 py-2 bg-primary rounded-full text-white text-lg'
            type="submit">Download</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DownloadPopup