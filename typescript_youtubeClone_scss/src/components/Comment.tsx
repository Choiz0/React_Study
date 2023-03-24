import React from 'react'
import { useComment, commentItem } from '../api/api';
import CommentItem from '../components/CommentItem' 
type commentprops ={
    id: string,
    kind: string;
    etag: string;
    nextPageToken: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: {
      id: string;
      snippet: {
        topLevelComment: {
          id: string;
          snippet: {
            id:string,
            authorDisplayName: string;
            authorProfileImageUrl: string;
            textDisplay: string;
            likeCount: number;
            publishedAt: string;
          };
        };
      };
    }[];
}

const Comment = ({id}:commentprops) => {
    const { isLoading, data, error } = useComment(id);
    const comments = data?.items.map((item) => item.snippet.topLevelComment.snippet)
  return (
    <>
 {comments?.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
   {}
    </>
  )
}

export default Comment
