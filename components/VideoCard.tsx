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

    const [isHover, setisHover] = useState(false)
    const [playing, setPlaying] = useState(false)
    const [ismuted, setIsmuted] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlay = () => {
        if (playing) {
            videoRef?.current?.pause()
            setPlaying(false)
        } else {
            videoRef?.current?.play()
            setPlaying(true)
        }
    }

    return (
        <div className="flex flex-col border-b-2 border-gray-200 pb-6">
            <div>
                <div className='flex gap-3 p-2 cursor-pointer font-semibold rounded'>
                    <div className='md:w-16 md:h-16 h-10 w-10 '>
                        <Link href='/'>
                            <>
                                <Image
                                    width={50}
                                    height={50}
                                    src={post.postedBy ? post.postedBy.image : samplePost.postedBy.image}
                                    alt='profile'
                                    className='rounded-full w-auto h-auto mb-2 '
                                    priority={true}
                                />
                            </>
                        </Link>

                    </div>
                    <div>
                        <Link href='/'>
                            <div className='flex items-center gap-2'>
                                <p className='flex items-center gap-2 md:text-md font-bold text-primary'>
                                    {post.postedBy ? post.postedBy.userName : samplePost.postedBy.username}
                                    {` `}
                                    <GoVerified className='text-blue-500 text-xs' />
                                </p>
                                <p className='capitalize font-medium hidden md:block text-xs text-gray-500'>
                                    {post.postedBy ? post.postedBy.userName : samplePost.postedBy.username}
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

            <div className='lg:ml-20 flex gap-4 relative'>
                <div
                    onMouseEnter={() => setisHover(true)}
                    onMouseLeave={() => setisHover(false)}
                    className='rounded-3xl'>
                    <Link href='/'>
                        <video
                            src={post.video ? post.video.asset.url : samplePost.video.videoUrl}
                            loop
                            ref={videoRef}
                            className='lg:w[600px] w-[200px] h-[300px] md:h-[400px] lg:h[500px] rounded-2xl cursor-pointer bg-gray-100'
                        >

                        </video>
                    </Link>
                    {isHover && (
                        <div className='absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:[50px] p-4'>
                            {playing ? (
                                <button
                                    onClick={handlePlay}
                                >
                                    <BsFillPauseFill className='text-black text-2xl lg:text-4xl ' />
                                </button>
                            ) : (
                                <button
                                    onClick={handlePlay}
                                >
                                    <BsFillPlayFill className='text-black text-2xl lg:text-4xl' />
                                </button>
                            )}

                            {ismuted ? (
                                <button
                                    onClick={() => setIsmuted(false)}
                                >
                                    <HiVolumeOff className='text-black text-2xl lg:text-4xl' />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsmuted(true)}
                                >
                                    <HiVolumeUp className='text-black text-2xl lg:text-4xl' />
                                </button>
                            )
                            }

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default VideoCard