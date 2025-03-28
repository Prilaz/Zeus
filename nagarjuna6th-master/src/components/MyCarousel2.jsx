import React from "react";
import { Carousel } from "react-responsive-carousel";

const MyCarousel2 = () => {
  return (
    <>
      <div className="w-4/4">
        <Carousel>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div
                  className="hero min-h-160"
                  style={{
                    backgroundImage:
                      "url(https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2FKnUznZ0dxmrorRMUEo44sH3iPR9IRajzKuHdAsVW.webp&w=1920&q=75)",
                  }}
                >
                  <div className="hero-overlay"></div>
                  <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                      <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                      </p>
                      <button className="btn btn-primary">Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="hero min-h-160"
                  style={{
                    backgroundImage:
                      "url(https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2F7EQXYhVAjZ7A9qTcJTBQHiJAGxFmEJxWQjWsaeO9.webp&w=1920&q=75)",
                  }}
                >
                  <div className="hero-overlay"></div>
                  <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                      <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                      </p>
                      <button className="btn btn-primary">Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div
                  className="hero min-h-160"
                  style={{
                    backgroundImage:
                      "url(https://booksmandala.com/_next/image?url=https%3A%2F%2Fpheonix.booksmandala.com%2F%2Fstorage%2Fslider-images%2Fo4a18iVjFamKxUvEhBXIW0VTXzPoPuplqDggcKRD.webp&w=1920&q=75)",
                  }}
                >
                  <div className="hero-overlay"></div>
                  <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                      <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                      </p>
                      <button className="btn btn-primary">Get Started</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default MyCarousel2;
