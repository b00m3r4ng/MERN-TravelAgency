import React from "react";
import ServiceCard from "./ServiceCard.jsx";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Weather Forecast",
    desc: "Get weather updates for your favorite locations.",
  },
  {
    imgUrl: guideImg,
    title: "Tours & Experiences",
    desc: "Discover unique and memorable experiences.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Tailor your experience to your preferences.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
