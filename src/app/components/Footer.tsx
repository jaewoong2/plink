import React from 'react'

const Footer = () => {
  return (
    <div className='border-t bg-opacity-20 backdrop-blur-md dark:border-t-darkBg-200'>
      <footer className='footer footer-center mt-10 p-10'>
        <div className='dark:text-white'>
          <div className='flex items-center gap-2'>
            <span className=' translate-y-1 font-Yeongdo-Rg text-3xl'>Plink</span>
          </div>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
