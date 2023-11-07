'use client'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import { Home3, Setting4, DollarCircle, People, Award, Teacher } from 'iconsax-react';
import Link from 'next/link';

export default function Sidebar(): JSX.Element{
   const pathname = usePathname()

   const tabs = [
      { key: 1, name: 'Dashboard', icon: <Home3 />, href: '/dashboard' }, 
      { key: 2, name: 'Employee Database', icon: <People />, href: '/em-database' }, 
      { key: 3, name: 'Goals', icon: <Setting4 />, href: '/goals' }, 
      { key: 4, name: 'Assessment', icon: <Award />, href: '/assessment' }, 
      { key: 5, name: 'Performance Review', icon: <Teacher />, href: '/performance'}, 
      { key: 6, name: 'Pricing', icon: <DollarCircle />, href: '/pricing' }
   ]
   
   return(
      <div className=" w-1/5 h-full shadow-custom shadow-gray-100 me-auto relative">
         <div className="bg-white h-screen fixed w-1/5 py-3 flex flex-col justify-start">
            <div className = 'my-4 text-pes text-2xl font-extrabold flex justify-center w-2/4 ms-12 me-auto'>
               <Image src={'/Vector.svg'} alt='PES' width={55} height={55} />
               <p className = 'ms-2 my-auto'>PES</p>
            </div>

            <div className='tabs my-16 flex flex-col justify-between'>
            {
               tabs.map((i) => {
                  const is_active = i.href == pathname
                  return(
                  <Link href={ i.href } key={ i.key } className={`${ is_active? 'bg-gray-200 text-pes' : 'bg-transparent text-gray-400'} hover:bg-gray-200 hover:text-pes p-3 ps-8 my-1 text-md flex`}>
                     { i.icon }
                     <p className='mx-3'> { i.name }</p>
                  </Link>
                  )
               })
            }
            </div>            
         </div>
      </div>
   )

}