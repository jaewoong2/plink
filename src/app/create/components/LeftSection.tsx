import React from 'react'
import OGoptions from './OGoptions'
import SaveButton from './SaveButton'
import UrlCustomForm from './UrlCustom'

const LeftSection = () => {
  return (
    <>
      <SaveButton wrapperClassName='z-10 hidden h-[60px] items-center justify-end rounded-t-xl bg-white px-3 py-10 shadow-md transition-all max-md:sticky max-md:top-0 max-md:flex'>
        커스텀 링크 저장하고 복사하기
      </SaveButton>
      <form className='w-full'>
        <UrlCustomForm />
        <div className='divider px-12 py-3 text-xs text-gray-500 before:bg-slate-100 after:bg-slate-100'>옵션</div>
        <OGoptions />
        <SaveButton>커스텀 링크 저장하고 복사하기</SaveButton>
      </form>
    </>
  )
}

export default LeftSection
