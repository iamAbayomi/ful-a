import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '../components/Layout'
import { NavItem } from '../storybook-ui-library/src/components/NavItem'
import { Button } from '../storybook-ui-library/src/components/SimpleButton'


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
