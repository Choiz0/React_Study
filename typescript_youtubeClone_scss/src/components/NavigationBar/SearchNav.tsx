import React ,{useContext}from 'react'
import { ImSearch as SearchIcon } from 'react-icons/im'
import { MdKeyboardVoice as VoiceIcon } from 'react-icons/md'
import { UiChangeContext } from '../../context/uiChangeContext'
import {AiOutlineArrowLeft as ArrowLeft} from 'react-icons/ai'

const SearchNav = () => {


  const showSearchIcon = useContext(UiChangeContext);
  const {showSearchInput,setShowSearchInput} = useContext(UiChangeContext)

  const handleSearchInput =()=>{
  setShowSearchInput(!showSearchInput)
  }
  if(showSearchIcon.searchbarChange){
    return(
      <div className='searchNav smallviewSearch'>
      {showSearchInput && 
      <>
       <div className='arrowLeft'><ArrowLeft size={20} onClick={()=>setShowSearchInput(!showSearchInput)} /></div>
       <input className='search smallsearch' type='text' placeholder='Search'/>
      </>
       }
    
       <button className='searchButton' onClick={handleSearchInput} >

      <SearchIcon size={20} />
      </button>
      <button className='voiceButton'>
        <VoiceIcon  size={25}/>
      </button>
    
  </div>
      ) 
  }



  return (
    <div className='searchNav'>
     
        <input className='search' type='text' placeholder='Search'/>
        <button className='searchButton'>

        <SearchIcon size={20} />
        </button>
        <button className='voiceButton'>
          <VoiceIcon  size={25}/>
        </button>
      
    </div>
  )
}

export default SearchNav
