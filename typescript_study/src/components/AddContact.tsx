import React, { useState ,useRef} from 'react'
import { Ipeople as Props } from "../App";

interface IProps {
    setPeople : React.Dispatch<React.SetStateAction<Props["people"]>>
    people :Props["people"]
}

const AddContact: React.FC<IProps> = ({setPeople,people}) => {
const  idRef = useRef<number>(3);
    const[input,setInput] = useState({
        name:"",
        contact:"",
        memo:"",
        img:"",
        
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name || !input.contact) return

        setPeople([
            ...people,
            {
                name: input.name,
                contactNumber: parseInt(input.contact),
                img: input.img,
                memo: input.memo,
                id:idRef.current
            }
        ]);

        setInput({
            name: "",
            contact: "",
            img: "",
            memo: "",
           
        })
        idRef.current++
    }
    return (
        <div className="AddToList">
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="contact"
                value={input.contact}
                placeholder="conact"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="img"
                value={input.img}
                placeholder="Image Url"
            />
            <textarea
                onChange={handleChange}
                className="AddToList-input"
                name="memo"
                value={input.memo}
                placeholder="Note"
            />
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
  )
}
export default AddContact