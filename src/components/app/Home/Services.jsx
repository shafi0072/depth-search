import React from "react";
import { Button } from "./Button";
import { service_data } from "../../../constant/service";
import Card from "./Card";
const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row mt-5 pt-5">
          <div className="col-md-6">
            <div className="ourServices">
              <h6>Services</h6>
              <h1 className="text-light">What we do here</h1>
              <Button title="SERVICES" color="white" />
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
        <div className="row mt-4">
          {service_data?.map((data, index) => (
            <div key={index} className="col-md-4 mt-3 mb-3">
              <Card
                title={data?.title}
                icon={data?.icon}
                discription={data?.discription}
                link={data?.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
