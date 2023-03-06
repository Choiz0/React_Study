import './App.css';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';
import { useState} from 'react';
import { useRef } from 'react';

function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0)

  const onCreate=(author,content,feeling)=>{
    const date = new Date().toLocaleString();
    const newList = {  
    
      author,
      content,
      date,
      feeling,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newList,...data])
   
  }
  const onDelete =(id)=>{
    const newList = data.filter(item => item.id !== id)
    setData(newList)
  }
  const onEdit = (id,content)=>{
    const newList = data.map(item => item.id === id ? {...item,content} :item) 
    setData(newList)
  }
  return (
    <div>
   <DiaryEditor onCreate={onCreate} />
   <DiaryList diaryList={data} onDelete={onDelete} onEdit={onEdit}/>
    </div>
  );
}

export default App;
