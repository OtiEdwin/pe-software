import { useDispatch, useSelector } from 'react-redux';
import { setNotificationView } from '@/app/state/setnotification/setNotificationSlice';
import { RootState } from '@/app/state/store'
import { CloseCircle, Send } from 'iconsax-react'
import { notificationSentView } from '@/app/state/notificationsent/notificationSentSlice';


export default function SetNotification(){
    const isVisible = useSelector( (state: RootState) => state.setNotification.visible )
    const dispatch = useDispatch()

    function sendNotification(){
        dispatch( notificationSentView() )
        dispatch( setNotificationView() )
    }

    return (
        <div className={`notification ${ isVisible? 'visible': 'invisible' } rounded-sm shadow-lg p-12 z-30 flex flex-col w-4/12 bg-white absolute top-1/2 -translate-y-1/2`}>
            <div className='flex justify-between mb-4'>
                <h1 className='font-semibold'>Set a deadline for entry</h1>
                <CloseCircle onClick={ () => dispatch( setNotificationView()) } className='ms-auto hover:text-red-500'/>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="date" className='formgroup flex flex-col w-full font-bold my-2 text-sm'>
                    Date:
                    <input type="date" name="date" id="date" className='font-light text-sm text-gray-500 placeholder-gray-500 py-4 px-4 outline-0 border focus:border-gray-400 rounded-sm'/>
                </label>

                <label htmlFor="time" className='formgroup flex flex-col w-full font-bold my-2 text-sm'>
                    Time:
                    <input type="time" name="time" id="time" className='font-light text-sm text-gray-500 placeholder-gray-500 py-4 px-4 outline-0 border focus:border-gray-400 rounded-sm'/>
                </label>

               <button className='flex bg-pes rounded-md text-white w-fit px-8 py-3 mx-auto mt-4' onClick={ () => sendNotification() } >Save Changes</button>

            </div>
        </div>
    )
}