import React from "react";
import { Ipeople as Props } from "../App";

interface IProps {
  people: Props["people"];
}

const ContactBox: React.FC<IProps> = ({ people }) => {
  return (
    <div>
      {people.map((item) => (
        <li className="List">
          <div className="List-header">{item.name}</div>
          <img className="List-img" src={item.img} />
          <h2>{item.contactNumber}</h2>
          <p className="List-note">{item.memo}</p>
        </li>
      ))}
    </div>
  );
};

export default ContactBox;
