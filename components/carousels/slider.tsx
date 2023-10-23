'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
  return (
    <div className="mx-auto w-[100%] sm:w-[80%]">
      <Carousel>
        <Carousel.Item>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1080/https://images.ctfassets.net/mmeshd7gafk1/RGPaHT9x1kIlKbRiMmi32/b67a354f86de6667b9f8b74d09d5c5ee/US_Hp_Hero_mobile.jpg"
            />
            <source
              media="(min-width: 769px)"
              srcSet="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/4XL5Yy6dTrcCjIdwYMMikz/798a4b075d2edcca321620aafdef04c5/US_Hp_Hero_desktop.jpg"
            />
            <img
              className="d-block w-100"
              src="default_image_for_browsers_not_supporting_picture.jpg"
              alt="First slide"
            />
          </picture>
        </Carousel.Item>
        <Carousel.Item>
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D1080/https://images.ctfassets.net/mmeshd7gafk1/3ivRTesUTcHAH8wedwGBWw/36ce30117ca6ef4f01d9b9e965d8891c/HP_BANNER_2A_MASTER_Mobile.jpg"
            />
            <source
              media="(min-width: 769px)"
              srcSet="https://www.backmarket.com/cdn-cgi/image/format%3Dauto%2Cquality%3D75%2Cwidth%3D3840/https://images.ctfassets.net/mmeshd7gafk1/2Ya26bir7u0sYeQC3oJZpb/711ae906e9b133ddec3a6b831628c2b0/HP_BANNER_2A_MASTER.jpg"
            />
            <img
              className="d-block w-100"
              src="default_image_for_browsers_not_supporting_picture.jpg"
              alt="First slide"
            />
          </picture>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
