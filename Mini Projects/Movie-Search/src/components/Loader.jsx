import React from 'react'

const Loader = () => {
  return (
    <div className='loader absolute inset-0 flex items-center justify-center bg-[#222831] bg-opacity-90 z-10'>
      <div className='flex flex-col items-center space-y-4'>
        
        {/* Simple spinning circle */}
        <div className='w-10 h-10 border-3 border-amber-300 border-t-transparent rounded-full animate-spin'></div>
        
        {/* Loading text */}
        <p className='text-white text-lg'>Loading...</p>
        
      </div>
    </div>
  )
}

export default Loader