import React ,{useContext}from 'react'
import { MdVideoCall as VideoIcon } from 'react-icons/md'
import { MdApps as Apps } from 'react-icons/md'
import { MdNotifications as Notification } from 'react-icons/md'
import { UiChangeContext } from '../../context/uiChangeContext'

const RightNav = () => {
  const {showSearchInput} = useContext(UiChangeContext)
  const showSearchIcon =useContext(UiChangeContext)

  return (
    <div className={`rightNav ${showSearchInput ? "smallRightnav":""}`} >
      <div className='rightNavIcon' style={{ width: showSearchInput ? '100%' : '' }}><VideoIcon size={24}/></div>
      <div className='rightNavIcon'><Apps size={24}/></div>
      <div className='rightNavIcon'><Notification size={24}/></div>
      
    </div>
  )
}

export default RightNav
