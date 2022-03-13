import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'



function IndexPage (){
  const router = useRouter()

  useEffect(()=>{
    router.push('/verification')
  })

  return(
    <div>
      <p>Hello, I am here</p>
    </div>
  )
}

export default IndexPage
