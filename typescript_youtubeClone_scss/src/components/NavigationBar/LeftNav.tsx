import React ,{useContext}from 'react'
import { IoMenu as Menu } from 'react-icons/io5'
import {Link} from 'react-router-dom'
import { UiChangeContext } from '../../context/uiChangeContext'


const LeftNav = () => {
  const {showSearchInput} = useContext(UiChangeContext)
  const {sidebarChange,setSidebarChange,setableButton} =useContext(UiChangeContext)


  const handlehambugreBtn =()=>{
   setSidebarChange(!sidebarChange);
   setableButton(true);
  }
  return (
   
<div className={`leftNav ${showSearchInput ? 'smallsearchInput' : ''}`}>
      <div className="Menu">
      <button
        className='icon-container burgerMenu' onClick={handlehambugreBtn}>
        <Menu size={25} />
      </button>
      <div className="logo">
      <Link to='/'>
        <img src="/src/assets/logo.png" alt="Youtube"/>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default LeftNav
