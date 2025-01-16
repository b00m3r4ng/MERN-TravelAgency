import React from "react";
import "../styles/home.css";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from "../assets/images/world.png";
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle.jsx";
import SearchBar from "../shared/SearchBar.jsx";
import ServiceList from "../services/ServiceList.jsx";
import FeaturedToursList from "../components/Featured-tours/FeaturedToursList.jsx";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery.jsx";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                  commodi distinctio expedita nostrum officia repellendus,
                  cumque corrupti aspernatur illum culpa molestiae enim tempore
                  numquam explicabo voluptas quis iure earum inventore.
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer out best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* Featured Tours Start */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our Featured Tours</h2>
            </Col>
            <FeaturedToursList />
          </Row>
        </Container>
      </section>
      {/* Featured Tours End */}
      {/* Experience Start */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experiences"} />
                <h2>
                  Here to give you <br /> the best experience
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  dicta, hic totam vel cum modi. Nesciunt qui expedita ipsa
                  consectetur hic dicta assumenda recusandae, animi at debitis
                  eveniet commodi accusantium!
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years of Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img
                  src={experienceImg}
                  alt="Represents Companies Experience"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Experience End */}
      {/* Gallery Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit out customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Gallery Section End */}
      {/* Testimonial Section Start */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={"Customers have loved.."} />
            <h2 className="testimonial__title">
                Great trips our clients have had
            </h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Testimonial Section End */}
    </>
  );
};

export default Home;
