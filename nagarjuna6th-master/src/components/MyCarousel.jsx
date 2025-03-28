import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const MyCarousel = () => {
  return (
    <>
      <div className="w-1/3 m-10 b-1">
        <Carousel>
          <div>
            <div
              className="hero min-h-screen"
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
                    assumenda excepturi exercitationem quasi. In deleniti eaque
                    aut repudiandae et a id nisi.
                  </p>
                  <button className="btn btn-primary">Get Started</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="./carousel/2.png" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="./carousel/3.png" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="./carousel/3.png" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="./carousel/3.png" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="./carousel/3.png" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default MyCarousel;
