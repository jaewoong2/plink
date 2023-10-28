import React from 'react'

const Loading = () => {
  return (
    <div id='mask' className='fixed left-0 top-0 z-20 h-full w-full bg-white bg-opacity-5 backdrop-blur-sm'>
      <div className='absolute left-1/2 top-1/2 z-20 mx-auto max-h-[80%] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-scroll rounded-xl border bg-white shadow-xl max-lg:w-[90%]'>
        <div className='scrollbar-hide relative flex max-w-4xl items-stretch divide-x divide-gray-100 max-md:flex-col'>
          <div className='flex w-full divide-x max-md:flex-col'>
            <div>로딩중....</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
