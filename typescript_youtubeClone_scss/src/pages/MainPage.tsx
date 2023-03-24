import VideoList from '../components/Videos/VideoList'
import React,{useState,useEffect,useRef} from 'react'
import { useMainVideos,VideoItem,useChannelBanner  } from '../api/api'


const MainPage = (): JSX.Element |undefined => {
 

  const { isLoading, data, error } = useMainVideos();
const [videos,setVideos] = useState<VideoItem[]>()
  



useEffect(() =>  {
if(data){
  setVideos(data)
  
}
 
}, [data]);
if (isLoading) {
  return;
}

if (error) {
  console.log('Error:', error.message);
  return;
}
console.log()
  return (
    <div className='MainPage'>
      <div className='content'>
        {videos &&
         videos.map((video) => (
            <VideoList 
            key={video.id} 
            id={video.id} 
            title={video.snippet.title}
            url={video.snippet.thumbnails.medium.url}
            channelId={video.snippet.channelId}
            channelTitle={video.snippet.channelTitle}
            publishedAt={video.snippet.publishedAt}
            viewCount = {video.statistics.viewCount}
            likeCount={video.statistics.likeCount}
            description = {video.snippet.description}
            commentCount={video.statistics.commentCount}
            />
          ))}
      </div>
    </div>
  );
};
export default MainPage
