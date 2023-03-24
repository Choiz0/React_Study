import React from 'react';
import dayjs from 'dayjs';
import { BiLike,BiDislike} from 'react-icons/bi';


interface CommentProps {
  comment: {
    id: string;
    authorDisplayName: string;
    authorProfileImageUrl: string;
    textDisplay: string;
    likeCount: number;
    publishedAt: string;
  };
}

const Comment: React.FC<CommentProps> = ({ comment }) => {

  return (
    <div className='itemBox'>
      <img className="commentImg" src={comment.authorProfileImageUrl} alt={comment.authorDisplayName} />
      <div className='commentInfo'>
        <div className="firstInfo">
        <h4>{comment.authorDisplayName}</h4>
        <p>{ dayjs().from(comment.publishedAt).slice(2)} ago</p>
        </div>
        <div className='secondInfo'>
        <p className='textDisplay'>{comment.textDisplay}</p>
        <div style={{display:"flex",gap:"10px",alignItems:"center",justifyItems:"center"}}> 
         <div  style={{display:"flex",gap:"10px",alignItems:"center",justifyItems:"center"}}><BiLike size={16}/><span>{comment.likeCount===0?"":comment.likeCount}</span> </div>
        <div  style={{display:"flex",gap:"10px",alignItems:"center",justifyItems:"center"}}><BiDislike size={16}/><span></span> </div>
        <div>Reply</div>
        </div>
      
        </div>
       
       
      </div>
    </div>
  );
};

export default Comment;