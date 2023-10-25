import React from 'react'
import OGoptions from './OGoptions'
import UrlCustomForm from './UrlCustom'

const LeftSection = () => {
  return (
    <div className='w-1/2 max-md:w-full'>
      <form className='w-full'>
        <UrlCustomForm />
        <div className='divider px-12 py-3 text-xs text-gray-500 before:bg-slate-100 after:bg-slate-100'>옵션</div>
        <OGoptions />
      </form>
    </div>
  )
}

export default LeftSection
