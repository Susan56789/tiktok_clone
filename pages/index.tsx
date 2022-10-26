import type { NextPage } from 'next'
import Head from 'next/head'
import axios from 'axios'
import { Video } from '../types'
import VideoCard from '../components/VideoCard'
import NoResult from '../components/NoResult'

interface IProps {
  videos: Video[]
}


const Home = ({ videos }: IProps) => {
  // console.log(videos)
  return (
    <div>

      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tiktok</title>
      </Head>

      <div className='flex flex-col gap-10 h-full videos'>
        {videos.length ? (
          videos.map((video: Video) => (
            <VideoCard post={video} key={video._id} />
          ))
        ) : (
          <NoResult text='No Videos' />
        )}
      </div>
    </div>
  )
}
//getServerSideProps is a Next.js function that allows you to do server-side rendering 
//and pass data to your page as props.
export const getServerSideProps = async () => {
  const { data } = await axios.get('http://localhost:3000/api/post')


  return {
    props: {
      videos: data
    }
  }
}

export default Home
