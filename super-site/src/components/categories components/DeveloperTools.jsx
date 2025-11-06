import React from 'react'
import { cardInfo } from '../../data/cardInfo'
import InfoCard from '../Cards/InfoCard'

function DeveloperTools() {
  return (
    <>
        <div className=' w-full h-full rounded-md grid grid-cols-3 gap-5 overflow-y-scroll scrollbar-hide transition-transform duration-75 scroll-smooth py-5'>
            {
              cardInfo
              .filter((item) => item.category === "Developer Tools")
              .map((item, index) =>(
                <InfoCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                  siteLink={item.siteLink}
                />
              ))
            }
        </div>
    </>
  )
}

export default DeveloperTools
