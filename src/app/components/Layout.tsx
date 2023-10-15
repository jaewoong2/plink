import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='h-full w-full bg-white'>
      <nav className='max-h-14 w-full border-b p-5'>
        <Link className='font-GangwonState' href={'/'}>
          PLINK_
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default Layout
