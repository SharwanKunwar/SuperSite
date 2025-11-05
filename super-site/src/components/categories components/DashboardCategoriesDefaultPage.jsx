import React from 'react'
import SmallCard from '../Cards/SmallCard';

function DashboardCategoriesDefaultPage() {
  return (
    <>
        <div>
            {/* top div  */}
                    <h1 className='text-2xl my-3 font-bold'>Featured Sites</h1>
                    <div className=' h-[45%] w-full flex gap-5 justify-start items-center '>
                        <SmallCard/>
                        <SmallCard/>
                        <SmallCard/>
                        <SmallCard/>
                        

                    </div>

                    {/* buttom div  */}
                    <h1 className='text-2xl my-3 font-bold'>Popular Sites</h1>
                    <div className=' h-[45%] flex gap-5 justify-start items-center'>
                        <SmallCard/>
                        <SmallCard/>
                        <SmallCard/>
                        <SmallCard/>
                        
                    </div>
        </div>
    </>
  )
}

export default DashboardCategoriesDefaultPage
