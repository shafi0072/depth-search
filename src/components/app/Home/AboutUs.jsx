import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button } from "./Button";
import { about_data } from "../../../constant/about";
const AboutUs = () => {
  const { about_left_side, about_right_side } = about_data;
  const { sub_title, title, discription, short_services } = about_right_side;
  const { benifit, address } = short_services;

  const lazyRoot = React.useRef(null);

  const [increase, setIncrease] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }, [setScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (scrollPosition > 80) {
      setInterval(function () {
        if (increase < about_left_side?.experience) {
          setIncrease(increase++);
        }
      }, 500);
    }
  }, [scrollPosition]);

  return (
    <div className="container about_us">
      <div className="row">
        <div className="col-md-6">
          <div className="experience">
            <h1>{increase}</h1>
            <p>Years Of Experience</p>
          </div>
          <div className="ms-5">
          <img src={about_left_side?.image} alt="" />
            
          </div>
        </div>
        <div className="col-md-6">
          <div className="about_our_self">
            <h6>{sub_title}</h6>
            <h1>{title}</h1>
            <p>{discription}</p>
            <div className="short_service">
              <h5>{benifit}</h5>
              <div className="d-flex align-items-center mt-4">
                <LocationOnIcon />
                <h6 className="mt-2 ms-2">{address}</h6>
              </div>
            </div>
            <div>
              <Button title="LEARN MORE" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
