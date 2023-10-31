'use client'
import { ArrowRight  } from 'iconsax-react';
import { useState } from "react";
import { useSearchParams } from 'next/dist/client/components/navigation';
import Image from 'next/image';
import Link from 'next/link';

async function getUser(url: string) {
  try {
    const jsonData = await fetch(url)
    let data = jsonData.json()
    return data

  } catch (error) {
    console.log(error)
  }
  finally{
    // change window according to login priviledge
  }

}
let slider_index = 0

export default function Home() {
  const slider_arr = [ true, false, false ]
  const [ slide, setSlide ] = useState(slider_arr)

  const switchSlide = () => {
    slider_index++;
    for (let i = 0; i < slider_arr.length; i++) {
      slider_arr[i] = i === slider_index % 3;
    }
    setSlide([...slider_arr]);
  };
  

  return(
    <main className="w-full flex overflow-hidden relative">

      <div className="scroller w-3/12 absolute bottom-8 left-3/12 z-10 flex justify-between">
        <div className="page my-auto flex">
          {          
            slide.map( (i, key) => <div key={ key } className= {`ircle h-2 ${ i ? 'w-6 bg-pes' : 'w-2 bg-gray-200'} rounded-full mx-1_2 transition-all`}></div> )
          }
        </div>

        <div className="slider bg-pes p-3 me-4 rounded-full text-white" onClick={ () => switchSlide() }>
          <ArrowRight />
        </div>
      </div>

      {/* <div className="illustration1 invisible flex flex-col justify-center w-1/2 py-6 px-28 h-screen relative ">
        <div className = 'my-2 text-pes text-3xl font-extrabold flex'>
          <Image src={'/Vector.svg'} alt='PES' width={55} height={55} />
          <p className = 'ms-2 my-auto'>PES</p>
        </div>
      
        <div className="carousel w-full text-left">
        <h1 className='text-3xl text-semibold my-2 w-10/12'>
          {`Your Company’s journey`} <br/> {`towards`} <span className='text-yellow-400'>Enhanced <br/> Performance</span> {`starts today`}
        </h1>
        <p className='text-sm'>
          {`PES is your company's tool for optimizing team performance. Discover a suite of tools tailored to enhance collaboration and achieve organizational goals`}
        </p>
        </div>

        <Image src={ '/team checklist-rafiki 2.png' } alt='pes hero image' width={ 400 } height={ 400 } className='z-10 mx-auto my-auto'/>
      </div> */}

      <div className="illustration2 bg-white flex flex-col justify-center w-1/2 py-6 px-28 h-screen relative ">
        <div className = 'my-2 text-pes text-3xl font-extrabold flex'>
          <Image src={'/Vector.svg'} alt='PES' width={55} height={55} />
          <p className = 'ms-2 my-auto'>PES</p>
        </div>
      
        <div className="carousel w-full text-left">
        <h1 className='text-3xl text-semibold my-2 w-10/12'>
          Customize You Metrics
        </h1>
        <p className='text-sm'>
          {`Craft performance metrics that align with your company's objectives. Our intuitive interface allows you to define goals that resonate with your team's roles and aspirations.`}
        </p>
        </div>

        <Image src={ '/image 11.png' } alt='pes hero image' width={ 300 } height={ 300 } className='z-10 mx-auto my-auto'/>
      </div>

      {/* <div className="illustration3 flex flex-col justify-center w-1/2 py-6 px-28 h-screen relative ">
        <div className = 'my-2 text-pes text-3xl font-extrabold flex'>
          <Image src={'/Vector.svg'} alt='PES' width={55} height={55} />
          <p className = 'ms-2 my-auto'>PES</p>
        </div>
      
        <div className="carousel w-full text-left">
        <h1 className='text-3xl text-semibold my-2 w-10/12'>
          {`Your Company’s journey`} <br/> {`towards`} <span className='text-yellow-400'>Enhanced <br/> Performance</span> {`starts today`}
        </h1>
        <p className='text-sm'>
          {`PES is your company's tool for optimizing team performance. Discover a suite of tools tailored to enhance collaboration and achieve organizational goals`}
        </p>
        </div>

        <Image src={ '/team checklist-rafiki 2.png' } alt='pes hero image' width={ 400 } height={ 400 } className='z-10 mx-auto my-auto'/>
      </div> */}

      <div className="form w-1/2 h-screen flex flex-col p-28 justify-center">
        <p className='text-3xl text-extrabold'>Create your Account</p>
        <p className='text-sm mb-8'>{`Enter your details and let's get started`}</p>

        <div className="input flex flex-col justify-center mb-4">
          <label htmlFor="name" className='mb-1 font-bold text-sm'>Name:</label>
          <input className='bg-transparent border border-gray-200 text-gray-300 placeholder:text-gray-300 text-sm focus:outline-pes ps-4 py-3 rounded-md' type="text" name="name" id="" placeholder='Enter your Institution or company name' required/>
        </div>

        <div className="input flex flex-col justify-center mb-4">
          <label htmlFor="email" className='mb-1 font-bold text-sm'>Email Address:</label>
          <input className='bg-transparent border border-gray-200 text-gray-300 placeholder:text-gray-300 text-sm focus:outline-pes ps-4 py-3 rounded-md' type="email" name="email" id="" placeholder='Enter your Institution or company email' required/>
        </div>

        <div className="input flex flex-col justify-center mb-4">
          <label htmlFor="password" className='mb-1 font-bold text-sm'>Password:</label>
          <input className='bg-transparent border border-gray-200 text-gray-300 placeholder:text-gray-300 text-sm focus:outline-pes ps-4 py-3 rounded-md' type="password" name="password" id="password" placeholder='Enter your Password' required/>
        </div>

        <div className="input flex flex-col justify-center mb-4">
          <label htmlFor="c-password" className='mb-1 font-bold text-sm'>Confirm Password:</label>
          <input className='bg-transparent border border-gray-200 text-gray-300 placeholder:text-gray-300 text-sm focus:outline-pes ps-4 py-3 rounded-md' type="password" name="c-password" id="c-password" placeholder='Confirm your Password' required/>
        </div>

        <div className="flex flex-row justify-start mb-8">
          <div className='flex'>
            <input type="checkbox" name="agree" id="agree"/>
            <label htmlFor='agree' className='mx-4 text-sm'>I accept all <span className='font-bold'>terms and conditions</span></label>
          </div>
        </div>

        <div className="btn bg-pes text-white px-4 py-3 flex justify-center rounded-lg mb-2">Sign Up</div>

        <p className='text-center'>{`Don't have an Account?`} <Link className='text-pes' href={'/'}>Sign In</Link> </p>
      </div>
    </main>     
  )
}
