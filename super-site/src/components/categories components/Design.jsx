import React from 'react'
import InfoCard from '../Cards/InfoCard'
import { DesignSites } from '../../data/DesignSites'

function Design() {
  return (
    <>
        <div className=' w-full h-full rounded-md grid grid-cols-3 gap-5 overflow-y-scroll scrollbar-hide transition-transform duration-75 scroll-smooth'>
            {DesignSites.map((item, index)=>(
                <InfoCard
                key={index}
                title={item.title}
                description={item.description}
                tags={[
                    { name: "SaaS", color: "bg-blue-200 text-blue-800" },
                    { name: "Analytics", color: "bg-green-200 text-green-800" },
                    { name: "Data Visualization", color: "bg-orange-200 text-orange-800" },
                ]}
                siteLink="https://example.com"
            />
            ))}
        </div>
    </>
  )
}

export default Design
