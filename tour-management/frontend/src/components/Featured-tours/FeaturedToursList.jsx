import React from "react";
import TourCard from "../../shared/TourCard.jsx";
import tourData from "../../assets/data/tours.js";
import { Col } from "reactstrap";

const FeaturedToursList = () => {
  return (
    <>
      {tourData?.map((tour) => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedToursList;
