import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center'>
      <div className='text-xl font-bold'>잘못된 접근 이에요</div>
      <Link
        href={'/'}
        className='mt-4 w-fit rounded-lg bg-slate-200 p-3 px-6 text-sm font-bold shadow-lg hover:bg-slate-300'
      >
        홈으로 가기
      </Link>
    </div>
  )
}

export default NotFound
