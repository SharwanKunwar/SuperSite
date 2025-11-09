
import React from 'react'
import InfoCard from '../Cards/InfoCard'
import { cardInfo } from '../../data/cardInfo'

function All() {
  return (
    <>
        <div className=' w-full h-full rounded-md grid grid-cols-3 gap-5 overflow-y-scroll scrollbar-hide transition-transform duration-75 scroll-smooth py-5'>
            {cardInfo.map((item, index)=>(
              <InfoCard
                    key={index}
                    imgUrl={item.img}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    siteLink={item.siteLink}
                  />
            ))}
        </div>
    </>
  )
}

export default All
