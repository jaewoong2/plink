import React from 'react'

const Dropzone = ({ isLoading, ...props }: JSX.IntrinsicElements['input'] & { isLoading?: boolean }) => {
  return (
    <div className='relative'>
      {isLoading && (
        <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-lg bg-slate-200'>
          <div className='loading loading-dots loading-md ' />
        </div>
      )}
      <div className='flex w-full items-center justify-center pr-3'>
        <label
          aria-disabled={props.readOnly}
          htmlFor='dropzone-file'
          className='flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 aria-disabled:cursor-not-allowed dark:border-gray-600 dark:bg-darkBg-500 dark:hover:border-gray-100'
        >
          <div className='flex flex-col items-center justify-center pb-6 pt-5'>
            <svg
              className='mb-4 h-8 w-8 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 20 16'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
              />
            </svg>
            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
              <span className='font-semibold'>업로드</span> | 파일 내려놓기
            </p>
            <p className='text-xs text-gray-500 dark:text-gray-400'>이미지 파일</p>
          </div>
          <input id='dropzone-file' type='file' accept='image/*' className='hidden' {...props} />
        </label>
      </div>
    </div>
  )
}

export default Dropzone
