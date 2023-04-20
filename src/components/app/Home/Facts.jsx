import React from "react";
import ProgressComponents from "./ProgressComponents";
import { fact_data } from "../../../constant/facts";
import Image from "next/image";
const Facts = () => {
  const { title, sub_title, progress, images } = fact_data;
  const lazyRoot = React.useRef(null);
  return (
    <div className="facts">
      <div className="container pt-5 ">
        <div className="row">
          <div className="col-md-6">
            <div className=" fact">
              <h6>{sub_title}</h6>
              <h1>{title}</h1>
              {progress?.map((data, index) => (
                <div key={index}>
                  <ProgressComponents
                    title={data?.title}
                    progress={data?.progress}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 mt-5  ps-5 d-flex align-items-center">
            <div className="mt-5">
              <img src={images} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
