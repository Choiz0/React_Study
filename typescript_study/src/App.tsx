import { useState } from 'react'
import './App.css'
import ContactBox from './components/ContactBox'
import AddContact from './components/AddContact'


export interface Ipeople {
  people:{
    name: string;
    contactNumber: number;
    memo?: string;
    img?: string;
    id: number;
  }[]

}


function App() {

  const [people,setPeople] = useState<Ipeople["people"]>([
    {
    name:"jiyoung",
    contactNumber:1234,
    memo:"Au",
    id:1
  },
  

])



  return (
    <div className="App">
     <h1>Contact List</h1> 
 
        <ContactBox people={people} />
        <AddContact people={people} setPeople={setPeople}/>
 
    </div>
  )
}

export default App
