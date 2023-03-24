import React, { useState, useEffect } from "react";
import countCalculate from '../../helpers/countCalculate';
import {
  useMainVideos,
  VideoItem,
  useChannelBanner,
  ChannelBanner,
} from "../../api/api";
import dayjs from "dayjs";
import * as relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate, Link } from "react-router-dom";
dayjs.extend(relativeTime);

type videoListProps = {
 id: string;
  title: string;
  url: string;
  channelId: string;
  publishedAt: string;
  channelTitle:string;
  viewCount: number;
  subscriberCount: number;
  likeCount?:number;
  description:string;
  commentCount?: number;

};

const VideoList = ({
  id,
  channelId,
  title,
  url,
  publishedAt,
  channelTitle,
  viewCount,
  likeCount,
  description,
  commentCount
}: videoListProps)=> {
  //const [avart, setChannelId] = useState<ChannelBanner>();

  const { isLoading, data, error } = useChannelBanner(channelId);
  const navigate = useNavigate();
  useEffect(
    ()=>{
      console.log()
 
    },[data]
  )

 // const videoAddress = snippet.thumbnails.default.url
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const newDate = dayjs().from(publishedAt);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //let duration = video.contentDetails.duration?.split('');

  //console.log(duration.splice("M",":"))

  const views = countCalculate(viewCount)


  const sendData = () => {
    navigate(`/video/${id}`, {
      state: {
        id: id,
        newDate: newDate,
        views: views,
        channelTitle:channelTitle,
        title:title,
        videoAddress:data?.bannerUrl,
        subscriberCount:data?.subscriberCount,
        likeCount:likeCount,
        description:description,
        commentCount:commentCount
      },
    });
  };

  return (
    <>
      <div key={id} className="VideoList" onClick={sendData}>
        <div className="videoPicutre">
          <img src={url} alt={title} />
        </div>
        <div className="videoDescription">
          <div className="createrPic">
            <img src={data?.bannerUrl} alt={channelTitle} />
          </div>
          <div className="videoTitle">
            <h3>{title}</h3>
            <h6>{channelTitle}</h6>
            <span className="videoTitel_views">
            {views} views • {newDate.slice(2)} ago
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoList;
