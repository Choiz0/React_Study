import React from "react";
import {Routes,Route,Outlet,useLocation} from "react-router-dom"
import SearchedVideosPage from './pages/SearchedVideosPage';
import VideoPage from './pages/VideoPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Sidebar from './components/Sidebar/Sidebar';
import MainPage from './pages/MainPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import VideoList from './components/Videos/VideoList';
import useWindowSize from './helpers/useWindowSize';

function App() {
  const width = useWindowSize();
  const queryClient = new QueryClient();
  const location = useLocation()
  const Layout=()=>{
      return(
        <>
        <NavigationBar />
        
        {width && (width <792)  ? null :<Sidebar />}
      
      <main>
        <Outlet/>
      </main>
      </>
      )
  }

  return (
    <>
    <QueryClientProvider client={queryClient}>
 
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />}/>
      <Route path="/results/:input" element={<SearchedVideosPage/>}/>
      <Route path="/video/:videoId" element={<VideoPage/>}/>
      </Route>  
    </Routes>
    </QueryClientProvider>
    </>
   
  )
}

export default App
