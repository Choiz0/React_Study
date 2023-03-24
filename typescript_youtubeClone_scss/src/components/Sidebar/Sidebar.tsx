import React, { useContext,useEffect ,useState} from "react";
import { UiChangeContext } from "../../context/uiChangeContext";
import { MdHomeFilled ,MdOutlineExplore,MdOutlineSubscriptions,MdOutlineWatchLater,MdVideoLibrary} from "react-icons/md";
import {VscHistory}  from 'react-icons/vsc'
import {AiOutlineLike,AiFillSetting} from 'react-icons/ai'
import {RiFlagFill} from 'react-icons/ri'
import { useLocation } from 'react-router-dom';



const Sidebar = () => {
  const { sidebarChange, setSidebarChange ,ableButton,setableButton} = useContext(UiChangeContext);
  
  
  const [show, setShow] = useState(true)
  const location = useLocation()
  useEffect(() => {
   if(location.pathname.includes('/video/')){
  
    let el : (HTMLElement |null)= document.getElementById("sidebar");
    el?.classList.add('hide');
    setableButton(false)
    if(!sidebarChange){
      let el : (HTMLElement |null)= document.getElementById("sidebar");
      el?.classList.remove('hide');
     }
     if(ableButton && sidebarChange){
      let el : (HTMLElement |null)= document.getElementById("sidebar");
      el?.classList.add('bigSideBar');
     
     }
   }

   else{
    setableButton(true)
   if(sidebarChange) {
    let el : (HTMLElement |null)= document.getElementById("sidebar");
    el?.classList.add('bigSideBar');
    el?.classList.remove('smallSideBar');
   }
   if(!sidebarChange) {
    let el : (HTMLElement |null)= document.getElementById("sidebar");
    el?.classList.remove('bigSideBar');
    el?.classList.add('smallSideBar');
   }
  }
   
  }, [location.pathname,sidebarChange,ableButton])

 

 
  return (
    <section id="sidebar"
      className={`sidebar`}
    >
      <div className="listbox ">
        <div className="listItem ">
          <div className="sidebarIconBox">
            <MdHomeFilled size={23} />
          </div>
          <div className="sideBarlist_name">Home</div>
        </div>
        <div className="listItem">
          <div className="sidebarIconBox">
            <MdOutlineExplore size={23} />
          </div>
          <div className="sideBarlist_name">Explore</div>
        </div>
          <div className="listItem">
          <div className="sidebarIconBox">
            <MdOutlineSubscriptions size={23} />
          </div>
          <div className="sideBarlist_name ">Subscriptions</div>
        </div>
       <div className="borderLine"></div>
        
      </div>


      <div className="listbox ">
        <div className="listItem ">
          <div className="sidebarIconBox">
     <MdVideoLibrary size={23}/>
          </div>
          <div className="sideBarlist_name">Libary</div>
        </div>
        <div className="listItem">
          <div className="sidebarIconBox">
            <VscHistory size={23} />
          </div>
          <div className="sideBarlist_name">History</div>
        </div>
          <div className="listItem">
          <div className="sidebarIconBox">
            <MdOutlineWatchLater size={23} />
          </div>
          <div className="sideBarlist_name ">Watch Later</div>
        </div>
        <div className="listItem">
          <div className="sidebarIconBox">
            <AiOutlineLike size={23} />
          </div>
          <div className="sideBarlist_name ">Liked Videos</div>
        </div>
       <div className="borderLine"></div>
        
      </div>


      <div className="listbox ">
        <div className="listItem ">
          <div className="sidebarIconBox">
            <AiFillSetting size={23} />
          </div>
          <div className="sideBarlist_name">Settings</div>
        </div>
        <div className="listItem">
          <div className="sidebarIconBox">
            <RiFlagFill size={23} />
          </div>
          <div className="sideBarlist_name">Report history</div>
        </div>
       
       <div className="borderLine"></div>
        
      </div>
    </section>
  );
};

export default Sidebar;
