import React ,{useState,useEffect}from 'react'
import { useRelatedVideos,VideoResponse,VideoItem } from '../api/api';
import VideoList from './Videos/VideoList';

type realtedVideoProps ={
    videoId: string,
}

const RelatedVideo = ({videoId}:realtedVideoProps) => {
    const [relatedVideo, setRelatedVideo] = useState<VideoItem>();
    const { isLoading, data, error } = useRelatedVideos(videoId);
   useEffect(() => {
  if(data){
    setRelatedVideo(data!)
    console.log(relatedVideo)
  }
  
   }, [data])
   
  return (
    <div>
   {relatedVideo &&
         relatedVideo.map((video:VideoItem) => (
            <VideoList 
            key={video.id} 
            id={video.id} 
            title={video.snippet.title}
            url={video.snippet.thumbnails.medium.url}
            channelId={video.snippet.channelId}
            channelTitle={video.snippet.channelTitle}
            publishedAt={video.snippet.publishedAt}
            viewCount = {video.statistics.viewCount}
               
            />
          ))}
    </div>
  )
}

export default RelatedVideo
