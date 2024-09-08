
import React from 'react'
import { useRouter } from 'next/navigation'

function Button() {
    const router = useRouter()

  return (
    <>
    <button onClick={()=>router.push("/questionPage")} className=' bg-pink-500 p-2 rounded-md'>Start</button>
    </>
  )
}

export default Button