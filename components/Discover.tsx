import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { topics } from '../utils/constants'

const Discover = () => {

    const router = useRouter()  // This is a hook that gives us access to the router object
    const { topic } = router.query // topic is a string or undefined

    const activeTopicStyles = `xl:border-2
    hover:bg-primary text-[#F51997]
    xl:border-[#F51997] px-3 py-2 rounded
     xl:rounded-full flex items-center gap-2
     cursor-pointer justfy-center`

    const topicStyles = `xl:border-2
     hover:bg-primary text-black
     xl:border-gray-300 px-3 py-2 rounded
      xl:rounded-full flex items-center gap-2
      cursor-pointer justfy-center`


    return (
        <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
            <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
                Popular Topics
            </p>
            <div className='flex flex-wrap gap-2 m-3'>
                {topics.map((item) => (
                    <Link href={`/?topic=${item.name}`} key={item.name}>
                        <div className={topic === item.name ? activeTopicStyles : topicStyles}>
                            <span className='text-sm font-bold xl:text-md text-gray-200 '>
                                {item.icon}
                            </span>
                            <span className='text-sm font-medium xl:text-md ml-1 hidden xl:block text-gray-200 capitalize'>
                                {item.name}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Discover