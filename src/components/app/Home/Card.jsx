import React from "react";
import { Button } from "./Button";

const Card = ({ title, icon, link, discription }) => {
  return (
    <div className="card service_card">
      <div className="card-img">
        <img src={icon} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <p className="card-text">{discription}</p>
        {/* fdsaf */}
      </div>
      <div className="">
        <Button title="READ MORE" color="white" />
      </div>
    </div>
  );
};

export default Card;
