import React from 'react';

const Card = ({ children, buttonLabel, buttonLink, heading, imgSrc }) => {
    return (
        <div className='border w-80 shadow-lg mt-5 mx-auto rounded-lg'>
            {imgSrc &&
                <img className='w-full' src={imgSrc} alt="Card Image" />
            }
            <div className='p-4'>
                {heading &&
                    <h4 className='text-xl mb-4'>{heading}</h4>
                }
                <div className='text-gray-500 text-sm mb-4'>
                    {children}
                </div>
                {buttonLink && buttonLabel && 
                <div className='text-center'>
                    <a className='bg-red-500 inline-block px-5 py-2 text-white rounded-full' href={buttonLink}>{buttonLabel}</a>
                </div>
                }
            </div>
        </div>
    )
}

export default Card
