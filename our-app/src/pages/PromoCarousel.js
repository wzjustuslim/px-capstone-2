import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function PromoCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lzd-img-global.slatic.net/g/tps/imgextra/i3/O1CN01uNtOkv1annUsJjSXb_!!6000000003375-0-tps-1976-688.jpg_1200x1200q90.jpg_.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lzd-img-global.slatic.net/g/tps/imgextra/i1/O1CN01yCaBlh1TVka2bTLhC_!!6000000002388-0-tps-1976-688.jpg_1200x1200q90.jpg_.webp"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.alicdn.com/imgextra/i3/O1CN01bh7HpL1IgJwrUXi9N_!!6000000000922-0-tps-1976-688.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default PromoCarousel;