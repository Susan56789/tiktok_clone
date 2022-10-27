import React, { useState, useEffect, useRef } from 'react'
import { Video } from '../types'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { HiVolumeOff, HiVolumeUp } from 'react-icons/hi'
import { BsPlay, BsFillPlayFill, BsFillPauseFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import { samplePost } from '../utils/constants'

interface Iprops {
    post: Video
}


const VideoCard: NextPage<Iprops> = ({ post }) => {

    return (
        <div className="flex flex-col border-b-2 border-gray-200 pb-6">
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
                    <div className='md:w-16 md:h-16 h-10 w-10 '>
                        <Link href='/'>
                            <>
                                <Image
                                    width={62}
                                    height={62}
                                    src={post.postedBy ? post.postedBy.image : samplePost.postedBy.image}
                                    alt='profile'
                                    className='rounded-full'
                                    layout='responsive'
                                />
                            </>
                        </Link>
                    </div>
                </div>
                <Link href='/'>
                    <div>
                        <p className='text-sm font-semibold text-gray-700'>
                            {post.postedBy ? post.postedBy.userName : samplePost.postedBy.username}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default VideoCard