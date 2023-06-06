import { useRouter } from 'next/navigation'
import React from 'react'
import Welcome from '../components/Welcome'
import Content from '../components/Content'
import { useSession,signOut } from 'next-auth/react'
import Navbar from '../components/Navbar'

const HomePage = () => {
  const session= useSession()
  console.log(session)
  const router=useRouter()
  return (
    <div>
      <Navbar />
      {JSON.stringify(session)}
       <button onClick={()=>signOut()}>Sign out</button>
      <Welcome/>
      {session?.status === 'authenticated' ? <>
      <Content type='Recently Solved'/>
      <Content type='Recently Learnt'/>
      <Content type='Suggested FAQs'/>
      </>:
      <>
      <Content type='question'/>
      <Content type='concept'/>
 
      </>
      }
      <button onClick={()=>router.push('/auth')}>login</button>
    </div>
  )
}

export default HomePage
