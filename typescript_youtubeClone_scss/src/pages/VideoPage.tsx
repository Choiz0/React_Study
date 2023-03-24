import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import countCalculate from "../helpers/countCalculate";
import { BiLike, BiDislike } from "react-icons/bi";
import { RiShareForwardLine, RiFlagLine } from "react-icons/ri";
import { MdPlaylistAdd } from "react-icons/md";
import Comment from "../components/Comment"
import RelatedVideo from '../components/RelatedVideo';

const VideoPage = () => {
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(true);

  const location = useLocation();
  const descriptionRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);
  const {
    id,
    title,
    newDate,
    views,
    channelTitle,
    videoAddress,
    subscriberCount,
    likeCount,
    description,
    commentCount,
  } = location.state;

  const subscribers = countCalculate(subscriberCount);
  console.log();
  const onPlayerReady = (e: { target: { playVideo: () => void } }) => {
    e.target.playVideo();
  };

  const opt = {
    height: "480",
    width: "",
    playerVars: {
      autoplay: false,
    },
  };
  useEffect(() => {
  
    if (descriptionRef.current.clientHeight >= 6 * 16) {
      setShowMore(false);
      setShowLess(false);
      document.getElementById("des").style.cssText =
        "max-height: 6rem; overflow: hidden; word-wrap:pre-wrap;white-space: break-spaces;";
    } else {
      setShowMore(true);
      setShowLess(true);
    }
  }, [description]);
  const handleMoreClick = () => {
    setShowMore(true);
    setShowLess(true);
    document.getElementById("des").style.cssText = "height: 100%; ";
  };
  const handleLessClick = () => {
    setShowMore(false);
    setShowLess(false);
    document.getElementById("des").style.cssText =
      "max-height: 6rem; overflow: hidden; white-space: break-spaces;";
  };

  const showMoreButton = !showMore && (
    <p onClick={handleMoreClick}>Show more</p>
  );
  const showLessButton = showLess && <p onClick={handleLessClick}>Show Less</p>;
  return (
    <div className="videoPage">
      <div className="leftSide">
        <div className="youtube_player_box">
          <YouTube
            className="youtube_player"
            videoId={id}
            onPlay={onPlayerReady}
          />
          <div className="commentBox">
            <div className="title">{title}</div>
            <div className="channelInfo">
              <div className="leftbox">
                <div className="createPic">
                  <img src={videoAddress} />
                </div>
                <div className="channelName_view">
                  <div className="channelTitle">{channelTitle}</div>
                  <div className="subscritNum">{subscribers} subscribers</div>
                </div>
                <button className="subscribebtn">Subscribe</button>
              </div>
              <div className="rightBox">
                <div className="iconBtnBox">
                  <button className="iconBtn iconBtn1">
                    <BiLike size={25} />
                    <span>{countCalculate(likeCount)} </span>
                  </button>
                  <button className="iconBtn iconBtn2">
                    <BiDislike size={25} />
                  </button>

                  <button className="iconBtn">
                    <RiShareForwardLine size={25} />
                    <span>Share</span>
                  </button>
                  <button className="iconBtn">
                    <MdPlaylistAdd size={25} />
                    <span>Add</span>
                  </button>
                  <button className="iconBtn">
                    <RiFlagLine size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="videoInfoBox">
              <div className="views_time">
                <span>{views} views</span>
                <span>
                  {" "}
                  {"  "}
                  {newDate.slice(2)} ago
                </span>
              </div>
              <div id="des" className="description" ref={descriptionRef}>
                {description.split(".").map((sentence: string) => (
                  <h5>{sentence}.</h5>
                ))}
              </div>
              {showMoreButton}
              {showLessButton}
            </div>
            <div className="commentListBox">
              <div className="commentCount">
                <p>{commentCount.toLocaleString('en-IN')} Comments</p>
              </div>
              <div className='comment'>
                <Comment id={id}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <RelatedVideo videoId={id}/>
      </div>
    </div>
  );
};

export default VideoPage;
