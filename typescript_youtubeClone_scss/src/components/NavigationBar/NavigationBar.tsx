import React,{useState,useContext} from 'react';
import RightNav from './RightNav';
import LeftNav from './LeftNav';
import SearchNav from './SearchNav';
import useWindowSize from '../../helpers/useWindowSize';
import { UiChangeContext } from '../../context/uiChangeContext'




const NavigationBar = () => {
  const showSearchIcon = useContext(UiChangeContext);
  const {showSearchInput,setShowSearchInput} = useContext(UiChangeContext)

 

  return (
    <div className={`NavigationBar 
    ${showSearchIcon.searchbarChange && !showSearchInput ? "smallscreenNav" : ""}
    ${showSearchIcon.searchbarChange && showSearchInput ? "showSearchNav" : ""}`} >

      <LeftNav />
      <SearchNav/>
      <RightNav />
    </div>
  )
}

export default NavigationBar
