'use client'
import '.././globals.css'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Dimmer from '../components/dimmer'
import Action from '../components/modals/action'
import Newgoal from '../components/modals/newgoal'
import Notification from '../components/modals/notification'
import type { Metadata } from 'next'
import { Inter, Montserrat, Lato } from 'next/font/google'
import { useState } from 'react'

const inter = Inter( {subsets: ['latin'] })
const montserrat = Montserrat( {subsets: ['latin'] })
const lato = Lato( 
  {
    weight: ['100', '300', '400', '700', '900'],
    subsets: ['latin']
   }
  )

export const metadata: Metadata = {
  title: 'PES',
  description: 'Performance Appraisal Software',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  let base = { 
    dimmer: !true,
    notification: !true,
    newgoal: !true,
    action: !true,
  }
  const [ seen, setSeen ] = useState(base)
  
  function setVisible(){

  }

  return (
    <html lang="en">
      <body className={ lato.className + 'bg-gray-10 flex flex-row relative justify-center w-screen' }>
        <Dimmer visibility = { seen.dimmer } setVisibility={ setVisible } />
        <Notification visibility = { seen.notification } setVisibility={ setVisible } />
        <Action visibility = { seen.action } setVisibility={ setVisible } />
        <Newgoal visibility = { seen.newgoal } setVisibility={ setVisible } />

        <Sidebar />
        <div className="flex flex-col w-4/5">
          <Navbar />
          {children}          
        </div>
      </body>
    </html>
  )
}