'use client'

import Image from "next/image"
import { useState } from 'react';
import { Status, CalendarRemove } from 'iconsax-react'

const data = !true;
const goals = [
    { name: 'Sales Growth' , status: 70 , daysLeft: 5 },
    { name: 'Developement' , status: 'Not started', daysLeft: 12 },
    { name: 'Developement' , status: 'Not started', daysLeft: 12 },
    { name: 'Databases' , status: 'Not started', daysLeft: 12 },
    { name: 'Customer Satisfaction' , status: 12, daysLeft: 11 },
    { name: 'Customer Satisfction' , status: 15, daysLeft: 20 },
]

function colorGrade( num: any ): string{
    return (num < 50)? 'red' : 'green';       
}

export default function Goals(){
    const [grid, setGrid] = useState(false)

    return(
        <main className="m-6">
            <div className="goals flex justify-between">
                <h1 className="text-3xl font-bold">Goals</h1>

                <div className="actions flex justify-between">
                    <div className={ `${ grid? 'border-pes text-pes': '' } grid rounded-md border hover:border-pes mx-3 my-auto p-1` } onClick={ () => setGrid(true) }>
                        <Image width={ 25 } height={ 25 } src={ `/grid.svg` } alt={`grid`}/>
                    </div>
                    <div className={`${ grid? '': 'border-pes text-pes' } list border rounded-md mx-3 my-auto p-1 hover:border-pes`} onClick={ () => setGrid(false) }>
                        <Image width={ 25 } height={ 25 } src={ `/list.svg` } alt={`list`}/>
                    </div>
                    <div className="bg-pes py-3 px-8 rounded-md text-white new ms-12">
                        Set new Goal
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col justify-center">
            {
                data ? 
                <p className="mt-48 mx-auto text-sm text-gray-500 font-light">
                    Currently, No Goals Created. Click 'Set New Goals' to Begin Your Journey of Achievement and Growth.
                </p> 
                : 
                <>
                    <div className={ `${ grid? 'grid grid-cols-3 gap-4': 'flex flex-col' } my-8 ` } >
                        {
                            goals.map((i, key) => {
                                return(
                                    <div className={ `${ grid? 'w-72 py-6': 'flex justify-between w-full py-1' } bg-white  rounded-md border border-gray-100 px-12` }>
                                        <h1 className={ `${ grid? 'text-xl font-bold': '' } my-2` }>
                                            { i.name }
                                        </h1>

                                        <p className='flex my-auto'>
                                            <Status />
                                            <span className={ `mx-2 text-${ typeof(i.status) == 'number' ? colorGrade(i.status): 'yellow' }-500 ` }>
                                                { 
                                                    typeof(i.status) == 'number'? 
                                                        `${ i.status }% completed`
                                                    : 
                                                        i.status 
                                                }
                                            </span>
                                        </p>

                                        <p className='flex my-auto'>
                                            <CalendarRemove />
                                            <span className={ `mx-2 text-${ typeof(i.daysLeft) == 'number' ? colorGrade(i.daysLeft): 'yellow' }-500 ` }>
                                                { i.daysLeft } days left
                                            </span>
                                        </p>
                                    </div>                                    
                                )
                            })
                        }

                    </div>
                </>
            }
            </div>
        </main>
    )
}