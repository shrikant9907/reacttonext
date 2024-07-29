import React from 'react'

const Card = ({ heading, imgSrc, children, buttonLabel, buttonLink}) => {
  return (
    <div className='border p-4 shadow-lg mx-auto mt-5 rounded-lg'>
        {imgSrc && 
            <img className='mb-3 rounded-md' src={imgSrc} alt="Card Image" />
        }

        {heading && 
            <h3 className='font-bold mb-3'>{heading}</h3>
        }
       <div className='text-gray-500 text-sm mb-3'>
        {children}
       </div>
       {buttonLink && buttonLabel &&
       <div className='text-center'> 
        <a className='rounded-full text-sm bg-blue-800 text-white px-4 py-1 inline-block' href={buttonLink}>{buttonLabel}</a>
       </div>
       }
    </div>
  )
}

export default Card
