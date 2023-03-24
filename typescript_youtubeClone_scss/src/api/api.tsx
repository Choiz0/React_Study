import axios, { AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import RelatedVideo from '../components/RelatedVideo';

const VITE_API_KEY="AIzaSyBNDBeCsy9fj0D0llAg4fLZ5kkhaCu_qrY"


export const apiBase = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3",
    params: {
      key: import.meta.env.VITE_API_KEY
    },
  
});


// export async function MainInfo() {
//     const response = await apiBase.get( 'videos',{
//       params:{
//         part:'snippet',
//         chart:'mostPopular',
//         maxResults:25,
//       },
//     });
//     return response.data.items;
// };


export type VideoItem = {
  //       },
  //     });
  //     return response.data.items;
  // };
  map(arg0: (video: VideoItem) => JSX.Element): import("react").ReactNode;
  video: any[]
  statistics:{
    viewCount:number;
    likeCount:number;
    commentCount:number;
  }
  id: string;
  snippet: {
    title: string;
    description: string;
    channelTitle:string;
    channelId:string;
    publishedAt:string;
    viewCount:number;
  
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};
export interface ChannelBanner {
  bannerUrl:string;
  subscriberCount:number;
  items: {
    statistics:{  subscriberCount:number;
      likeCount:number;
    }
    snippet: {
      thumbnails: {
        default: {
          url:string;
        }
      }
    }
  
  }[];

  
};
export type commentItem = {
 
    snippet: {
      channelId: string,
      videoId: string,
      topLevelComment: {
        snippet: {
          id: string ,
          authorDisplayName: string,
          authorProfileImageUrl: string,
          textDisplay: string,
          textOriginal: string,
          canRate: boolean,
          likeCount: number,
          publishedAt: string,
        },
        canReply: boolean,
        totalReplyCount: number,
      },
    },

  
};

export type ChannelResponse = {
  items: {
    statistics:{  subscriberCount:number;
    }
    snippet: {
      thumbnails: {
        default: {
          url:string;
        }
      };
    };
  }[];
};

export type VideoResponse = {
  items: VideoItem[];
};

export type commentResponse = {
  items: commentItem[];
};

export function useMainVideos(): UseQueryResult<VideoItem[], Error> {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 365);
  const randomDate = new Date(startDate.getTime() + Math.random() * (new Date().getTime() - startDate.getTime()));
 console.log(randomDate.toISOString())
  return useQuery<VideoItem[], Error>('main', () =>
    apiBase.get<VideoResponse>('videos', {
      params: {
        part:'snippet, contentDetails, statistics,player',
        chart: 'mostPopular',
        regionCode: 'AU',
        maxResults: 28,
        publishedAfter: randomDate.toISOString(),
        type: 'video',
        videoDefinition: "high"
      },
    }).then((response: AxiosResponse<VideoResponse>) => response.data.items)
    
  );
  
}

export const useChannelBanner = (
  channelId: string
): UseQueryResult<ChannelBanner, Error> => {
  return useQuery(['channelBanner', channelId], () =>
    apiBase
      .get<ChannelResponse>('channels', {
        params: {
          part: 'snippet,statistics',
          id: channelId,
        },
      })
      .then((response: AxiosResponse<ChannelResponse>) => {
        const item = response.data.items[0];
        const subscriberCount = item.statistics.subscriberCount;
        const bannerUrl = item.snippet.thumbnails.default.url;
   

        return { bannerUrl, subscriberCount };
      })
  );
};


export function useComment(id: string): UseQueryResult<commentResponse, Error> {
  return useQuery<commentResponse, Error>('commentThreads', () =>
    apiBase.get<commentResponse>('commentThreads', {
      params: {
        part: 'snippet',
        videoId: id,
      },
    }).then((response: AxiosResponse<commentResponse>) => response.data)
  );
}
export type relatedVideosResponse= {
 items: VideoItem[]
}

export function useRelatedVideos(id:string):UseQueryResult<VideoResponse,Error>{
  return useQuery<VideoResponse,Error>('search',()=>
    apiBase.get<VideoResponse>('search',{
      params: {
       part: 'snippet',
       maxResult:10,
       relatedToVideoId:id ,
       type:'video'}
    }).then((response:AxiosResponse<VideoResponse>) => response.data)
  )
}