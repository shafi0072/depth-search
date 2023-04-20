import React from "react";
import { Button } from "./Button";

const Card = ({ title, icon, link, discription }) => {
  return (
    <div class="card service_card">
      <div className="card-img">
        <img src={icon} class="card-img-top" alt="..." />
      </div>
      <div class="card-body">
        <h1 class="card-title">{title}</h1>
        <p class="card-text">{discription}</p>
        {/* fdsaf */}
      </div>
      <div class="">
        <Button title="READ MORE" color="white" />
      </div>
    </div>
  );
};

export default Card;
